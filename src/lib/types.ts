export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  projects: {
    title: string;
    description: string;
    image: string;
    aiHint: string;
  }[];
};

export type Testimonial = {
  quote: string;
  author: string;
  company: string;
};
