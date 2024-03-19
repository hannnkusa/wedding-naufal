import { FunctionComponent } from "react";

interface AppErrorMessageProps {
  message?: string;
}

const AppErrorMessage: FunctionComponent<AppErrorMessageProps> = ({
  message,
}) => {
  return message ? <p className="text-red-800 text-sm">{message}</p> : <></>;
};

export default AppErrorMessage;
