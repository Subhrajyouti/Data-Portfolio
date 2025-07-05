
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Solar Calculator",
    description: "Advanced solar potential calculator with cost analysis, savings estimation, and ROI calculations for your location.",
    thumbnail: "/solar.jpg",
    link: "/calculator",
    tags: ["Solar", "Calculator", "Analytics"],
    type: "Tool"
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="section-title text-left">Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mt-4">
            Explore our suite of analytical tools and calculators designed to help you make data-driven decisions.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    {product.type}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {product.description}
                    </CardDescription>
                  </div>
                  <Calculator className="h-5 w-5 text-muted-foreground ml-2" />
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link to={product.link}>
                  <Button className="w-full group/btn">
                    Use Calculator
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
