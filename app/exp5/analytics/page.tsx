"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft, Loader } from "lucide-react";
import styles from "./analytics.module.css";

// Lazy load heavy analytics components
const AnalyticsCharts = dynamic(() => import("../components/AnalyticsCharts"), {
  loading: () => (
    <div className={styles.loading}>
      <Loader className={styles.spinner} size={32} />
      <p>Loading analytics dashboard...</p>
    </div>
  ),
  ssr: false,
});

export default function AnalyticsPage() {
  return (
    <div className={styles.container}>
      <Link href="/exp5" className={styles.backLink}>
        <ArrowLeft size={20} />
        Back to Experiment 5
      </Link>

      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Performance Analytics</h1>
          <p className={styles.description}>
            Real-time monitoring and insights (Lazy Loaded Component)
          </p>
        </div>

        <div className={styles.lazyInfo}>
          <h2 className={styles.infoTitle}>Lazy Loading Demonstration</h2>
          <p className={styles.infoText}>
            This page uses dynamic imports with next/dynamic to lazy load the analytics
            dashboard. The heavy charting components are only loaded when this page is
            visited, reducing the initial bundle size.
          </p>
          <div className={styles.infoCode}>
            <code>const AnalyticsCharts = dynamic(() =&gt; import(&apos;./AnalyticsCharts&apos;))</code>
          </div>
        </div>

        <Suspense
          fallback={
            <div className={styles.loading}>
              <Loader className={styles.spinner} size={32} />
              <p>Loading analytics...</p>
            </div>
          }
        >
          <AnalyticsCharts />
        </Suspense>
      </div>
    </div>
  );
}
