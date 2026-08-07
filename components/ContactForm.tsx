"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const organization = String(form.get("organization") || "").trim();
    const topic = String(form.get("topic") || "General inquiry").trim();
    const message = String(form.get("message") || "").trim();

    const subject = `MVCC website inquiry — ${topic}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organization: ${organization || "Not provided"}`,
      `Topic: ${topic}`,
      "",
      message,
    ].join("\n");

    setStatus("Opening your email app…");
    window.location.href = `mailto:mvcc@mcmaster.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <div className="field-row">
        <label>
          <span>Organization <em>Optional</em></span>
          <input name="organization" type="text" autoComplete="organization" />
        </label>
        <label>
          <span>I&apos;m reaching out about</span>
          <select name="topic" defaultValue="Founder support">
            <option>Founder support</option>
            <option>Partnerships</option>
            <option>Joining MVCC</option>
            <option>Events and programming</option>
            <option>General inquiry</option>
          </select>
        </label>
      </div>
      <label>
        <span>How can we help?</span>
        <textarea name="message" rows={5} required />
      </label>
      <div className="form-submit-row">
        <button className="button button-gold" type="submit">
          Compose email <span aria-hidden="true">↗</span>
        </button>
        <p aria-live="polite">
          {status || "This opens a pre-filled email in your preferred email app."}
        </p>
      </div>
    </form>
  );
}
