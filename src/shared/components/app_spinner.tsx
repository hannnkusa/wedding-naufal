import { FunctionComponent } from "react";

interface AppSpinnerProps {}

const AppSpinner: FunctionComponent<AppSpinnerProps> = () => {
  return (
    <img
      src="/images/fidget-spinner.gif"
      alt="loading..."
      width={20}
      height={20}
    />
  );
};

export default AppSpinner;
