"use client";

import * as React from "react";
import { createChart, CandlestickSeries, IChartApi } from "lightweight-charts";

// Sample candlestick data
const sampleData = [
  { time: "2024-01-01", open: 100, high: 105, low: 98, close: 103 },
  { time: "2024-01-02", open: 103, high: 108, low: 102, close: 107 },
  { time: "2024-01-03", open: 107, high: 110, low: 104, close: 105 },
  { time: "2024-01-04", open: 105, high: 109, low: 103, close: 108 },
  { time: "2024-01-05", open: 108, high: 112, low: 106, close: 110 },
  { time: "2024-01-08", open: 110, high: 115, low: 109, close: 114 },
  { time: "2024-01-09", open: 114, high: 116, low: 111, close: 112 },
  { time: "2024-01-10", open: 112, high: 118, low: 110, close: 117 },
  { time: "2024-01-11", open: 117, high: 120, low: 115, close: 118 },
  { time: "2024-01-12", open: 118, high: 122, low: 116, close: 120 },
  { time: "2024-01-15", open: 120, high: 125, low: 118, close: 123 },
  { time: "2024-01-16", open: 123, high: 126, low: 120, close: 121 },
  { time: "2024-01-17", open: 121, high: 124, low: 118, close: 119 },
  { time: "2024-01-18", open: 119, high: 123, low: 117, close: 122 },
  { time: "2024-01-19", open: 122, high: 128, low: 121, close: 127 },
  { time: "2024-01-22", open: 127, high: 130, low: 125, close: 128 },
  { time: "2024-01-23", open: 128, high: 132, low: 126, close: 130 },
  { time: "2024-01-24", open: 130, high: 135, low: 128, close: 133 },
  { time: "2024-01-25", open: 133, high: 136, low: 130, close: 131 },
  { time: "2024-01-26", open: 131, high: 134, low: 128, close: 132 },
  { time: "2024-01-29", open: 132, high: 138, low: 131, close: 137 },
  { time: "2024-01-30", open: 137, high: 140, low: 135, close: 138 },
  { time: "2024-01-31", open: 138, high: 142, low: 136, close: 140 },
  { time: "2024-02-01", open: 140, high: 145, low: 138, close: 143 },
  { time: "2024-02-02", open: 143, high: 148, low: 141, close: 146 },
  { time: "2024-02-05", open: 146, high: 150, low: 144, close: 148 },
  { time: "2024-02-06", open: 148, high: 152, low: 145, close: 147 },
  { time: "2024-02-07", open: 147, high: 151, low: 143, close: 145 },
  { time: "2024-02-08", open: 145, high: 149, low: 142, close: 148 },
  { time: "2024-02-09", open: 148, high: 153, low: 146, close: 151 },
];

export function ChartContainer() {
  const chartContainerRef = React.useRef<HTMLDivElement>(null);
  const chartRef = React.useRef<IChartApi | null>(null);

  React.useEffect(() => {
    if (!chartContainerRef.current) return;

    const getCssVarColor = (name: string, fallback: string) => {
      const value = getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();
      return value ? `hsl(${value})` : fallback;
    };

    const backgroundColor = getCssVarColor("--background", "#ffffff");
    const textColor = getCssVarColor("--foreground", "#111111");
    const gridColor = getCssVarColor("--border", "#e5e5e5");

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: backgroundColor },
        textColor,
        attributionLogo: false,
      },
      grid: {
        vertLines: { color: gridColor },
        horzLines: { color: gridColor },
      },
      crosshair: {
        mode: 0,
      },
      rightPriceScale: {
        borderColor: gridColor,
      },
      timeScale: {
        borderColor: gridColor,
        timeVisible: true,
      },
    });

    chartRef.current = chart;

    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    candlestickSeries.setData(sampleData);
    chart.timeScale().fitContent();

    const resizeObserver = new ResizeObserver((entries) => {
      if (entries.length === 0 || !chartContainerRef.current) return;
      const { width, height } = entries[0].contentRect;
      chart.resize(width, height);
    });

    resizeObserver.observe(chartContainerRef.current);

    return () => {
      resizeObserver.disconnect();
      chart.remove();
    };
  }, []);

  return <div ref={chartContainerRef} className="h-full w-full" />;
}
