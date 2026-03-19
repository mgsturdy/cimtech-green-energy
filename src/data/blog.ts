export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'From Concept to Production: How CIMtech Supports Clients at Every Stage of Manufacturing',
    date: 'Aug 11, 2025',
    excerpt: 'In the fast-paced green energy sector, moving from an idea to full-scale production is no small feat. At CIMtech Green...',
    slug: 'concept-to-production',
  },
  {
    title: 'Exploring the Right Partner Selection for Fuel Cell Manufacturing',
    date: 'Jul 15, 2025',
    excerpt: 'Choosing the right manufacturing partner for fuel cell components is critical to success in the green energy sector...',
    slug: 'partner-selection',
  },
  {
    title: 'CNC Machining Unveiled: From Raw Material to Precision Parts',
    date: 'Jun 20, 2025',
    excerpt: 'Understanding the journey of raw material through CNC machining to become precision components for fuel cells...',
    slug: 'cnc-machining-unveiled',
  },
  {
    title: "Materials Matter: A CNC Machinist's Expertise",
    date: 'May 10, 2025',
    excerpt: 'The choice of material is one of the most important decisions in CNC machining for fuel cell components...',
    slug: 'materials-matter',
  },
];
