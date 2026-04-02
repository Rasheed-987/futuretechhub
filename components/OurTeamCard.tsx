import Image from "next/image";

type TeamMemberProps = {
  member: {
    name: string;
    role?: string;
    bio: string;
  };
  backgroundImage: string;
};

export default function OurTeamCard({
  member,
  backgroundImage,
}: TeamMemberProps) {
  return (
    <div className="group relative flex-1 overflow-hidden rounded-3xl md:rounded-4xl min-h-[400px] lg:min-h-[500px] cursor-pointer">
      <Image
        src={backgroundImage}
        alt={member.name}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Default State: Bottom Overlay Gradient & Text */}
      <div className="absolute inset-0 z-10 bg-linear-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
      <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end p-6 md:p-8 transition-opacity duration-500 group-hover:opacity-0">
        <h3 className="text-xl font-bold leading-tight text-white lg:text-2xl 2xl:text-3xl">
          {member.name}
          {member.role ? (
            <span className="block mt-1 text-sm font-medium text-white/80 lg:text-base">
              {member.role}
            </span>
          ) : null}
        </h3>
      </div>

      {/* Hover State: Sliding Brand Overlay */}
      <div className="absolute inset-0 z-30 flex translate-y-full flex-col justify-between bg-brand-gradient p-6 opacity-95 transition-transform duration-500 ease-in-out group-hover:translate-y-0 md:p-8">
        {/* Top Text (Name & Role) */}
        <div>
          <h3 className="text-xl font-bold leading-tight text-white lg:text-2xl 2xl:text-3xl">
            {member.name}
            {member.role ? (
              <span className="block mt-1 text-sm font-medium text-white/80 lg:text-base">
                {member.role}
              </span>
            ) : null}
          </h3>
        </div>

        {/* Bottom Text (Bio) */}
        <div>
          <p className="text-sm leading-relaxed text-white/90 lg:text-base">
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
