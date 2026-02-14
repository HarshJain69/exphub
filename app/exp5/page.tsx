import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./styles.module.css";

export default function Exp5Page() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        <ArrowLeft size={20} />
        Back to Dashboard
      </Link>

      <div className={styles.content}>
        <h1 className={styles.title}>Experiment 5</h1>
        <p className={styles.description}>
          RESTful API design and integration with backend services
        </p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.text}>
            This experiment covers RESTful API design principles and best practices
            for integrating frontend applications with backend services.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Concepts</h2>
          <ul className={styles.list}>
            <li>RESTful API architecture</li>
            <li>HTTP methods and status codes</li>
            <li>Data fetching strategies</li>
            <li>Error handling and retry logic</li>
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
