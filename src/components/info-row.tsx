interface InfoRowProps {
  title: string; // The label for the p tag
  children?: React.ReactNode; // Optional element for the right side
}

export default function InfoRow({ title, children }: InfoRowProps) {
  return (
    <div className="flex tracking-wider justify-between items-center py-sm sm:py-md px-sm text-xs xs:text-sm sm:text-md bg-background relative border-b-outline  rounded-md overflow-hidden">
      <p className="text-secondary font-normal">{title}</p>
      {children}
    </div>
  );
}
