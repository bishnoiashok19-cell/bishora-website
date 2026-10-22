import { Link } from 'react-router-dom';
import type { MouseEvent, ReactNode } from 'react';
import { cn } from '../../lib/utils';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'outlineLight'
  | 'ghost'
  | 'accent'
  | 'whatsapp';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Render an internal React Router link. */
  to?: string;
  /** Render an external anchor link. */
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  title?: string;
  id?: string;
  name?: string;
  value?: string;
  'aria-label'?: string;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] transition-[background-color,color,border-color,box-shadow,transform] duration-200 whitespace-nowrap select-none disabled:pointer-events-none disabled:opacity-55 active:translate-y-px';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-600 text-white shadow-soft hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lift',
  secondary:
    'bg-ink-950 text-white shadow-soft hover:-translate-y-0.5 hover:bg-ink-800 hover:shadow-lift',
  outline:
    'border border-ink-200 bg-white text-ink-900 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800',
  outlineLight:
    'border border-white/25 bg-white/5 text-white hover:border-white/45 hover:bg-white/10',
  ghost: 'text-ink-700 hover:bg-ink-100 hover:text-ink-900',
  accent: 'bg-accent-500 text-ink-950 hover:-translate-y-0.5 hover:bg-accent-400 hover:shadow-lift',
  whatsapp: 'bg-[#25D366] text-ink-950 hover:-translate-y-0.5 hover:bg-[#1eb457] hover:shadow-lift',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-[0.95rem]',
  lg: 'h-13 px-7 text-base',
};

/**
 * The single button primitive used across the whole site.
 *
 * It renders a React Router `<Link>` when `to` is provided, an `<a>` when
 * `href` is provided, and a `<button>` otherwise — so every call site stays
 * semantically correct for both keyboard and screen-reader users.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  target,
  rel,
  type = 'button',
  disabled = false,
  fullWidth = false,
  icon,
  iconRight,
  className,
  children,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    className,
  );

  const content = (
    <>
      {icon}
      {children}
      {iconRight}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isExternal = /^https?:\/\//i.test(href);
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        target={target ?? (isExternal ? '_blank' : undefined)}
        rel={rel ?? (isExternal ? 'noopener noreferrer' : undefined)}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {content}
    </button>
  );
}
