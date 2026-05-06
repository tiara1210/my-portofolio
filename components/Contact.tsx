'use client';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section relative min-h-screen flex items-center">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
        </div>
        <div className="card max-w-2xl mx-auto p-8">
          {status === 'success' ? (
            <div className="text-center py-8">
              <p className="text-green-400 text-lg mb-4">Message sent successfully!</p>
              <button
                onClick={() => setStatus('idle')}
                className="btn-outline"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-red transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-red transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-red transition-colors resize-none"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'error' && (
                <p className="text-red-400 text-center mt-4">Failed to send message. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}