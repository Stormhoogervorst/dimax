import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
};

/**
 * Container: consistent max-width (1280px) + responsive horizontal padding
 * (20px mobile, 48px desktop). Use as the inner wrapper for every section.
 */
export function Container<T extends ElementType = "div">({
  as,
  children,
  className,
}: ContainerProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1280px] px-5 md:px-12",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
