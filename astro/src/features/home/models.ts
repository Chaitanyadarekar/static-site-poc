// Pricing-related interfaces
export interface PricingPlan {
  name: string;
  price: number;
  currency: string;
  period: string;
  features: string[];
  buttonText: string;
  buttonVariant: "primary" | "outline";
  featured: boolean;
  featuredBadge?: string;
}

export interface PricingCardProps {
  name: string;
  price: number;
  currency: string;
  period: string;
  features: string[];
  buttonText: string;
  buttonVariant: "primary" | "outline";
  featured?: boolean;
}
