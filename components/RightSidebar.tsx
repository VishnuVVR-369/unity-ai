"use client";

import { MessageSquarePlus, Settings, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const icons = [
  { name: "Chat", icon: MessageSquarePlus },
  { name: "Image", icon: ImagePlus },
  { name: "Settings", icon: Settings },
];

export default function SidebarIcons({ selected, onSelect }: { selected: string; onSelect: (name: string) => void }) {
  return (
    <aside className="dark:bg-black fixed right-0 top-0 h-screen flex flex-col items-center gap-4 py-8 bg-white border-l z-50 shadow-lg">
      {icons.map(({ name, icon: Icon }) => (
        <Button
          key={name}
          variant={selected === name ? "default" : "ghost"}
          size="icon"
          className="rounded-full m-2"
          onClick={() => onSelect(name)}
        >
          <Icon className="w-6 h-6" />
        </Button>
      ))}
    </aside>
  );
}
