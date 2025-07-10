import { cn } from "@/lib/utils";

export default function AuroraBackground({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      <div className="absolute -inset-0 blur-3xl">
        <div className="h-full w-full bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 opacity-20" />
      </div>
    </div>
  );
}
