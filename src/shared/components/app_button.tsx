import { FunctionComponent, ReactNode } from "react";
import { MovingBorderButton } from "./moving_border";
import { Link } from "react-router-dom";
import BottomGradient from "./bottom_gradient";
import clsx from "clsx";

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?:
    | "top-gradient"
    | "white"
    | "sketch"
    | "moving-border"
    | "gradient"
    | "bottom-gradient";
  href?: string;
  icon?: ReactNode;
}

const AppButton: FunctionComponent<AppButtonProps> = ({
  label,
  variant,
  href,
  icon,
  ...props
}) => {
  if (variant === "gradient") {
    return href ? (
      <Link to={href}>
        <button className="px-8 py-2 h-12 w-32 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
          {label}
        </button>
      </Link>
    ) : (
      <button
        className="px-8 py-2 h-12 w-32 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
        {...props}
      >
        {label}
      </button>
    );
  }

  if (variant === "top-gradient") {
    return (
      <button
        className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
        {...props}
      >
        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
        <span className="relative z-20">{label}</span>
      </button>
    );
  }

  if (variant === "sketch") {
    return (
      <button
        className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
        {...props}
      >
        {label}
      </button>
    );
  }

  if (variant === "bottom-gradient") {
    return (
      <button
        className={clsx(
          "bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex justify-center items-center gap-1",
          { "cursor-not-allowed opacity-70": props.disabled }
        )}
        {...props}
      >
        {label} {icon}
        <BottomGradient />
      </button>
    );
  }

  if (variant === "moving-border") {
    return href ? (
      <Link to={href}>
        <MovingBorderButton
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          {label}
        </MovingBorderButton>
      </Link>
    ) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <div onClick={(event: any) => props.onClick && props.onClick(event)}>
        <MovingBorderButton
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          {label}
        </MovingBorderButton>
      </div>
    );
  }

  return (
    <button
      className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear"
      {...props}
    >
      {label}
    </button>
  );
};

export default AppButton;
