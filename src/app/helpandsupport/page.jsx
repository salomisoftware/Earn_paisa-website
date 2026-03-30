"use client";

import { useState } from "react";

export default function HelpSupport() {
  const [open, setOpen] = useState(null);
  const email = "support@sapadiyasoftware.com"; 

  const faqs = [
    {
      question: "How to earn coins?",
      answer:
        "You can earn coins by completing tasks, offers, and referring friends in the app.",
    },
    {
      question: "How does referral system work?",
      answer:
        "You earn bonus coins when your friend signs up and completes required actions.",
    },
    {
      question: "Why is my redemption pending?",
      answer:
        "Redemption may take time for approval. Suspicious activity can delay or reject requests.",
    },
    {
      question: "Can I use multiple accounts?",
      answer:
        "No, only one account per device is allowed. Multiple accounts may lead to ban.",
    },
    {
      question: "Why notifications are not coming?",
      answer:
        "Check if notification permission is enabled in your device settings.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-5 py-10 ">
      <h1 className="text-3xl font-bold mb-4">Help & Support</h1>

      <p className="mb-6 ">
        Find answers to common questions or contact us for support.
      </p>

      {/* FAQ Section */}
      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 shadow-sm"
          >
            <button
              className="w-full text-left font-semibold text-lg"
              onClick={() => setOpen(open === index ? null : index)}
            >
              {item.question}
            </button>

            {open === index && (
              <p className="mt-2 ">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="my-10 border-t"></div>

      {/* Contact Section */}
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Still need help?</h2>
        <p className="mb-4 text-gray-600">
          Contact our support team and we’ll get back to you within 24-48 hours.
        </p>

        <a
          href={`mailto:${email}?subject=Support Request&body=Hello Team,%0D%0A%0D%0AMy issue is:`}
          className="inline-block bg-black text-white px-6 py-3 rounded-xl shadow hover:opacity-90 transition"
        >
          📧 Contact Support
        </a>

        <p className="mt-3 text-sm text-gray-500">{email}</p>
      </div>
    </div>
  );
}