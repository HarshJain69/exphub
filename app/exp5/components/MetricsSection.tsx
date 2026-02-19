import { PerformanceMetrics } from "../utils/types";
import styles from "./MetricsSection.module.css";

interface MetricsSectionProps {
  metrics: PerformanceMetrics[];
}

/**
 * Displays performance metrics comparison
 * Before vs After optimization
 */
export default function MetricsSection({ metrics }: MetricsSectionProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Performance Metrics</h2>
      <p className={styles.description}>
        Measurable improvements from optimization techniques
      </p>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Before</th>
              <th>After</th>
              <th>Improvement</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((metric, index) => (
              <tr key={index}>
                <td className={styles.label}>{metric.label}</td>
                <td className={styles.before}>{metric.before}</td>
                <td className={styles.after}>{metric.after}</td>
                <td className={styles.improvement}>{metric.improvement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.notes}>
        <h3 className={styles.noteTitle}>Lighthouse Score Guidelines</h3>
        <div className={styles.noteContent}>
          <p>Run Lighthouse audit in Chrome DevTools:</p>
          <ol>
            <li>Open Chrome DevTools (F12)</li>
            <li>Go to Lighthouse tab</li>
            <li>Select Performance category</li>
            <li>Click Generate report</li>
            <li>Target: Performance score &gt; 85</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
