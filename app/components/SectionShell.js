import RevealSection from "./RevealSection";

const defaultSectionClassName = "w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-32";

export default function SectionShell({ id, title, intro, children, className = defaultSectionClassName }) {
  return (
    <RevealSection id={id} className={className}>
      <div className="w-full">
        <div className="mb-8 lg:mb-10 flex flex-col gap-4">
          <h2 className="text-orange-400 text-5xl xl:text-6xl font-semibold">{title}</h2>
          {intro}
        </div>
        {children}
      </div>
    </RevealSection>
  );
}
