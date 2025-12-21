import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';
import { INSIGHTS } from '../content/insights';

const InsightDetail = () => {
  const { slug } = useParams();
  const insight = INSIGHTS.find((i) => i.slug === slug);

  if (!insight) {
    return (
      <div className="min-h-screen text-[color:var(--c-text)]">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Insight not found</h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              The insight you are looking for doesn’t exist.
            </p>
            <Link to="/insights">
              <Button>Back to Insights</Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-[color:var(--c-text)]">
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50/60 dark:from-slate-950 dark:to-slate-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/insights"
            className="inline-flex items-center text-sm text-slate-600 hover:text-emerald-700 dark:text-slate-400 dark:hover:text-blue-300"
          >
            ← Back to Insights
          </Link>
          <h1 className="text-5xl font-bold mt-6 mb-4 bg-gradient-to-r from-slate-900 to-emerald-700 bg-clip-text text-transparent dark:from-white dark:to-blue-400">
            {insight.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">{insight.intro}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-2xl border border-[color:var(--c-border)] bg-[color:var(--c-surface)] overflow-hidden shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <div className="h-64 bg-emerald-50 dark:bg-slate-900">
              <img
                src={insight.image}
                alt={insight.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Meta description</p>
                  <p className="mt-1 text-slate-700 dark:text-slate-300">{insight.metaDescription}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Audience</p>
                  <p className="mt-1 text-slate-700 dark:text-slate-300">{insight.audience}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Word count</p>
                  <p className="mt-1 text-slate-700 dark:text-slate-300">{insight.wordCount}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Keywords</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {insight.keywords.map((k) => (
                      <span
                        key={k}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">Outline</h2>
                <ol className="space-y-2 list-decimal list-inside text-slate-700 dark:text-slate-300">
                  {insight.outline.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ol>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Expanded content</h2>
                <div className="space-y-10">
                  {insight.body.map((section) => (
                    <section key={section.heading} className="space-y-3">
                      <h3 className="text-xl font-bold">{section.heading}</h3>
                      {section.paragraphs.map((p) => (
                        <p key={p} className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          {p}
                        </p>
                      ))}
                      {section.bullets && (
                        <ul className="mt-3 space-y-2">
                          {section.bullets.map((b) => (
                            <li key={b} className="text-slate-700 dark:text-slate-300 flex items-start">
                              <span className="text-emerald-600 dark:text-blue-500 mr-2">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  ))}
                </div>
              </div>

              <div className="mt-10 rounded-xl border border-[color:var(--c-border)] bg-emerald-50/50 p-6 dark:border-slate-800 dark:bg-slate-900/30">
                <h3 className="text-xl font-bold mb-2">Want the full draft?</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Tell us if you want it in HTML or plain text, and we’ll expand this into a publish-ready article.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/contact">
                    <Button>Request full draft</Button>
                  </Link>
                  <Link to="/insights">
                    <Button variant="secondary">Browse insights</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightDetail;


