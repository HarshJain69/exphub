import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./styles.module.css";

export default function Exp1Page() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        <ArrowLeft size={20} />
        Back to Dashboard
      </Link>

      <div className={styles.content}>
        <h1 className={styles.title}>Experiment 1</h1>
        <p className={styles.description}>
          Introduction to web development fundamentals and modern JavaScript frameworks
        </p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.text}>
            This experiment demonstrates the core principles of modern web development.
            It showcases component-based architecture, modular design patterns, and
            scalable code organization.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Concepts</h2>
          <ul className={styles.list}>
            <li>Component isolation and reusability</li>
            <li>Modern JavaScript ES6+ features</li>
            <li>CSS Modules for scoped styling</li>
            <li>TypeScript strict mode implementation</li>
          </ul>
        </div>

        <div className={styles.actions}>
          <Button variant="primary">Run Demo</Button>
          <Button href="https://github.com/HarshJain69/CU-Component-Library-Dashboard">View Source</Button>
        </div>
      </div>
    </div>
  );
}
