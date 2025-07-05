import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Loader2, Sun, Calculator, DollarSign, Leaf, Zap, TrendingUp, Database, BarChart3, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

interface ApiResponse {
  recommended_kw: number;
  yield_per_kwp: number;
  total_yield_kwh_year1: number;
  total_cost: number;
  state_subsidy: number;
  central_subsidy: number;
  net_cost: number;
  npv: number;
  irr_percent: number;
  payback_period_years: number;
  lifetime_savings: number;
  co2_avoided_kg: number;
  trees_saved_equivalent: number;
}

interface ResultData {
  recommended_kW: number;
  solarYield: number;
  annualEnergy: number;
  totalCost: number;
  subsidy: number;
  netCost: number;
  monthlySavings: number;
  annualSavings: number;
  paybackYears: number;
  irrPercent: number;
  lifetimeSavings: number;
  co2Avoided: number;
  treesSaved: number;
}

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi', 'Puducherry', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
  'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Andaman and Nicobar Islands'
];

const phases = [
  { 
    key: 'phase1', 
    label: 'Solar Data Collection', 
    description: 'Gathering precise solar radiation data for your location',
    icon: <Database className="h-8 w-8 text-orange-500" />,
    color: 'from-orange-400 to-red-500'
  },
  { 
    key: 'phase2', 
    label: 'Solar Energy Calculation', 
    description: 'Estimating your rooftop solar energy production',
    icon: <Sun className="h-8 w-8 text-yellow-500" />,
    color: 'from-yellow-400 to-orange-500'
  },
  { 
    key: 'phase3', 
    label: 'Financial Modelling', 
    description: 'Calculating costs, subsidies and savings',
    icon: <BarChart3 className="h-8 w-8 text-green-500" />,
    color: 'from-green-400 to-emerald-500'
  },
  { 
    key: 'phase4', 
    label: 'Personalized Results', 
    description: 'Preparing your detailed solar report',
    icon: <Award className="h-8 w-8 text-blue-500" />,
    color: 'from-blue-400 to-purple-500'
  }
];

const SolarCalculator: React.FC = () => {
  const [formData, setFormData] = useState({ state: '', monthly: '', latlong: '' });
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [loading, setLoading] = useState(false);
  const [phaseIndex, setPhaseIndex] = useState(-1);
  const [result, setResult] = useState<ResultData|null>(null);
  const { toast } = useToast();

  const validate = () => {
    const errs: Record<string,string> = {};
    if (!formData.state) errs.state = 'Select a state';
    if (!formData.monthly || isNaN(+formData.monthly) || +formData.monthly <= 0) errs.monthly = 'Enter valid monthly units';
    if (!/^[-\d.]+,[-\d.]+$/.test(formData.latlong)) errs.latlong = 'Enter coords as lat,lng';
    setErrors(errs);
    return Object.keys(errs).length===0;
  };

  const formatCurrency = (v: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits:0 }).format(v);
  const formatNum = (v: number, d=1) => v.toFixed(d);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setResult(null);
    setPhaseIndex(-1);

    // Step through phases
    for (let i=0; i<phases.length; i++) {
      setPhaseIndex(i);
      await new Promise(res => setTimeout(res, 2500));
    }

    try {
      const res = await fetch('https://sunlytics.onrender.com/api/calculate', {
        method: 'POST', headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify({
          state: formData.state,
          monthly_units: parseFloat(formData.monthly),
          latlong: formData.latlong
        })
      });
      if (!res.ok) throw new Error(res.statusText);
      const data: ApiResponse = await res.json();
      const combinedSubsidy = data.state_subsidy + data.central_subsidy;
      const annualSavings = data.lifetime_savings / 25;
      const monthlySavings = annualSavings / 12;
      setResult({
        recommended_kW: data.recommended_kw,
        solarYield: data.yield_per_kwp,
        annualEnergy: data.total_yield_kwh_year1,
        totalCost: data.total_cost,
        subsidy: combinedSubsidy,
        netCost: data.net_cost,
        monthlySavings,
        annualSavings,
        lifetimeSavings: data.lifetime_savings,
        paybackYears: data.payback_period_years,
        irrPercent: data.irr_percent,
        co2Avoided: data.co2_avoided_kg,
        treesSaved: data.trees_saved_equivalent
      });
      toast({ title:'Analysis Complete', description:'Your solar report is ready!' });
    } catch(err) {
      console.error(err);
      toast({ title:'Error', description:'Analysis failed. Please try again.', variant:'destructive' });
    } finally {
      setLoading(false);
      setPhaseIndex(-1);
    }
  };

  const handleChange = (field:string, v:string) => {
    setFormData(prev=>({ ...prev, [field]:v }));
    if (errors[field]) setErrors(prev=>({ ...prev, [field]:'' }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sun className="h-8 w-8 text-orange-500" />
            <h1 className="text-4xl font-bold text-gray-900">Solar Calculator</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your solar potential with precise calculations and financial insights
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Form */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-blue-600" />
                  Calculate Your Solar Potential
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium">State *</Label>
                    <Select value={formData.state} onValueChange={v=>handleChange('state',v)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select your state" />
                      </SelectTrigger>
                      <SelectContent>
                        {INDIAN_STATES.map(s=><SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium">Monthly Electricity Units (kWh) *</Label>
                    <Input 
                      type="number" 
                      placeholder="e.g. 300" 
                      value={formData.monthly} 
                      onChange={e=>handleChange('monthly',e.target.value)}
                      className="h-12"
                    />
                    {errors.monthly && <p className="text-red-500 text-sm">{errors.monthly}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium">Location Coordinates *</Label>
                    <Input 
                      placeholder="lat,lon (e.g. 28.6139,77.2090)" 
                      value={formData.latlong} 
                      onChange={e=>handleChange('latlong',e.target.value)}
                      className="h-12"
                    />
                    <p className="text-gray-500 text-sm">Get coordinates from Google Maps</p>
                    {errors.latlong && <p className="text-red-500 text-sm">{errors.latlong}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold" 
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin mr-2 h-5 w-5" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Zap className="mr-2 h-5 w-5" />
                        Calculate Solar Potential
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Results */}
          <div className="space-y-6">
            {/* Loading Animation */}
            {loading && phaseIndex >= 0 && (
              <Card className="shadow-lg border-0 animate-fade-in">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Analyzing Your Solar Potential</h3>
                    <p className="text-gray-600">Please wait while we process your data</p>
                  </div>
                  
                  <div className="space-y-4">
                    {phases.map((phase, index) => (
                      <div 
                        key={phase.key}
                        className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-500 ${
                          index === phaseIndex 
                            ? 'bg-gradient-to-r ' + phase.color + ' bg-opacity-10 scale-105 border border-blue-200' 
                            : index < phaseIndex 
                              ? 'bg-green-50 opacity-75 border border-green-200'
                              : 'bg-gray-50 opacity-50'
                        }`}
                      >
                        <div className={`${index === phaseIndex ? 'animate-pulse' : ''}`}>
                          {index < phaseIndex ? (
                            <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center">
                              <Award className="h-6 w-6 text-white" />
                            </div>
                          ) : (
                            <div className="h-12 w-12 flex items-center justify-center">
                              {phase.icon}
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{phase.label}</h4>
                          <p className="text-sm text-gray-600">{phase.description}</p>
                        </div>
                        {index === phaseIndex && (
                          <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <Progress 
                      value={((phaseIndex + 1) / phases.length) * 100} 
                      className="h-2"
                    />
                    <p className="text-center text-sm text-gray-600 mt-2">
                      {Math.round(((phaseIndex + 1) / phases.length) * 100)}% Complete
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Results Cards */}
            {!loading && result && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-900 text-center">Your Solar Analysis</h2>
                
                {/* Solar Output Card */}
                <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
                    <div className="flex items-center gap-3">
                      <Sun className="h-8 w-8" />
                      <CardTitle className="text-xl">Solar Output</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">{formatNum(result.recommended_kW)} kW</div>
                        <p className="text-sm text-gray-600">Recommended Size</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">{formatNum(result.annualEnergy)} kWh</div>
                        <p className="text-sm text-gray-600">Annual Generation</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Financial Card */}
                <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-8 w-8" />
                      <CardTitle className="text-xl">Financial Benefits</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Net Investment:</span>
                        <span className="text-xl font-bold text-green-600">{formatCurrency(result.netCost)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Monthly Savings:</span>
                        <span className="text-xl font-bold text-green-600">{formatCurrency(result.monthlySavings)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Payback Period:</span>
                        <span className="text-xl font-bold text-blue-600">{formatNum(result.paybackYears)} years</span>
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">25-Year Savings:</span>
                          <span className="text-2xl font-bold text-green-600">{formatCurrency(result.lifetimeSavings)}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Environmental Card */}
                <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-t-lg">
                    <div className="flex items-center gap-3">
                      <Leaf className="h-8 w-8" />
                      <CardTitle className="text-xl">Environmental Impact</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-teal-600">{formatNum(result.co2Avoided/1000, 1)}</div>
                        <p className="text-sm text-gray-600">Metric tons CO₂ avoided</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{result.treesSaved}</div>
                        <p className="text-sm text-gray-600">Trees equivalent</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How Our Calculator Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Database className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Solar Data Collection</h3>
              </div>
              <p className="text-gray-600">
                We gather precise solar radiation data for your exact location using trusted global sources (NREL). 
                This ensures highly accurate and personalized results.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Sun className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Solar Energy Calculation</h3>
              </div>
              <p className="text-gray-600">
                Advanced simulations estimate exactly how much solar energy your rooftop system can produce each year, 
                based on your location and standard equipment.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Financial Modelling</h3>
              </div>
              <p className="text-gray-600">
                Detailed financial calculations factor in your state's electricity tariffs, subsidies, and costs, 
                clearly showing your potential savings, payback period, and returns.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Personalized Results</h3>
              </div>
              <p className="text-gray-600">
                Receive clear, actionable insights like recommended system size, net installation cost, savings, 
                payback period, environmental benefits, and lifetime returns.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SolarCalculator;
