import { Code, Zap, Eye, Clock, Image as ImageIcon, Package } from "lucide-react";
import styles from "./OptimizationDemo.module.css";

interface OptimizationTechnique {
  icon: React.ReactNode;
  title: string;
  description: string;
  implementation: string;
}

const techniques: OptimizationTechnique[] = [
  {
    icon: <Zap size={24} />,
    title: "React.memo",
    description: "Prevents unnecessary re-renders of expensive components",
    implementation: "ProductCard and SearchBar wrapped with React.memo",
  },
  {
    icon: <Code size={24} />,
    title: "useMemo",
    description: "Memoizes expensive calculations like sorting and filtering",
    implementation: "Product filtering and sorting operations cached",
  },
  {
    icon: <Clock size={24} />,
    title: "useCallback",
    description: "Stabilizes function references to prevent child re-renders",
    implementation: "Event handlers memoized with useCallback",
  },
  {
    icon: <Eye size={24} />,
    title: "List Virtualization",
    description: "Renders only visible items using react-window",
    implementation: "1000+ products rendered without performance lag",
  },
  {
    icon: <Clock size={24} />,
    title: "Debounced Search",
    description: "Delays search execution by 500ms to reduce operations",
    implementation: "Custom useDebounce hook with cleanup",
  },
  {
    icon: <ImageIcon size={24} />,
    title: "Image Optimization",
    description: "Next.js Image component with lazy loading",
    implementation: "Automatic format optimization and responsive sizing",
  },
];

export default function OptimizationDemo() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Optimization Techniques Implemented</h2>
      <p className={styles.description}>
        Each technique addresses specific performance bottlenecks
      </p>

      <div className={styles.grid}>
        {techniques.map((technique, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconContainer}>
              {technique.icon}
            </div>
            <h3 className={styles.cardTitle}>{technique.title}</h3>
            <p className={styles.cardDescription}>{technique.description}</p>
            <div className={styles.implementation}>
              <Package size={16} />
              <span>{technique.implementation}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.console}>
        <h3 className={styles.consoleTitle}>Console Monitoring</h3>
        <p className={styles.consoleText}>
          Open browser console (F12) to see optimization logs:
        </p>
        <ul className={styles.consoleList}>
          <li>🔄 Component render tracking</li>
          <li>🔥 Expensive operation execution</li>
          <li>⏱️ Debounce timer activity</li>
          <li>✅ Optimization confirmations</li>
        </ul>
      </div>
    </div>
  );
}
