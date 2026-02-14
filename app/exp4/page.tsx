import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./styles.module.css";

export default function Exp4Page() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        <ArrowLeft size={20} />
        Back to Dashboard
      </Link>

      <div className={styles.content}>
        <h1 className={styles.title}>Experiment 4</h1>
        <p className={styles.description}>
          State management patterns and data flow in modern applications
        </p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.text}>
            This experiment demonstrates effective state management strategies
            and data flow patterns in complex applications.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Concepts</h2>
          <ul className={styles.list}>
            <li>Global state management</li>
            <li>Context API and custom hooks</li>
            <li>Data flow architecture</li>
            <li>State persistence strategies</li>
          </ul>
        </div>

        <div className={styles.actions}>
          <Button variant="primary">Run Demo</Button>
          <Button href="https://github.com">View Source</Button>
        </div>
      </div>
    </div>
  );
}
