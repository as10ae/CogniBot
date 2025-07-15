"use client";

import { cn } from "@/lib/utils";
import { BlobBackground } from "@/components/ui/blob-background";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { featuresGridItems } from "@/content/home";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function Features() {
  return (
    <BlobBackground className="py-24">
      <div className="mx-auto max-w-7xl px-6 text-white">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          What makes CogniBot powerful
        </h2>

        <BentoGrid className="max-w-5xl mx-auto">
          {featuresGridItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={<ImageHeader imageUrl={item.image} />}
              icon={iconMap[item.icon]}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </BlobBackground>
  );
}

const ImageHeader = ({ imageUrl }: { imageUrl: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <img
      src={imageUrl}
      alt="Feature visual"
      className="w-full h-full object-cover"
    />
  </div>
);

const iconMap: Record<string, JSX.Element> = {
  clipboard: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  file: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  signature: <IconSignature className="h-4 w-4 text-neutral-500" />,
  table: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  arrow: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  topLeft: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  rightFilled: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
};
