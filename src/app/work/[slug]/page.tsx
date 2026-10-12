import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ImageOff } from "lucide-react";
import { IconTile, PageFallback, PageIntro, PointList } from "@/components/page-frame";
import { getProject, projects } from "@/lib/marketing";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return { title: project.title, description: project.solution };
}

export default function ProjectPage({ params }: Props) {
  return (
    <Suspense fallback={<PageFallback />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}

async function ProjectContent({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <PageIntro
        crumbs={[{ href: "/", label: "Home" }, { href: "/work", label: "Our Work" }, { label: project.title }]}
        eyebrow={project.category}
        title={project.title}
        lead={project.challenge}
      />
      <div className="shell grid items-start gap-8 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-10">
        <div className="min-w-0">
          <section className="rounded-md border border-line bg-surface p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-navy">Solution overview</h2>
            <p className="mt-3 text-sm text-muted">{project.solution}</p>
          </section>
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-navy sm:text-2xl">Capabilities</h2>
            <PointList items={project.capabilities} />
          </section>
          <section className="mt-10 flex items-start gap-4 rounded-md border border-dashed border-line bg-surface p-5">
            <IconTile icon={ImageOff} />
            <div>
              <h2 className="font-semibold text-navy">Screenshots</h2>
              <p className="mt-1 text-sm text-muted">Screenshots will be added when they are approved for publication. {project.note}</p>
            </div>
          </section>
        </div>
        <aside className="rounded-md border border-line bg-surface p-5 lg:sticky lg:top-24">
          <p className="text-xs font-semibold tracking-wide text-teal uppercase">{project.status}</p>
          <h2 className="mt-4 text-sm font-semibold tracking-wide text-muted uppercase">Technology</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((item) => (
              <li key={item} className="rounded-md border border-line bg-paper px-2.5 py-1 text-sm text-navy">{item}</li>
            ))}
          </ul>
          <Link href="/contact" className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white hover:bg-[#6b0f0f]">
            Explore this solution
          </Link>
        </aside>
      </div>
    </>
  );
}
