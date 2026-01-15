/* eslint-disable @typescript-eslint/member-delimiter-style */
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import NotificationToast from "@/components/shared/NotificationToast";
import CheckIcon from "@/utils/icons/CheckIcon";
import { InfinityLogo } from "@/utils/icons/InfinityLogo";
import DiscordIcon from "@/utils/icons/socialMedia/DiscordIcon";
import GithubIcon from "@/utils/icons/socialMedia/GithubIcon";
import TwitterIcon from "@/utils/icons/socialMedia/TwitterIcon";
import YoutubeIcon from "@/utils/icons/socialMedia/YoutubeIcon";

const menuItems = [
  {
    title: "Product",
    items: [
      "Chart Builder",
      "Strategy Editor",
      "Broker Connections",
      "Backtesting",
      "Paper Trading",
      "Risk Management",
      "Pricing",
      "Platform Status",
    ],
  },
  {
    title: "Resources",
    items: [
      "Support",
      "System Status",
      "Become a Partner",
      "Broker Integrations",
      "Trading Experts",
      "Brand Assets / Logos",
      "Security and Compliance",
      "DPA",
      "SOC2",
      "HIPAA",
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Disclaimer", href: "/legal/disclaimer" },
      { label: "Terms of Service", href: "/legal/terms-of-service" },
      { label: "Risk Disclosure", href: "/legal/risk-disclosure" },
      { label: "Cookies", href: "/legal/cookies" },
      { label: "Refund", href: "/legal/refund" },
    ],
  },
  {
    title: "Support",
    items: ["Email Us", "Contact Us"],
  },
];

const supportEmail = "support@viewmarket.in";

const FooterSection = () => {
  const [isNoticeVisible, setIsNoticeVisible] = useState(false);
  const [noticeText, setNoticeText] = useState("support email copied");
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showNotice = (text: string) => {
    setNoticeText(text);
    setIsNoticeVisible(true);

    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }

    hideTimerRef.current = setTimeout(() => {
      setIsNoticeVisible(false);
    }, 3000);
  };

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(supportEmail);
        showNotice("support email copied");
        return;
      }
    } catch {
      // Fall through to legacy clipboard approach.
    }

    try {
      const textarea = document.createElement("textarea");
      textarea.value = supportEmail;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      document.body.removeChild(textarea);
      showNotice(copied ? "support email copied" : "Unable to copy email");
    } catch {
      showNotice("Unable to copy email");
    }
  };

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  return (
    <div className=" w-full bg-background">
      <div className=" flex w-full flex-col gap-5 ">
        <div className="flex w-full flex-col justify-between gap-10 px-4 py-10 text-sm sm:flex-row sm:px-6 lg:px-10 xl:px-12 2xl:px-16 ">
          <div className="">
            We protect your data.
            <span className="bg-gradient-to-b from-foreground to-foreground-light bg-clip-text text-transparent">
              {" "}
              More on Security
            </span>
          </div>
          <div className="flex flex-col justify-center gap-2 md:flex-row md:items-center md:gap-8">
            <div className="flex gap-3 text-sm font-normal leading-none tracking-tight">
              <CheckIcon />
              SOC2 Type 2{" "}
              <span className="text-foreground-light">Certified</span>
            </div>
            <div className="flex gap-3 text-sm font-normal leading-none tracking-tight">
              <CheckIcon />
              HIPAA <span className="text-foreground-light">Certified</span>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"></div>
        <div className="sm:py-18 relative mx-auto w-full px-4 py-24 sm:px-6 md:py-24 lg:px-10 lg:py-24 xl:px-12 2xl:px-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <div className="flex items-center gap-2">
                <InfinityLogo size={32} />
                <span className="text-gradient text-xl font-semibold">
                  View Market
                </span>
              </div>
              <div className="flex items-center gap-5  text-muted-foreground">
                <a
                  className=" scale-110 transition-all hover:bg-gradient-to-b hover:from-foreground hover:to-foreground-light hover:bg-clip-text hover:text-transparent"
                  type="button"
                  href="https://x.com/KrinalSojitra"
                >
                  <TwitterIcon />
                </a>
                <a
                  className=" scale-110 transition-all hover:bg-gradient-to-b hover:from-foreground hover:to-foreground-light hover:bg-clip-text hover:text-transparent"
                  type="button"
                  href="https://github.com/KrinalSojitra21"
                >
                  <GithubIcon />
                </a>
                <a
                  className="transition-all hover:bg-gradient-to-b hover:from-foreground hover:to-foreground-light hover:bg-clip-text hover:text-transparent"
                  type="button"
                  href="https://github.com/KrinalSojitra21"
                >
                  <DiscordIcon />
                </a>
                <a
                  className="transition-all hover:bg-gradient-to-b hover:from-foreground hover:to-foreground-light hover:bg-clip-text hover:text-transparent"
                  type="button"
                  href="https://github.com/KrinalSojitra21"
                >
                  <YoutubeIcon />
                </a>
              </div>
            </div>
            <nav className="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {menuItems?.map((section) => (
                  <div
                    key={section.title}
                    className="flex flex-col gap-4 text-card-foreground"
                  >
                    <h2>{section.title}</h2>
                    <ul className="flex flex-col gap-2">
                      {section.items.map((item) => {
                        if (typeof item === "string") {
                          return (
                            <li
                              className="text-sm text-muted-foreground"
                              key={item}
                            >
                              {item === "Email Us" ? (
                                <button
                                  className="bg-transparent p-0 text-left text-sm text-muted-foreground transition-colors hover:text-foreground"
                                  type="button"
                                  onClick={handleCopyEmail}
                                  aria-label="Copy support email"
                                >
                                  {item}
                                </button>
                              ) : (
                                item
                              )}
                            </li>
                          );
                        }

                        return (
                          <li key={item.href}>
                            <Link
                              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                              href={item.href}
                            >
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </nav>
          </div>
          <div className="mt-32 w-full ">
            <div className=" border-t border-border pt-8 text-xs text-muted-foreground ">
              © View Market Inc
            </div>
          </div>
        </div>
      </div>
      <NotificationToast message={noticeText} visible={isNoticeVisible} />
    </div>
  );
};

export default FooterSection;
