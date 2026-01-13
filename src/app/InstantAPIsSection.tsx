import Image from "next/image";

import { CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GraterIcon from "@/utils/icons/GraterIcon";
import {
  codeImage,
  codeImage2,
  codeImage3,
  codeImage4,
  codeImage5,
} from "@/utils/images";

const InstantAPIsSection = () => {
  return (
    <div className=" px-6 pt-64 md:max-w-[768px] lg:max-w-[1024px]  lg:px-16 xl:max-w-[1280px] xl:px-20 2xl:max-w-[1536px]">
      <div className=" grid grid-cols-12 lg:gap-16 ">
        <div className="col-span-12 pb-8 lg:col-span-5 xl:col-span-5">
          <h3 className=" text-2xl ">
            Powerful APIs for seamless broker integration
          </h3>
          <CardDescription className=" pt-5 text-lg text-foreground-light ">
            Connect to 40+ brokers with unified APIs. Execute trades, fetch market data, and manage positions with simple, consistent interfaces across all platforms.
          </CardDescription>
          <div className="flex w-full justify-between gap-10 pt-10">
            <div className="flex flex-col gap-2">
              <h2>Strategy Backtesting</h2>
              <CardDescription className="text-base text-foreground-light">
                Test your strategies on historical data before deploying live
              </CardDescription>
              <CardDescription className="flex items-center  gap-2 pb-5 text-sm text-foreground-light group-hover:text-foreground">
                Explore more <GraterIcon />
              </CardDescription>
            </div>
            <div className="flex flex-col gap-2">
              <h2>Paper Trading</h2>
              <CardDescription className="text-base text-foreground-light">
                Practice with virtual money before risking real capital
              </CardDescription>
              <CardDescription className="flex items-center  gap-2 pb-5 text-sm text-foreground-light group-hover:text-foreground">
                Explore more <GraterIcon />
              </CardDescription>
            </div>
          </div>{" "}
          <div className="flex w-full justify-between gap-10 pt-5">
            <div className="flex flex-col gap-2">
              <h2>Real-Time Alerts</h2>
              <CardDescription className="text-base text-foreground-light">
                Get instant notifications on trade executions and market events
              </CardDescription>
              <CardDescription className="flex items-center  gap-2 pb-5 text-sm text-foreground-light group-hover:text-foreground">
                Explore more <GraterIcon />
              </CardDescription>
            </div>
            <div className="flex flex-col gap-2">
              <h2>Performance Analytics</h2>
              <CardDescription className="text-base text-foreground-light">
                Track your trading performance with detailed analytics and reports
              </CardDescription>
              <CardDescription className="flex items-center  gap-2 pb-5 text-sm text-foreground-light group-hover:text-foreground">
                Explore more <GraterIcon />
              </CardDescription>
            </div>
          </div>
        </div>

        <div className=" col-span-12 lg:col-span-7 xl:col-span-6 xl:col-start-7">
          <div>
            <Tabs
              defaultValue="Create user"
              className="hide-s  w-full overflow-auto"
            >
              <TabsList>
                <TabsTrigger value="Create user">Place Order</TabsTrigger>
                <TabsTrigger value="Realtime subscriptions">
                  Market Data Stream
                </TabsTrigger>
                <TabsTrigger value="Create bucket">Get Positions</TabsTrigger>
                <TabsTrigger value="Invok Edge Function">
                  Deploy Strategy
                </TabsTrigger>
                <TabsTrigger value="CURD a record">Manage Portfolio</TabsTrigger>
              </TabsList>
              <TabsContent value="Create user">
                <Image
                  src={codeImage}
                  alt=""
                  className="overflow-hidden rounded-xl bg-black object-cover"
                />
              </TabsContent>
              <TabsContent value="Realtime subscriptions">
                <Image
                  src={codeImage2}
                  alt=""
                  className="overflow-hidden rounded-xl bg-black object-cover"
                />
              </TabsContent>
              <TabsContent value="Create bucket">
                <Image
                  src={codeImage3}
                  alt=""
                  className="overflow-hidden rounded-xl bg-black object-cover"
                />
              </TabsContent>
              <TabsContent value="Invok Edge Function">
                <Image
                  src={codeImage4}
                  alt=""
                  className="overflow-hidden rounded-xl bg-black object-cover"
                />
              </TabsContent>
              <TabsContent value="CURD a record">
                <Image
                  src={codeImage5}
                  alt=""
                  className="overflow-hidden rounded-xl bg-black object-cover"
                />
              </TabsContent>
            </Tabs>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default InstantAPIsSection;
