import LegalSideNav from "./LegalSideNav";
import LegalHeader from "./LegalHeader";

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full bg-background">
      <LegalHeader />
      <main className="w-full px-4 pb-24 pt-12 sm:px-6 lg:px-10 lg:pt-16 xl:px-12 2xl:px-16">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit rounded-2xl border border-border bg-card/60 p-6">
            <LegalSideNav />
          </aside>
          <section className="rounded-2xl border border-border bg-card/40 p-6 sm:p-10">
            <div className="mx-auto w-full max-w-3xl">{children}</div>
          </section>
        </div>
      </main>
    </div>
  );
}
