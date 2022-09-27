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
    <h1>{title}</h1>
    {children}
  </div>
);

Section.displayName = "Section";
