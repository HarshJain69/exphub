import { ReactNode } from "react";
import styles from "./styles.module.css";

export const metadata = {
  title: "Experiment 5",
};

export default function Exp5Layout({
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
