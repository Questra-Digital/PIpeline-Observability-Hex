"use client";
import { useState } from "react";
import ImageAtom from "@/Components/atoms/ImageAtom";
import { dashboardTabs } from "@/constants/dashboardLinks";
import LinkAtom from "@/Components/atoms/LinkAtom";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = useState(pathname);
  return (
    // bg-[#1C1D23]
    <div className="w-[50px] md:w-[18%] min-h-full flex flex-col flex-wrap justify-start items-center bg-gray-800 border-r-2 border-gray-600">
      <div className="my-2 md:p-0 p-1">
        <ImageAtom
          src="/assets/Images/logo.png"
          width={70}
          height={70}
          alt="Datalogs Icon"
          properties={["object-cover md:w-full"]}
        />
        <p className="hidden md:block text-center text-xl font-semibold my-2">
          Datalogs
        </p>
      </div>
      <div className="mt-6 w-full">
        {dashboardTabs.map((Tab, index) => (
          <LinkAtom
            link={Tab.link}
            click={() => setCurrentTab(Tab.link)}
            key={index}
          >
            <div
              className={`w-[100%] flex justify-center lg:justify-start items-center py-1 md:px-3 px-1 xs:py-2 my-4 xs:my-2 ${
                currentTab === Tab.link
                  ? "border-l-[5px] border-blue-600 bg-black text-blue-500"
                  : ""
              }`}
            >
              <ImageAtom src={Tab.icon} width={30} height={30} alt="icon" />
              <p className="ml-px md:ml-3 hidden lg:block">{Tab.name}</p>
            </div>
          </LinkAtom>
        ))}
      </div>
      <div className="px-3 py-2 mt-auto mb-3 w-full flex justify-center lg:justify-start items-center">
        <ImageAtom
          src="/assets/Images/logout.png"
          width={24}
          height={24}
          alt="Logout Buttom"
        />
        <p className="ml-3 hidden lg:block text-lg text-gray-200">Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
