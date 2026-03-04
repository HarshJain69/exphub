import { ReactNode } from "react";
import Providers from "./providers/Providers";
import styles from "./styles.module.css";

export const metadata = {
  title: "Experiment 4 — Context API & Redux Toolkit",
};

export default function Exp4Layout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <div className={styles.experimentLayout}>{children}</div>
    </Providers>
  );
}
