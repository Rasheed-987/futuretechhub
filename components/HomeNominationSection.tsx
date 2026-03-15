import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import NominationForm from "@/components/NominationForm";

const nomination = {
  title: "Know someone with the",
  titleHighlight: "potential to lead?",
  description:
    "Provide your details along with the nominee's information, we'll reach out to them and let them know you recommended them.",
  recommendTitle: "WHO CAN YOU RECOMMEND?",
  recommendList: [
    {
      icon: "/images/icon1.png",
      text: "Emirati professionals with a clear track record of initiative and impact",
    },
    {
      icon: "/images/icon2.png",
      text: "Individuals working in government or private sector roles",
    },
    {
      icon: "/images/icon3.png",
      text: "Those who align with the values of the UAE Government Leadership Model",
    },
  ],
  form: {
    yourDetails: "YOUR DETAILS",
    fullName: "Your full name",
    organization: "Organization name",
    email: "Your email",
    nomineeDetails: "NOMINEE'S DETAILS",
    nomineeName: "Name of nominee",
    nomineeOrg: "Nominee's organization",
    nomineeEmail: "Nominee's Email",
    reason: "Why are you recommending this individual?",
    submit: "Submit",
    submitting: "Submitting...",
    successTitle: "Thank you for recommending",
    successMessage: "They will be contacted by our team, with your recommendation noted",
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