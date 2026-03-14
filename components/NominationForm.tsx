"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";

type NominationFormDict = {
  yourDetails: string;
  fullName: string;
  organization: string;
  email: string;
  reason: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successMessage: string;
};


type NominationFormProps = {
  dict: NominationFormDict;
};

export default function NominationForm({ dict }: NominationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    reason: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) nextErrors.name = "Required";
    if (!formData.org.trim()) nextErrors.org = "Required";
    if (!formData.email.trim()) {
      nextErrors.email = "Required";
    } else if (!emailRegex.test(formData.email)) {
      nextErrors.email = "Invalid email";
    }
    if (!formData.reason.trim()) nextErrors.reason = "Required";


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

  if (isSubmitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center py-10 text-center">
        <div className="relative mb-6 h-24 w-24">
          <Image src="/images/success.png" alt="Success" fill className="object-contain" />
        </div>
        <h3 className="gradient-text text-xl leading-tight md:text-2xl">
          {dict.successTitle}
        </h3>
        <h3 className="gradient-text mb-6 text-xl leading-tight font-extrabold md:text-2xl">
          {formData.name}
        </h3>
        <p className="mx-auto max-w-xs text-sm leading-relaxed text-black/60 md:max-w-md">
          {dict.successMessage}
        </p>

      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div>
        <h4 className="mb-4 text-center text-sm font-bold tracking-widest text-[#006A8E]">
          {dict.yourDetails}
        </h4>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={dict.fullName}
              className={`w-full rounded-full border bg-[#E6EFEA] px-5 py-3 text-sm text-black/70 placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-[#006A8E]/20 ${errors.name ? "border-red-500" : "border-black/20"}`}
            />
            {errors.name && <p className="ml-2 mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>
          <div>
            <input
              type="text"
              name="org"
              value={formData.org}
              onChange={handleChange}
              placeholder={dict.organization}
              className={`w-full rounded-full border bg-[#E6EFEA] px-5 py-3 text-sm text-black/70 placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-[#006A8E]/20 ${errors.org ? "border-red-500" : "border-black/20"}`}
            />
            {errors.org && <p className="ml-2 mt-1 text-xs text-red-500">{errors.org}</p>}
          </div>
        </div>

        <div className="mt-3">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={dict.email}
            className={`w-full rounded-full border bg-[#E6EFEA] px-5 py-3 text-sm text-black/70 placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-[#006A8E]/20 ${errors.email ? "border-red-500" : "border-black/20"}`}
          />
          {errors.email && <p className="ml-2 mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div className="mt-3">
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder={dict.reason}
            rows={4}
            className={`w-full resize-none rounded-[20px] border bg-[#E6EFEA] px-5 py-3 text-sm text-black/70 placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-[#006A8E]/20 ${errors.reason ? "border-red-500" : "border-black/20"}`}
          />
          {errors.reason && <p className="ml-2 mt-1 text-xs text-red-500">{errors.reason}</p>}
        </div>
      </div>


      <Button className="w-full rounded-full py-4 text-sm tracking-widest capitalize" disabled={isSubmitting}>
        {isSubmitting ? dict.submitting : dict.submit}
      </Button>
    </form>
  );
}