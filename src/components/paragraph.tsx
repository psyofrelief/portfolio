interface Props {
  children: React.ReactNode;
}

export default function Paragraph({ children }: Props) {
  return (
    <p className="text-xs xs:text-sm sm:text-md text-secondary normal-case">
      {children}
    </p>
  );
}
