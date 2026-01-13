import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import MessageIcon from "@/utils/icons/MessageIcon";
import TwitterIcon from "@/utils/icons/socialMedia/TwitterIcon";
import {
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  person7,
  person8,
  person9,
} from "@/utils/images";

const personList1 = [
  {
    img: person1,
    name: "@trader_pro",
    desc: "Working with @viewmarket has been incredible. Set up my first automated strategy in under an hour. The direct broker connections are a game-changer - no more dealing with third-party platforms!",
  },
  {
    img: person2,
    name: "@AlgoTrader_IN",
    desc: "@viewmarket is just 🤯 The chart-based strategy builder is so intuitive. I can literally draw my trades on the chart and deploy them live. This is the future of trading automation! #algotrading #automation",
  },
];

const personList2 = [
  {
    img: person3,
    name: "@crypto_whale",
    desc: "I've been using @viewmarket for crypto arbitrage and it's amazing being able to connect to multiple exchanges and execute strategies automatically without writing complex code",
  },
  {
    img: person4,
    name: "@options_master",
    desc: "Y'all @viewmarket + options strategies is amazing! 🙌 Deployed my first iron condor automation in less than an hour. The backtesting feature saved me from a bad strategy. 🤯🤯🤯",
  },
  {
    img: person5,
    name: "@forex_ninja",
    desc: "And thanks to @viewmarket, I was able to go from manual trading to fully automated forex strategies in a matter of days. The 40+ broker integrations are absolutely amazing!",
  },
];

const personList3 = [
  {
    img: person6,
    name: "@nifty_trader",
    desc: "The Indian broker integrations are seamless! Connected my Zerodha, Upstox, and Angel One accounts in minutes. View Market makes multi-broker trading so easy✌🏼",
  },
  {
    img: person7,
    name: "@DayTraderPro",
    desc: "Holy crap. @viewmarket is absolutely incredible. Most elegant trading automation platform I've ever used. Chart-based deployment is a dream come true.",
  },
];

const personList4 = [
  {
    img: person8,
    name: "@QuantTrader",
    desc: "Migrated all my TradingView strategies to @viewmarket and couldn't be happier. The direct broker execution without third-party platforms means faster fills and lower costs. Best decision I made this year 😅",
  },
  {
    img: person9,
    name: "@swing_trader",
    desc: "Using @viewmarket I'm really pleased with the power of automated trading. The risk management features give me peace of mind. I can set stop losses and position sizes, and the platform handles everything.",
  },
];

const CommunitySection: React.FC = () => {
  return (
    <div className="flex w-full flex-col gap-4 px-6 md:max-w-[768px] lg:max-w-[1024px] lg:px-16 xl:max-w-[1280px] xl:px-20 2xl:max-w-[1536px] ">
      <div className="flex flex-col gap-5 pt-20">
        <div className="flex flex-col items-center gap-4">
          <div className="text-4xl text-white">Join the trading community</div>
          <CardDescription className="text-base text-foreground-light">
            Connect with traders, share strategies, and learn from a growing community of automation enthusiasts.
          </CardDescription>

          <div className="flex gap-5">
            <Button
              variant="outline"
              className="border-border bg-card p-3"
              size="sm"
            >
              Community Forum{" "}
              <div className="pl-2 text-foreground">
                <MessageIcon />
              </div>
            </Button>
            <Button
              variant="outline"
              className="border-border bg-card p-3"
              size="sm"
            >
              Discord{" "}
              <div className="pl-2 text-foreground">
                <MessageIcon />
              </div>
            </Button>
          </div>
        </div>
        <div className="relative columns-1 gap-4 overflow-hidden transition-all sm:columns-2 lg:columns-3 xl:columns-4">
          {/* <div className=" break-inside-avoid-column"> */}
          {personList1.map((data, index) => (
            <Card
              key={index}
              className="group relative mb-4 flex  break-inside-avoid-column flex-col gap-4 overflow-clip p-5"
            >
              <div className="flex items-center gap-5">
                <div className="relative">
                  <Image
                    src={data.img}
                    alt=""
                    className="z-0 h-10 w-10 rounded-full object-cover"
                  />
                  <div className="absolute left-[-16px] top-[-14px] z-10 scale-[0.6] overflow-hidden rounded-full bg-black p-2.5">
                    <TwitterIcon />
                  </div>
                </div>
                <div className="text-sm font-medium text-foreground">
                  {data.name}
                </div>
              </div>
              <CardDescription className="text-base text-[#707070]">
                &quot;{data.desc}&quot;
              </CardDescription>
            </Card>
          ))}
          {/* </div>
          <div className=" break-inside-avoid-column"> */}
          {personList2.map((data, index) => (
            <Card
              key={index}
              className="group relative mb-4 flex  break-inside-avoid-column flex-col gap-4 overflow-clip p-5"
            >
              <div className="flex items-center gap-5">
                <div className="relative">
                  <Image
                    src={data.img}
                    alt=""
                    className="z-0 h-10 w-10 rounded-full object-cover"
                  />
                  <div className="absolute left-[-16px] top-[-14px] z-10 scale-[0.6] overflow-hidden rounded-full bg-black p-2.5">
                    <TwitterIcon />
                  </div>
                </div>
                <div className="text-sm font-medium text-foreground">
                  {data.name}
                </div>
              </div>
              <CardDescription className="text-base text-[#707070]">
                &quot;{data.desc}&quot;
              </CardDescription>
            </Card>
          ))}
          {/* </div>
          <div className=" break-inside-avoid-column"> */}
          {personList3.map((data, index) => (
            <Card
              key={index}
              className="group relative mb-4 flex  break-inside-avoid-column flex-col gap-4 overflow-clip p-5"
            >
              <div className="flex items-center gap-5">
                <div className="relative">
                  <Image
                    src={data.img}
                    alt=""
                    className="z-0 h-10 w-10 rounded-full object-cover"
                  />
                  <div className="absolute left-[-16px] top-[-14px] z-10 scale-[0.6] overflow-hidden rounded-full bg-black p-2.5">
                    <TwitterIcon />
                  </div>
                </div>
                <div className="text-sm font-medium text-foreground">
                  {data.name}
                </div>
              </div>
              <CardDescription className="text-base text-[#707070]">
                &quot;{data.desc}&quot;
              </CardDescription>
            </Card>
          ))}
          {/* </div>
          <div className=" break-inside-avoid-column"> */}
          {personList4.map((data, index) => (
            <Card
              key={index}
              className="group relative mb-4 flex  break-inside-avoid-column flex-col gap-5 overflow-clip p-5"
            >
              <div className="flex items-center gap-5">
                <div className="relative">
                  <Image
                    src={data.img}
                    alt=""
                    className="z-0 h-10 w-10 rounded-full object-cover"
                  />
                  <div className="absolute left-[-16px] top-[-14px] z-10 scale-[0.6] overflow-hidden rounded-full bg-black p-2.5">
                    <TwitterIcon />
                  </div>
                </div>
                <div className="text-sm font-medium text-foreground">
                  {data.name}
                </div>
              </div>
              <CardDescription className="text-base text-[#707070]">
                &quot;{data.desc}&quot;
              </CardDescription>
            </Card>
          ))}
          {/* </div> */}
          <div className="absolute bottom-0 left-0 z-10 h-[400px] w-full bg-gradient-to-t from-background via-[#1c1c1c00]"></div>
        </div>

        <div className="flex w-full justify-center py-20">
          <Button variant="outline" className="w-fit bg-card" size="sm">
            Show More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
