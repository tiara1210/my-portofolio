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
    <section id="contact" className="section" style={{ backgroundColor: '#D9CFC7' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a1a1a' }}>Let&apos;s Work Together</h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#6b6b6b' }}>
            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s create something amazing.
          </p>
        </div>
        <div className="card max-w-lg mx-auto p-8">
          {status === 'success' ? (
            <div className="text-center py-8">
              <p className="text-lg font-medium mb-4" style={{ color: '#5D4E3C' }}>Message sent successfully!</p>
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
                <label className="block text-sm font-medium mb-2" style={{ color: '#1a1a1a' }}>Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-all"
                  style={{
                    backgroundColor: '#FAFAFA',
                    borderColor: 'rgba(0,0,0,0.1)',
                    color: '#1a1a1a'
                  }}
                  placeholder="Enter your name"
                  required
                  suppressHydrationWarning
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" style={{ color: '#1a1a1a' }}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-all"
                  style={{
                    backgroundColor: '#FAFAFA',
                    borderColor: 'rgba(0,0,0,0.1)',
                    color: '#1a1a1a'
                  }}
                  placeholder="Enter your email"
                  required
                  suppressHydrationWarning
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2" style={{ color: '#1a1a1a' }}>Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-all resize-none"
                  style={{
                    backgroundColor: '#FAFAFA',
                    borderColor: 'rgba(0,0,0,0.1)',
                    color: '#1a1a1a'
                  }}
                  placeholder="Enter your message"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full py-3"
                suppressHydrationWarning
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'error' && (
                <p className="text-center mt-4" style={{ color: '#c53030' }}>Failed to send message. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
