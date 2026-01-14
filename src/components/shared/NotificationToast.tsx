import type { ComponentPropsWithoutRef } from "react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

type NotificationToastProps = {
  message: string;
  visible: boolean;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  className?: string;
} & Pick<ComponentPropsWithoutRef<typeof Alert>, "variant">;

const positionClasses: Record<
  NonNullable<NotificationToastProps["position"]>,
  string
> = {
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
};

const NotificationToast = ({
  message,
  visible,
  position = "bottom-right",
  variant = "default",
  className,
}: NotificationToastProps) => {
  const hiddenOffset = position.includes("left")
    ? "-translate-x-12"
    : "translate-x-12";

  return (
    <div
      className={cn(
        "fixed z-50 transform transition-all duration-300 ease-out",
        positionClasses[position],
        visible
          ? "translate-x-0 opacity-100"
          : `${hiddenOffset} pointer-events-none opacity-0`,
      )}
      aria-hidden={!visible}
    >
      <Alert
        variant={variant}
        className={cn(
          "w-auto border-border bg-card px-4 py-2 text-xs text-card-foreground shadow-lg",
          className,
        )}
      >
        <AlertDescription className="text-xs">{message}</AlertDescription>
      </Alert>
    </div>
  );
};

export default NotificationToast;
