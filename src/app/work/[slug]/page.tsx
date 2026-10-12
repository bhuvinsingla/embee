import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="shell shell-narrow py-12 sm:py-16">
      <p className="text-sm text-muted">
        <Link href="/work" className="hover:text-teal">Our Work</Link> / {project.title}
      </p>
      <p className="mt-6 text-xs font-semibold tracking-wide text-teal uppercase">{project.category}</p>
      <h1 className="prose-title mt-2 font-semibold text-navy">{project.title}</h1>
      <p className="mt-3 text-sm font-medium text-gold">{project.status}</p>

      <h2 className="mt-10 text-xl font-semibold text-navy">Business challenge</h2>
      <p className="mt-3 text-muted">{project.challenge}</p>
      <h2 className="mt-8 text-xl font-semibold text-navy">Solution overview</h2>
      <p className="mt-3 text-muted">{project.solution}</p>
      <h2 className="mt-8 text-xl font-semibold text-navy">Capabilities</h2>
      <ul className="mt-3 grid gap-2 text-sm text-muted">
        {project.capabilities.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <h2 className="mt-8 text-xl font-semibold text-navy">Technology</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {project.technologies.map((item) => (
          <li key={item} className="rounded-md bg-paper px-2.5 py-1 text-sm">{item}</li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-muted">{project.note}</p>
      <p className="mt-4 text-sm text-muted">Screenshots will be added when they are approved for publication.</p>
      <Link href="/contact" className="mt-8 inline-flex rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white hover:bg-[#6b0f0f]">
        Explore this solution
      </Link>
    </article>
  );
}
