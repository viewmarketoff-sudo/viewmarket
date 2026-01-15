/* eslint-disable @typescript-eslint/member-delimiter-style */
import "./globals.css";
import { SunIcon } from "@radix-ui/react-icons";
import { HTMLAttributes, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CheckIcon from "@/utils/icons/CheckIcon";
import { cn } from "@/lib/utils";
import DatabaseIcon from "@/utils/icons/feature/DatabaseIcon";
import AuthenticationIcon from "@/utils/icons/feature/AuthenticationIcon";
import EdgeIcon from "@/utils/icons/feature/EdgeIcon";
import StorageIcon from "@/utils/icons/feature/StorageIcon";
import RealTimeIcon from "@/utils/icons/feature/RealTimeIcon";
import VectorIcon from "@/utils/icons/feature/VectorIcon";

function FeatureSection() {
  const ListItem = ({
    className,
    children,
    ...props
  }: {
    className?: string;
    children?: ReactNode;
    props?: HTMLAttributes<HTMLElement>;
  }) => (
    <li
      className={cn(
        "flex gap-2 text-sm font-normal leading-none tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </li>
  );
  return (
    <div className="flex w-full flex-col gap-3 overflow-hidden px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 ">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:gap-4 xl:gap-3 2xl:gap-6">
        <Card className="group relative col-span-6 flex h-[420px] w-full flex-col justify-between overflow-hidden lg:col-span-12 lg:flex-row xl:col-span-6">
          <div className="flex h-fit flex-col items-center justify-between  gap-5 p-7 lg:h-full  lg:w-[50%] lg:items-start ">
            <div className=" flex flex-col items-center gap-5 lg:items-start">
              <Button variant="outline" size="icon" className=" border-none">
                <DatabaseIcon />
              </Button>

              <CardHeader className="p-0">
                <CardTitle className=" text-center lg:text-start">
                  Chart-Based Strategies
                </CardTitle>
                <CardDescription className="text-center lg:text-start">
                  Deploy trading strategies directly from your charts with
                  visual automation tools.
                </CardDescription>
              </CardHeader>
            </div>
            <ul className="hidden flex-col gap-1 pb-5 pt-10 lg:block">
              <ListItem>
                <CheckIcon />
                Visual strategy builder
              </ListItem>
              <ListItem>
                <CheckIcon />
                Real-time chart analysis
              </ListItem>
              <ListItem>
                <CheckIcon />
                One-click deployment
              </ListItem>
            </ul>
          </div>
          <div className="relative h-full w-full px-6 pb-8 pt-6 lg:w-[50%]">
            <div className="relative h-full w-full overflow-hidden rounded-lg border border-border/70 bg-background/60">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
              <div className="absolute left-5 top-5 flex gap-2">
                <span className="rounded-full border border-border bg-background px-2 py-1 text-[10px] uppercase tracking-wide text-muted-foreground">
                  Signal
                </span>
                <span className="rounded-full border border-border bg-background px-2 py-1 text-[10px] uppercase tracking-wide text-muted-foreground">
                  Trigger
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex h-32 items-end gap-2">
                <span className="h-6 w-3 rounded-sm bg-foreground/20" />
                <span className="h-10 w-3 rounded-sm bg-foreground/30" />
                <span className="h-14 w-3 rounded-sm bg-foreground/40" />
                <span className="h-9 w-3 rounded-sm bg-foreground/25" />
                <span className="h-16 w-3 rounded-sm bg-foreground/50" />
                <span className="h-11 w-3 rounded-sm bg-foreground/35" />
                <span className="h-20 w-3 rounded-sm bg-foreground/60" />
              </div>
              <div className="absolute bottom-20 left-6 right-6 h-px bg-gradient-to-r from-transparent via-foreground/60 to-transparent" />
              <div className="absolute bottom-[78px] left-10 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-foreground" />
                <span className="h-px w-10 bg-foreground/60" />
                <span className="h-3 w-3 rounded-full border border-foreground bg-background" />
                <span className="h-px w-12 bg-foreground/60" />
                <span className="h-3 w-3 rounded-full bg-foreground/70" />
              </div>
              <div className="absolute right-6 top-14 rounded-md border border-border bg-background/80 px-3 py-2 text-[11px] text-muted-foreground">
                RSI &lt; 30 → Buy
              </div>
            </div>
          </div>
        </Card>
        <Card className="group col-span-6 flex h-[420px] flex-col items-center justify-between gap-5 overflow-clip pt-7 xl:col-span-3">
          <div className=" flex flex-col items-center gap-5">
            {" "}
            <Button variant="outline" size="icon" className=" border-none">
              <AuthenticationIcon />
            </Button>
            <CardHeader className="px-5 py-0 text-center  ">
              <CardTitle>Direct Broker Connections</CardTitle>
              <CardDescription className="">
                Connect directly to 40+ brokers across Indian, Forex, and Crypto
                markets without third-party platforms.
              </CardDescription>
            </CardHeader>
          </div>
          <div className="relative flex w-full flex-1 items-center justify-center pb-6">
            <div className="relative h-40 w-full max-w-[220px]">
              <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold">
                VM
              </div>
              <span className="absolute left-6 top-4 h-8 w-8 rounded-full border border-border bg-background text-[10px] font-semibold text-muted-foreground" />
              <span className="absolute right-4 top-10 h-9 w-9 rounded-full border border-border bg-background text-[10px] font-semibold text-muted-foreground" />
              <span className="absolute bottom-8 left-2 h-9 w-9 rounded-full border border-border bg-background text-[10px] font-semibold text-muted-foreground" />
              <span className="absolute bottom-6 right-8 h-8 w-8 rounded-full border border-border bg-background text-[10px] font-semibold text-muted-foreground" />
              <span className="absolute left-[45%] top-[35%] h-px w-10 -rotate-[20deg] bg-border" />
              <span className="absolute right-[32%] top-[45%] h-px w-10 rotate-[20deg] bg-border" />
              <span className="absolute bottom-[38%] left-[40%] h-px w-12 rotate-[25deg] bg-border" />
              <span className="absolute bottom-[34%] right-[36%] h-px w-10 -rotate-[20deg] bg-border" />
              <div className="absolute left-4 top-14 rounded-full border border-border bg-background px-2 py-1 text-[10px] text-muted-foreground">
                NSE
              </div>
              <div className="absolute right-2 top-2 rounded-full border border-border bg-background px-2 py-1 text-[10px] text-muted-foreground">
                FX
              </div>
              <div className="absolute bottom-2 left-1 rounded-full border border-border bg-background px-2 py-1 text-[10px] text-muted-foreground">
                CRYPTO
              </div>
              <div className="absolute bottom-8 right-6 rounded-full border border-border bg-background px-2 py-1 text-[10px] text-muted-foreground">
                NSEFO
              </div>
            </div>
          </div>
        </Card>
        <Card className="group relative col-span-6 flex h-[420px] flex-col items-center gap-5 overflow-clip pt-7 xl:col-span-3">
          <Button variant="outline" size="icon" className=" border-none">
            <EdgeIcon />
          </Button>
          <CardHeader className="z-10 px-5 py-0 text-center  ">
            <CardTitle>Automated Execution</CardTitle>

            <CardDescription className="">
              Execute trades automatically based on your strategies with
              millisecond precision across all connected brokers.
            </CardDescription>
          </CardHeader>
          <div className="flex w-full flex-1 flex-col items-center justify-end gap-4 pb-10">
            <div className="flex w-[70%] flex-col gap-3">
              <div className="flex items-center gap-3 rounded-lg border border-border bg-background/70 px-4 py-3 text-xs text-muted-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/60" />
                Signal detected
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-background/70 px-4 py-3 text-xs text-muted-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/80" />
                Order queued · 12ms
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-foreground/60 bg-foreground/5 px-4 py-3 text-xs text-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground" />
                Execution confirmed
              </div>
            </div>
            <div className="relative h-14 w-px bg-gradient-to-b from-transparent via-foreground/70 to-transparent">
              <span className="absolute left-1/2 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-foreground shadow-[0_0_10px_hsl(var(--foreground))]" />
            </div>
          </div>
        </Card>
        <Card className="group col-span-6 flex h-[420px] flex-col items-center gap-5 overflow-clip px-7 pt-7 xl:col-span-3">
          <Button variant="outline" size="icon" className=" border-none">
            <StorageIcon />
          </Button>
          <CardHeader className="p-0 text-center ">
            <CardTitle>Portfolio Management</CardTitle>
            <CardDescription className="">
              Track and manage your positions, orders, and performance across
              all brokers in one unified dashboard.
            </CardDescription>
          </CardHeader>
          <div className="flex w-full flex-1 flex-col gap-4 pb-6">
            <div className="rounded-xl border border-border bg-background/70 p-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Unified Portfolio</span>
                <span className="rounded-full border border-border px-2 py-1 text-[10px]">
                  +4.8%
                </span>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-full border border-border">
                  <span className="absolute inset-2 rounded-full border-2 border-foreground" />
                </div>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-foreground" />
                    Equity
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-foreground/40" />
                    Crypto
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-foreground/20" />
                    Forex
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-background/70 p-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Open Positions</span>
                <span className="text-foreground">12</span>
              </div>
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>BTCUSD</span>
                  <span className="text-foreground">+2.1%</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>NIFTY50</span>
                  <span className="text-foreground">+0.7%</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <Card className="group relative col-span-6 flex h-[420px] flex-col items-center justify-start gap-5 overflow-clip p-7 xl:col-span-3">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--foreground)/0.12),transparent_60%)]" />
          <div className="group z-10 flex h-fit flex-col items-center gap-5 overflow-clip">
            <Button variant="outline" size="icon" className=" border-none">
              <RealTimeIcon />
            </Button>
            <CardHeader className="p-0 text-center ">
              <CardTitle>Real-Time Market Data</CardTitle>
              <CardDescription className="">
                Access live market data, price feeds, and order book updates
                with real-time synchronization.
              </CardDescription>
            </CardHeader>
          </div>
          <div className="z-10 mt-auto w-full">
            <div className="flex items-center justify-between rounded-full border border-border bg-background/70 px-4 py-2 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-foreground" />
                Live feed
              </span>
              <span>Latency 18ms</span>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {[
                { label: "BTC", value: "+1.2%" },
                { label: "EURUSD", value: "-0.3%" },
                { label: "NIFTY", value: "+0.8%" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] text-muted-foreground"
                >
                  {item.label} ·{" "}
                  <span className="text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
        <Card className="relative col-span-6 flex h-[420px] w-full justify-between lg:col-span-12 xl:col-span-6">
          <div className="flex w-full flex-col  justify-between gap-5 p-7 lg:w-[50%]">
            <div className=" flex flex-col items-center gap-5 lg:items-start">
              <Button variant="outline" size="icon" className=" border-none">
                <VectorIcon />
              </Button>

              <CardHeader className="p-0">
                <CardTitle className="text-center lg:text-start">
                  Risk Management
                </CardTitle>
                <CardDescription className="text-center lg:max-w-[50%] lg:text-start">
                  Built-in risk controls with stop-loss, position sizing, and
                  exposure limits to protect your capital.
                </CardDescription>
              </CardHeader>
            </div>
            <ul className="hidden flex-col gap-2 pb-5 pt-10 lg:flex ">
              <ListItem>
                <SunIcon className=" h-4 w-4" />
                Stop Loss & Take Profit
              </ListItem>
              <ListItem>
                <SunIcon className=" h-4 w-4" />
                Position Sizing
              </ListItem>
            </ul>
          </div>
          <div className="relative flex h-full w-full items-center justify-center px-6 pb-8 lg:w-[50%]">
            <div className="relative h-56 w-full max-w-[260px] rounded-xl border border-border bg-background/70 p-5">
              <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                <span>Risk Caps</span>
                <span className="rounded-full border border-border px-2 py-1 text-[10px]">
                  Protected
                </span>
              </div>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="mb-1 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>Stop Loss</span>
                    <span className="text-foreground">-1.5%</span>
                  </div>
                  <div className="h-2 rounded-full bg-border">
                    <div className="h-2 w-1/2 rounded-full bg-foreground" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>Position Size</span>
                    <span className="text-foreground">25%</span>
                  </div>
                  <div className="h-2 rounded-full bg-border">
                    <div className="h-2 w-1/3 rounded-full bg-foreground/70" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>Exposure</span>
                    <span className="text-foreground">62%</span>
                  </div>
                  <div className="h-2 rounded-full bg-border">
                    <div className="h-2 w-2/3 rounded-full bg-foreground/80" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-background">
                <span className="h-5 w-5 rounded-full border-2 border-foreground" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default FeatureSection;
