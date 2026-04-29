"use client";

import { useMemo, useState } from "react";

import { contactDetails, siteCopy, type Locale } from "@/lib/lankwitzer-data";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm({ locale = "sk" }: { locale?: Locale }) {
  const [form, setForm] = useState<FormState>(initialState);
  const copy = siteCopy[locale];

  const mailtoHref = useMemo(() => {
    const subject = locale === "sk" ? "Dopyt z webu Lankwitzer" : "Lankwitzer website enquiry";
    const body = [
      `${copy.formName}: ${form.name}`,
      `${copy.formCompany}: ${form.company}`,
      `${copy.formEmail}: ${form.email}`,
      `${copy.formPhone}: ${form.phone}`,
      "",
      `${copy.formMessage}:`,
      form.message,
    ].join("\n");

    return `mailto:${contactDetails.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [copy, form, locale]);

  function updateField(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div className="content-panel form-panel">
      <div className="section-heading compact">
        <span>{copy.contactTitle}</span>
        <h2>{copy.formTitle}</h2>
        <p>{copy.formText}</p>
      </div>

      <div className="form-grid">
        <label className="calc-field">
          <span>{copy.formName}</span>
          <input value={form.name} onChange={(event) => updateField("name", event.target.value)} />
        </label>
        <label className="calc-field">
          <span>{copy.formCompany}</span>
          <input value={form.company} onChange={(event) => updateField("company", event.target.value)} />
        </label>
        <label className="calc-field">
          <span>{copy.formEmail}</span>
          <input type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} />
        </label>
        <label className="calc-field">
          <span>{copy.formPhone}</span>
          <input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} />
        </label>
        <label className="calc-field form-message-field">
          <span>{copy.formMessage}</span>
          <textarea value={form.message} onChange={(event) => updateField("message", event.target.value)} rows={6} />
        </label>
      </div>

      <a href={mailtoHref} className="button button-primary">
        {copy.formSubmit}
      </a>
    </div>
  );
}
