import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Imprint | Alexander Zylla",
};

export default function ImprintPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32">
      <Link
        href="/"
        className="mb-12 inline-block font-mono text-sm text-accent hover:text-accent-light transition-colors"
      >
        &larr; Back
      </Link>

      <h1 className="mb-8 text-3xl font-bold text-foreground">Imprint</h1>

      <section className="space-y-6 text-sm leading-relaxed text-muted">
        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Information according to &sect; 5 TMG
          </h2>
          <p>
            Alexander Zylla
            <br />
            Klapperstra&szlig;e 57
            <br />
            45277 Essen
            <br />
            Germany
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Contact
          </h2>
          <p>
            Email: dev.azylla@gmail.com
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Liability for Content
          </h2>
          <p>
            As a service provider, I am responsible for my own content on these
            pages in accordance with general laws pursuant to &sect; 7 (1) TMG.
            According to &sect;&sect; 8 to 10 TMG, however, I am not obligated
            as a service provider to monitor transmitted or stored third-party
            information or to investigate circumstances that indicate illegal
            activity.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Liability for Links
          </h2>
          <p>
            This site contains links to external third-party websites over whose
            content I have no influence. I therefore cannot accept any liability
            for this external content. The respective provider or operator of the
            linked pages is always responsible for their content.
          </p>
        </div>
      </section>
    </main>
  );
}
