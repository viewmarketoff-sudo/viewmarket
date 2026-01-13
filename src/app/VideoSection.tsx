import { CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GraterIcon from "@/utils/icons/GraterIcon";

const VideoSection = () => {
  return (
    <div className="flex w-full flex-col gap-5 px-6 pt-48 md:max-w-[768px] lg:max-w-[1024px] lg:px-16 xl:max-w-[1280px] xl:px-20 2xl:max-w-[1536px]">
      <h3 className=" pb-14 text-2xl ">
        Complete trading platform in your browser
      </h3>
      <Tabs defaultValue="Table editor" className="h-full">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row ">
          <div className="relative aspect-video lg:w-[50%]">
            <TabsContent
              value="Table editor"
              className="relative h-full w-full  "
            >
              <iframe
                title="Demo video showcasing View Market"
                className="l-0 r-0 absolute h-full w-full overflow-hidden rounded-md  border border-border bg-black "
                src="https://www.youtube.com/embed/xIHjwJgxOmk?si=OA4AnxU6hZDYQb1z&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;disablekb=1&amp;mute=1&amp;muted=1"
                allow="autoplay; modestbranding; encrypted-media"
                loading="lazy"
              ></iframe>
            </TabsContent>
            <TabsContent
              value="SQL Editor"
              className="relative aspect-video h-full w-full "
            >
              <iframe
                title="Demo video showcasing View Market"
                className="l-0 r-0 absolute h-full w-full overflow-hidden rounded-md  border border-border bg-black "
                src="https://www.youtube.com/embed/Hch1mZPZ53A?si=LAH_BB756M1OSWpT&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;disablekb=1&amp;mute=1&amp;muted=1"
                allow="autoplay; modestbranding; encrypted-media"
                loading="lazy"
              ></iframe>
            </TabsContent>
            <TabsContent
              value="Auth rules"
              className="relative aspect-video h-full w-full "
            >
              <iframe
                title="Demo video showcasing View Market"
                className="l-0 r-0 absolute h-full w-full overflow-hidden rounded-md  border border-border bg-black "
                src="https://www.youtube.com/embed/vP319FCIZ6Y?si=QET9fpysJRKQcmRi&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;disablekb=1&amp;mute=1&amp;muted=1"
                allow="autoplay; modestbranding; encrypted-media"
                loading="lazy"
              ></iframe>
            </TabsContent>
          </div>
          <div className=" flex flex-col gap-3 overflow-hidden pt-5 lg:w-[40%]">
            <div>
              <TabsList className="">
                <TabsTrigger value="Table editor" variant="underline">
                  Chart Builder
                </TabsTrigger>
                <TabsTrigger value="SQL Editor" variant="underline">
                  Strategy Editor
                </TabsTrigger>
                <TabsTrigger value="Auth rules" variant="underline">
                  Broker Connections
                </TabsTrigger>{" "}
              </TabsList>{" "}
              <div className=" mt-[-4px] border border-secondary"></div>
              <TabsContent value="Table editor">
                <div className="mt-10 flex flex-col gap-5 text-lg">
                  Visual chart-based strategy builder
                  <div className=" text-base text-foreground-light">
                    Design and deploy trading strategies directly from charts. Draw your entry and exit points, set conditions, and let View Market handle the execution automatically.
                  </div>
                  <CardDescription className="flex items-center  gap-2 pb-5 text-sm text-foreground-light group-hover:text-foreground">
                    Explore Chart Builder <GraterIcon />
                  </CardDescription>
                </div>
              </TabsContent>
              <TabsContent value="SQL Editor">
                <div className="mt-10 flex flex-col gap-5 text-lg">
                  Advanced strategy editor for complex algorithms
                  <div className=" text-base text-foreground-light">
                    Write custom trading logic with our powerful strategy editor. Build complex algorithms, backtest on historical data, and deploy with confidence.
                  </div>
                  <CardDescription className="flex items-center  gap-2 pb-5 text-sm text-foreground-light group-hover:text-foreground">
                    Explore Strategy Editor <GraterIcon />
                  </CardDescription>
                </div>
              </TabsContent>
              <TabsContent value="Auth rules">
                <div className="mt-10 flex flex-col gap-5 text-lg">
                  Connect to 40+ brokers with one click
                  <div className=" text-base text-foreground-light">
                    Seamlessly connect to Indian, Forex, and Crypto brokers without third-party platforms. Manage all your broker connections in one secure dashboard.
                  </div>
                  <CardDescription className="flex items-center  gap-2 pb-5 text-sm text-foreground-light group-hover:text-foreground">
                    Explore Broker Connections <GraterIcon />
                  </CardDescription>
                </div>
              </TabsContent>
            </div>
            <div></div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default VideoSection;
