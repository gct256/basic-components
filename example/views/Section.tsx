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
  <div className="bg-gray-200">
    <h1 className="text-lg font-bold bg-gray-500 text-white p-2">{title}</h1>
    <div className="p-4">{children}</div>
  </div>
);

Section.displayName = "Section";
