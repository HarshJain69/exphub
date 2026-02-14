import { ReactNode } from "react";
import styles from "./styles.module.css";

export const metadata = {
  title: "Experiment 3",
};

export default function Exp3Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className={styles.experimentLayout}>
      {children}
    </div>
  );
}
