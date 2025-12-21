import { Link } from 'react-router-dom';
import NeuralNetworkCanvas from '../components/NeuralNetworkCanvas';
import Button from '../components/Button';
import { useState } from 'react';

const Home = () => {
  const [heroLogoError, setHeroLogoError] = useState(false);

  const techIcons: { name: string; src: string }[] = [
    { name: 'LangChain', src: '/images/tile_icons/langchain.png' },
    { name: 'LangGraph', src: '/images/tile_icons/langgraph.png' },
    { name: 'GPT', src: '/images/tile_icons/gpt.png' },
    { name: 'Llama', src: '/images/tile_icons/llama.png' },
    { name: 'MCP', src: '/images/tile_icons/mcp.png' },
    { name: 'Gemini', src: '/images/tile_icons/gemini.png' },
    { name: 'Claude', src: '/images/tile_icons/claude.png' },
    { name: 'AWS', src: '/images/tile_icons/aws.png' },
    { name: 'Azure', src: '/images/tile_icons/azure.png' },
    { name: 'GCP', src: '/images/tile_icons/gcp.png' },
  ];

  return (
    <div className="min-h-screen text-[color:var(--c-text)]">
      {/* Hero Section */}
      <section className="hero-section relative py-36 overflow-hidden bg-gradient-to-b from-white via-white to-emerald-50/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
        <NeuralNetworkCanvas />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="hero-text animate-fade-in-up">
              <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-700 bg-clip-text text-transparent dark:from-white dark:via-slate-200 dark:to-slate-400">
                  CORTAVIA
                </span>
                <br />
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-700 bg-clip-text text-transparent dark:from-white dark:via-slate-200 dark:to-slate-400">
                  AI Solutions
                </span>
              </h1>
              <p className="text-xl text-emerald-700 dark:text-blue-400 font-semibold mb-6 inline-block px-4 py-2 bg-emerald-500/10 dark:bg-blue-500/10 rounded-full border border-emerald-500/20 dark:border-blue-500/20">
                THINK beyond AI
              </p>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
                Transform your business with intelligent AI automation, custom model development,
                and enterprise-grade solutions designed for the future.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/services">
                  <Button variant="primary">Our Services</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="secondary">Get Started</Button>
                </Link>
              </div>
            </div>
            <div className="hero-image flex justify-center items-center">
              {!heroLogoError ? (
                <img
                  src="/images/cortavia_logo.png"
                  alt="CORTAVIA AI Solutions"
                  className="max-w-2xl max-h-[600px] w-full h-auto object-contain animate-float"
                  onError={() => setHeroLogoError(true)}
                />
              ) : (
                <div className="text-9xl animate-float">🤖</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By / Logo Cloud */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm tracking-wide uppercase text-slate-500 dark:text-slate-400 mb-8">
            Trusted by teams building with AI
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {['Enterprise', 'Retail', 'Banking', 'Manufacturing', 'Education', 'Healthcare'].map((name) => (
              <div
                key={name}
                className="h-14 rounded-xl border-2 border-emerald-100 bg-white flex items-center justify-center text-slate-600 text-sm font-semibold transition-all duration-300 cursor-pointer hover:border-emerald-400 hover:bg-emerald-50/50 hover:text-emerald-700 hover:shadow-md hover:shadow-emerald-200/40 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:bg-slate-900 dark:hover:text-blue-300"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-28 bg-emerald-50/80 dark:bg-slate-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-slate-900 dark:text-white">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { iconClass: 'fa-solid fa-comments', title: 'Cortavia Assist', desc: 'AI Experience & Support' },
              { iconClass: 'fa-solid fa-chart-simple', title: 'Cortavia Evaluate', desc: 'AI Academic Evaluation' },
              { iconClass: 'fa-solid fa-cloud', title: 'Cortavia Automate', desc: 'Business Process Automation' },
              { iconClass: 'fa-solid fa-people-group', title: 'Cortavia People', desc: 'HR Intelligence Platform' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="feature-card bg-white border-2 border-emerald-100 rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-50/50 hover:shadow-xl hover:shadow-emerald-200/60 hover:-translate-y-2 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 dark:border-slate-800 dark:hover:border-blue-500 dark:hover:shadow-blue-500/20"
              >
                <div className="mb-4 flex justify-center">
                  <i className={`${feature.iconClass} text-5xl text-emerald-600 dark:text-blue-400`}></i>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-32 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
            Built with Advanced Technologies
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            We leverage the most advanced frameworks and models to build agentic systems that are robust, scalable, and intelligent.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techIcons.map((tech, idx) => (
              <div
                key={idx}
                className="tech-card bg-white border-2 border-emerald-100 rounded-xl p-6 text-center transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-50/50 hover:shadow-lg hover:-translate-y-2 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 dark:border-slate-800 dark:hover:border-blue-500"
              >
                <div className="w-16 h-16 bg-emerald-50 rounded-lg mx-auto mb-3 flex items-center justify-center dark:bg-slate-800">
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <span className="text-slate-900 dark:text-white font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-28 bg-emerald-50/60 dark:bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Link to="/why-choose-us" className="inline-block">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                Why Choose CORTAVIA
              </h2>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                iconClass: 'fa-solid fa-rocket',
                title: 'Cutting-Edge Technology',
                desc: 'We leverage the latest advances in AI, including large language models, transformer architectures, and autonomous agent systems.',
              },
              {
                iconClass: 'fa-solid fa-bullseye',
                title: 'Industry Expertise',
                desc: 'Deep domain knowledge across multiple industries ensures our solutions are not just technically sound, but also business-relevant.',
              },
              {
                iconClass: 'fa-solid fa-bolt-lightning',
                title: 'Rapid Deployment',
                desc: 'Our streamlined development process and pre-built components enable faster time-to-market without compromising on quality.',
              },
              {
                iconClass: 'fa-solid fa-key',
                title: 'Enterprise Security',
                desc: 'Bank-level encryption, SOC 2 compliance, and comprehensive security protocols protect your data and ensure regulatory compliance.',
              },
            ].map((highlight, idx) => (
              <div
                key={idx}
                className="highlight-card bg-white border-2 border-emerald-100 rounded-2xl p-8 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-50/50 hover:shadow-xl hover:-translate-y-2 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 dark:border-slate-800 dark:hover:border-blue-500"
              >
                <div className="mb-4 flex justify-center">
                  <i className={`${highlight.iconClass} text-5xl text-emerald-600 dark:text-blue-400`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{highlight.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{highlight.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/why-choose-us">
              <Button variant="secondary" className="text-lg px-8 py-4">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/40 to-white dark:from-slate-950 dark:via-slate-900/30 dark:to-slate-950">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-emerald-50/30 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-blue-500/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Let's build the future together with AI solutions that drive real results.
          </p>
          <Link to="/contact">
            <Button variant="primary" className="text-lg px-8 py-4">
              Let's Build Together
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
