"use client";

import { useRouter } from "next/navigation";

export const Card: React.FC = () => {
  const router = useRouter();

  return (
    <div className="pattern-card flex flex-col glass-card rounded-xl overflow-hidden custom-shadow group">
      <div className="relative h-64 overflow-hidden">
        <img
          alt="A beautifully photographed, thick-knit cream cardigan resting on a rustic wooden chair."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRHiHdkD2dnqE9m4x3wTK7BRYrJPUI4MqT4U3fAbEwoC2wgNQPg9PusNBKT3okvVeMg-xGXTEphjR-vcXBrVxsBBi8Go52tRlvthLEw_PTk3DSNI-IDVZpueCWkEXwC_RQK-iMdvKN7tzY0U5dqZqD0uNJQ-SNEP95ENA-TkTaGAAUiM2WA_L0QocW2ojcOjSKjUQb5fjql9HcoZ8U1BvdoRJrxWGL7xL2zZXkiPcEWx2vuJcMUFjFLCfc5x-iQZNLYZnU_jIWSAY"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-sm left-sm">
          <span className="px-md py-xs bg-primary-container/90 backdrop-blur-sm text-on-primary-container rounded-full font-label-sm text-label-sm font-bold">
            Intermediate
          </span>
        </div>
      </div>
      <div className="p-md flex flex-col grow mt-5">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">
          Cloud-Soft Cardigan
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-md grow mt-4 mb-6">
          An oversized, chunky cardigan featuring classic cable details. Perfect
          for chilly autumn evenings.
        </p>
        <div className="flex items-center justify-between mt-7">
          <button
            onClick={() => router.push("/details/123")}
            className="cursor-pointer px-2 py-2 bg-secondary-fixed text-on-secondary-fixed-variant rounded-lg font-label-lg text-label-lg hover:bg-secondary-container transition-colors"
          >
            View Detail
          </button>
          <button className="cursor-pointer px-2 py-2 text-primary  hover:bg-primary-container/10 rounded-full transition-all">
            <span className="material-symbols-outlined">edit</span>
          </button>
        </div>
      </div>
    </div>
  );
};
