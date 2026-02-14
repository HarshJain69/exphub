import Link from "next/link";
import { Home } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Page Not Found</h2>
        <p className={styles.message}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="primary">
            <Home size={16} />
            Return to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
