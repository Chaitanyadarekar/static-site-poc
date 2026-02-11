// Tailwind CSS Design Tokens
// Provides reusable design constants that map to Tailwind utility classes

export const DESIGN_TOKENS = {
  // Color Classes
  colors: {
    primary: {
      DEFAULT: "text-primary",
      bg: "bg-primary",
      hover: "hover:bg-primary-hover",
      border: "border-primary",
    },
    secondary: {
      DEFAULT: "text-secondary",
      bg: "bg-secondary",
      hover: "hover:bg-secondary-hover",
      border: "border-secondary",
    },
    accent: {
      DEFAULT: "text-accent",
      bg: "bg-accent",
      hover: "hover:bg-accent-hover",
      border: "border-accent",
    },
    background: {
      primary: "bg-background-primary",
      secondary: "bg-background-secondary",
      tertiary: "bg-background-tertiary",
      card: "bg-background-card",
      hover: "bg-background-hover",
    },
    text: {
      primary: "text-slate-100",
      secondary: "text-slate-300",
      muted: "text-slate-400",
      inverse: "text-slate-900",
    },
  },

  // Layout Classes
  layout: {
    container: "max-w-container mx-auto px-6",
    content: "max-w-content mx-auto",
    section: "py-xl lg:py-2xl",
    card: "bg-slate-800 rounded-lg p-6 border border-slate-700 shadow-card",
    cardHover:
      "hover:shadow-card-hover hover:bg-slate-750 transition-all duration-normal",
  },

  // Typography Classes
  typography: {
    h1: "text-4xl md:text-6xl font-bold",
    h2: "text-3xl md:text-5xl font-bold",
    h3: "text-2xl md:text-3xl font-bold",
    h4: "text-xl md:text-2xl font-semibold",
    body: "text-base leading-relaxed",
    bodyLarge: "text-lg leading-relaxed",
    caption: "text-sm text-slate-400",
  },

  // Animation Classes
  animations: {
    fadeIn: "animate-fade-in",
    slideUp: "animate-slide-up",
    marquee: "animate-marquee",
    hover: "transition-all duration-normal hover:scale-105",
    button: "transition-colors duration-fast",
  },

  // Spacing Classes
  spacing: {
    xs: "space-x-xs space-y-xs",
    sm: "space-x-sm space-y-sm",
    md: "space-x-md space-y-md",
    lg: "space-x-lg space-y-lg",
    xl: "space-x-xl space-y-xl",
  },

  // Common Component Classes
  components: {
    button: {
      primary:
        "bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-fast",
      secondary:
        "bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-fast",
      outline:
        "border border-slate-600 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-fast",
    },
    input:
      "bg-slate-800 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary",
    badge: "inline-block bg-primary text-white text-xs px-2 py-1 rounded-full",
    link: "text-primary hover:text-primary-light transition-colors duration-fast underline",
  },
} as const;

// Utility function to combine classes
export const cn = (
  ...classes: (string | undefined | null | false)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

// Responsive utility functions
export const responsive = {
  // Mobile-first responsive text sizes
  text: (mobile: string, desktop?: string) =>
    desktop ? `${mobile} md:${desktop}` : mobile,

  // Grid responsive columns
  grid: (mobile: number, tablet?: number, desktop?: number) => {
    let classes = `grid-cols-${mobile}`;
    if (tablet) classes += ` md:grid-cols-${tablet}`;
    if (desktop) classes += ` lg:grid-cols-${desktop}`;
    return classes;
  },

  // Responsive spacing
  spacing: (mobile: string, desktop?: string) =>
    desktop ? `${mobile} lg:${desktop}` : mobile,
};
