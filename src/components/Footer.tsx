import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-card-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <p className="font-mono text-xs text-muted">
          Designed &amp; Built by Alexander Zylla
        </p>
        <Link
          href="/imprint"
          className="font-mono text-xs text-muted hover:text-foreground transition-colors"
        >
          Imprint
        </Link>
      </div>
    </footer>
  );
}
