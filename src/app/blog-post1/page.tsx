import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import FaqAccordion from '@/components/FaqAccordion';
import ThemeButton from '@/components/ThemeButton';

export const metadata: Metadata = {
  title: 'Understanding Wills and Trusts: What You Need to Know',
  description:
    'Why you should have a Living Will and Trust, common myths, and 20 detailed plain-English answers to top estate planning questions.',
};

export default function ArticleWillsTrusts() {
  const trustFaqs = [
    {
      question: '1. What is a Living Will?',
      answer: 'It’s a written legal document that explains your medical choices if you cannot speak for yourself, such as preferences on life support machines and specific treatments.',
    },
    {
      question: '2. What is a Trust?',
      answer: 'A Trust is a legal arrangement where you place your assets (like house, bank accounts, or investments) so they can be managed by a Trustee and passed to beneficiaries without probate court.',
    },
    {
      question: '3. Do I need both a Living Will and a Trust?',
      answer: 'Yes. A Living Will covers medical decisions while you are alive, while a Trust handles financial and property matters both during your life and after you pass.',
    },
    {
      question: '4. How is a Living Will different from a Last Will?',
      answer: 'A Living Will is for health care decisions while you’re alive. A Last Will is for distributing physical possessions and naming child guardians after passing, but it still goes through probate court.',
    },
    {
      question: '5. Do I lose control of my money and property once it’s in a Trust?',
      answer: 'No. With a revocable living trust, you stay in full control as the initial trustee and can make changes, buy, sell, or withdraw assets at any time.',
    },
    {
      question: '6. Who should I choose as my Trustee?',
      answer: 'Pick someone responsible and trustworthy—often a spouse, adult child, trusted relative, or a professional fiduciary.',
    },
    {
      question: '7. Can I change my Living Will or Trust later?',
      answer: 'Yes. You can update them whenever your life changes (marriage, children, new property, moving states, divorce, etc.).',
    },
    {
      question: '8. What happens if I don’t have a Trust?',
      answer: 'Your estate may go to probate court, which can be costly (consuming 3–7% of the estate), take months or years, make your records public, and cause stress for your heirs.',
    },
    {
      question: '9. Is a Living Will legally binding?',
      answer: 'Yes, it is recognized by state law and ensures your medical wishes are legally honored by physicians.',
    },
    {
      question: '10. At what age should I make a Living Will and Trust?',
      answer: 'As soon as you are an adult with assets, children, or specific healthcare preferences. Accidents can happen at any age.',
    },
    {
      question: '11. Can a Living Will cover organ donation?',
      answer: 'Yes, you can clearly specify your wishes regarding organ and tissue donation in your directives.',
    },
    {
      question: '12. Do I still need a Will if I have a Trust?',
      answer: 'Yes, usually a “pour-over will” is used as a safety net to catch any assets not retitled in your Trust.',
    },
    {
      question: '13. What if my family disagrees with my Living Will?',
      answer: 'Doctors are legally required to follow your executed Living Will, preventing family disputes during critical moments.',
    },
    {
      question: '14. Can a Trust help reduce estate taxes?',
      answer: 'In some cases, yes. Certain trusts can be structured to minimize estate tax burdens, especially for growing or larger estates.',
    },
    {
      question: '15. Is a Trust only for the wealthy?',
      answer: 'No. Even everyday middle-class families use Trusts to protect a single family home, retirement savings, or life insurance proceeds from probate.',
    },
    {
      question: '16. How much does it cost to create a Living Will and Trust?',
      answer: 'It depends on your situation, but the cost is far less than the money and emotional toll lost to probate court proceedings and legal disputes later.',
    },
    {
      question: '17. Do I need a lawyer to set up a Living Will or Trust?',
      answer: 'While online templates exist, consulting professional estate advisors ensures your documents are compliant with state law and your assets are funded properly.',
    },
    {
      question: '18. Can my Trustee and Health Care Agent be the same person?',
      answer: 'Yes, but depending on your family dynamic, it is sometimes better to split duties so no single person feels overwhelmed.',
    },
    {
      question: '19. What happens if I move to another state?',
      answer: 'You should review and update your documents, as health care directive forms and probate rules vary by jurisdiction.',
    },
    {
      question: '20. How often should I review my Living Will and Trust?',
      answer: 'At least every 3–5 years, or whenever there is a major life transition (marriage, birth of a child, home purchase, or loss of a loved one).',
    },
  ];

  return (
    <article className="container" style={{ paddingBottom: '5rem' }}>
      <header className="article-header">
        <ul className="breadcrumbs" style={{ justifyContent: 'center' }}>
          <li><Link href="/">Home</Link></li>
          <li className="breadcrumbs-separator">/</li>
          <li><Link href="/blog">Blog</Link></li>
          <li className="breadcrumbs-separator">/</li>
          <li className="breadcrumbs-current">Wills and Trusts</li>
        </ul>
        <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>Estate Planning Guide</span>
        <h1>Understanding Wills and Trusts: What You Need to Know</h1>
        <div className="article-meta-bar">
          <span>Published on August 21, 2025</span>
          <span>•</span>
          <span>4 min read</span>
          <span>•</span>
          <span>By SecureVest Advisory Team</span>
        </div>
      </header>

      <div className="article-hero-image">
        <img
          src="/images/trust-legal.jpg"
          alt="Estate planning living will and trust arrangement"
          width={980}
          height={480}
        />
      </div>

      <div className="article-content">
        <p className="lead">
          When it comes to planning for the future, most people avoid the topic. Talking about “what happens after” is not easy. But having a <strong>Living Will</strong> and <strong>Trust</strong> is one of the kindest and most responsible gifts you can give your family.
        </p>

        <h2>Why You Should Have a Living Will and Trust</h2>
        
        <h3>What is a Living Will?</h3>
        <p>
          A <strong>Living Will</strong> is a written document that explains your wishes if you become very sick or unable to speak for yourself:
        </p>
        <ul className="checklist">
          <li className="checklist-item">
            <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
            <span>Do you want life support machines?</span>
          </li>
          <li className="checklist-item">
            <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
            <span>Do you want certain medical treatments or not?</span>
          </li>
          <li className="checklist-item">
            <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
            <span>Who should make medical choices for you if you can’t?</span>
          </li>
        </ul>
        <p>
          A Living Will answers these questions ahead of time. This way, your family doesn’t have to carry the emotional burden of guessing what you would have wanted.
        </p>

        <h3>What is a Trust?</h3>
        <p>
          A <strong>Trust</strong> is like a secure safety box for your money, house, and other assets. You place your belongings into a Trust while you’re alive, designating:
        </p>
        <ul>
          <li><strong>Trustee:</strong> Who will manage these assets.</li>
          <li><strong>Beneficiaries:</strong> Who will receive them after you’re gone.</li>
        </ul>
        <p>
          The big benefit? With a Trust, your family avoids <strong>probate court</strong>—a long, public, and expensive legal process. Instead, your assets pass directly to your heirs according to your instructions.
        </p>

        <h2>Why Do You Need Both?</h2>
        <div className="article-callout">
          <h4>The Complete Shield</h4>
          <p>
            Having <em>only a Will</em> may not be enough because a Will still goes through probate court. Having <em>only a Trust</em> doesn’t handle your medical decisions if you fall ill.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            Together, a <strong>Living Will + Trust</strong> guarantees:
          </p>
          <ul style={{ margin: '0.5rem 0 0 1rem' }}>
            <li>✔ Your health choices are respected</li>
            <li>✔ Your assets go smoothly to your family</li>
            <li>✔ Less stress, zero court battles, and reduced legal costs</li>
          </ul>
        </div>

        <h2>Common Myths (and the Truth)</h2>
        <ul className="checklist">
          <li className="checklist-item">
            <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
            <span><strong>Myth:</strong> “I’m too young for this.” <br /><strong>Truth:</strong> Accidents and illnesses happen at any age. Planning early protects your spouse and children.</span>
          </li>
          <li className="checklist-item">
            <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
            <span><strong>Myth:</strong> “It’s only for rich people.” <br /><strong>Truth:</strong> Even if you only own a single home, car, or modest savings, a Trust protects it from probate costs.</span>
          </li>
          <li className="checklist-item">
            <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
            <span><strong>Myth:</strong> “It’s too complicated.” <br /><strong>Truth:</strong> With the right professional guidance, setting up your documents can be simple and straightforward.</span>
          </li>
        </ul>

        <h2>20 FAQs About Living Will &amp; Trust</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Here are clear, plain-English answers to the 20 most frequent questions clients ask our advisory team:
        </p>

        <FaqAccordion items={trustFaqs} />

        <h2 style={{ marginTop: '3.5rem' }}>How SecureVest Solutions Can Help</h2>
        <p>
          We guide families step-by-step in creating and aligning their <strong>Living Will and Trust</strong> in plain English—no confusing legal jargon. Our goal is to protect your assets, ensure your wishes are honored, and give your family total peace of mind.
        </p>

        <div className="article-callout" style={{ backgroundColor: 'var(--color-slate-100)', borderLeftColor: 'var(--color-primary-900)' }}>
          <p>
            📞 Contact us at <strong><a href="tel:7403032525">740-303-2525</a></strong> today to schedule a free consultation. Let’s make sure your wishes are honored and your loved ones are protected.
          </p>
        </div>

        {/* Author Box */}
        <div className="article-author-card">
          <div className="author-large-avatar" aria-hidden="true">SV</div>
          <div>
            <h4 style={{ margin: '0 0 0.25rem 0' }}>SecureVest Solutions Advisory Team</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-slate-600)' }}>
              Helping families safeguard their legacy, avoid probate delays, and achieve lifelong financial peace of mind.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <ThemeButton
            href="https://calendly.com/securevestsolutions/appointment"
            target="_blank"
            variant="gold"
            size="lg"
          >
            Schedule a Free Living Will &amp; Trust Consultation
          </ThemeButton>
        </div>
      </div>
    </article>
  );
}
