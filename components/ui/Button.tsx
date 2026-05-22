import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export type ButtonVariant =
  | "primary"
  | "primaryPill"
  | "accentPill"
  | "ghost"
  | "ghostOnDark";

export type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap " +
  "transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 " +
  "disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "rounded-button bg-brand-primary text-text-on-dark hover:bg-brand-primary-deep shadow-sm hover:shadow-md",
  primaryPill:
    "rounded-pill bg-brand-primary text-text-on-dark hover:bg-brand-primary-deep shadow-sm hover:shadow-md",
  accentPill:
    "rounded-pill bg-brand-accent text-text-on-accent hover:bg-brand-accent-soft shadow-sm hover:shadow-md",
  ghost:
    "rounded-button border border-border-default bg-transparent text-text-primary hover:bg-brand-accent-muted",
  ghostOnDark:
    "rounded-pill border border-white/30 bg-transparent text-text-on-dark hover:bg-white/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-14 px-7 text-base",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof CommonProps | "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Button — single source of truth for all interactive CTAs.
 * Renders <button> by default, or a Next.js <Link> when `href` is provided.
 * External URLs (http(s)://) render as a plain <a> with safe rel attributes.
 */
export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(base, variantStyles[variant], sizeStyles[size], className);

  if ("href" in props && props.href !== undefined) {
    const { href } = props;
    const isExternal = /^https?:\/\//i.test(href);

    if (isExternal) {
      const { href: _href, ...anchorRest } =
        rest as ComponentPropsWithoutRef<"a">;
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }

    const linkRest = rest as Omit<
      ComponentPropsWithoutRef<"a">,
      "href" | keyof CommonProps
    >;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  const buttonRest = rest as ComponentPropsWithoutRef<"button">;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
