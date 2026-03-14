type TagPillProps = {
  label: string;
  className?: string;
};

export default function TagPill({ label, className = "" }: TagPillProps) {
  return (
    <div className={`inline-flex items-center rounded-full border-2 border-[#045A8633] bg-[#E3EFF6] px-3 py-1.5 ${className}`}>
      <span className="pt-px text-[13px] font-bold leading-none tracking-[1px] text-brand-blue uppercase md:pt-0.5">
        {label}
      </span>
    </div>
  );
}