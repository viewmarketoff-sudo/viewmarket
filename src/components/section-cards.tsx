import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
      <Card className="aspect-square flex flex-col justify-between p-4 max-w-[250px]">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <CardDescription className="text-sm text-muted-foreground">Total Revenue</CardDescription>
            <Badge variant="outline" className="flex gap-1 text-xs">
              <TrendingUpIcon className="size-3" />
              +12.5%
            </Badge>
          </div>
          <CardTitle className="text-3xl font-bold tabular-nums">
            $1,250.00
          </CardTitle>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-sm font-medium">
            Trending up this month <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-xs text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </div>
      </Card>

      <Card className="aspect-square flex flex-col justify-between p-4 max-w-[250px]">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <CardDescription className="text-sm text-muted-foreground">New Customers</CardDescription>
            <Badge variant="outline" className="flex gap-1 text-xs">
              <TrendingDownIcon className="size-3" />
              -20%
            </Badge>
          </div>
          <CardTitle className="text-3xl font-bold tabular-nums">
            1,234
          </CardTitle>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-sm font-medium">
            Down 20% this period <TrendingDownIcon className="size-4" />
          </div>
          <div className="text-xs text-muted-foreground">
            Acquisition needs attention
          </div>
        </div>
      </Card>

      <Card className="aspect-square flex flex-col justify-between p-4 max-w-[250px]">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <CardDescription className="text-sm text-muted-foreground">Active Accounts</CardDescription>
            <Badge variant="outline" className="flex gap-1 text-xs">
              <TrendingUpIcon className="size-3" />
              +12.5%
            </Badge>
          </div>
          <CardTitle className="text-3xl font-bold tabular-nums">
            45,678
          </CardTitle>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-sm font-medium">
            Strong user retention <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-xs text-muted-foreground">
            Engagement exceed targets
          </div>
        </div>
      </Card>

      <Card className="aspect-square flex flex-col justify-between p-4 max-w-[250px]">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <CardDescription className="text-sm text-muted-foreground">Growth Rate</CardDescription>
            <Badge variant="outline" className="flex gap-1 text-xs">
              <TrendingUpIcon className="size-3" />
              +4.5%
            </Badge>
          </div>
          <CardTitle className="text-3xl font-bold tabular-nums">
            4.5%
          </CardTitle>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-sm font-medium">
            Steady performance <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-xs text-muted-foreground">
            Meets growth projections
          </div>
        </div>
      </Card>
    </div>
  );
}
