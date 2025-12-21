import { Link } from 'react-router-dom';
import Button from '../components/Button';

const solutions = [
  {
    title: 'AI Copilots & Assistants',
    desc: 'Knowledge-grounded copilots for support, operations, and internal teams.',
    points: ['RAG + tools', 'Role-based access', 'Analytics & feedback loops'],
  },
  {
    title: 'Process Automation',
    desc: 'Automate documents, workflows, and approvals with AI + RPA.',
    points: ['Document extraction', 'Workflow orchestration', 'Audit-ready compliance'],
  },
  {
    title: 'Evaluation & Scoring',
    desc: 'Generate and evaluate assessments with objective rubrics and analytics.',
    points: ['Custom syllabi', 'Bias-reduction', 'Progress insights'],
  },
  {
    title: 'Workforce Intelligence',
    desc: 'Hiring, performance, and HR decisions powered by objective signals.',
    points: ['Skill assessment', 'Interview analysis', 'Workforce analytics'],
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen text-[color:var(--c-text)]">
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50/60 dark:from-slate-950 dark:to-slate-950">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-emerald-700 bg-clip-text text-transparent dark:from-white dark:to-blue-400">
            Solutions
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Modern AI systems designed to be secure, scalable, and measurable—built for production from day one.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-[color:var(--c-border)] bg-[color:var(--c-surface)] p-8 shadow-sm hover:shadow-md transition dark:border-slate-800 dark:bg-slate-950"
              >
                <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="text-slate-700 dark:text-slate-300 flex items-start">
                      <span className="text-emerald-600 dark:text-blue-500 mr-2">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50/50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">See our services in action</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Explore Cortavia Assist, Evaluate, Automate, and People—built to integrate with your stack.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/services">
              <Button className="text-lg px-8 py-4">Explore services</Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" className="text-lg px-8 py-4">
                Talk to us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;


