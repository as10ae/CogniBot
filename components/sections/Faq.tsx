"use client";

import { faqContent } from "@/content/home";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  return (
    <section
      id="faq"
      className="relative mx-auto max-w-3xl px-6 py-20 text-center"
    >
      <h2 className="mb-4 text-4xl font-bold text-white">{faqContent.title}</h2>
      <p className="mb-12 text-lg text-gray-300">{faqContent.subtitle}</p>

      <Accordion.Root type="multiple" className="space-y-4 text-left">
        {faqContent.items.map((item, idx) => (
          <Accordion.Item
            value={`item-${idx}`}
            key={idx}
            className="overflow-hidden rounded-md border border-gray-700"
          >
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-between bg-gray-800 px-4 py-3 text-white hover:bg-gray-700 transition">
                {item.question}
                <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="bg-gray-900 px-4 py-3 text-gray-300">
              {item.answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
