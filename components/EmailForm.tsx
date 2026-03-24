'use client';

import { useState } from 'react';

export default function EmailForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [template, setTemplate] = useState('welcome');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: string; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, template }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: 'success', text: data.message });
        setName('');
        setEmail('');
      } else {
        setMessage({ type: 'error', text: data.message });
      }

    } catch {
      setMessage({ type: 'error', text: 'Something went wrong.' });
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
      <h1 className="text-2xl font-bold text-center mb-2">Intatroid Email Sender</h1>
      <div className="h-1 w-16 bg-pink-600 mx-auto mb-6 rounded-full"></div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Recipient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full h-12 px-4 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <input
          type="email"
          placeholder="Recipient Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full h-12 px-4 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <select
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          className="w-full h-12 px-4 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          <option value="welcome">Welcome Email</option>
          <option value="download">Download Email</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="w-full h-12 rounded-xl bg-pink-600 text-white font-semibold hover:bg-pink-700 transition disabled:opacity-60"
        >
          {loading ? 'Sending...' : 'Send Email'}
        </button>
      </form>

      {message && (
        <div
          className={`mt-4 text-center font-medium ${
            message.type === 'success' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}