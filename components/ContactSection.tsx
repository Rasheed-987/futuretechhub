import Image from "next/image";
import Link from "next/link";

type ContactSectionProps = {
  titleLine1: string;
  titleLine2: string;
  homeline2?: string;
  titlelinealumni?: string;
  titlehighlight?: string;
  titleLine2Bold?: string;
  titleaboutline1?: string;
  titleapproch?: string;
  description: string;
  titleresource?: string;
  button: string;
  button2?: string;
  href?: string;
  href2?: string;
  backgroundImage?: string;
  blurDataURL?: string;
  descriptionClassName?: string;
  titleClassName?: string;
  spanClassName?: string;
};

export default function ContactSection({
  titleLine1,
  titleLine2,
  homeline2,
  titlehighlight,
  titlelinealumni,
  titleLine2Bold,
  titleapproch,
  titleaboutline1,
  description,
  titleresource,
  button,
  button2,
  href,
  href2,
  backgroundImage = "/images/contactbg.webp",
  blurDataURL,
  descriptionClassName,
  titleClassName,
  spanClassName,
}: ContactSectionProps) {
  return (
    <section className="px-4 pb-20 text-white lg:px-6">
      <div className="relative mx-auto flex min-h-112.5 w-full max-w-8xl flex-col items-center justify-center overflow-hidden rounded-3xl p-4 text-center md:min-h-112.5 md:rounded-3xl md:p-8 3xl:min-h-162.5!">
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Contact Background"
            fill
            className="hidden object-cover md:block"
            priority
            placeholder={blurDataURL ? "blur" : undefined}
            blurDataURL={blurDataURL}
          />
          <Image
            src="/images/gb.webp"
            alt="Contact Background Mobile"
            fill
            className="block object-cover md:hidden"
            priority
          />
        </div>

        <div className="relative z-10 md:max-w-3xl md:px-4">
          <h2 className={`mx-auto mb-3 leading-tight ${titleClassName ?? ""}`}>
            <span className={`mb-1 block text-[23px] md:text-4xl 3xl:text-[38px]! ${spanClassName ?? ""}`}>
              <span className="font-normal">{titleLine1}</span>
              <span className="font-extrabold"> {titlehighlight}</span>
              <span className="font-normal"> {titleresource}</span>
            </span>

            {titleLine2Bold ? (
              <span className="block text-[23px] font-normal md:text-4xl 3xl:text-[38px]!">
                <span>{titlelinealumni}</span>
                <span className="font-extrabold"> {titleLine2Bold}</span> {titleapproch} {titleLine2}
              </span>
            ) : (
              <span className="block text-[23px] md:text-4xl 3xl:text-[38px]!">
                {homeline2} {titleaboutline1}
                <span className="font-extrabold"> {titleLine2}</span>
              </span>
            )}
          </h2>

          <p className={`mx-auto mb-8 text-[13px] leading-relaxed text-white/90 md:text-[14px] 3xl:text-[20px]! ${descriptionClassName ?? ""}`}>
            {description}
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            {href ? (
              href.trim().startsWith("http") || href.trim().startsWith("https") ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                  <button className="group w-full rounded-full bg-white px-5 py-4 text-xs leading-none font-bold text-black/80 transition-transform duration-200 ease-out hover:cursor-pointer md:w-auto md:text-lg 3xl:text-[20px]!">
                    <span className="group-hover-gradient-text">{button}</span>
                  </button>
                </a>
              ) : (
                <Link href={href} className="w-full md:w-auto">
                  <button className="group w-full rounded-full bg-white px-5 py-4 text-xs leading-none font-bold text-black/80 transition-transform duration-200 ease-out hover:cursor-pointer md:w-auto md:text-lg 3xl:text-[20px]!">
                    <span className="group-hover-gradient-text">{button}</span>
                  </button>
                </Link>
              )
            ) : (
              <button className="group w-full rounded-full bg-white px-5 py-4 text-[17px] leading-none font-bold text-black transition-transform duration-200 ease-out hover:cursor-pointer md:w-auto md:text-lg 3xl:text-[20px]!">
                <span className="group-hover-gradient-text">{button}</span>
              </button>
            )}

            {button2 &&
              (href2 ? (
                <Link href={href2} className="w-full md:w-auto">
                  <button className="btn-hover-white inline-flex w-full items-center justify-center rounded-full border border-white px-5 py-4 text-[17px] leading-none font-bold text-white transition-transform duration-200 ease-out hover:cursor-pointer md:w-auto md:text-lg 3xl:text-[20px]!">
                    {button2}
                  </button>
                </Link>
              ) : (
                <button className="btn-hover-white inline-flex w-full items-center justify-center rounded-full border border-white px-5 py-4 text-[17px] leading-none font-bold text-white transition-transform duration-200 ease-out hover:cursor-pointer md:w-auto md:text-lg 3xl:text-[20px]!">
                  {button2}
                </button>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}