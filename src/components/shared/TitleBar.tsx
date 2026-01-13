"use client";
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { logoDark, structure1, structure2, structure3 } from "@/utils/images";
import DatabaseIcon from "@/utils/icons/feature/DatabaseIcon";
import AuthenticationIcon from "@/utils/icons/feature/AuthenticationIcon";
import EdgeIcon from "@/utils/icons/feature/EdgeIcon";
import StorageIcon from "@/utils/icons/feature/StorageIcon";
import RealTimeIcon from "@/utils/icons/feature/RealTimeIcon";
import VectorIcon from "@/utils/icons/feature/VectorIcon";

import { Button } from "../ui/button";

import MobileMenu from "./MobileMenu"; // Create this component

const list = [
  {
    icon: structure1,
    desc: "Leading prop trading firm achieves 10x faster execution with View Market's direct broker integration",
  },
  {
    icon: structure2,
    desc: "Retail trader scales from manual to fully automated trading across 15 brokers in 3 months",
  },
  {
    icon: structure3,
    desc: "Hedge fund migrates from TradingView to View Market for chart-based strategy deployment",
  },
];
const menuItems = [
  {
    icon: <DatabaseIcon />,
    title: "Chart Builder",
    description: "Visual strategy deployment from charts",
  },
  {
    icon: <AuthenticationIcon />,
    title: "Broker Connections",
    description: "40+ integrated brokers worldwide",
  },
  {
    icon: <StorageIcon />,
    title: "Portfolio Management",
    description: "Unified dashboard for all positions",
  },
  {
    icon: <EdgeIcon />,
    title: "Automated Execution",
    description: "Deploy strategies with one click",
  },
  {
    icon: <RealTimeIcon />,
    title: "Real-Time Data",
    description: "Live market feeds and updates",
  },
  {
    icon: <VectorIcon />,
    title: "Risk Management",
    description: "Built-in controls to protect capital",
  },
];

const Developers = ["Documentation", "Integrations", "Changelog", "Support"];
const resources = [
  "Open Source",
  "GitHub Discussions",
  "Become a Partner",
  "Careers",
];
const blog = [
  {
    title: "Automated Options Trading with View Market",
    desc: "Learn how to deploy complex options strategies using our chart-based builder.",
  },
  {
    title: "Multi-Broker Arbitrage Strategies",
    desc: "Discover how to execute arbitrage opportunities across multiple brokers simultaneously.",
  },
];
const CustomerStoryItem = ({ logo, title }: any) => (
  <div className="group flex items-start">
    <div className="  mr-3 flex  aspect-video w-40 flex-shrink-0  items-center justify-center overflow-hidden rounded-md border border-border bg-popover p-5 group-hover:border-foreground-light">
      {typeof logo === "object" ? <Image src={logo} alt={title} /> : logo}
    </div>

    <div className="flex h-full items-center self-center text-sm font-medium text-foreground-light group-hover:text-foreground">
      {title}
    </div>
  </div>
);

const ComparisonLink = ({ text }: any) => (
  <a href="#" className="block text-sm text-foreground-light hover:underline">
    {text}
  </a>
);

const TitleBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fixed z-20 h-16 w-full border-b border-border bg-background ">
      <nav className="mx-auto h-full w-full px-6 sm:px-0 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
        <div className="mx-auto flex h-full w-full items-center justify-between lg:px-16 xl:px-20">
          <div className=" flex gap-8 ">
            <a
              className="focus-visible:ring-foreground-lighter focus-visible:ring-offset-background-alternative block  focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4"
              type="button"
              href="/"
            >
              <Image
                className="z-0 h-6 w-auto  object-cover "
                src={logoDark}
                alt=""
              />
            </a>

            <div className="hidden lg:flex">
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>
                    Product
                    <div className="pt-0.5 ">
                      <ChevronDown size={12} />
                    </div>
                  </MenubarTrigger>
                  <MenubarContent className=" max-w-[900px]">
                    <div className="flex">
                      <div className="flex min-w-[40%] flex-none flex-col justify-between p-10">
                        {menuItems.map((item) => (
                          <div className="flex items-center">
                            <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-md bg-card  ">
                              {item.icon}
                            </div>
                            <div>
                              <div className="text-sm font-semibold">
                                {item.title}
                              </div>
                              <div className=" text-sm text-gray-500">
                                {item.description}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex-grow  bg-card p-10 ">
                        <div className="mb-6">
                          <h3 className="mb-4 text-sm font-semibold text-gray-500">
                            CUSTOMER STORIES
                          </h3>
                          <div className="space-y-4">
                            {list.map((item) => {
                              return (
                                <CustomerStoryItem
                                  logo={item.icon}
                                  title={item.desc}
                                />
                              );
                            })}
                          </div>
                        </div>

                        <div>
                          <h3 className="mb-4 text-sm font-semibold text-gray-500">
                            COMPARE VIEW MARKET
                          </h3>
                          <div className="space-y-2">
                            <ComparisonLink text="View Market vs TradingView" />
                            <ComparisonLink text="View Market vs MetaTrader" />
                            <ComparisonLink text="View Market vs Streak" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </MenubarContent>
                  {/* <MenubarContent>
                  <MenubarItem>
                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    New Window <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>New Incognito Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Email link</MenubarItem>
                      <MenubarItem>Messages</MenubarItem>
                      <MenubarItem>Notes</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    Print... <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent> */}
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>
                    Developers
                    <div className="pt-0.5 ">
                      <ChevronDown size={12} />
                    </div>
                  </MenubarTrigger>
                  <MenubarContent className=" max-w-[900px]">
                    <div className=" mx-auto flex  w-full bg-card ">
                      <div className=" w-[35%] bg-background p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-500">
                          DEVELOPERS
                        </h3>
                        {Developers.map((data, index) => {
                          return (
                            <div>
                              <a
                                key={index}
                                href="#"
                                className="hover:text-white"
                              >
                                {data}
                              </a>
                            </div>
                          );
                        })}
                      </div>

                      <div className="w-[35%] bg-background p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-500">
                          RESOURCES
                        </h3>
                        {resources.map((data, index) => {
                          return (
                            <div>
                              <a
                                key={index}
                                href="#"
                                className="hover:text-white"
                              >
                                {data}
                              </a>
                            </div>
                          );
                        })}
                      </div>

                      <div className=" space-y-5 bg-card p-5">
                        <h3 className="mb-4 text-sm font-semibold text-gray-500">
                          BLOG
                        </h3>
                        {blog.map((data, index) => (
                          <div key={index}>
                            <a href="#" className="hover:text-white">
                              <h3 className="font-medium">{data.title} </h3>
                              <p className="text-sm text-gray-400">
                                {data.desc}
                              </p>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Pricing</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Docs</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Blog</MenubarTrigger>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <Button size="sm" variant="outline" className="h-10 px-5" asChild>
              <Link href="/sign-in">Sign-in</Link>
            </Button>
            {/* <ModeToggle /> */}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="bg-gradient-to-b from-foreground to-foreground-light bg-clip-text text-transparent lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </Button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <MobileMenu onClose={() => setMobileMenuOpen(false)} />
      )}
    </div>
  );
};

export default TitleBar;
