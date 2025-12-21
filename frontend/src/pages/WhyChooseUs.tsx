import { Link } from 'react-router-dom';
import Button from '../components/Button';

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-emerald-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-700 dark:bg-blue-500/10 dark:text-blue-300 border border-emerald-200 dark:border-blue-500/20">
              Why Choose Us
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-700 bg-clip-text text-transparent dark:from-white dark:via-slate-200 dark:to-blue-300">
            Why Choose CORTAVIA
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Your trusted partner for enterprise AI solutions that drive real business value.
          </p>
        </div>
      </section>

      {/* Main Highlights - Same as Home page */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
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
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-emerald-50/60 dark:bg-slate-900/30 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">
            More Reasons to Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                iconClass: 'fa-solid fa-shield-halved',
                title: 'Secure & Scalable',
                desc: 'Enterprise-grade security with infrastructure that scales with your business. Your data is protected with bank-level encryption and compliance standards.',
              },
              {
                iconClass: 'fa-solid fa-headset',
                title: 'End-to-End Support',
                desc: 'From initial consultation to deployment and beyond, we provide comprehensive support throughout your AI journey.',
              },
              {
                iconClass: 'fa-solid fa-gear',
                title: 'Custom Solutions',
                desc: 'Every business is unique. We create tailored AI solutions that address your specific challenges and goals.',
              },
              {
                iconClass: 'fa-solid fa-lightbulb',
                title: 'Domain Expertise',
                desc: 'Deep understanding of various industries allows us to deliver AI solutions that truly understand your business context.',
              },
              {
                iconClass: 'fa-solid fa-handshake',
                title: 'Partnership Approach',
                desc: "We're not just vendors—we're partners committed to your success. We work closely with you to achieve your vision.",
              },
              {
                iconClass: 'fa-solid fa-chart-line',
                title: 'Proven Results',
                desc: 'Track record of delivering measurable impact through successful projects in automation, evaluation, and intelligence.',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-emerald-100 rounded-2xl p-8 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-50/50 hover:shadow-xl hover:-translate-y-2 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 dark:border-slate-800 dark:hover:border-blue-500"
              >
                <div className="mb-4 flex justify-center">
                  <i className={`${feature.iconClass} text-5xl text-emerald-600 dark:text-blue-400`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">Our Commitment</h2>
          <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              At CORTAVIA, we believe in thinking beyond traditional AI. We don't just implement
              technology—we transform how your business operates. Our solutions are designed to be
              future-ready, adaptable, and aligned with your long-term strategic goals. We understand
              that every business is unique, and that's why we take a consultative approach to every
              project.
            </p>
            <p>
              We combine cutting-edge AI technology with deep business understanding to deliver
              solutions that drive real value. Whether you're looking to automate processes, enhance
              customer experience, or gain competitive insights, we're here to make it happen. Our
              team of AI experts, data scientists, and business consultants work together to ensure
              your success.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-emerald-50/60 dark:bg-slate-900/30 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">Our Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                iconClass: 'fa-solid fa-robot',
                title: 'Advanced AI Models',
                desc: 'We leverage state-of-the-art large language models, transformer architectures, and custom neural networks to deliver cutting-edge AI capabilities.',
              },
              {
                iconClass: 'fa-solid fa-cloud',
                title: 'Cloud Infrastructure',
                desc: 'Scalable, secure cloud deployments on AWS, Azure, and GCP ensure your solutions are always available and can grow with your needs.',
              },
              {
                iconClass: 'fa-solid fa-lock',
                title: 'Enterprise Security',
                desc: 'Bank-level encryption, SOC 2 compliance, and comprehensive security protocols protect your data and ensure regulatory compliance.',
              },
              {
                iconClass: 'fa-solid fa-plug',
                title: 'Seamless Integration',
                desc: 'RESTful APIs, webhooks, and pre-built connectors integrate seamlessly with your existing systems and workflows.',
              },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-emerald-100 rounded-2xl p-8 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-50/50 hover:shadow-xl dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 dark:border-slate-800 dark:hover:border-blue-500"
              >
                <div className="mb-4 flex justify-center">
                  <i className={`${tech.iconClass} text-5xl text-emerald-600 dark:text-blue-400`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{tech.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Let's Build Together</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Ready to transform your business with AI? Let's start a conversation.
          </p>
          <Link to="/contact">
            <Button variant="primary" className="text-lg px-8 py-4">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
