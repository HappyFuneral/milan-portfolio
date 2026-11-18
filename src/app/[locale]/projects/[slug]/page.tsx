import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/site";
import { projects, type Locale } from "@/lib/content";
export function generateStaticParams() {
  return ["hu", "en"].flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug })),
  );
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (locale !== "hu" && locale !== "en") notFound();
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const lang = locale as Locale;
  return (
    <>
      <Header locale={lang} />
      <main className="wrap detail-page">
        <Link href={`/${locale}#projects`} className="back-link">
          ← {lang === "hu" ? "Vissza a projektekhez" : "Back to projects"}
        </Link>
        <p className="eyebrow">{p.type}</p>
        <h1>
          {p.name}
          <span className="accent">.</span>
        </h1>
        <p className="detail-lead">{p[lang]}</p>
        <div className="detail-stack">{p.stack}</div>
        <div className="actions">
          <a
            className="button primary"
            href={p.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          {p.demo && (
            <a
              className="button secondary"
              href={p.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live demo ↗
            </a>
          )}
        </div>
        <p className="detail-disclaimer">
          {p.own
            ? lang === "hu"
              ? "100%-ban saját fejlesztésű projekt."
              : "100% independently developed project."
            : p.slug === "videojatekshop"
              ? lang === "hu"
                ? "Háromfős csapatban készült projekt."
                : "Developed as part of a three-person team."
              : lang === "hu"
                ? "A projekt részletei a GitHub repóban."
                : "See the GitHub repository for project details."}
        </p>
      </main>
    </>
  );
}
