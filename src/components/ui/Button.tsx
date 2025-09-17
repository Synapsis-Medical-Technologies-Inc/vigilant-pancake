'use client';

import React, { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  className = '',
  rightIcon,
  ...props
}) => {
  const baseClasses = 'font-medium rounded-xl transition-colors duration-200 flex items-center justify-center';
  
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-[#fe568d] text-white hover:bg-[#ff7ba6] disabled:bg-gray-400',
    secondary: 'bg-[rgba(255,255,255,0.1)] text-white hover:bg-[rgba(255,255,255,0.2)] disabled:bg-gray-400',
    outline: 'border border-[rgba(255,255,255,0.1)] text-white hover:bg-[rgba(255,255,255,0.05)] disabled:border-gray-400 disabled:text-gray-400',
  };
  
  const sizes: Record<ButtonSize, string> = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-5 py-3 text-base',
    large: 'px-6 py-3 text-lg',
  };
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'cursor-not-allowed' : ''} ${className}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;