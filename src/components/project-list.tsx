"use client";

import Link from "next/link";
import {
  copy,
  projects,
  type Locale,
  type ProjectCategory,
} from "@/lib/content";
import { useProjectStore } from "@/stores/project-store";

const categories: ProjectCategory[] = ["AI", "Backend", "Mobile", "Web"];

export function ProjectList({ locale }: { locale: Locale }) {
  const selectedCategory = useProjectStore((state) => state.selectedCategory);
  const setCategory = useProjectStore((state) => state.setCategory);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory),
        );

  const c = copy[locale];

  const categoryLabels: Record<ProjectCategory, string> = {
    AI: "AI",
    Backend: "Backend",
    Mobile: locale === "hu" ? "Mobil" : "Mobile",
    Web: "Web",
  };

  return (
    <>
      <div
        className="project-filters"
        aria-label={
          locale === "hu" ? "Projekt kategóriák" : "Project categories"
        }
      >
        <button
          type="button"
          className={`filter-button ${selectedCategory === "all" ? "active" : ""}`}
          aria-pressed={selectedCategory === "all"}
          onClick={() => setCategory("all")}
        >
          {c.all}
        </button>

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-button ${
              selectedCategory === category ? "active" : ""
            }`}
            aria-pressed={selectedCategory === category}
            onClick={() => setCategory(category)}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>

      <p className="filter-result" aria-live="polite">
        {filteredProjects.length}{" "}
        {locale === "hu" ? "projekt találat" : "projects found"}
      </p>

      <div className="project-grid">
        {filteredProjects.map((p) => {
          const originalIndex = projects.indexOf(p);

          return (
            <article className="project-card" key={p.slug}>
              <div className={`project-art art-${originalIndex + 1}`}>
                <span className="art-index">0{originalIndex + 1}</span>
                <span className="art-word">
                  {p.name === "AI Video Studio"
                    ? "AI / VIDEO"
                    : p.name === "ModelCoreApi"
                      ? "JAVA / API"
                      : p.name.toUpperCase()}
                </span>
                <span className="art-corner">↗</span>
              </div>

              <div className="project-info">
                <div className="project-kicker">
                  <span>{p.type}</span>
                  <span>
                    {p.own
                      ? c.own
                      : p.slug === "videojatekshop"
                        ? c.team
                        : c.independent}
                  </span>
                </div>

                <h3>
                  <Link href={`/${locale}/projects/${p.slug}`}>{p.name}</Link>
                </h3>

                <p>{p[locale]}</p>
                <div className="stack">{p.stack}</div>

                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>

                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer">
                      Live demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
