import { FadeUp } from "./animation/fade-up";

interface Props {
  children: React.ReactNode;
}

export default function InfoContainer({ children }: Props) {
  return (
    <FadeUp>
      <div className="flex flex-col p-1 gap-1 rounded-md bg-outline w-full font-bold">
        {children}
      </div>
    </FadeUp>
  );
}
