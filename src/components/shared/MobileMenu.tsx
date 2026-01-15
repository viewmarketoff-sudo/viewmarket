import React from "react";
import Link from "next/link";
import { X } from "lucide-react";

import { InfinityLogo } from "@/utils/icons/InfinityLogo";

import { Button } from "../ui/button";

const MobileMenu = ({ onClose }: any) => {
  return (
    <div className="fixed inset-0 z-50 bg-card lg:hidden   ">
      <div className="flex h-14 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <InfinityLogo size={24} />
          <span className="text-gradient text-base font-semibold">
            View Market
          </span>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X />
        </Button>
      </div>
      <nav className="p-6">
        <ul className="">
          <h3 className="border-b border-border py-2 pl-3 pr-4">Product</h3>
          <h3 className=" border-b border-border py-2 pl-3 pr-4">Developers</h3>
          <Link
            href="/pricing"
            className="block border-b border-border py-2 pl-3 pr-4 hover:text-foreground"
          >
            Pricing
          </Link>
          <h3 className=" border-b border-border py-2 pl-3 pr-4">Docs</h3>
          <h3 className=" border-b border-border py-2 pl-3 pr-4">Blog</h3>
        </ul>
      </nav>
      <div className="absolute bottom-0 left-0 right-0 flex gap-5 bg-background p-4">
        <Button className="w-full text-xs" size="sm">
          Sign in
        </Button>
        <Button className="w-full text-xs" size="sm">
          Start your project
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
