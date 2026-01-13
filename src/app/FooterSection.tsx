/* eslint-disable @typescript-eslint/member-delimiter-style */
import Image from "next/image";

import CheckIcon from "@/utils/icons/CheckIcon";
import DiscordIcon from "@/utils/icons/socialMedia/DiscordIcon";
import GithubIcon from "@/utils/icons/socialMedia/GithubIcon";
import TwitterIcon from "@/utils/icons/socialMedia/TwitterIcon";
import YoutubeIcon from "@/utils/icons/socialMedia/YoutubeIcon";
import { logoDark } from "@/utils/images";

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
      "Privacy",
      "Disclaimer",
      "Terms of Service",
      "Risk Disclosure",
      "Cookies",
      "Refund",
    ],
  },
  {
    title: "Support",
    items: ["Email Us", "Contact Us"],
  },
];
const FooterSection = () => {
  return (
    <div className=" w-full bg-popover">
      <div className=" flex w-full flex-col gap-5 ">
        <div className="mx-auto flex w-full flex-col justify-between gap-10 px-6 py-10 text-sm sm:flex-row md:max-w-[768px] md:px-10 lg:max-w-[1024px] lg:px-16 xl:max-w-[1280px] xl:px-20 2xl:max-w-[1536px] ">
          <div className="">
            We protect your data.
            <span className="bg-gradient-to-b from-foreground to-foreground-light bg-clip-text text-transparent"> More on Security</span>
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
        <div className="sm:py-18 container relative mx-auto w-full px-6 py-24 md:max-w-[768px] md:py-24 lg:max-w-[1024px] lg:px-16 lg:py-24 xl:max-w-[1280px] xl:px-20 2xl:max-w-[1536px]">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Image
                className="z-0 h-8 w-auto object-cover"
                src={logoDark}
                alt=""
              />
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
                      {section.items.map((item) => (
                        <li
                          className=" text-sm text-muted-foreground"
                          key={item}
                        >
                          {item}
                        </li>
                      ))}
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
    </div>
  );
};

export default FooterSection;
