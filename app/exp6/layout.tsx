import { ReactNode } from "react";
import styles from "./styles.module.css";

export const metadata = {
  title: "Experiment 6",
};

export default function Exp6Layout({
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
