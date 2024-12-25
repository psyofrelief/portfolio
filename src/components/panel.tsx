interface Props {
  children: React.ReactNode;
  home?: boolean;
}

export default function Panel({ children, home = false }: Props) {
  return (
    <main
      className={`flex flex-col gap-y-xl md:gap-y-xxl pb-xl md:pb-xxl ${!home && "min-h-screen-minus-navbar pt-xl md:pt-xxl mt-16"}`}
    >
      {children}
    </main>
  );
}
