// Use form state from react-hook-form and visibility state from React context.
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { MyContext } from "../context/MyContext";
import { nanoid } from "nanoid";

const Form = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      time: "",
      level: "",
    },
  });
  const { setClick, setData, setShow } = useContext(MyContext);

  const onSubmit = (data) => {
    setData((prev) => [...prev, { ...data, id: nanoid() }]);
    reset();
    setClick((prev) => !prev);
    setShow(true);
  };

  return (
    <div className="flex-1 min-h-0 overflow-y-auto">
      <div className="flex flex-col gap-4 border border-[#1e1e1e] p-4 md:h-[100px] md:flex-row md:items-center md:justify-between md:p-6">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">New Session</h1>
          <p className="text-xs font-thin">
            Plan your study session · fill in the details below
          </p>
        </div>
        <div>
          <button
            type="submit"
            form="study-session-form"
            className="w-full bg-white p-3 text-xs font-bold text-black md:w-auto"
          >
            Save Session
          </button>
        </div>
      </div>

      <form
        id="study-session-form"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row"
      >
        <div className="w-full border border-[#1e1e1e] p-5 md:h-[calc(100vh-100px)] md:w-[50%] md:p-10">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[#828282]" htmlFor="">
                Topic
              </label>
              <input
                {...register("fDev", { required: "fill the field" })}
                type="text"
                className="w-full border-0 border-b border-b-[#1e1e1e] bg-transparent p-2 focus:border-b-[#1e1e1e] focus:outline-none focus:ring-0 md:w-[60%]"
                placeholder="e.g. Intro to Frontend Development"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-[#828282]" htmlFor="">
                Subject
              </label>
              <select
                {...register("sub")}
                className="w-full rounded-xl bg-[#1e1e1e] p-3 text-sm font-semibold md:w-[60%] md:text-base"
                name="sub"
                id=""
              >
                <option className="text-md font-semibold" value="">
                  Select a subject
                </option>
                <option className="text-md font-semibold" value="DSA">
                  DSA
                </option>
                <option className="text-md font-semibold" value="webDev">
                  Web dev
                </option>
                <option className="text-md font-semibold" value="DBMS">
                  DBMS
                </option>
                <option className="text-md font-semibold" value="OS">
                  OS
                </option>
                <option className="text-md font-semibold" value="Other">
                  Other
                </option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-[#828282]" htmlFor="">
                Session Date
              </label>
              <input
                {...register("date", { required: "fill the filed" })}
                className="w-full rounded-xl bg-[#1e1e1e] p-3 focus:border-b-[#1e1e1e] focus:outline-none focus:ring-0 md:w-[60%]"
                type="date"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-[#828282]" htmlFor="">
                Notes
              </label>
              <textarea
                {...register("notes")}
                className="h-[120px] w-full resize-none rounded-xl bg-[#1e1e1e] p-3 text-sm font-bold align-top focus:border-b-[#1e1e1e] focus:outline-none focus:ring-0 md:h-[100px] md:w-[60%]"
                placeholder="Any goals, resources, reminder for this session..."
              />
            </div>
          </div>
        </div>

        <div className="w-full border border-[#1e1e1e] p-5 md:h-[calc(100vh-100px)] md:w-[50%] md:p-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-6">
              <label className="text-xs font-bold text-[#828282]" htmlFor="">
                Duration
              </label>
              <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:w-[80%] md:gap-4">
                <div>
                  <input
                    {...register("time")}
                    id="duration-30"
                    type="radio"
                    name="time"
                    value="30min"
                    className="peer sr-only"
                  />
                  <label
                    htmlFor="duration-30"
                    className="flex min-h-[52px] cursor-pointer items-center justify-center rounded-2xl border border-[#2d2d2d] bg-[#1e1e1e] p-3 text-xs font-bold transition peer-checked:border-white peer-checked:bg-[#2a2a2a]"
                  >
                    30min
                  </label>
                </div>
                <div>
                  <input
                    {...register("time")}
                    id="duration-45"
                    type="radio"
                    name="time"
                    value="45min"
                    className="peer sr-only"
                  />
                  <label
                    htmlFor="duration-45"
                    className="flex min-h-[52px] cursor-pointer items-center justify-center rounded-2xl border border-[#2d2d2d] bg-[#1e1e1e] p-3 text-xs font-bold transition peer-checked:border-white peer-checked:bg-[#2a2a2a]"
                  >
                    45min
                  </label>
                </div>
                <div>
                  <input
                    {...register("time")}
                    id="duration-60"
                    type="radio"
                    name="time"
                    value="1hr"
                    className="peer sr-only"
                  />
                  <label
                    htmlFor="duration-60"
                    className="flex min-h-[52px] cursor-pointer items-center justify-center rounded-2xl border border-[#2d2d2d] bg-[#1e1e1e] p-3 text-xs font-bold transition peer-checked:border-white peer-checked:bg-[#2a2a2a]"
                  >
                    1hr
                  </label>
                </div>
                <div>
                  <input
                    {...register("time")}
                    id="duration-90"
                    type="radio"
                    name="time"
                    value="1.5hr"
                    className="peer sr-only"
                  />
                  <label
                    htmlFor="duration-90"
                    className="flex min-h-[52px] cursor-pointer items-center justify-center rounded-2xl border border-[#2d2d2d] bg-[#1e1e1e] p-3 text-xs font-bold transition peer-checked:border-white peer-checked:bg-[#2a2a2a]"
                  >
                    1.5hr
                  </label>
                </div>
                <div>
                  <input
                    {...register("time")}
                    id="duration-120"
                    type="radio"
                    name="time"
                    value="2hr"
                    className="peer sr-only"
                  />
                  <label
                    htmlFor="duration-120"
                    className="flex min-h-[52px] cursor-pointer items-center justify-center rounded-2xl border border-[#2d2d2d] bg-[#1e1e1e] p-3 text-xs font-bold transition peer-checked:border-white peer-checked:bg-[#2a2a2a]"
                  >
                    2hr
                  </label>
                </div>
                <div>
                  <input
                    {...register("time")}
                    id="duration-180"
                    type="radio"
                    name="time"
                    value="3hr"
                    className="peer sr-only"
                  />
                  <label
                    htmlFor="duration-180"
                    className="flex min-h-[52px] cursor-pointer items-center justify-center rounded-2xl border border-[#2d2d2d] bg-[#1e1e1e] p-3 text-xs font-bold transition peer-checked:border-white peer-checked:bg-[#2a2a2a]"
                  >
                    3hr
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <label className="text-xs font-bold text-[#828282]" htmlFor="">
                  Level of Difficulty
                </label>
                <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:w-[80%] md:gap-4">
                  <div>
                    <input
                      {...register("level")}
                      id="difficulty-easy"
                      type="radio"
                      name="level"
                      value="easy"
                      className="peer sr-only"
                    />
                    <label
                      htmlFor="difficulty-easy"
                      className="flex min-h-[96px] cursor-pointer flex-col justify-between rounded-2xl border border-[#2d2d2d] bg-[#1e1e1e] p-4 transition peer-checked:border-white peer-checked:bg-[#2a2a2a] md:min-h-[110px]"
                    >
                      <span className="text-sm font-bold">Easy</span>
                      <span className="text-xs text-[#828282]">
                        Light review or familiar topics
                      </span>
                    </label>
                  </div>
                  <div>
                    <input
                      {...register("level")}
                      id="difficulty-medium"
                      type="radio"
                      name="level"
                      value="medium"
                      className="peer sr-only"
                    />
                    <label
                      htmlFor="difficulty-medium"
                      className="flex min-h-[96px] cursor-pointer flex-col justify-between rounded-2xl border border-[#2d2d2d] bg-[#1e1e1e] p-4 transition peer-checked:border-white peer-checked:bg-[#2a2a2a] md:min-h-[110px]"
                    >
                      <span className="text-sm font-bold">Medium</span>
                      <span className="text-xs text-[#828282]">
                        Balanced practice with some challenge
                      </span>
                    </label>
                  </div>
                  <div>
                    <input
                      {...register("level")}
                      id="difficulty-hard"
                      type="radio"
                      name="level"
                      value="hard"
                      className="peer sr-only"
                    />
                    <label
                      htmlFor="difficulty-hard"
                      className="flex min-h-[96px] cursor-pointer flex-col justify-between rounded-2xl border border-[#2d2d2d] bg-[#1e1e1e] p-4 transition peer-checked:border-white peer-checked:bg-[#2a2a2a] md:min-h-[110px]"
                    >
                      <span className="text-sm font-bold">Hard</span>
                      <span className="text-xs text-[#828282]">
                        Deep work or tough problem solving
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
