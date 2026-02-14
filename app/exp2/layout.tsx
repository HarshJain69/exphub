import { ReactNode } from "react";
import styles from "./styles.module.css";

export const metadata = {
  title: "Experiment 2",
};

export default function Exp2Layout({
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
