"use client"

import { useState } from "react";
import SidebarIcons from "../components/RightSidebar";
import ChatView from "../views/Chat"; 
import ImageView from "../views/Image";
import SettingsView from "../views/Settings";

const views = {
  Chat: <ChatView />,
  Image: <ImageView />,
  Settings: <SettingsView />,
};

export default function Home() {
  const [selected, setSelected] = useState("Chat");
  return (
    <div className="flex flex-row min-h-screen">
      <main className="flex-1">{views[selected as keyof typeof views]}</main>
      <SidebarIcons selected={selected} onSelect={setSelected} />
    </div>
  );
}
