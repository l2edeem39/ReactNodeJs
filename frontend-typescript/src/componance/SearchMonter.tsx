import { Fragment } from "react";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Popover, Select, Input, Button, Tooltip } from "antd";
import PopupDetail from "./PopupDetail";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchMonter() {
  interface DataType {
    key: string;
    lv: number;
    name: string;
    hp: number;
    exp: number;
    card: string;
    type: string;
    element: string;
    size: string;
  }

  const txtHeaderPopup = (text: string) => {
    return (
      <div className="text-center">
        {text}
        <div className="mb-3"></div>
        <hr></hr>
      </div>
    );
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Lv",
      dataIndex: "lv",
      key: "lv",
      width: "5%",
      align: "center",
      sorter: (a, b) => a.lv - b.lv,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "25%",
      render: (text) => (
        <div className="group">
          <Popover
            placement="right"
            title={txtHeaderPopup(text)}
            content={<PopupDetail />}
            trigger="click"
            className="cursor-pointer group-hover:text-blue-800"
          >
            <div className="flex">
              <Tooltip placement="right" title={"Detail"}>
                {text}
              </Tooltip>
            </div>
          </Popover>
        </div>
      ),
    },
    {
      title: "Hp",
      dataIndex: "hp",
      key: "hp",
      width: "10%",
      sorter: (a, b) => a.hp - b.hp,
    },
    {
      title: "Exp",
      dataIndex: "exp",
      key: "exp",
      width: "10%",
      sorter: (a, b) => a.exp - b.exp,
    },
    {
      title: "Card",
      dataIndex: "card",
      key: "card",
      width: "20%",
      render: (txt) => (
        <div className="text-blue-700 flex">
          [ {txt} ]{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-cards ml-3"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3.604 7.197l7.138 -3.109a.96 .96 0 0 1 1.27 .527l4.924 11.902a1 1 0 0 1 -.514 1.304l-7.137 3.109a.96 .96 0 0 1 -1.271 -.527l-4.924 -11.903a1 1 0 0 1 .514 -1.304z" />
            <path d="M15 4h1a1 1 0 0 1 1 1v3.5" />
            <path d="M20 6c.264 .112 .52 .217 .768 .315a1 1 0 0 1 .53 1.311l-2.298 5.374" />
          </svg>
        </div>
      ),
    },
    {
      title: "Type",
      key: "type",
      dataIndex: "type",
      width: "10%",
      align: "center",
      render: (_, { type }) => {
        let color = "magenta";
        return (
          <Tag color={color} key={type}>
            {type.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Element",
      key: "element",
      dataIndex: "element",
      width: "10%",
      align: "center",
      render: (_, { element }) => {
        let color = element.length > 5 ? "geekblue" : "green";
        if (element === "water") {
          color = "blue";
        } else if (element === "fire") {
          color = "red";
        } else if (element === "wind") {
          color = "green";
        } else if (element === "earth") {
          color = "#606060";
        }
        return (
          <Tag color={color} key={element}>
            {element.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Size",
      key: "size",
      dataIndex: "size",
      width: "10%",
      align: "center",
      render: (_, { size }) => {
        let color = size.length > 5 ? "geekblue" : "green";
        if (size === "small") {
          color = "orange";
        } else if (size === "Medium") {
          color = "blue";
        } else if (size === "large") {
          color = "geekblue";
        }
        return (
          <Tag color={color} key={size}>
            {size.toUpperCase()}
          </Tag>
        );
      },
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      lv: 3,
      name: "Poring",
      hp: 21,
      exp: 100,
      card: "Poring Card",
      type: "undead",
      element: "wind",
      size: "small",
    },
    {
      key: "2",
      lv: 3,
      name: "Lunatic",
      hp: 42,
      exp: 200,
      card: "Lunatic Card",
      type: "demon",
      element: "fire",
      size: "medium",
    },
    {
      key: "3",
      lv: 4,
      name: "Pupa",
      hp: 32,
      exp: 120,
      card: "Pupa Card",
      type: "brute",
      element: "water",
      size: "small",
    },
    {
      key: "4",
      lv: 4,
      name: "Pecopeco Egg",
      hp: 32,
      exp: 120,
      card: "Pecopeco Egg Card",
      type: "Insect",
      element: "earth",
      size: "large",
    },
  ];

  interface ListType {
    value: string;
    label: string;
  }

  const dataListType: ListType[] = [
    {
      value: "demon",
      label: "Demon",
    },
    {
      value: "demi",
      label: "Demi-Human",
    },
    {
      value: "insect",
      label: "Insect",
    },
    {
      value: "formless",
      label: "Formless",
    },
    {
      value: "brute",
      label: "Brute",
    },
    {
      value: "plant",
      label: "Plant",
    },
    {
      value: "fish",
      label: "Fish",
    },
    {
      value: "undead",
      label: "Undead",
    },
  ];

  return (
    <Fragment>
      <form>
        <div className="grid grid-cols-12 gap-x-5 gap-y-2">
          <div className="xl:col-span-2 md:col-span-6 col-span-12">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <Input placeholder="Name" allowClear />
          </div>
          <div className="xl:col-span-3 md:col-span-6 col-span-12">
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Type
            </label>
            <Select
              showSearch
              className="w-full"
              placeholder="Search to Select"
              optionFilterProp="children"
              allowClear
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={dataListType}
            />
          </div>
          <div className="xl:col-span-3 md:col-span-6 col-span-12">
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Element
            </label>
            <Select
              showSearch
              className="w-full"
              placeholder="Search to Select"
              optionFilterProp="children"
              allowClear
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Not Identified",
                },
                {
                  value: "2",
                  label: "Closed",
                },
                {
                  value: "3",
                  label: "Communicated",
                },
                {
                  value: "4",
                  label: "Identified",
                },
                {
                  value: "5",
                  label: "Resolved",
                },
                {
                  value: "6",
                  label: "Cancelled",
                },
              ]}
            />
          </div>
          <div className="xl:col-span-3 md:col-span-6 col-span-12">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Size
            </label>
            <Select
              showSearch
              className="w-full"
              placeholder="Search to Select"
              optionFilterProp="children"
              allowClear
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Not Identified",
                },
                {
                  value: "2",
                  label: "Closed",
                },
                {
                  value: "3",
                  label: "Communicated",
                },
                {
                  value: "4",
                  label: "Identified",
                },
                {
                  value: "5",
                  label: "Resolved",
                },
                {
                  value: "6",
                  label: "Cancelled",
                },
              ]}
            />
          </div>
          <div className="xl:col-span-1 md:col-span-6 col-span-12">
            <div className="flex justify-end w-full">
              <label>&nbsp;</label>
              <Button className="mt-7" icon={<SearchOutlined />}>
                Search
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-5 gap-y-2">
          <div className="xl:col-span-12 md:col-span-12 col-span-12 flex justify-end mb-3"></div>
        </div>
      </form>

      <section>
        <div className="flex flex-col mb-5 mt-5">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border rounded-lg overflow-hidden ">
                <Table columns={columns} dataSource={data} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
