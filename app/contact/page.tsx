import Image from "next/image";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import NominationForm from "@/components/NominationForm";

const contactPage = {
  hero: {
    title: {
      text1: "We're here to support ",
      highlight1: "your tech journey",
    },
    description:
      "Exploring our courses, seeking guidance, or interested in enrolling? We'd love to hear from you and help you get started.",
    phone: "+92 333 5115133",
    email: "admissions@futuretech.com",
    address: "Islamabad, Pakistan",
  },
  form: {
    title: "Join the ",
    titleUae: "Next Gen",
    titleHighlight: "of Tech Leaders",
    name: "Your full name",
    email: "Your email",
    phone: "Your phone (optional)",
    interest: "Course of interest",
    message: "Message",
    submit: "Submit Inquiry",
    submitting: "Submitting...",
    interests: ["Graphic Designing", "Basic Computer", "Web Development", "Other"],
    contactSuccessTitle: "Thank you for reaching out",
    contactSuccessMessage:
      "We've received your inquiry. Our admissions team will review it and contact you shortly.",
  },
};


const nomination = {
  title: "Ready to start your journey in",
  titleHighlight: "FutureTech?",
  description:
    "Join FutureTech Institute and master the latest industry-demanded skills. Enroll today and take the first step towards a successful technology career.",
  recommendTitle: "WHY CHOOSE FUTURETECH?",
  contactrecommendList: [
    {
      icon: "/images/iconblack1.png",
      text: "Hands-on, project-based learning with industry tools",
    },
    {
      icon: "/images/iconblack2.png",
      text: "Expert instructors with professional tech backgrounds",
    },
    {
      icon: "/images/iconblack3.png",
      text: "Curriculum designed for modern industry requirements",
    },
  ],
  form: {
    yourDetails: "GET IN TOUCH",
    fullName: "Your full name",
    organization: "Company or Organization",
    email: "Your email address",
    reason: "Tell us about your interest or message",
    submit: "Apply Now",
    submitting: "Submitting...",
    successTitle: "Submission Received!",
    successMessage: "Thank you for reaching out. Our team will contact you shortly with more details.",
  },
};


export default function ContactPage() {
  return (
    <>
      <section className="bg-white py-30 lg:pb-30 lg:pt-24 3xl:pb-50">
        <Container className="px-4">
          <div className="relative flex w-full items-stretch overflow-hidden rounded-2xl bg-[#006251] landscape:aspect-[2.4/1] md:rounded-4xl lg:min-h-175">
            <Image
              src="/images/contactbackground.webp"
              alt="Contact Background"
              fill
              className="hidden object-cover md:block"
              priority
            />
            <Image
              src="/images/contactmblbackground.webp"
              alt="Contact Background"
              fill
              className="object-cover md:hidden"
              priority
            />

        

            <div className="relative z-10 flex w-full flex-col items-center justify-between gap-12 p-4 md:p-4 lg:flex-row lg:items-start lg:gap-16">
              <div className="flex w-full flex-1 flex-col gap-4 md:gap-6">
                <div className="max-w-325 2xl:max-w-250">
                  <div className="flex flex-col items-start gap-4 lg:flex-row lg:gap-16">
                    <h1 className="flex-1 text-[1.5rem] leading-[1.3] text-white md:text-[2.2rem] lg:flex-[1.5] lg:text-[1.8rem] xl:leading-[1.1] 2xl:text-[2.2rem]">
                      <span className="mb-1 block font-normal">{contactPage.hero.title.text1}</span>
                      <span className="font-extrabold">{contactPage.hero.title.highlight1}</span>
                    </h1>
                    <p className="flex-1 text-[15px] leading-[1.6] text-white md:leading-[1.3] lg:max-w-lg lg:flex-1 xl:leading-[1.4] 2xl:text-[17px]">
                      {contactPage.hero.description}
                    </p>
                  </div>

                  <div className="mt-4 pe-7 md:mt-2 lg:mt-3 xl:mt-5 2xl:mt-5">
                    <div dir="ltr" className="flex w-full flex-col items-start gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between">
                      <a
                        href={`tel:${contactPage.hero.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-3 text-white transition-opacity hover:opacity-80"
                      >
                        <div className="relative h-6 w-6 shrink-0">
                          <Image src="/images/phone.png" alt="Phone" fill className="object-contain invert brightness-0" />
                        </div>
                        <span className="whitespace-nowrap text-[15px] font-bold 2xl:text-[16px]">
                          {contactPage.hero.phone}
                        </span>
                      </a>

                      <div className="flex items-center gap-3 text-white">
                        <div className="relative h-6 w-6 shrink-0">
                          <Image src="/images/pin.png" alt="Location" fill className="object-contain invert brightness-0" />
                        </div>
                        <span className="whitespace-nowrap text-[15px] font-bold 2xl:text-[16px]">
                          {contactPage.hero.address}
                        </span>
                      </div>

                      <a
                        href={`mailto:${contactPage.hero.email}`}
                        className="flex items-center gap-3 text-white transition-opacity hover:opacity-80"
                      >
                        <div className="relative h-6 w-6 shrink-0">
                          <Image src="/images/email.png" alt="Email" fill className="object-contain invert brightness-0" />
                        </div>
                        <span className="whitespace-nowrap text-[15px] font-bold 2xl:text-[16px]">
                          {contactPage.hero.email}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="h-30 w-full md:hidden" />
              </div>

              <div className="my-4 w-full self-center rounded-2xl bg-white p-4 md:px-10 lg:my-40 lg:w-102.5 lg:px-9 lg:py-10 xl:my-50 xl:w-125 2xl:my-50 2xl:w-150">
                <h2 className="gradient-text mb-5 text-center text-[24px] leading-[1.1] md:mb-10 md:text-[1.7rem]">
                  <span className="font-normal">{contactPage.form.title}</span>
                  <span className="font-extrabold">{contactPage.form.titleUae}</span>
                  <span className="block font-extrabold">{contactPage.form.titleHighlight}</span>
                </h2>

                <ContactForm dict={contactPage.form} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="lg:max-w-md">
              <div className="mb-6 leading-[1.1]">
                <h2 className="text-xl md:text-3xl">
                  <span className="gradient-text">{nomination.title}</span>
                </h2>
                <h2 className="text-xl font-extrabold md:text-3xl">
                  <span className="gradient-text">{nomination.titleHighlight}</span>
                </h2>
              </div>

              <p className="mb-10 text-base leading-[1.2] text-black/60">
                {nomination.description}
              </p>

              <div className="lg:mt-56">
                <h3 className="mb-6 text-[15px] font-bold tracking-widest text-[#006A8E] md:text-[16px]">
                  {nomination.recommendTitle}
                </h3>
                <div className="space-y-5">
                  {nomination.contactrecommendList.map((item) => (
                    <div key={item.text} className="flex items-start gap-4">
                      <div className="mt-0.5 h-5 w-5 shrink-0">
                        <Image src={item.icon} alt="" width={20} height={20} className="object-contain" />
                      </div>
                      <p className="text-[15px] leading-[1.2] text-black/60">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-3xl bg-[#E6EFEA] p-6 md:p-10">
              <NominationForm dict={nomination.form} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}