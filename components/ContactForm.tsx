"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";

type ContactFormDict = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  submit: string;
  submitting: string;
  interests: string[];
  contactSuccessTitle: string;
  contactSuccessMessage: string;
};

type ContactFormProps = {
  dict: ContactFormDict;
};

export default function ContactForm({ dict }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) nextErrors.name = "Required";
    if (!formData.email.trim()) {
      nextErrors.email = "Required";
    } else if (!emailRegex.test(formData.email)) {
      nextErrors.email = "Invalid email";
    }
    if (!formData.interest.trim()) nextErrors.interest = "Required";
    if (!formData.message.trim()) nextErrors.message = "Required";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const nextErrors = { ...prev };
        delete nextErrors[name];
        return nextErrors;
      });
    }
  };

  const handleInterestChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }));

    if (errors.interest) {
      setErrors((prev) => {
        const nextErrors = { ...prev };
        delete nextErrors.interest;
        return nextErrors;
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center py-10 text-center">
        <div className="relative mb-6 h-24 w-24">
          <Image src="/images/success.png" alt="Success" fill className="object-contain" />
        </div>
        <h3 className="gradient-text mb-2 text-xl leading-tight md:text-2xl">
          {dict.contactSuccessTitle}
        </h3>
        <p className="mx-auto max-w-xs text-sm leading-relaxed text-black/60 md:max-w-md">
          {dict.contactSuccessMessage}
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div className="space-y-3">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={dict.name}
            className={`w-full rounded-full border px-4 py-2 text-[15px] font-medium text-black/70 placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-[#038174]/20 ${errors.name ? "border-red-500" : "border-black/20"}`}
          />
          {errors.name && <p className="ml-2 mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={dict.email}
            className={`w-full rounded-full border px-4 py-2 text-[15px] font-medium text-black/70 placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-[#038174]/20 ${errors.email ? "border-red-500" : "border-black/20"}`}
          />
          {errors.email && <p className="ml-2 mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={dict.phone}
            className="w-full rounded-full border border-black/20 px-4 py-2 text-[15px] font-medium text-black/70 placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-[#038174]/20"
          />
        </div>

        <div>
          <Dropdown options={dict.interests} placeholder={dict.interest} onChange={handleInterestChange} />
          {errors.interest && <p className="ml-2 mt-1 text-xs text-red-500">{errors.interest}</p>}
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={dict.message}
            rows={4}
            className={`w-full resize-none rounded-3xl border px-4 py-2 text-[15px] font-medium text-black/70 placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-[#038174]/20 ${errors.message ? "border-red-500" : "border-black/20"}`}
          />
          {errors.message && <p className="ml-2 mt-1 text-xs text-red-500">{errors.message}</p>}
        </div>
      </div>

      <Button className="mt-4 w-full py-2" disabled={isSubmitting}>
        {isSubmitting ? dict.submitting : dict.submit}
      </Button>
    </form>
  );
}