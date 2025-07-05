import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Sun, Calculator, DollarSign, Leaf } from 'lucide-react';
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
  { key: 'phase1', label: 'Analyzing solar data for your location...', icon: <Sun className="h-6 w-6 text-amber-400" /> },
  { key: 'phase2', label: 'Calculating solar potential at your location...', icon: <Calculator className="h-6 w-6 text-blue-400" /> },
  { key: 'phase3', label: 'Creating detailed financial modeling for your usage...', icon: <DollarSign className="h-6 w-6 text-green-400" /> },
  { key: 'phase4', label: 'Preparing your personalized solar report...', icon: <Leaf className="h-6 w-6 text-green-600" /> }
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
      // wait 8 seconds
      // eslint-disable-next-line no-await-in-loop
      await new Promise(res => setTimeout(res, 8000));
    }

    // After phases complete, call API
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
      toast({ title:'Calculation Complete', description:'Here is your solar report.' });
    } catch(err) {
      console.error(err);
      toast({ title:'Error', description:'Calculation failed.', variant:'destructive' });
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <Sun className="h-8 w-8 text-amber-400" />
            <h1 className="text-4xl font-bold">Analyze Your Solar Potential</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Discover your solar output, financial benefits, and environmental impact.
          </p>
        </div>

        {/* Form */}
        <Card className="max-w-md mx-auto">
          <CardHeader><CardTitle>Solar Calculation</CardTitle></CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>State *</Label>
                <Select value={formData.state} onValueChange={v=>handleChange('state',v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    {INDIAN_STATES.map(s=><SelectItem key={s} value={s}>{s}</SelectItem>)}
                  </SelectContent>
                </Select>
                {errors.state && <p className="text-destructive text-sm">{errors.state}</p>}
              </div>

              <div>
                <Label>Monthly Electricity Units (kWh) *</Label>
                <Input type="number" placeholder="e.g. 300" value={formData.monthly} onChange={e=>handleChange('monthly',e.target.value)} />
                {errors.monthly && <p className="text-destructive text-sm">{errors.monthly}</p>}
              </div>

              <div>
                <Label>Location Coordinates *</Label>
                <Input placeholder="lat,lon" value={formData.latlong} onChange={e=>handleChange('latlong',e.target.value)} />
                {errors.latlong && <p className="text-destructive text-sm">{errors.latlong}</p>}
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading
                  ? <><Loader2 className="animate-spin mr-2" />Calculating...</>
                  : <>Calculate Solar Potential</>
                }
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Loading Animation */}
        {loading && phaseIndex >= 0 && (
          <div className="mt-8 max-w-md mx-auto p-6 bg-secondary/10 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              {phases[phaseIndex].icon}
              <span className="text-lg font-medium">{phases[phaseIndex].label}</span>
            </div>
            <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
              <div
                className="h-2 bg-primary transition-all"
                style={{ width: `${((phaseIndex+1)/phases.length)*100}%` }}
              />
            </div>
          </div>
        )}

        {/* Results */}
        {!loading && result && (
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {/* Solar Output */}
            <Card>
              <CardHeader><CardTitle>Solar Output & Recommendation</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Yield per kWp/year:</span><strong>{formatNum(result.solarYield)} kWh</strong></div>
                <div className="flex justify-between"><span>Recommended Size:</span><strong>{formatNum(result.recommended_kW)} kW</strong></div>
                <div className="flex justify-between"><span>Annual Generation:</span><strong>{formatNum(result.annualEnergy)} kWh</strong></div>
              </CardContent>
            </Card>

            {/* Financial */}
            <Card>
              <CardHeader><CardTitle>Financial Metrics</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Total Cost:</span><strong>{formatCurrency(result.totalCost)}</strong></div>
                <div className="flex justify-between"><span>Subsidy:</span><strong>-{formatCurrency(result.subsidy)}</strong></div>
                <div className="flex justify-between"><span>Net Cost:</span><strong>{formatCurrency(result.netCost)}</strong></div>
                <div className="flex justify-between"><span>Monthly Savings:</span><strong>{formatCurrency(result.monthlySavings)}</strong></div>
                <div className="flex justify-between"><span>Annual Savings:</span><strong>{formatCurrency(result.annualSavings)}</strong></div>
                <div className="flex justify-between"><span>Payback Period:</span><strong>{formatNum(result.paybackYears)} yrs</strong></div>
                <div className="flex justify-between"><span>IRR:</span><strong>{formatNum(result.irrPercent)}%</strong></div>
                <div className="flex justify-between"><span>Lifetime Savings:</span><strong>{formatCurrency(result.lifetimeSavings)}</strong></div>
              </CardContent>
            </Card>

            {/* Environmental */}
            <Card>
              <CardHeader><CardTitle>Environmental Metrics</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between"><span>CO₂ Avoided:</span><strong>{formatNum(result.co2Avoided,0)} kg</strong></div>
                <div className="flex justify-between"><span>Trees Equivalent:</span><strong>{result.treesSaved}</strong></div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SolarCalculator;
