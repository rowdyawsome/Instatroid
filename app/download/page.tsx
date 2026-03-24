'use client';

import { useState } from 'react';

export default function DownloadPage() {
  const [state, setState] = useState<'idle' | 'loading' | 'error'>('idle');
  const [attempt, setAttempt] = useState(0);
  const [statusText, setStatusText] = useState('Verifying...');

  const messages = [
    'Verifying...',
    'Checking your browser...',
    'Analyzing request...',
    'Almost there...',
    'Contacting reCAPTCHA servers...',
    'Running additional checks...',
    'Please wait...',
  ];

  const handleCheck = () => {
    if (state === 'loading') return;
    setState('loading');
    setAttempt((a) => a + 1);

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setStatusText(messages[i % messages.length]);
    }, 900);

    // Always fail after 6–8 seconds
    const delay = 6000 + Math.random() * 2000;
    setTimeout(() => {
      clearInterval(interval);
      setState('error');
    }, delay);
  };

  const handleRetry = () => {
    setState('idle');
    setStatusText('Verifying...');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FFF0F6]">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-xl p-8 mx-4">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="https://www.drupal.org/files/styles/grid-3-2x/public/project-images/unnamed_1.png?itok=C8Nl5DmI"
            alt="Instatroid"
            className="w-16 h-16 rounded-2xl object-cover"
          />
        </div>

        <h1 className="text-xl font-bold text-center text-gray-800 mb-1">
          One quick check
        </h1>
        <p className="text-sm text-gray-400 text-center mb-6">
          Verify you&apos;re human before downloading.
        </p>

        {/* reCAPTCHA Box */}
        <div
          onClick={state === 'idle' ? handleCheck : undefined}
          className={`flex items-center gap-3 border rounded-md p-4 mb-2 bg-gray-50 transition-colors select-none ${
            state === 'idle'
              ? 'cursor-pointer hover:border-pink-400 border-gray-200'
              : state === 'error'
              ? 'border-red-300 cursor-default'
              : 'border-gray-200 cursor-default'
          }`}
        >
          {/* Checkbox / spinner / error icon */}
          <div className="w-6 h-6 rounded flex-shrink-0 flex items-center justify-center border-2 border-gray-300 bg-white">
            {state === 'loading' && (
              <span className="w-3.5 h-3.5 border-2 border-pink-500 border-t-transparent rounded-full animate-spin block" />
            )}
            {state === 'error' && (
              <span className="text-red-500 text-sm font-bold leading-none">✕</span>
            )}
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-700">I&apos;m not a robot</span>
            {state === 'loading' && (
              <span className="text-xs text-gray-400 mt-0.5">{statusText}</span>
            )}
          </div>

          {/* reCAPTCHA branding */}
          <div className="ml-auto flex flex-col items-center gap-0.5">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="32" fill="#4A90D9"/>
              <path d="M32 10 L54 54 H10 Z" fill="white" opacity="0.9"/>
            </svg>
            <span className="text-[9px] text-gray-400 leading-tight">reCAPTCHA</span>
            <span className="text-[8px] text-gray-300 leading-tight">Privacy · Terms</span>
          </div>
        </div>

        {/* Error message + retry */}
        {state === 'error' && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-xs text-red-600 font-medium mb-1">
              Verification failed. Please try again.
            </p>
            <p className="text-xs text-red-400">
              {attempt >= 3
                ? 'Too many failed attempts. Try again later.'
                : 'Your connection may be blocking verification.'}
            </p>
            {attempt < 3 && (
              <button
                onClick={handleRetry}
                className="mt-2 text-xs text-pink-600 font-semibold underline"
              >
                Try again
              </button>
            )}
          </div>
        )}

        {/* Download Button — always disabled */}
        <button
          disabled
          className="w-full h-12 rounded-xl font-semibold text-white
            bg-gradient-to-r from-orange-400 via-pink-500 to-fuchsia-600
            opacity-40 cursor-not-allowed"
        >
          ⬇️ Download Instatroid
        </button>

        <p className="text-center text-xs text-gray-300 mt-5">
          © {new Date().getFullYear()} Instatroid · Secure Verification
        </p>
      </div>
    </main>
  );
}