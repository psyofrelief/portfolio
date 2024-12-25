interface Props {
  children?: React.ReactNode; // Optional element for the right side
  className?: string;
}

export default function H2({ children, className = "" }: Props) {
  return (
    <h2
      className={`text-md sm:text-lg md:text-xl mb-xs sm:mb-sm font-extrabold uppercase leading-none tracking-tight ${className}`}
    >
      {children}
    </h2>
  );
}
