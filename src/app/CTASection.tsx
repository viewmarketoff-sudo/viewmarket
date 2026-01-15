import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <div className="flex w-full flex-col items-center gap-20 px-4 py-32 sm:px-6 lg:px-10 xl:px-12 2xl:px-16">
      <h3 className="text-3xl text-foreground-light  ">
        Automate your trading,
        <span className="text-foreground"> deploy from charts</span>
      </h3>
      <Button>Start Trading</Button>
    </div>
  );
};

export default CTASection;
