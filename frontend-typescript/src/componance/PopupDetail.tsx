import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

const detailBody = (id: string) => {
  return (
    <div className="grid grid-cols-12 gap-x-5 gap-y-2">
      <div className="xl:col-span-3 md:col-span-6 col-span-12">
        <label>
          ชื่อผู้เอาประกัน <span className=" text-red-500">*</span>
        </label>
      </div>
      <div className="xl:col-span-3 md:col-span-6 col-span-12">
        <label htmlFor="ddlPolicyType">ประเภทกรมธรรม์</label>
      </div>
      <div className="xl:col-span-3 md:col-span-6 col-span-12">
        <label htmlFor="ddlPolicyType">ประเภทกรมธรรม์</label>
      </div>
      <div className="xl:col-span-3 md:col-span-6 col-span-12">
        <label htmlFor="ddlPolicyType">ประเภทกรมธรรม์</label>
      </div>
    </div>
  );
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: (
      <span className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-file-description mt-0.5 mr-2"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
          <path d="M9 17h6" />
          <path d="M9 13h6" />
        </svg>
        {"Status"}
      </span>
    ),
    children: detailBody("1"),
  },
  // {
  //   key: "2",
  //   label: (
  //     <span className="flex">
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         className="icon icon-tabler icon-tabler-cards mr-2"
  //         width="20"
  //         height="20"
  //         viewBox="0 0 24 24"
  //         strokeWidth="1"
  //         stroke="#000000"
  //         fill="none"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       >
  //         <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  //         <path d="M3.604 7.197l7.138 -3.109a.96 .96 0 0 1 1.27 .527l4.924 11.902a1 1 0 0 1 -.514 1.304l-7.137 3.109a.96 .96 0 0 1 -1.271 -.527l-4.924 -11.903a1 1 0 0 1 .514 -1.304z" />
  //         <path d="M15 4h1a1 1 0 0 1 1 1v3.5" />
  //         <path d="M20 6c.264 .112 .52 .217 .768 .315a1 1 0 0 1 .53 1.311l-2.298 5.374" />
  //       </svg>
  //       {"Card"}
  //     </span>
  //   ),
  //   children: detailBody("2"),
  // },
  {
    key: "3",
    label: (
      <span className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-map-2 mt-0.5 mr-2"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" />
          <path d="M9 4v13" />
          <path d="M15 7v5.5" />
          <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
          <path d="M19 18v.01" />
        </svg>
        {"Location"}
      </span>
    ),
    children: detailBody("3"),
  },
];

const onChange = (key: string) => {
  //console.log(key);
};

const PopupDetail: React.FC = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);

export default PopupDetail;
