// Use the shared context so this component can open the form from anywhere.
import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Dashboard = () => {
  const { setClick, data, setData } = useContext(MyContext);

  const levelColor = {
    easy: "bg-green-600",
    medium: "bg-orange-600",
    hard: "bg-red-600",
  };

  const bgColor = {
    DSA: "bg-[#d4c84a]",
    webDev: "bg-[#6b8fb5]",
    DBMS: "bg-[#1c1c1c]",
    OS: "bg-[#3d5c3a]",
    other: "bg-[#5c3a3a]",
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((items) => items.id !== id));
  };

  return (
    // This pane owns vertical scrolling while the navbar remains fixed.
    <div className="flex-1 min-h-0 overflow-y-auto p-4 md:h-screen md:p-8">
      <div className="flex w-full flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex w-full flex-col text-3xl font-bold text-white md:text-5xl">
          <h1>Study</h1>
          <h1>Planning</h1>
        </div>
        <div className="flex w-full items-center justify-center gap-3 self-start rounded-xl border-2 border-dashed border-[#1c1c1c] p-2 transition-colors duration-200 hover:border-white sm:w-auto sm:justify-start sm:whitespace-nowrap">
          <button
            onClick={() => setClick((prev) => !prev)}
            className="p-4 bg-[#1c1c1c] rounded-[50%] h-[40px] w-[40px] flex justify-center items-center"
          >
            +
          </button>
          <h1 className="text-lg font-thin leading-none">Add Session</h1>
        </div>
      </div>

      {/* cards */}
      {data.length > 0 ? (
        <div className="w-full h-full px-0 py-6 flex flex-col gap-3 md:px-2">
          {data.map((e) => (
            <div
              key={e.id}
              className={`min-h-[190px] overflow-hidden rounded-lg p-4 flex flex-col gap-3 md:min-h-[170px] md:gap-1 ${bgColor[e.sub]} ${bgColor[e.sub] === "bg-[#d4c84a]" ? "text-black" : "text-white"}`}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h1 className="break-words text-xl font-bold md:text-2xl">
                  {e.fDev}
                </h1>
                <h1
                  className={`w-fit rounded-xl px-4 py-1 text-center text-xs font-semibold capitalize sm:text-sm md:text-lg ${levelColor[e.level]}`}
                >
                  {e.level}
                </h1>
              </div>
              <h1 className="text-sm font-medium md:text-lg">{e.sub}</h1>
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-between">
                <h1 className="text-xs font-thin sm:text-sm md:text-lg">
                  Duration: <span>{e.time}</span>
                </h1>
                <h1 className="text-xs font-thin sm:text-sm md:text-lg">
                  Date: <span>{e.date}</span>
                </h1>
              </div>
              <button
                onClick={() => handleDelete(e.id)}
                className="mt-1 w-full rounded-xl bg-red-500 p-2 text-sm font-medium sm:w-[96px]"
              >
                DELETE
              </button>
            </div>
          ))}{" "}
        </div>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-0 py-10 text-center md:px-2">
          <h1 className="text-xl font-bold sm:text-2xl">
            Oops no study session plan is ready yet
          </h1>
          <img className="invert w-[90px] sm:w-[100px]" src="image copy.png" alt="" />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
