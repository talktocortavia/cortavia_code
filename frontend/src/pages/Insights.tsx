import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { INSIGHTS } from '../content/insights';
import { useState } from 'react';

const Insights = () => {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-emerald-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-700 dark:bg-blue-500/10 dark:text-blue-300 border border-emerald-200 dark:border-blue-500/20">
              Knowledge Hub
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-700 bg-clip-text text-transparent dark:from-white dark:via-slate-200 dark:to-blue-300">
            Insights
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Expert perspectives on building real-world AI systems, automation strategies, and digital transformation.
          </p>
        </div>
      </section>

      {/* Insights Grid - Enhanced with smooth transitions */}
      <section className="pb-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {INSIGHTS.map((p) => {
              const isExpanded = expandedSlug === p.slug;
              const isCollapsed = expandedSlug !== null && !isExpanded;

              return (
                <article
                  key={p.title}
                  className={[
                    'group relative rounded-3xl border overflow-hidden',
                    'bg-white dark:bg-slate-900',
                    'border-slate-200 dark:border-slate-800',
                    'transition-all duration-700 ease-in-out',
                    isExpanded 
                      ? 'lg:col-span-3 shadow-2xl shadow-emerald-500/10 dark:shadow-emerald-500/5 scale-100' 
                      : isCollapsed 
                        ? 'lg:col-span-1 opacity-40 scale-95 blur-[2px]'
                        : 'hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-800/50 hover:-translate-y-1',
                  ].join(' ')}
                  style={{
                    transformOrigin: 'center top',
                  }}
                >
                  {/* FULL-CARD hover overlay (collapsed state only) — clickable */}
                  {!isExpanded && !isCollapsed && (
                    <button
                      type="button"
                      onClick={() => setExpandedSlug(p.slug)}
                      className="absolute inset-0 z-20 bg-emerald-600 dark:bg-blue-600 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 cursor-pointer text-left"
                      aria-label={`Open insight: ${p.title}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/85 via-emerald-600 to-emerald-700 dark:from-blue-600/85 dark:via-blue-600 dark:to-purple-700" />
                      <div className="relative h-full w-full p-6 flex flex-col justify-end">
                        <p className="text-xs font-bold uppercase tracking-wider text-white/90">INSIGHT</p>
                        <h3 className="mt-2 text-2xl font-bold text-white leading-tight">
                          {p.title}
                        </h3>
                        <p className="mt-3 text-sm text-white/95 leading-relaxed line-clamp-5">
                          {p.intro}
                        </p>
                        <p className="mt-3 text-sm text-white/90 leading-relaxed line-clamp-3">
                          {p.metaDescription}
                        </p>
                        <div className="mt-4">
                          <p className="text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                            Highlights
                          </p>
                          <ul className="space-y-1">
                            {p.outline.slice(0, 3).map((o) => (
                              <li key={o} className="text-white/95 text-xs flex items-start">
                                <span className="mr-2 text-white/95">•</span>
                                <span className="line-clamp-2">{o}</span>
                              </li>
                            ))}
                          </ul>
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
                      'transition-all duration-700 ease-in-out',
                    ].join(' ')}
                    style={{
                      height: isExpanded ? '320px' : '200px',
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${!isExpanded && 'group-hover:scale-105'}`}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    
                    {/* Floating badge on image */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-white/95 text-emerald-600 shadow-lg backdrop-blur-sm dark:bg-slate-900/95 dark:text-blue-300">
                        INSIGHT
                      </span>
                    </div>
                  </div>

                  {/* Content with dynamic padding */}
                  <div 
                    className="transition-all duration-700 ease-in-out"
                    style={{
                      padding: isExpanded ? '2.5rem' : '1.5rem',
                    }}
                  >
                    {/* Header - Always visible */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1 min-w-0">
                        <time className="block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                          {p.dateLabel}
                        </time>
                        <h3 
                          className={[
                            'font-bold leading-tight transition-all duration-700 ease-in-out',
                            'text-slate-900 dark:text-white',
                          ].join(' ')}
                          style={{
                            fontSize: isExpanded ? '2rem' : '1.25rem',
                            lineHeight: isExpanded ? '2.5rem' : '1.75rem',
                          }}
                        >
                          {!isExpanded ? (
                            <button
                              type="button"
                              onClick={() => setExpandedSlug(p.slug)}
                              className="text-left hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                            >
                              {p.title}
                            </button>
                          ) : (
                            <span>{p.title}</span>
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
                        className="space-y-4 transition-all duration-500 ease-in-out"
                        style={{
                          opacity: isCollapsed ? 0 : 1,
                          maxHeight: isCollapsed ? 0 : '500px',
                        }}
                      >
                        {/* Simple compact box (full-card hover overlay handles the green effect) */}
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40 p-4">
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                            {p.metaDescription}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {p.keywords.slice(0, 3).map((k) => (
                              <span
                                key={k}
                                className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-white text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
                              >
                                {k}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Expanded View - Full Information */}
                      {isExpanded && (
                        <>
                          {/* Floating close button (always accessible) */}
                          <button
                            type="button"
                            onClick={() => setExpandedSlug(null)}
                            className="absolute top-5 right-5 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/95 hover:bg-white shadow-lg border border-slate-200 text-slate-700 hover:text-slate-900 backdrop-blur-sm dark:bg-slate-800/90 dark:hover:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
                            aria-label="Close expanded insight"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </>
                      )}

                      {isExpanded && (
                      <div 
                        className="transition-all duration-700 delay-300 ease-in-out"
                        style={{
                          opacity: isExpanded ? 1 : 0,
                          transform: isExpanded ? 'translateY(0)' : 'translateY(20px)',
                        }}
                      >
                        <div className="grid lg:grid-cols-2 gap-10">
                          {/* Left Column - Context & Metadata */}
                          <div className="space-y-6">
                            {/* Introduction Card */}
                            <div className="group/card p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-500/10 dark:to-emerald-500/5 border border-emerald-200 dark:border-emerald-500/20 hover:shadow-lg transition-all duration-300">
                              <div className="flex items-center gap-2 mb-3">
                                <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                                  Quick Take
                                </h4>
                              </div>
                              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{p.intro}</p>
                            </div>

                            {/* Overview */}
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2">
                                <span className="w-1 h-4 bg-emerald-500 rounded-full"></span>
                                Overview
                              </h4>
                              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{p.metaDescription}</p>
                            </div>

                            {/* Target Audience */}
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2">
                                <span className="w-1 h-4 bg-emerald-500 rounded-full"></span>
                                Who This Is For
                              </h4>
                              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{p.audience}</p>
                            </div>

                            {/* Topics Grid */}
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                                <span className="w-1 h-4 bg-emerald-500 rounded-full"></span>
                                Key Topics
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {p.keywords.map((k) => (
                                  <span
                                    key={k}
                                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
                                  >
                                    {k}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Stats Bar */}
                            <div className="flex items-center gap-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                              <div className="flex items-center gap-2 text-sm">
                                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                <span className="text-slate-600 dark:text-slate-400">{p.wordCount}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span className="text-slate-600 dark:text-slate-400">{p.outline.length} sections</span>
                              </div>
                            </div>
                          </div>

                          {/* Right Column - Content Preview */}
                          <div className="space-y-6">
                            {/* Article Structure */}
                            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50">
                              <div className="flex items-center justify-between mb-4">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                  </svg>
                                  Article Structure
                                </h4>
                              </div>
                              <ul className="space-y-2.5">
                                {p.outline.map((o, i) => (
                                  <li key={o} className="flex items-start gap-3 group/item">
                                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold group-hover/item:scale-110 transition-transform">
                                      {i + 1}
                                    </span>
                                    <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-0.5">{o}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Content Snippet */}
                            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 p-5 space-y-5 max-h-96 overflow-y-auto custom-scrollbar">
                              <div className="flex items-center gap-2 sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm pb-3 border-b border-slate-200 dark:border-slate-700">
                                <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                                  Preview Excerpt
                                </h4>
                              </div>
                              
                              <div className="space-y-5">
                                {p.body.slice(0, 2).map((s) => (
                                  <div key={s.heading} className="space-y-2.5">
                                    <h5 className="font-bold text-sm text-slate-900 dark:text-white">{s.heading}</h5>
                                    {s.paragraphs.slice(0, 1).map((para) => (
                                      <p key={para} className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {para}
                                      </p>
                                    ))}
                                    {s.bullets && (
                                      <ul className="space-y-1.5 mt-2">
                                        {s.bullets.slice(0, 3).map((b) => (
                                          <li key={b} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                                            <svg className="w-3 h-3 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>{b}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>

                             {/* Action Buttons (no "Read Full Article" in expanded view) */}
                             <div className="flex gap-3 pt-2">
                               <Button 
                                 variant="secondary" 
                                 onClick={() => setExpandedSlug(null)} 
                                 className="flex-1 hover:bg-slate-100 dark:hover:bg-slate-800"
                               >
                                 Collapse
                               </Button>
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

      {/* CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-40" />
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              Get Started
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Ready for Your AI Roadmap?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's map your processes, data, and goals into a phased AI implementation plan with measurable outcomes and clear ROI.
          </p>
          <Link to="/contact">
            <Button className="text-lg px-10 py-5 bg-white text-slate-900 hover:bg-slate-100 shadow-2xl shadow-emerald-500/20">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgb(148 163 184 / 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgb(148 163 184 / 0.5);
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Insights;