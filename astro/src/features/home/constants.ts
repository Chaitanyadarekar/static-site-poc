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

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: 19,
    currency: "$",
    period: "/month",
    features: [
      "Up to 10 projects",
      "5GB storage",
      "Email support",
      "Basic analytics",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline",
    featured: false,
  },
  {
    name: "Professional",
    price: 49,
    currency: "$",
    period: "/month",
    features: [
      "Unlimited projects",
      "50GB storage",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
    ],
    buttonText: "Get Started",
    buttonVariant: "primary",
    featured: true,
    featuredBadge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: 99,
    currency: "$",
    period: "/month",
    features: [
      "Unlimited everything",
      "500GB storage",
      "24/7 phone support",
      "Enterprise analytics",
      "Custom features",
      "Dedicated account manager",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline",
    featured: false,
  },
];
