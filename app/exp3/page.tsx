import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./styles.module.css";

export default function Exp3Page() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        <ArrowLeft size={20} />
        Back to Dashboard
      </Link>

      <div className={styles.content}>
        <h1 className={styles.title}>Experiment 3</h1>
        <p className={styles.description}>
          Server-side rendering and static site generation with Next.js
        </p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.text}>
            This experiment explores the power of Next.js for building performant
            web applications using server-side rendering and static generation.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Concepts</h2>
          <ul className={styles.list}>
            <li>Server-side rendering (SSR)</li>
            <li>Static site generation (SSG)</li>
            <li>Incremental static regeneration</li>
            <li>API routes and middleware</li>
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
