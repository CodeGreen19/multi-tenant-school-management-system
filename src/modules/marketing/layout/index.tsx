import { ChildrenProps } from "@/types/global";
import HomeNav from "../components/home-nav";

export default function MarketingLayout({ children }: ChildrenProps) {
  return (
    <div>
      <HomeNav />
      {children}
    </div>
  );
}
