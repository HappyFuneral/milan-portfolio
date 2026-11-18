import { notFound } from "next/navigation";
import { Home } from "@/components/site";
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "hu" && locale !== "en") notFound();
  return <Home locale={locale} />;
}
