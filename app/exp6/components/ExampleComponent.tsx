import styles from "./ExampleComponent.module.css";

interface ExampleComponentProps {
  title: string;
  content: string;
}

export default function ExampleComponent({ title, content }: ExampleComponentProps) {
  return (
    <div className={styles.component}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
