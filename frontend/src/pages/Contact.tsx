import { useState, FormEvent } from 'react';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to backend
    setStatus({
      type: 'success',
      message: `Thank you for your message! We will get back to you at ${formData.email} within 24 hours.`,
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen text-[color:var(--c-text)]">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50/60 dark:from-slate-950 dark:to-slate-950">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-emerald-700 bg-clip-text text-transparent dark:from-white dark:to-blue-400">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">Get in touch and let's discuss how we can help your business</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-emerald-700 bg-clip-text text-transparent dark:from-white dark:to-blue-400">
                Let's Build Together
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                Ready to transform your business with AI? We're here to help you every step of the way.
              </p>

              <div className="space-y-6">
                <div className="contact-item bg-[color:var(--c-surface)] border border-[color:var(--c-border)] rounded-xl p-6 transition-all duration-300 hover:border-emerald-500 hover:shadow-lg dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 dark:border-slate-800 dark:hover:border-blue-500">
                  <div className="flex gap-4">
                    <div className="text-3xl">📧</div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Email</h4>
                      <a href="mailto:contact@cortavia.in" className="text-emerald-700 hover:text-emerald-600 dark:text-blue-400 dark:hover:text-blue-300">
                        contact@cortavia.in
                      </a>
                      <p className="text-slate-500 text-sm mt-2">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="contact-item bg-[color:var(--c-surface)] border border-[color:var(--c-border)] rounded-xl p-6 transition-all duration-300 hover:border-emerald-500 hover:shadow-lg dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 dark:border-slate-800 dark:hover:border-blue-500">
                  <div className="flex gap-4">
                    <div className="text-3xl">📍</div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Bengaluru Office</h4>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        3rd Cross, Virat Nagar,<br />
                        Bommanahalli<br />
                        Bengaluru, Karnataka 560068<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-item bg-[color:var(--c-surface)] border border-[color:var(--c-border)] rounded-xl p-6 transition-all duration-300 hover:border-emerald-500 hover:shadow-lg dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 dark:border-slate-800 dark:hover:border-blue-500">
                  <div className="flex gap-4">
                    <div className="text-3xl">📍</div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Sanchore Office</h4>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        Char Rasta Sanchore<br />
                        Jalore, Rajasthan 343041<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper bg-[color:var(--c-surface)] border-2 border-emerald-500/20 rounded-3xl p-8 shadow-2xl shadow-emerald-200/40 backdrop-blur-xl dark:bg-gradient-to-br dark:from-slate-900/90 dark:to-slate-950/95 dark:border-blue-500/30 dark:shadow-blue-500/15">
              {status.type && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-emerald-50 border border-emerald-200 text-emerald-900 dark:bg-emerald-900/30 dark:border-emerald-500/30 dark:text-emerald-200'
                      : 'bg-red-50 border border-red-200 text-red-900 dark:bg-red-900/30 dark:border-red-500/30 dark:text-red-200'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-900 dark:text-white">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[color:var(--c-surface)] border border-[color:var(--c-border)] rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 dark:bg-slate-950/40 dark:border-slate-800 dark:focus:border-blue-500 dark:focus:ring-blue-500/20 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-900 dark:text-white">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[color:var(--c-surface)] border border-[color:var(--c-border)] rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 dark:bg-slate-950/40 dark:border-slate-800 dark:focus:border-blue-500 dark:focus:ring-blue-500/20 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-slate-900 dark:text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[color:var(--c-surface)] border border-[color:var(--c-border)] rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 dark:bg-slate-950/40 dark:border-slate-800 dark:focus:border-blue-500 dark:focus:ring-blue-500/20 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-900 dark:text-white">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[color:var(--c-surface)] border border-[color:var(--c-border)] rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 dark:bg-slate-950/40 dark:border-slate-800 dark:focus:border-blue-500 dark:focus:ring-blue-500/20 dark:text-white resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full text-lg py-4">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

