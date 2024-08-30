"use client";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);
  const [isCooldown, setIsCooldown] = useState(false);

  // Check cooldown on component mount
  useEffect(() => {
    const lastSentTime = localStorage.getItem("lastSentTime");
    if (lastSentTime) {
      const cooldownPeriod = 10 * 60 * 1000; // 10 minutes in milliseconds
      const timeSinceLastSent = Date.now() - parseInt(lastSentTime, 10);

      if (timeSinceLastSent < cooldownPeriod) {
        setIsCooldown(true);
        setTimeout(() => {
          setIsCooldown(false);
        }, cooldownPeriod - timeSinceLastSent);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isCooldown) {
      setStatus("Please wait 10 minutes before sending another message.");
      return;
    }

    // Configurations for EmailJS
    const userID = process.env.NEXT_PUBLIC_userID;
    const serviceID = process.env.NEXT_PUBLIC_serviceID;
    const templateID = process.env.NEXT_PUBLIC_templateID;

    // Sending the email
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((result) => {
        setStatus("Email sent successfully!");

        // Clear the form fields
        setFormData({ name: "", email: "", message: "" });

        // Set cooldown and save the current time to localStorage
        setIsCooldown(true);
        const currentTime = Date.now();
        localStorage.setItem("lastSentTime", currentTime.toString());

        // Reset cooldown after 10 minutes
        setTimeout(() => {
          setIsCooldown(false);
        }, 10 * 60 * 1000); // 10 minutes in milliseconds
      })
      .catch((error) => {
        setStatus("Failed to send email. Please try again.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Your Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your name"
              className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="email"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Your Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
        </div>
        <div className="w-full px-4">
          <div className="mb-8">
            <label
              htmlFor="message"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Enter your Message"
              className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            ></textarea>
          </div>
        </div>
        <div className="w-full px-4">
          <button
            type="submit"
            className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
            disabled={isCooldown}
            title={isCooldown ? "Try send message after 10 minutes": ""}
          >
            Send Message
          </button>
        </div>
      </div>
      {status && <p>{status}</p>}
    </form>
  );
};

export default ContactForm;
