import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  onClick?: () => void;
  type?: never;
}

interface ButtonAsButton extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
}: ButtonAsLink | ButtonAsButton) {
  const classes = [styles.btn, styles[variant], styles[size]];
  if (className) classes.push(className);

  if (href !== undefined) {
    return (
      <Link href={href} className={classes.join(" ")} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes.join(" ")} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
