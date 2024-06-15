import { memo } from "react";
import style from "./button.module.scss";

export default memo(({ children, ...rest }) => (
  <button {...rest} className="flex flex-row justify-center gap-2 p-2 bg-slate-50 hover:bg-slate-100 items-center text-base font-normal text-gray-400 text-center rounded-lg w-full">
    {children}
  </button>
));