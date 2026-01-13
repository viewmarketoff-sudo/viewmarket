import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { viewmarketPosgress } from "@/utils/images";

const LegalHeader = () => {
  return (
    <header className="w-full border-b border-border bg-background">
      <div className="mx-auto flex h-16 w-full items-center justify-between px-6 md:max-w-[768px] lg:max-w-[1024px] lg:px-16 xl:max-w-[1280px] xl:px-20 2xl:max-w-[1536px]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-foreground-light transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card">
            <Image
              src={viewmarketPosgress}
              alt="Supabase"
              width={16}
              height={16}
            />
          </div>
          Supabase
        </div>
      </div>
    </header>
  );
};

export default LegalHeader;
