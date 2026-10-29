export interface Faq {
  question: string;
  answer: string;
}

export interface FaqGroup {
  title: string;
  items: Faq[];
}

export const FAQ_GROUPS: FaqGroup[] = [
  {
    title: 'Getting Started',
    items: [
      {
        question: 'What does SecureVest Solutions do?',
        answer:
          'We help families protect and grow what they have built. Our advisors cover estate planning, investment strategy, retirement income, education funding and life and term insurance, so one conversation can cover your whole picture.',
      },
      {
        question: 'Is the first consultation really free?',
        answer:
          'Yes. Your first consultation and your quote are complimentary and carry no obligation. We listen to your priorities and outline clear recommendations before you decide anything.',
      },
      {
        question: 'How does the free quote work?',
        answer:
          'Tell us what you want to protect and how to reach you, using the short quote form. An advisor reviews your answers, compares suitable options and contacts you, usually within one business day, to walk through the results.',
      },
      {
        question: 'What information do I need for a quote?',
        answer:
          'Just the basics: the kind of coverage or planning you are interested in, a rough picture of your household, and your contact details. Please do not send Social Security numbers, bank details or other sensitive identifiers through the website. We only ask for those later, in a secure conversation, if they are needed.',
      },
    ],
  },
  {
    title: 'Working With Us',
    items: [
      {
        question: 'What does "fiduciary" mean?',
        answer:
          'A fiduciary is legally and ethically bound to put your interests ahead of their own. It means our recommendations are based on what fits your family, not on what pays us the most.',
      },
      {
        question: 'Are you tied to one insurance company?',
        answer:
          'No. We are independent, so we compare options across carriers instead of selling a single company’s products. That lets us look for the best fit and the best value for your situation.',
      },
      {
        question: 'I already have an advisor. Can I still talk to you?',
        answer:
          'Of course. Many families come to us for a second opinion. We can review your current plan and policies, point out gaps or overlaps, and you decide what, if anything, to change.',
      },
      {
        question: 'What will this cost me?',
        answer:
          'The consultation and quote are free. If you choose to work with us, we explain how we are paid and what any recommendation costs before you commit, so there are no surprises.',
      },
    ],
  },
  {
    title: 'Insurance & Planning Basics',
    items: [
      {
        question: 'What is the difference between term and permanent life insurance?',
        answer:
          'Term life insurance covers you for a set period, such as 10, 20 or 30 years, and is usually the most affordable way to protect your family’s income. Permanent life insurance lasts for life and can build cash value, at a higher cost. The right mix depends on your goals, and we help you weigh both.',
      },
      {
        question: 'How much life insurance do I need?',
        answer:
          'It depends on your income, debts, dependants, and the future costs you want covered, such as a mortgage or education. A common starting point is a multiple of annual income, but we tailor the number to your actual household needs.',
      },
      {
        question: 'Can I change my coverage or plan later?',
        answer:
          'Often, yes. Many plans and policies can be adjusted as your life changes, though options vary by product. We schedule regular reviews so your plan keeps pace with your family.',
      },
    ],
  },
  {
    title: 'Reaching Us',
    items: [
      {
        question: 'How can I contact you?',
        answer:
          'Call or text (740) 303-2525, message us on WhatsApp, use the contact form, or request a free quote online. We are available Monday to Friday, 9:00 am to 5:00 pm.',
      },
    ],
  },
];

export const FAQ_DISCLAIMER =
  'The information on this page is general and educational. It is not personal financial, tax or legal advice and does not change the terms of any policy. Eligibility and pricing depend on individual circumstances and carrier underwriting.';
