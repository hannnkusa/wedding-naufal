import { FunctionComponent } from "react";
import { cn } from "../../utils/cn";

interface AppLabelInputContainerProps {
  children: React.ReactNode;
  className?: string;
}

const AppLabelInputContainer: FunctionComponent<
  AppLabelInputContainerProps
> = ({ className, children }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default AppLabelInputContainer;
