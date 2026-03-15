import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import NominationForm from "@/components/NominationForm";

const nomination = {
  title: "Know someone who wants to",
  titleHighlight: "Master the Future of Tech?",
  description:
    "Recommend a friend or colleague for our specialized courses. We'll reach out to them with a personalized training consultation and help them start their digital journey.",
  recommendTitle: "WHO SHOULD ENROLL?",
  recommendList: [
    {
      icon: "/images/icon1.png",
      text: "Aspiring professionals looking to start a high-impact career in technology and design",
    },
    {
      icon: "/images/icon2.png",
      text: "Individuals seeking to master industry-standard tools and modern software frameworks",
    },
    {
      icon: "/images/icon3.png",
      text: "Those who want to build a competitive professional portfolio through project-based learning",
    },
  ],
  form: {
    yourDetails: "JOIN THE WAITLIST",
    fullName: "Your full name",
    organization: "Current Occupation",
    email: "Your email",
    nomineeDetails: "FRIEND'S DETAILS",
    nomineeName: "Name of friend",
    nomineeOrg: "Friend's occupation",
    nomineeEmail: "Friend's Email",
    reason: "What course would you recommend for them?",
    submit: "Send Recommendation",
    submitting: "Sending...",
    successTitle: "Thank you for the recommendation!",
    successMessage: "We will contact them shortly with details about our upcoming batches.",
  },
};

export default function HomeNominationSection() {
  return (
    <section className="bg-white pb-32 lg:pb-48 3xl:pb-68!">
      <FadeIn className="mx-auto max-w-6xl  px-4 sm:px-6 3xl:max-w-375!">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24 3xl:justify-items-center 3xl:gap-32!">
          <div className="lg:max-w-md 3xl:max-w-lg!">
            <div className="mb-6 leading-[1.1]">
              <h2 className="block text-[22px] md:text-2xl xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px]!">
                <span className="gradient-text">{nomination.title}</span>
              </h2>
              <h2 className="block text-[23px] leading-tight font-extrabold tracking-tight md:text-3xl 3xl:text-[38px]!">
                <span className="gradient-text">{nomination.titleHighlight}</span>
              </h2>
            </div>

            <p className="mb-10 text-base leading-[1.2] text-black/60 3xl:text-[20px]!">
              {nomination.description}
            </p>

            <div className="lg:mt-52">
              <h3 className="mb-6 text-[15px] font-bold tracking-normal text-[#006A8E] lg:text-[18px] 3xl:text-[19px]!">
                {nomination.recommendTitle}
              </h3>
              <div className="space-y-5">
                {nomination.recommendList.map((item) => (
                  <div key={item.text} className="flex items-start gap-4">
                    <div className="mt-0.5 h-5 w-5 shrink-0">
                      <Image src={item.icon} alt="" width={20} height={20} className="object-contain" />
                    </div>
                    <p className="text-[15px] leading-[1.2] text-black/60 3xl:text-[20px]!">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-[#E6EFEA] item p-6 md:p-10 3xl:max-w-182! 3xl:p-14!">
            <NominationForm dict={nomination.form} />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}