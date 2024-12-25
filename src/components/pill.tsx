interface Props {
  children: React.ReactNode;
}

export default function Pill({ children }: Props) {
  return (
    <p className="text-xs sm:text-sm py-1 px-sm w-fit border border-outline rounded-full">
      {children}
    </p>
  );
}
