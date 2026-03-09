"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  message: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  industry?: string;
}

const initialFormData: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  industry: "",
  message: "",
};

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Full name is required";
  }

  if (!data.company.trim()) {
    errors.company = "Company name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.industry) {
    errors.industry = "Please select your industry";
  }

  return errors;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    // Honeypot check — bots fill hidden fields, real users don't
    if (honeypot) {
      // Simulate success but don't process the data
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitting(false);
      setSubmitted(true);
      return;
    }

    // Log form data for verification
    console.log("Contact form submission:", formData);

    // Simulate async submission (replace with actual API call later)
    await new Promise((resolve) => setTimeout(resolve, 800));

    setSubmitting(false);
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
          noValidate
        >
          {/* Honeypot field — hidden from real users */}
          <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className={`form-input ${errors.name ? "border-red-400" : ""}`}
                placeholder="John Smith"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="form-label">Company Name</label>
              <input
                type="text"
                name="company"
                className={`form-input ${errors.company ? "border-red-400" : ""}`}
                placeholder="Acme Corp"
                value={formData.company}
                onChange={handleChange}
              />
              {errors.company && (
                <p className="text-red-500 text-xs mt-1">{errors.company}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className={`form-input ${errors.email ? "border-red-400" : ""}`}
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="form-label">Industry</label>
            <select
              name="industry"
              className={`form-input ${errors.industry ? "border-red-400" : ""}`}
              value={formData.industry}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select your industry
              </option>
              <option value="industrial">Industrial</option>
              <option value="restaurant">Restaurant / Hospitality</option>
              <option value="professional">Professional</option>
              <option value="other">Other</option>
            </select>
            {errors.industry && (
              <p className="text-red-500 text-xs mt-1">{errors.industry}</p>
            )}
          </div>

          <div>
            <label className="form-label">Message</label>
            <textarea
              name="message"
              className="form-input min-h-[120px] resize-y"
              placeholder="Tell us about your needs..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary w-full justify-center !py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <>
                Sending...
                <Loader2 size={16} className="animate-spin" />
              </>
            ) : (
              <>
                Send Message
                <Send size={16} />
              </>
            )}
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
