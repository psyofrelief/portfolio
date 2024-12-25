interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className = "" }: Props) {
  return (
    <button
      type="button"
      className={`relative overflow-hidden border-[1px] border-outline rounded-md py-xs  px-md sm:px-lg   justify-center items-center group font-medium text-xs sm:text-sm ${className}`}
    >
      <span className="absolute inset-0 bg-foreground transform translate-x-[-101%] transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
      <span className="relative z-10 mix-blend-exclusion flex items-center gap-xs">
        {children}
      </span>
    </button>
  );
}
