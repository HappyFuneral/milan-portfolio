import { notFound } from "next/navigation";
import { Header } from "@/components/site";
import type { Locale } from "@/lib/content";
import PrintButton from "@/components/print-button";
export default async function CV({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "hu" && locale !== "en") notFound();
  const hu = locale === "hu";
  return (
    <>
      <Header locale={locale as Locale} />
      <main className="wrap cv-page">
        <div className="cv-actions">
          <span>
            {hu ? "NYOMTATÁSBARÁT ÖNÉLETRAJZ" : "PRINT-FRIENDLY RESUME"}
          </span>
          <PrintButton
            label={hu ? "Mentés PDF-ként / Nyomtatás" : "Save as PDF / Print"}
          />
        </div>
        <div className="cv-sheet">
          <div className="cv-heading">
            <div>
              <h1>MAROEVICH MILÁN</h1>
              <p>Junior Backend Developer | Junior Full-Stack Developer</p>
              <div className="cv-contact">
                Budapest · +36 70 883 7203 · milan.maroevich@gmail.com
                <br />
                github.com/HappyFuneral · portfolio.maroevichmilan.hu
              </div>
            </div>
            <div className="cv-photo">
              {" "}
              <img
                src="/images/profile-placeholder.jpg"
                alt="Milán Maroevich portréja"
                className="cv-photo"
              />
            </div>
          </div>
          <section>
            <h2>{hu ? "Szakmai bemutatkozás" : "Professional Summary"}</h2>
            <p>
              {hu
                ? "Pályakezdő szoftverfejlesztő gyakorlati tapasztalattal backend- és full-stack fejlesztésben. Különösen érdekelnek a backend rendszerek, az alkalmazásarchitektúra, az API-fejlesztés és az infrastruktúra. Önálló és csapatban megvalósított projekteken is dolgoztam."
                : "Junior software developer with practical experience in backend and full-stack development. Particularly interested in backend systems, application architecture, API development, and infrastructure. Experienced through both independent and team-based projects."}
            </p>
          </section>
          <section>
            <h2>{hu ? "Kiemelt projektek" : "Selected Projects"}</h2>
            <ul>
              <li>
                <b>
                  AI Video Studio —{" "}
                  {hu
                    ? "100%-ban saját fejlesztés"
                    : "100% independently developed"}
                  .
                </b>{" "}
                Next.js, React, TypeScript; AI image generation, text-to-video
                and image-to-video.{" "}
                <a href="https://ai-video-studio-sooty-chi.vercel.app">
                  Live demo
                </a>{" "}
                ·{" "}
                <a href="https://github.com/HappyFuneral/ai-video-studio">
                  GitHub
                </a>
              </li>
              <li>
                <b>
                  ModelCoreApi —{" "}
                  {hu
                    ? "100%-ban saját fejlesztés"
                    : "100% independently developed"}
                  .
                </b>{" "}
                Java 17, Maven; independently designed and implemented
                backend/API project.{" "}
                <a href="https://github.com/HappyFuneral/ModelCoreApi">
                  GitHub
                </a>
              </li>
              <li>
                <b>Galaxy.</b> React Native, Expo, NestJS, Python, FastAPI,
                Docker; mobile app with backend and video-processing components.{" "}
                <a href="https://github.com/HappyFuneral/galaxy">GitHub</a>
              </li>
              <li>
                <b>
                  VideojátékShop —{" "}
                  {hu ? "háromfős csapatprojekt" : "three-person team project"}.
                </b>{" "}
                Laravel, PHP, SQL; web shop final examination project.{" "}
                <a href="https://github.com/HappyFuneral/videojatekshop">
                  GitHub
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h2>{hu ? "Technikai ismeretek" : "Technical Skills"}</h2>
            <p>
              JavaScript · TypeScript · Python · Java · PHP · C# · React ·
              Next.js · React Native · Expo · Node.js · NestJS · FastAPI ·
              Spring Boot · REST APIs · SQL · Linux · Docker · Docker Compose ·
              NGINX · Cloudflare Tunnel
            </p>
          </section>
          <section>
            <h2>{hu ? "Gyakorlati tapasztalat" : "Practical Experience"}</h2>
            <p>
              <b>Aevum Temetkezés — ERP rendszer kezdeti fejlesztése (2024).</b>{" "}
              {hu
                ? "Részvétel a kezdeti ERP-fejlesztésben frontend- és backendfeladatokon."
                : "Contributed to the initial ERP development through frontend and backend tasks."}
            </p>
            <p>
              <b>{hu ? "Saját infrastruktúra" : "Personal Infrastructure"}.</b>{" "}
              {hu
                ? "Linux-alapú szerver, Docker, Docker Compose, NGINX és Cloudflare Tunnel konfigurálása és üzemeltetése."
                : "Set up and maintain a Linux-based server using Docker, Docker Compose, NGINX, and Cloudflare Tunnel."}
            </p>
          </section>
          <section>
            <h2>{hu ? "Tanulmányok" : "Education"}</h2>
            <p>
              <b>Óbudai Egyetem</b> —{" "}
              {hu
                ? "Mérnökinformatikus tanulmányok, 2024.09–2025.02"
                : "Engineering Informatics studies, Sep 2024–Feb 2025"}
            </p>
            <p>
              <b>
                Budapesti Műszaki SZC Bláthy Ottó Titusz Informatikai Technikum
              </b>{" "}
              —{" "}
              {hu
                ? "Szoftverfejlesztő és -tesztelő technikusi képzés, 2019–2024"
                : "Software Development and Testing Technician qualification, 2019–2024"}
            </p>
          </section>
          <section>
            <h2>{hu ? "Nyelvismeret" : "Languages"}</h2>
            <p>
              {hu
                ? "Angol — szakmai és technikai dokumentáció olvasása, értelmezése."
                : "English — able to read and understand technical documentation."}
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
