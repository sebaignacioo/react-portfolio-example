import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Layout() {
  return (
    <div className="bg-base-100">
      <div className="flex flex-col min-h-screen mx-auto max-w-7xl bg-base-300">
        <Header />
        <div className="min-h-full flex flex-col justify-between">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
