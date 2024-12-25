import Logo from "@/components/logo";

export default function Loading() {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 size-full bg-background z-[99] flex items-center justify-center">
      <Logo isLoading={true} />
    </div>
  );
}
