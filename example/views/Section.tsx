import * as React from "react";

/** Props: Section */
type SectionProps = {
  title?: string;
  children?: React.ReactNode;
};

/** View: Section */
export const Section: React.FC<SectionProps> = ({
  title,
  children,
}: SectionProps): React.ReactElement | null => (
  <div>
    <h1 className="text-lg font-bold border-b border-black">{title}</h1>
    <div className="ml-4 mt-4 pb-4">{children}</div>
  </div>
);

Section.displayName = "Section";
