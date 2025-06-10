"use client";

import { useEffect, useState } from "react";

const SignupModal = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show modal immediately after load, only on first visit (per session)
    const hasSeen = localStorage.getItem("signupModalSeen");
    if (!hasSeen) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("signupModalSeen", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setOpen(false);
    // Here you could add API call for signup
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4">Sign up now and receive 15% off your first order!</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary text-white rounded py-2 font-semibold hover:bg-gold transition"
          >
            Claim My 15%
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="text-xs text-gray-500 mt-2 underline hover:text-gray-700"
          >
            No thank you
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
