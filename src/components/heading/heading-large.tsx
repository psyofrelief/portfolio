interface Props {
  children: React.ReactNode;
}

export default function H1({ children }: Props) {
  return (
    <h1 className="text-lg sm:text-xl md:text-2xl mb-sm  font-bold uppercase leading-none tracking-tight">
      {children}
    </h1>
  );
}
