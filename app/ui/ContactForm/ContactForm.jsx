'use client';

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import GradientButton from '@/app/ui/common/GradientButton/GradientButton.jsx'

export default function ContactForm() {
  const [formValues, setFormValues] = useState({
    firstName: "", lastName: "", phoneNumber: "", email: "", message: ""
  });

  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formValues.firstName && formValues.lastName && formValues.email &&
      formValues.email.match(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/) &&
      formValues.phoneNumber && formValues.message
    ) {
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formValues),
        });
        alert(response.ok ? "Message sent! We'll be in touch soon." : 'Failed to send message. Please try again.');
      } catch {
        alert('Something went wrong. Please try again.');
      }
      setFormValues({ firstName: "", lastName: "", phoneNumber: "", email: "", message: "" });
    } else {
      alert('Please fill out all required fields.');
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
                <a href="mailto:kaileb@hammontreefullstacksolutions.com" className="text-ink-muted hover:text-ink">
                  kaileb@hammontreefullstacksolutions.com
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

        <form onSubmit={handleSubmit} className="card-surface p-8 sm:p-10">
          <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            {[
              { id: 'firstName', label: 'First name' },
              { id: 'lastName', label: 'Last name' },
            ].map(({ id, label }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium text-ink">{label} <span className="text-accent">*</span></label>
                <input id={id} name={id} type="text" className="input-field mt-2" value={formValues[id]} onChange={handleChange} />
              </div>
            ))}
            {[
              { id: 'email', label: 'Email', type: 'email' },
              { id: 'phoneNumber', label: 'Phone number', type: 'tel' },
            ].map(({ id, label, type }) => (
              <div key={id} className="sm:col-span-2">
                <label htmlFor={id} className="block text-sm font-medium text-ink">{label} <span className="text-accent">*</span></label>
                <input id={id} name={id} type={type} className="input-field mt-2" value={formValues[id]} onChange={handleChange} />
              </div>
            ))}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-ink">Message <span className="text-accent">*</span></label>
              <textarea id="message" name="message" rows={4} className="input-field mt-2" value={formValues.message} onChange={handleChange} />
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <GradientButton type="submit">Send Message</GradientButton>
          </div>
        </form>
      </div>
    </section>
  );
}
