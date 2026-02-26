"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card">
      <h3 className="font-display text-2xl text-navy mb-2">Get a Free Quote</h3>
      <p className="text-slate text-sm mb-8">
        Fill out the form and a Bright Way specialist will be in touch promptly.
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="space-y-5 form-state"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="John Smith"
                required
              />
            </div>
            <div>
              <label className="form-label">Company Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Acme Corp"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="john@company.com"
                required
              />
            </div>
            <div>
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-input"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label className="form-label">Industry</label>
            <select className="form-input" defaultValue="">
              <option value="" disabled>
                Select your industry
              </option>
              <option value="industrial">Industrial</option>
              <option value="restaurant">Restaurant / Hospitality</option>
              <option value="professional">Professional</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="form-label">Message</label>
            <textarea
              className="form-input min-h-[120px] resize-y"
              placeholder="Tell us about your needs..."
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full justify-center !py-4 text-base"
          >
            Send Message
            <Send size={16} />
          </button>
        </form>
      ) : (
        <div className="text-center py-16 form-state-enter">
          <div className="w-16 h-16 bg-cyan/10 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={32} className="text-cyan" />
          </div>
          <h4 className="font-display text-2xl text-navy mb-3">
            Thank You!
          </h4>
          <p className="text-slate text-[0.9375rem] max-w-sm mx-auto">
            We&apos;ll be in touch within 24 hours. Need faster help? Call us at{" "}
            <a href="tel:7048271868" className="text-cyan font-medium">
              704-827-1868
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
}
