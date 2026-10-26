export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: 'protection' | 'retirement' | 'estate' | 'insurance' | 'planning';
  categoryLabel: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'high-costs-uncertain-markets-how-to-financially-protect-your-family-in-2026',
    title: 'High Costs, Uncertain Markets: How to Financially Protect Your Family in 2026',
    date: '1/7/2026',
    readTime: '1 min read',
    category: 'protection',
    categoryLabel: 'Market Insights',
    excerpt:
      'As we step into 2026, many families are feeling the pressure. Everyday expenses remain high, interest rates fluctuate, and market uncertainty continues to make financial planning feel overwhelming. Protecting your family’s financial future is about building a strong, resilient foundation.',
    image: '/images/market-family.png',
    imageAlt: 'Family standing together viewing economic trends and city skyline',
    tags: ['Market Resilience', 'Income Protection'],
  },
  {
    slug: 'what-is-a-good-monthly-retirement-income',
    title: 'What Is a Good Monthly Retirement Income?',
    date: '9/26/2025',
    readTime: '2 min read',
    category: 'retirement',
    categoryLabel: 'Retirement Planning',
    excerpt:
      'Planning for retirement isn’t just about saving—it’s about knowing how much income you’ll need each month to live comfortably. Explore benchmarks, the 4% rule, and how to create a personalized monthly budget.',
    image: '/images/retirement-laptop.png',
    imageAlt: 'Senior couple smiling and reviewing their retirement roadmap on a laptop',
    tags: ['Retirement Planning', 'Cash Flow'],
  },
  {
    slug: 'understanding-wills-and-trusts',
    title: 'Understanding Wills and Trusts: What You Need to Know',
    date: '8/21/2025',
    readTime: '4 min read',
    category: 'estate',
    categoryLabel: 'Estate Planning',
    excerpt:
      'Why having a Living Will and Trust protects your medical choices, shields your home and savings, avoids probate court, and secures your loved ones. Includes 20 answers to top client questions.',
    image: '/images/wills-book.jpg',
    imageAlt: 'Novum Testamentum Graece leather volume representing estate and trust heritage',
    tags: ['Estate Planning', 'Living Trusts'],
  },
  {
    slug: 'why-term-insurance-is-a-must-have-for-every-family',
    title: 'Why Term Insurance is a Must-Have for Every Family',
    date: '7/28/2025',
    readTime: '5 min read',
    category: 'insurance',
    categoryLabel: 'Life Insurance',
    excerpt:
      'Term insurance is a type of life insurance that provides coverage for a specific period or "term," often between 10 and 30 years. Discover why affordable term coverage is essential to replace income and protect your family.',
    image: '/images/term-insurance.jpg',
    imageAlt: 'Red ambulance directional sign symbolizing emergency financial protection',
    tags: ['Life Insurance', 'Family Security'],
  },
  {
    slug: 'secure-your-familys-future-with-comprehensive-asset-protection-solutions',
    title: "Secure Your Family's Future with Comprehensive Asset Protection Solutions",
    date: '5/8/2024',
    readTime: '1 min read',
    category: 'protection',
    categoryLabel: 'Asset Protection',
    excerpt:
      'At SecureVest Solutions, we specialize in helping families safeguard their assets through tailored insurance and investment strategies. Our services include retirement planning, educational planning, and tax-saving solutions, ensuring your family\'s financial security and peace of mind for the future. Discover how we can assist you today.',
    image: '/images/broken-phone-insurance.jpg',
    imageAlt: 'Smartphone with cracked screen displaying INSURANCE word on display',
    tags: ['Asset Protection', 'Wealth Preservation'],
  },
  {
    slug: 'secure-your-familys-future-with-smart-financial-planning-solutions',
    title: "Secure Your Family's Future with Smart Financial Planning Solutions",
    date: '5/8/2024',
    readTime: '1 min read',
    category: 'planning',
    categoryLabel: 'Financial Planning',
    excerpt:
      'At SecureVest Solutions, we specialize in asset protection, insurance, and tax-saving strategies. Our comprehensive services include goal setting, retirement planning, educational funding, risk management, and estate planning to ensure your family\'s financial security and peace of mind for the future. Let us help you achieve your financial goals.',
    image: '/images/advisor-desk.jpg',
    imageAlt: 'Financial advisor on phone reviewing desktop financial planning charts',
    tags: ['Financial Planning', 'Goal Setting'],
  },
];
