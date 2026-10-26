'use client';

import React from 'react';
import Link from 'next/link';

export type ThemeButtonVariant = 'gold' | 'navy' | 'outline' | 'outline-light' | 'white';
export type ThemeButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ThemeButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ThemeButtonVariant;
  size?: ThemeButtonSize;
  showArrow?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
  id?: string;
  'aria-label'?: string;
}

/**
 * Reusable Theme Button for SecureVest
 * Featuring:
 * - Fiduciary luxury color palettes (Gold, Obsidian Navy, Warm Linen outline)
 * - Triple chevron SVG with sliding & staggered wave light pulse on hover
 * - Continuous ripple border animation & ambient shimmer glow on hover
 * - Polymorphic support (internal Link, external anchor, or button)
 */
export const ThemeButton: React.FC<ThemeButtonProps> = ({
  children,
  href,
  variant = 'gold',
  size = 'md',
  showArrow = true,
  icon,
  fullWidth = false,
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  target,
  rel,
  id,
  'aria-label': ariaLabel,
  ...rest
}) => {
  const variantClass = `theme-btn-${variant}`;
  const sizeClass = `theme-btn-${size}`;
  const fullWidthClass = fullWidth ? 'theme-btn-full' : '';
  const disabledClass = disabled ? 'theme-btn-disabled' : '';

  const combinedClass = `theme-btn ${variantClass} ${sizeClass} ${fullWidthClass} ${disabledClass} ${className}`.trim();

  const content = (
    <>
      {icon && <span className="theme-btn-leading-icon" aria-hidden="true">{icon}</span>}
      <span className="theme-btn-label">{children}</span>
      {showArrow && (
        <svg
          className="theme-btn-triple-arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 66 43"
          aria-hidden="true"
        >
          <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5" />
          <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5" />
          <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5" />
        </svg>
      )}
    </>
  );

  // If href is provided: decide between external anchor or internal Next.js Link
  if (href) {
    const isExternal =
      href.startsWith('http') ||
      href.startsWith('tel:') ||
      href.startsWith('mailto:') ||
      target === '_blank';

    if (isExternal) {
      return (
        <a
          href={href}
          id={id}
          className={combinedClass}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          target={target}
          rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
          aria-label={ariaLabel}
          aria-disabled={disabled}
          {...rest}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        id={id}
        className={combinedClass}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  // Otherwise, render standard button
  return (
    <button
      type={type}
      id={id}
      className={combinedClass}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
      aria-label={ariaLabel}
      {...rest}
    >
      {content}
    </button>
  );
};

export default ThemeButton;
