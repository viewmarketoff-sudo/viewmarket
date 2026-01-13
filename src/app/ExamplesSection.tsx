import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import DenoIcon from "@/utils/icons/DenoIcon";
import FlutterIcon from "@/utils/icons/FlutterIcon";
import LangChainIcon from "@/utils/icons/LangChainIcon";
import NextJsIcon from "@/utils/icons/NextJsIcon";
import OpenAIIcon from "@/utils/icons/OpenAIIcon";
import GithubIcon from "@/utils/icons/socialMedia/GithubIcon";
import StripeIcon from "@/utils/icons/StripeIcon";
import VercelIcon from "@/utils/icons/VercelIcon";
import { checBoxesBg } from "@/utils/images";

const exampleList = [
  {
    name: "Algorithmic Trading Starter",
    desc: "Complete algo trading setup with strategy builder, backtesting, and live execution across multiple brokers.",
    icons: [
      <NextJsIcon key={0} />,
      <StripeIcon key={1} />,
      <VercelIcon key={2} />,
    ],
  },
  {
    name: "Options Strategy Builder",
    desc: "Build and deploy complex options strategies with real-time Greeks calculation and risk analysis.",
    icons: [<NextJsIcon key={0} />, <VercelIcon key={1} />],
  },
  {
    name: "Multi-Broker Dashboard",
    desc: "Unified dashboard template to manage positions, orders, and P&L across all your connected brokers.",
    icons: [
      <NextJsIcon key={0} />,
      <OpenAIIcon key={1} />,
      <VercelIcon key={2} />,
    ],
  },
  {
    name: "Chart Pattern Scanner",
    desc: "Automated pattern recognition system that scans charts and triggers trades based on technical setups.",
    icons: [<LangChainIcon key={0} />, <NextJsIcon key={1} />],
  },
  {
    name: "Mobile Trading App",
    desc: "Full-featured mobile trading app with chart-based strategy deployment and real-time notifications.",
    icons: [<FlutterIcon key={0} />],
  },
  {
    name: "Crypto Arbitrage Bot",
    desc: "Cross-exchange arbitrage bot template with real-time price monitoring and automated execution.",
    icons: [<DenoIcon key={0} />],
  },
];

const ExamplesSection = () => {
  return (
    <div className="flex w-full flex-col gap-4 px-6 md:max-w-[768px] lg:max-w-[1024px]  lg:px-16 xl:max-w-[1280px] xl:px-20 2xl:max-w-[1536px]">
      <div className=" flex flex-col gap-5 pt-20">
        <div className=" flex flex-col items-center gap-5">
          <div className=" text-4xl text-white ">Start trading in minutes</div>
          <CardDescription className="text-base text-foreground-light">
            Launch your automated trading strategies with templates built for financial markets.
          </CardDescription>

          <div className="flex scale-90 gap-5 sm:scale-100">
            <Button variant="outline" className="bg-card" size="sm">
              View all templates
            </Button>
            <Button variant="outline" className="bg-card" size="sm">
              <div className=" pr-2 text-foreground">
                <GithubIcon />
              </div>{" "}
              Official GitHub library
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-12 gap-5">
            {exampleList?.map((data, index) => {
              return (
                <Card
                  key={index}
                  className="false group group col-span-12 flex flex-col justify-between gap-4 overflow-clip hover:border-muted-foreground lg:col-span-6 xl:col-span-4"
                >
                  <div className="relative flex  aspect-[3/1]  items-center justify-center overflow-hidden ">
                    <Image
                      src={checBoxesBg}
                      alt=""
                      className="absolute z-0 h-full w-full overflow-hidden  object-cover"
                    />
                    <div className=" z-10 m-auto flex scale-110 gap-5">
                      {data?.icons?.map((Icon) => Icon)}
                    </div>
                  </div>
                  <div className=" px-5  pt-2 text-base font-medium text-foreground">
                    {data.name}
                  </div>
                  <CardDescription className=" pb-1 pl-5 pr-7">
                    &quot;{data.desc}&quot;
                  </CardDescription>
                  <CardDescription className="flex gap-2 px-5 pb-5 text-xs group-hover:text-foreground">
                    View Template{" "}
                    <span className=" ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-up-right  inset-0 h-3.5 w-3.5 translate-x-0 translate-y-0 transition-transform duration-200 group-hover/panel:-translate-y-6 group-hover/panel:translate-x-6"
                      >
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </span>
                  </CardDescription>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplesSection;
