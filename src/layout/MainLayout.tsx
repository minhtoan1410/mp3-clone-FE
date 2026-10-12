import { Route, Routes } from "react-router-dom";
import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";
import { Home } from "../components/ui/Home";
import { ZingChart } from "../components/ui/ZingChart";
import { Library } from "lucide-react";
import { Hub } from "../components/ui/Hub";
import { Live } from "../components/ui/Live";
import { Ranking } from "../components/ui/Ranking";

export function MainLayOut() {
  return (
    <div className="flex h-screen w-screen overflow-hidden text-gray-200">
      <SideBar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <div className="px-14 py-4 flex-1">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/zingchart" element={<ZingChart />}></Route>
            <Route path="/library" element={<Library />}></Route>
            <Route path="/live" element={<Live />}></Route>
            <Route path="/ranking" element={<Ranking />}></Route>
            <Route path="/hub" element={<Hub />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
