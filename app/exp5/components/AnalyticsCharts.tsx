"use client";

import { BarChart3, TrendingUp, Activity, Zap } from "lucide-react";
import styles from "./AnalyticsCharts.module.css";

/**
 * Heavy analytics component that is lazy loaded
 * Simulates expensive charting library
 */
export default function AnalyticsCharts() {
  console.log("📊 AnalyticsCharts component loaded (lazy)");

  const metrics = [
    {
      icon: <BarChart3 size={32} />,
      label: "Total Products",
      value: "1,000",
      change: "+12%",
    },
    {
      icon: <TrendingUp size={32} />,
      label: "Avg. Load Time",
      value: "120ms",
      change: "-85%",
    },
    {
      icon: <Activity size={32} />,
      label: "Render FPS",
      value: "60",
      change: "+140%",
    },
    {
      icon: <Zap size={32} />,
      label: "Bundle Size",
      value: "95 KB",
      change: "-47%",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.notice}>
        <p>✅ This component was lazy loaded using dynamic imports</p>
        <p>Check the browser console for the loading confirmation message</p>
      </div>

      <div className={styles.grid}>
        {metrics.map((metric, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconContainer}>{metric.icon}</div>
            <div className={styles.content}>
              <p className={styles.label}>{metric.label}</p>
              <p className={styles.value}>{metric.value}</p>
              <p className={styles.change}>{metric.change}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.chartPlaceholder}>
        <BarChart3 size={48} />
        <p>Performance Charts</p>
        <p className={styles.chartNote}>
          In production, this would contain interactive charts from libraries
          like Chart.js or Recharts, loaded only when needed
        </p>
      </div>
    </div>
  );
}
