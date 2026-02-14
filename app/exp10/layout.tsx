import { ReactNode } from "react";
import styles from "./styles.module.css";

export const metadata = {
  title: "Experiment 10",
};

export default function Exp10Layout({
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
