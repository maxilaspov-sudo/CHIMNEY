"use client";
import { useState, useCallback } from "react";

const LEAD_SERVICES = [
  "Chimney Cleaning",
  "Chimney Sweep",
  "Chimney Inspection",
  "Chimney Repair",
  "Fireplace Cleaning",
  "Fireplace Installation",
  "Dryer Vent Cleaning",
  "Chimney Cap Installation",
  "Chimney Liner Repair",
  "Chimney Crown Services",
  "Chimney Flashing Services",
  "Gas Fireplace Repair",
  "Electric Fireplace Installation",
  "Fireplace Glass Installation",
  "Chimney Odor Removal",
  "Chimney Masonry Services",
  "Commercial Chimney Services",
  "Residential Chimney Services",
];

// ─── BACKEND CONNECTION POINT ────────────────────────────────────────────────
// Replace `submitLead` below with your real submission logic.
// Options:
//   A) Email via Resend / SendGrid / Mailgun — POST to /api/leads with formData
//   B) CRM (HubSpot, Pipedrive) — use their REST API / SDK
//   C) Google Sheets — POST to a Google Apps Script webhook URL
//   D) Any custom API endpoint — replace the mock delay below
//
// Example for a fetch-based backend:
//   const res = await fetch("/api/leads", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   if (!res.ok) throw new Error("Submission failed");
// ─────────────────────────────────────────────────────────────────────────────
async function submitLead(data: LeadFormData): Promise<void> {
  // TODO: replace this mock with your real API call (see comments above)
  console.log("[LeadForm] Submission received:", data);
  await new Promise((resolve) => setTimeout(resolve, 800)); // remove when wiring real API
}

interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  preferredTime: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  phone?: string;
  email?: string;
}

interface LeadFormProps {
  heading?: string;
  subheading?: string;
  dark?: boolean;
}

function validatePhone(phone: string): boolean {
  // Accepts US formats: (555) 555-5555, 555-555-5555, 5555555555, +15555555555
  return /^(\+?1[\s.-]?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/.test(phone.trim());
}

function validateName(name: string): boolean {
  return name.trim().length >= 2;
}

export default function LeadForm({
  heading = "Get Your Free Estimate",
  subheading = "We respond within 2 hours during business hours. Same-week appointments available.",
  dark = false,
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof LeadFormData, boolean>>>({});

  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: "",
    preferredTime: "",
    message: "",
  });

  const validate = useCallback((data: LeadFormData): FieldErrors => {
    const e: FieldErrors = {};
    if (!validateName(data.name)) e.name = "Please enter your full name (at least 2 characters).";
    if (!data.phone.trim()) e.phone = "Phone number is required so we can call you back.";
    else if (!validatePhone(data.phone)) e.phone = "Please enter a valid US phone number.";
    if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      e.email = "Please enter a valid email address.";
    }
    return e;
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    // Re-validate only touched fields on change
    if (touched[name as keyof LeadFormData]) {
      const newErrors = validate(updated);
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FieldErrors] }));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(formData);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FieldErrors] }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Mark all validatable fields as touched
    setTouched({ name: true, phone: true, email: true });
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    setSubmitError(null);
    try {
      await submitLead(formData);
      setSubmitted(true);
    } catch {
      setSubmitError(
        `Something went wrong sending your request. Please email us at info@chimneycleaningca.com or try again.`
      );
    } finally {
      setLoading(false);
    }
  }

  const labelClass = dark
    ? "block text-sm font-medium text-gray-300 mb-1"
    : "block text-sm font-medium text-gray-700 mb-1";
  const baseInput =
    "w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white transition-colors";
  const inputClass = (field: keyof FieldErrors) =>
    `${baseInput} ${
      errors[field] && touched[field]
        ? "border-red-400 bg-red-50"
        : "border-gray-200"
    }`;

  if (submitted) {
    return (
      <div
        id="estimate-form"
        className={`rounded-2xl p-6 md:p-8 ${
          dark ? "bg-[#1E3A5F]" : "bg-white shadow-lg border border-gray-100"
        }`}
      >
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className={`text-xl font-bold mb-2 ${dark ? "text-white" : "text-gray-900"}`}>
            Request Received
          </h3>
          <p className={`text-sm ${dark ? "text-gray-300" : "text-gray-600"}`}>
            We&apos;ll be in touch within 2 business hours to confirm your appointment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      id="estimate-form"
      className={`rounded-2xl p-6 md:p-8 ${
        dark ? "bg-[#1E3A5F]" : "bg-white shadow-lg border border-gray-100"
      }`}
    >
      <h2 className={`text-2xl font-bold mb-1 ${dark ? "text-white" : "text-[#1E3A5F]"}`}>
        {heading}
      </h2>
      <p className={`text-sm mb-6 ${dark ? "text-gray-300" : "text-gray-500"}`}>{subheading}</p>

      <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="lf-name" className={labelClass}>
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lf-name"
            type="text"
            name="name"
            autoComplete="name"
            required
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="John Smith"
            aria-describedby={errors.name && touched.name ? "lf-name-error" : undefined}
            className={inputClass("name")}
          />
          {errors.name && touched.name && (
            <p id="lf-name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="lf-phone" className={labelClass}>
            Your Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="lf-phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="(310) 000-0000"
            aria-describedby={errors.phone && touched.phone ? "lf-phone-error" : undefined}
            className={inputClass("phone")}
          />
          {errors.phone && touched.phone && (
            <p id="lf-phone-error" className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="lf-email" className={labelClass}>
            Email Address
          </label>
          <input
            id="lf-email"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="you@example.com"
            aria-describedby={errors.email && touched.email ? "lf-email-error" : undefined}
            className={errors.email && touched.email ? `${baseInput} border-red-400 bg-red-50` : `${baseInput} border-gray-200`}
          />
          {errors.email && touched.email && (
            <p id="lf-email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* City */}
        <div>
          <label htmlFor="lf-city" className={labelClass}>City</label>
          <input
            id="lf-city"
            type="text"
            name="city"
            autoComplete="address-level2"
            value={formData.city}
            onChange={handleChange}
            placeholder="Los Angeles"
            className={`${baseInput} border-gray-200`}
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="lf-service" className={labelClass}>Service Needed</label>
          <select
            id="lf-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`${baseInput} border-gray-200`}
          >
            <option value="">Select a service…</option>
            {LEAD_SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
            <option value="Not sure">Not sure — need advice</option>
          </select>
        </div>

        {/* Preferred time */}
        <div>
          <label htmlFor="lf-time" className={labelClass}>Preferred Time</label>
          <select
            id="lf-time"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className={`${baseInput} border-gray-200`}
          >
            <option value="">Select a time…</option>
            <option value="As soon as possible">As soon as possible</option>
            <option value="Today">Today</option>
            <option value="Tomorrow">Tomorrow</option>
            <option value="This week">This week</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
            <option value="Weekend">Weekend</option>
            <option value="Flexible / Any time works">Flexible / Any time works</option>
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="lf-message" className={labelClass}>Message (optional)</label>
          <textarea
            id="lf-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Describe your chimney or any concerns…"
            className={`${baseInput} border-gray-200 resize-none`}
          />
        </div>

        {/* Submit error */}
        {submitError && (
          <div className="sm:col-span-2 bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
            {submitError}
          </div>
        )}

        {/* Submit */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full justify-center text-base py-3 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <SpinnerIcon /> Sending…
              </>
            ) : (
              <>
                Request Free Estimate
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </>
            )}
          </button>
          <p className={`text-xs text-center mt-2 ${dark ? "text-gray-400" : "text-gray-400"}`}>
            No spam. No pressure. We typically respond within 2 hours.
          </p>
        </div>
      </form>
    </div>
  );
}

function SpinnerIcon() {
  return (
    <svg
      className="animate-spin"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
      <path d="M12 2a10 10 0 0 1 10 10" />
    </svg>
  );
}
