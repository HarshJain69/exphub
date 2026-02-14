import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
  href?: string;
}

export default function Button({ 
  children, 
  variant = "outline", 
  href,
  ...props 
}: ButtonProps) {
  if (href) {
    return (
      <a 
        href={href} 
        className={`${styles.button} ${styles[variant]}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={`${styles.button} ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
