import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { SimulationFilter } from "colbrush/devtools";
import { ThemeSwitcher } from "colbrush/client";

export default function Layout() {
  return (
    <div className="bg-bg flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
        <SimulationFilter allowInProd={true} position={"left-top"} />
        <ThemeSwitcher />
      </main>
      <Footer />
    </div>
  );
}
