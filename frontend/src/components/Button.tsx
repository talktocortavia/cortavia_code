import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseClasses =
    'px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.99]';
  const variantClasses = {
    primary:
      // Light: green gradient. Dark: blue/purple gradient (optional).
      'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-500 hover:to-emerald-700 shadow-lg shadow-emerald-200/70 hover:shadow-xl dark:from-blue-600 dark:to-purple-600 dark:hover:from-blue-500 dark:hover:to-purple-500 dark:shadow-blue-500/30',
    secondary:
      'bg-white text-slate-900 hover:bg-emerald-50 border-2 border-slate-200 hover:border-emerald-500 dark:bg-slate-900/60 dark:text-white dark:hover:bg-slate-900 dark:border-slate-700 dark:hover:border-blue-500 backdrop-blur-sm',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

