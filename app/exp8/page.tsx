import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./styles.module.css";

export default function Exp8Page() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        <ArrowLeft size={20} />
        Back to Dashboard
      </Link>

      <div className={styles.content}>
        <h1 className={styles.title}>Experiment 8</h1>
        <p className={styles.description}>
          Real-time features using WebSockets and server-sent events
        </p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.text}>
            This experiment demonstrates implementing real-time features in web
            applications using WebSockets and server-sent events.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Concepts</h2>
          <ul className={styles.list}>
            <li>WebSocket connections</li>
            <li>Server-sent events (SSE)</li>
            <li>Real-time data synchronization</li>
            <li>Connection management</li>
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
