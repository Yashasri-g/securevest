export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: 'retirement' | 'estate' | 'insurance' | 'protection' | 'planning';
  categoryLabel: string;
  excerpt: string;
  image: string;
  imageAlt: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'blog-post1',
    title: 'Understanding Wills and Trusts: What You Need to Know',
    date: 'August 21, 2025',
    readTime: '4 min read',
    category: 'estate',
    categoryLabel: 'Estate Planning',
    excerpt:
      'Why having a Living Will and Trust protects your medical choices, shields your home and savings, avoids probate court, and secures your loved ones. Includes 20 answers to top client questions.',
    image: '/images/trust-legal.jpg',
    imageAlt: 'Living will and trust legal representation on wooden desk',
  },
  {
    slug: 'what-is-a-good-monthly-retirement-income',
    title: 'What Is a Good Monthly Retirement Income?',
    date: 'September 26, 2025',
    readTime: '2 min read',
    category: 'retirement',
    categoryLabel: 'Retirement',
    excerpt:
      'Planning for retirement isn’t just about saving—it’s about knowing how much monthly cash flow you’ll need to live comfortably and securely.',
    image: '/images/senior-bench.jpg',
    imageAlt: 'Retired couple discussing their plans on a park bench',
  },
  {
    slug: 'high-costs-uncertain-markets-how-to-financially-protect-your-family-in-2026',
    title: 'High Costs, Uncertain Markets: How to Financially Protect Your Family in 2026',
    date: 'January 2, 2026',
    readTime: '1 min read',
    category: 'protection',
    categoryLabel: 'Market Insights',
    excerpt:
      'As everyday expenses remain high and interest rates fluctuate, learn the crucial steps to protect your family’s financial security in 2026.',
    image: '/images/advisor-desk.jpg',
    imageAlt: 'Analyzing financial roadmap amid market uncertainty',
  },
  {
    slug: 'blog-post',
    title: 'Why Term Insurance is a Must-Have for Every Family',
    date: 'July 27, 2025',
    readTime: '5 min read',
    category: 'insurance',
    categoryLabel: 'Life Insurance',
    excerpt:
      'Understand the affordable, high-impact mechanics of term life insurance, how premiums are determined, and how to choose the right coverage term.',
    image: '/images/term-insurance.jpg',
    imageAlt: 'Term life insurance policy review document',
  },
  {
    slug: 'secure-your-familys-future-with-comprehensive-asset-protection-solutions',
    title: "Secure Your Family's Future with Comprehensive Asset Protection Solutions",
    date: 'May 8, 2024',
    readTime: '1 min read',
    category: 'protection',
    categoryLabel: 'Asset Protection',
    excerpt:
      "Specialized asset protection, retirement strategies, and educational planning to safeguard your family's lasting peace of mind.",
    image: '/images/family-home.jpg',
    imageAlt: 'Protecting home and family assets',
  },
  {
    slug: 'secure-your-familys-future-with-smart-financial-planning-solutions',
    title: "Secure Your Family's Future with Smart Financial Planning Solutions",
    date: 'May 8, 2024',
    readTime: '1 min read',
    category: 'planning',
    categoryLabel: 'Financial Planning',
    excerpt:
      'How our integrated approach to goal setting, educational funding, and risk management delivers robust multi-generational wealth.',
    image: '/images/financial-planner.jpg',
    imageAlt: 'Life planner notebook on wooden desk',
  },
];
