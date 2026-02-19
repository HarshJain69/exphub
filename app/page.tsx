import { Folder, ExternalLink, Github } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import type { Experiment } from "@/lib/types";
import styles from "./page.module.css";

const experiments: Experiment[] = [
  {
    id: 1,
    title: "Experiment 1",
    description: "Introduction to web development fundamentals and modern JavaScript frameworks",
    liveLink: "/exp1",
    githubLink: "https://github.com",
  },
  {
    id: 2,
    title: "Experiment 2",
    description: "Building responsive user interfaces with React and component architecture",
    liveLink: "/exp2",
    githubLink: "https://github.com",
  },
  {
    id: 3,
    title: "Experiment 3",
    description: "Server-side rendering and static site generation with Next.js",
    liveLink: "/exp3",
    githubLink: "https://github.com",
  },
  {
    id: 4,
    title: "Experiment 4",
    description: "State management patterns and data flow in modern applications",
    liveLink: "/exp4",
    githubLink: "https://github.com",
  },
  {
    id: 5,
    title: "Experiment 5",
    description: "Performance optimization with virtualization, memoization, and debouncing",
    liveLink: "/exp5",
    githubLink: "https://github.com/HarshJain69/exphub/tree/main/app/exp5",
  },
  {
    id: 6,
    title: "Experiment 6",
    description: "Authentication and authorization in full-stack applications",
    liveLink: "/exp6",
    githubLink: "https://github.com",
  },
  {
    id: 7,
    title: "Experiment 7",
    description: "Database design and implementation with modern ORM tools",
    liveLink: "/exp7",
    githubLink: "https://github.com",
  },
  {
    id: 8,
    title: "Experiment 8",
    description: "Real-time features using WebSockets and server-sent events",
    liveLink: "/exp8",
    githubLink: "https://github.com",
  },
  {
    id: 9,
    title: "Experiment 9",
    description: "Testing strategies for frontend and backend code coverage",
    liveLink: "/exp9",
    githubLink: "https://github.com",
  },
  {
    id: 10,
    title: "Experiment 10",
    description: "Deployment and DevOps practices for production environments",
    liveLink: "/exp10",
    githubLink: "https://github.com",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Experiments Dashboard</h1>
        <p className={styles.subtitle}>
          A collection of 10 isolated experiments demonstrating full-stack development concepts
        </p>
      </div>

      <div className={styles.grid}>
        {experiments.map((experiment) => (
          <Card key={experiment.id}>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <Folder className={styles.icon} size={24} />
                <h3 className={styles.cardTitle}>{experiment.title}</h3>
              </div>
              <p className={styles.cardDescription}>{experiment.description}</p>
              <div className={styles.cardActions}>
                <Button href={experiment.liveLink}>
                  <ExternalLink size={16} />
                  Live Demo
                </Button>
                <Button href={experiment.githubLink}>
                  <Github size={16} />
                  Source
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
