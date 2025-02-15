import { LayoutContProps } from "@/types";
const PageHolder = ({ children }: LayoutContProps) => {
  return (
    <div className="bg-[#02191D] min-h-screen bg-cover overflow-y-hidden">
      <div className="py-6 px-[15rem] lg:px-[22rem]">{children}</div>
    </div>
  );
};
export default PageHolder;
