
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Loader2, Sun, Calculator, DollarSign, Leaf, Zap, TrendingUp, Home, Award } from 'lucide-react';
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
    label: 'Analyzing solar data for your location...', 
    icon: <Sun className="h-6 w-6 text-amber-400" />,
    color: 'from-amber-400 to-orange-500'
  },
  { 
    key: 'phase2', 
    label: 'Calculating solar potential at your location...', 
    icon: <Calculator className="h-6 w-6 text-blue-400" />,
    color: 'from-blue-400 to-cyan-500'
  },
  { 
    key: 'phase3', 
    label: 'Creating detailed financial modeling for your usage...', 
    icon: <DollarSign className="h-6 w-6 text-green-400" />,
    color: 'from-green-400 to-emerald-500'
  },
  { 
    key: 'phase4', 
    label: 'Preparing your personalized solar report...', 
    icon: <Leaf className="h-6 w-6 text-green-600" />,
    color: 'from-green-600 to-teal-500'
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

    // Step through phases with enhanced timing
    for (let i=0; i<phases.length; i++) {
      setPhaseIndex(i);
      await new Promise(res => setTimeout(res, 3000)); // Reduced to 3 seconds per phase
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
      toast({ title:'Calculation Complete', description:'Your personalized solar report is ready!' });
    } catch(err) {
      console.error(err);
      toast({ title:'Error', description:'Calculation failed. Please try again.', variant:'destructive' });
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16 relative">
            {/* Animated Sun */}
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <Sun className="h-16 w-16 text-amber-400 animate-pulse" />
                <div className="absolute inset-0 h-16 w-16 text-amber-400/30 animate-ping">
                  <Sun className="h-16 w-16" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-4">
                <span className="text-blue-300 text-sm font-medium">Sunlytics</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-amber-200 bg-clip-text text-transparent leading-tight">
                Analyze Your Solar
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Potential
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Discover your solar output, financial benefits, and environmental impact with our advanced analytics
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="max-w-md mx-auto mb-16">
            <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
                  <Calculator className="h-6 w-6 text-blue-400" />
                  Solar Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-white font-medium">State *</Label>
                    <Select value={formData.state} onValueChange={v=>handleChange('state',v)}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                        <SelectValue placeholder="Select your state" />
                      </SelectTrigger>
                      <SelectContent>
                        {INDIAN_STATES.map(s=><SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    {errors.state && <p className="text-red-400 text-sm">{errors.state}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white font-medium">Monthly Electricity Units (kWh) *</Label>
                    <Input 
                      type="number" 
                      placeholder="e.g. 300" 
                      value={formData.monthly} 
                      onChange={e=>handleChange('monthly',e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm"
                    />
                    {errors.monthly && <p className="text-red-400 text-sm">{errors.monthly}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white font-medium">Location Coordinates *</Label>
                    <Input 
                      placeholder="lat,lon (e.g. 28.6139,77.2090)" 
                      value={formData.latlong} 
                      onChange={e=>handleChange('latlong',e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm"
                    />
                    <p className="text-white/60 text-xs">Get coordinates from Google Maps</p>
                    {errors.latlong && <p className="text-red-400 text-sm">{errors.latlong}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105" 
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

          {/* Enhanced Loading Animation */}
          {loading && phaseIndex >= 0 && (
            <div className="max-w-2xl mx-auto mb-16">
              <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Processing Your Data</h3>
                    <p className="text-slate-300">Please wait while we analyze your solar potential</p>
                  </div>
                  
                  <div className="space-y-6">
                    {phases.map((phase, index) => (
                      <div 
                        key={phase.key}
                        className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-500 ${
                          index === phaseIndex 
                            ? 'bg-gradient-to-r ' + phase.color + ' bg-opacity-20 scale-105 shadow-lg' 
                            : index < phaseIndex 
                              ? 'bg-green-500/20 opacity-75'
                              : 'bg-white/5 opacity-50'
                        }`}
                      >
                        <div className={`relative ${index === phaseIndex ? 'animate-pulse' : ''}`}>
                          {index < phaseIndex ? (
                            <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                              <Award className="h-4 w-4 text-white" />
                            </div>
                          ) : (
                            <div className="h-8 w-8 flex items-center justify-center">
                              {phase.icon}
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <span className={`text-lg font-medium ${
                            index === phaseIndex ? 'text-white' : 'text-slate-300'
                          }`}>
                            {phase.label}
                          </span>
                        </div>
                        {index === phaseIndex && (
                          <Loader2 className="h-5 w-5 animate-spin text-white" />
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex justify-between text-sm text-slate-300 mb-2">
                      <span>Progress</span>
                      <span>{Math.round(((phaseIndex + 1) / phases.length) * 100)}%</span>
                    </div>
                    <Progress 
                      value={((phaseIndex + 1) / phases.length) * 100} 
                      className="h-2 bg-white/10"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Enhanced Results Section */}
          {!loading && result && (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Your Solar Analysis Report</h2>
                <p className="text-xl text-slate-300">Here's your personalized solar potential analysis</p>
              </div>

              <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
                {/* Solar Output Card */}
                <Card className="backdrop-blur-lg bg-gradient-to-br from-amber-500/20 to-orange-600/20 border-amber-400/30 shadow-2xl hover:scale-105 transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                      <Sun className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white">Solar Output & Recommendation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">Solar Yield per kWp/year:</span>
                        <strong className="text-2xl text-amber-400">{formatNum(result.solarYield)} kWh</strong>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">Recommended System Size:</span>
                        <strong className="text-2xl text-orange-400">{formatNum(result.recommended_kW)} kW</strong>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">Annual Generation:</span>
                        <strong className="text-2xl text-amber-300">{formatNum(result.annualEnergy)} kWh</strong>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Financial Card */}
                <Card className="backdrop-blur-lg bg-gradient-to-br from-green-500/20 to-emerald-600/20 border-green-400/30 shadow-2xl hover:scale-105 transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white">Financial Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">Total Investment:</span>
                        <strong className="text-xl text-red-400">{formatCurrency(result.totalCost)}</strong>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">Government Subsidy:</span>
                        <strong className="text-xl text-green-400">-{formatCurrency(result.subsidy)}</strong>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">Net Investment:</span>
                        <strong className="text-2xl text-green-300">{formatCurrency(result.netCost)}</strong>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">Monthly Savings:</span>
                        <strong className="text-xl text-emerald-400">{formatCurrency(result.monthlySavings)}</strong>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">Payback Period:</span>
                        <strong className="text-xl text-blue-400">{formatNum(result.paybackYears)} years</strong>
                      </div>
                    </div>
                    <div className="bg-green-500/20 rounded-lg p-4 border border-green-400/50">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">25-Year Savings:</span>
                        <strong className="text-2xl text-green-300">{formatCurrency(result.lifetimeSavings)}</strong>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Environmental Card */}
                <Card className="backdrop-blur-lg bg-gradient-to-br from-teal-500/20 to-green-600/20 border-teal-400/30 shadow-2xl hover:scale-105 transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-teal-400 to-green-500 rounded-full flex items-center justify-center mb-4">
                      <Leaf className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white">Environmental Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-6 text-center">
                      <div className="text-4xl font-bold text-teal-400 mb-2">
                        {formatNum(result.co2Avoided/1000, 1)}
                      </div>
                      <div className="text-slate-300">Metric tons CO₂ avoided</div>
                      <div className="text-sm text-teal-300 mt-2">over 25 years</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-6 text-center">
                      <div className="text-4xl font-bold text-green-400 mb-2">
                        {result.treesSaved}
                      </div>
                      <div className="text-slate-300">Trees equivalent</div>
                      <div className="text-sm text-green-300 mt-2">carbon offset impact</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Section */}
              <div className="text-center mt-16">
                <Card className="backdrop-blur-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20 border-blue-400/30 shadow-2xl max-w-2xl mx-auto">
                  <CardContent className="p-8">
                    <Home className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Go Solar?</h3>
                    <p className="text-slate-300 mb-6">
                      Based on your analysis, solar energy could save you <strong className="text-green-400">{formatCurrency(result.lifetimeSavings)}</strong> over 25 years while helping the environment.
                    </p>
                    <Button 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105"
                      onClick={() => window.open('mailto:contact@sunlytics.com?subject=Solar Installation Inquiry', '_blank')}
                    >
                      Get Installation Quote
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SolarCalculator;
