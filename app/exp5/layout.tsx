import { ReactNode } from "react";
import Providers from "./providers/Providers";
import styles from "./styles.module.css";

export const metadata = {
  title: "Experiment 5 — useMemo Optimization & Advanced State",
};

export default function Exp5Layout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <div className={styles.experimentLayout}>{children}</div>
    </Providers>
  );
}
