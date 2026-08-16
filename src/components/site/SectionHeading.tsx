import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: As = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
      ) : null}
      <As className="text-2xl leading-tight text-primary sm:text-3xl md:text-[2.1rem]">{title}</As>
      <div className={cn("gold-rule mt-4", align === "center" && "mx-auto")} />
      {description ? <p className="mt-4 text-base text-muted-foreground">{description}</p> : null}
    </div>
  );
}
