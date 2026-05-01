import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  size = 'medium', 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button className={`btn btn-${variant} btn-${size}`} {...props}>
      {children}
    </button>
  );
}
