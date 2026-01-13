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
      <main className="mx-auto w-full px-6 pb-24 pt-12 md:max-w-[768px] lg:max-w-[1024px] lg:px-16 lg:pt-16 xl:max-w-[1280px] xl:px-20 2xl:max-w-[1536px]">
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
