'use client';

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import GradientButton from '@/app/ui/common/GradientButton/GradientButton.jsx'
import { siteConfig } from '@/app/lib/site.js'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMPTY_FORM = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  message: '',
};

export default function ContactForm() {
  const [formValues, setFormValues] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status) setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (
      !formValues.firstName.trim() ||
      !formValues.lastName.trim() ||
      !formValues.email.trim() ||
      !EMAIL_REGEX.test(formValues.email.trim()) ||
      !formValues.phoneNumber.trim() ||
      !formValues.message.trim()
    ) {
      setStatus({ type: 'error', message: 'Please fill out all required fields with a valid email.' });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formValues.firstName.trim(),
          lastName: formValues.lastName.trim(),
          phoneNumber: formValues.phoneNumber.trim(),
          email: formValues.email.trim(),
          message: formValues.message.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
        return;
      }

      setFormValues(EMPTY_FORM);
      setStatus({ type: 'success', message: "Message sent! We'll be in touch within 24–72 business hours." });
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="border-t border-canvas-border py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="lg:py-8">
          <p className="eyebrow mb-3">Get in touch</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">General Inquiries</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Have a question or want to discuss a project? We&apos;ll get back to you within 24–72 business hours.
          </p>
          <dl className="mt-10 space-y-5">
            <div className="flex gap-x-4">
              <dt><EnvelopeIcon aria-hidden="true" className="h-6 w-6 text-secondary" /></dt>
              <dd>
                <a href={`mailto:${siteConfig.email}`} className="text-ink-muted hover:text-ink">
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt><PhoneIcon aria-hidden="true" className="h-6 w-6 text-secondary" /></dt>
              <dd>
                <a href="tel:+14072023227" className="text-ink-muted hover:text-ink">Text/Call (407) 202-3227</a>
              </dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit} noValidate className="card-surface p-8 sm:p-10">
          <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            {[
              { id: 'firstName', label: 'First name' },
              { id: 'lastName', label: 'Last name' },
            ].map(({ id, label }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium text-ink">
                  {label} <span className="text-accent">*</span>
                </label>
                <input
                  id={id}
                  name={id}
                  type="text"
                  required
                  autoComplete={id === 'firstName' ? 'given-name' : 'family-name'}
                  className="input-field mt-2"
                  value={formValues[id]}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
            ))}
            {[
              { id: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
              { id: 'phoneNumber', label: 'Phone number', type: 'tel', autoComplete: 'tel' },
            ].map(({ id, label, type, autoComplete }) => (
              <div key={id} className="sm:col-span-2">
                <label htmlFor={id} className="block text-sm font-medium text-ink">
                  {label} <span className="text-accent">*</span>
                </label>
                <input
                  id={id}
                  name={id}
                  type={type}
                  required
                  autoComplete={autoComplete}
                  className="input-field mt-2"
                  value={formValues[id]}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
            ))}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-ink">
                Message <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="input-field mt-2"
                value={formValues.message}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
          </div>

          {status && (
            <p
              role="status"
              aria-live="polite"
              className={`mt-6 text-sm ${status.type === 'success' ? 'text-secondary' : 'text-accent'}`}
            >
              {status.message}
            </p>
          )}

          <div className="mt-8 flex justify-end">
            <GradientButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </GradientButton>
          </div>
        </form>
      </div>
    </section>
  );
}
