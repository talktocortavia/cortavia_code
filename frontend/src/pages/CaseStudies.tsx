import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useState } from 'react';

const caseStudies = [
  {
    slug: 'fintech-support',
    title: '24×7 AI Customer Support for a FinTech Company',
    tag: 'Cortavia Assist',
    challenge:
      'A growing FinTech firm struggled with high support volumes, slow response times, and rising operational costs.',
    solution:
      'CORTAVIA implemented Cortavia Assist, an AI-powered support agent integrated with their CRM and payment systems. The assistant handled FAQs, transaction status queries, and complaint triaging with sentiment analysis.',
    results: [
      '65% reduction in support tickets',
      'Average response time reduced from minutes to seconds',
      '24×7 support without increasing headcount',
      'Improved customer satisfaction and agent productivity',
    ],
    image: '/images/real/case-study-1.png',
  },
  {
    slug: 'hr-evaluation',
    title: 'Automated Performance Evaluation for an Enterprise HR Team',
    tag: 'Cortavia Evaluate',
    challenge:
      'An enterprise HR department faced biased evaluations, manual reviews, and inconsistent performance scoring across teams.',
    solution:
      'Using Cortavia Evaluate, we built an AI-driven evaluation system that analysed KPIs, peer feedback, and goal completion data to generate objective performance insights.',
    results: [
      '100% standardised performance reviews',
      'Reduced evaluation cycle time by 50%',
      'Bias-free, data-driven promotion decisions',
      'Actionable workforce analytics for leadership',
    ],
    image: '/images/real/case-study-2.png',
  },
  {
    slug: 'logistics-automation',
    title: 'Intelligent Process Automation for a Logistics Company',
    tag: 'Cortavia Automate',
    challenge:
      'A logistics provider managed thousands of daily documents, approvals, and compliance checks manually, leading to delays and errors.',
    solution:
      'CORTAVIA deployed Cortavia Automate to process documents, validate data, trigger approvals, and integrate with ERP systems using agentic workflows.',
    results: [
      '70% faster document processing',
      'Significant reduction in manual errors',
      'Real-time compliance tracking',
      'Lower operational costs and improved turnaround time',
    ],
    image: '/images/real/case-study-3.png',
  },
];

const CaseStudies = () => {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-emerald-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-700 dark:bg-blue-500/10 dark:text-blue-300 border border-emerald-200 dark:border-blue-500/20">
              Success Stories
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-700 bg-clip-text text-transparent dark:from-white dark:via-slate-200 dark:to-blue-300">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Real outcomes from applied AI systems: copilots, automation, evaluation, and intelligence.
          </p>
        </div>
      </section>

      {/* Case Studies Grid - Enhanced with smooth transitions */}
      <section className="pb-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {caseStudies.map((cs) => {
              const isExpanded = expandedSlug === cs.slug;
              const isCollapsed = expandedSlug !== null && !isExpanded;

              return (
                <article
                  key={cs.title}
                  className={[
                    'group relative rounded-3xl border overflow-hidden',
                    'bg-white dark:bg-slate-900',
                    'border-slate-200 dark:border-slate-800',
                    'transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
                    isExpanded 
                      ? 'lg:col-span-3 shadow-2xl shadow-emerald-500/10 dark:shadow-emerald-500/5 scale-100' 
                      : isCollapsed 
                        ? 'lg:col-span-1 opacity-40 scale-95 blur-[2px]'
                        : 'hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-800/50 hover:-translate-y-1',
                  ].join(' ')}
                  style={{
                    transformOrigin: 'center top',
                    willChange: isExpanded || isCollapsed ? 'transform, opacity' : 'auto',
                  }}
                >
                  {/* FULL-CARD hover overlay (collapsed state only) — clickable */}
                  {!isExpanded && !isCollapsed && (
                    <button
                      type="button"
                      onClick={() => setExpandedSlug(cs.slug)}
                      className="absolute inset-0 z-20 bg-emerald-600 dark:bg-blue-600 opacity-0 transition-opacity duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100 cursor-pointer text-left"
                      aria-label={`Open case study: ${cs.title}`}
                      style={{
                        willChange: 'opacity',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/85 via-emerald-600 to-emerald-700 dark:from-blue-600/85 dark:via-blue-600 dark:to-purple-700" />
                      <div className="relative h-full w-full p-6 flex flex-col justify-end">
                        <p className="text-xs font-bold uppercase tracking-wider text-white/90">CASE STUDY</p>
                        <h3 className="mt-2 text-2xl font-bold text-white leading-tight">
                          {cs.title}
                        </h3>
                        <p className="mt-3 text-sm text-white/95 leading-relaxed line-clamp-3">
                          {cs.challenge}
                        </p>
                        <div className="mt-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30">
                            {cs.tag}
                          </span>
                        </div>
                        <p className="mt-4 text-xs text-white/80">
                          Click anywhere to expand
                        </p>
                      </div>
                    </button>
                  )}

                  {/* Image with smooth height transition */}
                  <div 
                    className={[
                      'relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900',
                      'transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
                    ].join(' ')}
                    style={{
                      height: isExpanded ? '320px' : '200px',
                      willChange: 'height',
                    }}
                  >
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className={`w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${!isExpanded && 'group-hover:scale-105'}`}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                      style={{
                        willChange: 'transform',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    
                    {/* Floating badge on image */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-white/95 text-emerald-600 shadow-lg backdrop-blur-sm dark:bg-slate-900/95 dark:text-blue-300">
                        {cs.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content with dynamic padding */}
                  <div 
                    className="transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      padding: isExpanded ? '2.5rem' : '1.5rem',
                      willChange: 'padding',
                    }}
                  >
                    {/* Header - Always visible */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1 min-w-0">
                        <h3 
                          className={[
                            'font-bold leading-tight transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
                            'text-slate-900 dark:text-white',
                          ].join(' ')}
                          style={{
                            fontSize: isExpanded ? '2rem' : '1.25rem',
                            lineHeight: isExpanded ? '2.5rem' : '1.75rem',
                            willChange: 'font-size, line-height',
                          }}
                        >
                          {!isExpanded ? (
                            <button
                              type="button"
                              onClick={() => setExpandedSlug(cs.slug)}
                              className="text-left hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                            >
                              {cs.title}
                            </button>
                          ) : (
                            <span>{cs.title}</span>
                          )}
                        </h3>
                      </div>
                      
                      {isExpanded && (
                        <button
                          type="button"
                          onClick={() => setExpandedSlug(null)}
                          className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all hover:rotate-90"
                          aria-label="Close"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Collapsed View - Compact Information */}
                    {!isExpanded && (
                      <div 
                        className="space-y-4 transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                        style={{
                          opacity: isCollapsed ? 0 : 1,
                          maxHeight: isCollapsed ? 0 : '500px',
                          willChange: 'opacity, max-height',
                        }}
                      >
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40 p-4">
                          <p className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Challenge</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                            {cs.challenge}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Expanded View - Full Information */}
                    {isExpanded && (
                      <>
                        {/* Floating close button */}
                        <button
                          type="button"
                          onClick={() => setExpandedSlug(null)}
                          className="absolute top-5 right-5 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/95 hover:bg-white shadow-lg border border-slate-200 text-slate-700 hover:text-slate-900 backdrop-blur-sm dark:bg-slate-800/90 dark:hover:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
                          aria-label="Close expanded case study"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </>
                    )}

                    {isExpanded && (
                      <div 
                        className="transition-all duration-[1000ms] delay-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                        style={{
                          opacity: isExpanded ? 1 : 0,
                          transform: isExpanded ? 'translateY(0)' : 'translateY(20px)',
                          willChange: 'opacity, transform',
                        }}
                      >
                        <div className="grid lg:grid-cols-2 gap-10">
                          {/* Left Column */}
                          <div className="space-y-6">
                            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-500/10 dark:to-emerald-500/5 border border-emerald-200 dark:border-emerald-500/20">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
                                Challenge
                              </h4>
                              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{cs.challenge}</p>
                            </div>

                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2">
                                <span className="w-1 h-4 bg-emerald-500 rounded-full"></span>
                                Solution
                              </h4>
                              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{cs.solution}</p>
                            </div>
                          </div>

                          {/* Right Column */}
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
                                <span className="w-1 h-4 bg-emerald-500 rounded-full"></span>
                                Results
                              </h4>
                              <ul className="space-y-3">
                                {cs.results.map((r, idx) => (
                                  <li key={idx} className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center mt-0.5">
                                      <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                    </span>
                                    <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{r}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50/50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Want results like these?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            We can build a pilot in weeks and scale it into a secure enterprise deployment.
          </p>
          <Link to="/contact">
            <Button className="text-lg px-8 py-4">Request a consultation</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
