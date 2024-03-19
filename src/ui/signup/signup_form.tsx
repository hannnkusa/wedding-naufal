"use client";
import { FunctionComponent } from "react";
import AppLabelInputContainer from "../../shared/components/app_label_input_container";
import AppLabel from "../../shared/components/app_label";
import AppInput from "../../shared/components/app_input";
import { APP_NAME } from "../../utils/constants";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { signupToApp } from "../../services/auth_service";
import { toast } from "sonner";
import { useNavigate, Link } from "react-router-dom";
import AppButton from "../../shared/components/app_button";
import { IconArrowNarrowRight, IconLockAccess } from "@tabler/icons-react";
import AppSpinner from "../../shared/components/app_spinner";
// import {
//   IconBrandGithub,
//   IconBrandGoogle,
//   IconBrandOnlyfans,
// } from "@tabler/icons-react";

const signUpSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  middleName: yup.string().optional(),
  lastName: yup.string().required("Last name is required"),
  userName: yup.string().required("User name is required"),
  email: yup.string().email().required("Email is required"),
  organizationName: yup.string().required("Company name is required"),
  organizationCode: yup.string().optional(),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be 6 characters long"),
});

interface SignUpFormProps {}

const SignUpForm: FunctionComponent<SignUpFormProps> = () => {
  // custom hook
  const router = useNavigate();

  // hook form
  const { control, handleSubmit } = useForm<ISignup>({
    resolver: yupResolver(signUpSchema),
    values: {
      firstName: "",
      lastName: "",
      middleName: "",
      userName: "",
      email: "",
      password: "",
      organizationName: "",
      organizationCode: "",
    },
  });

  // apis
  const signupApi = useMutation({ mutationFn: signupToApp });

  const handleLogin = handleSubmit(async (data) => {
    try {
      console.log("---sign up----", data);

      const result = await signupApi.mutateAsync({ ...data });

      if (result) {
        toast.success(
          "Account created successfully, Redirecting to login page..."
        );
        router("/login");
      }
      toast.error(
        result?.message ||
          "Something went wrong!, please try again after sometime"
      );
    } catch (error) {
      toast.error(error as any);
      console.log(error);
    }
  });

  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <div className="flex items-center gap-2">
          <IconLockAccess size={28} />
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Signup
          </h2>
        </div>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Register yourself to {APP_NAME.toLowerCase()} to explore your awesome
          journey
        </p>

        <form className="mt-8" onSubmit={handleLogin}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <AppLabelInputContainer>
              <AppLabel htmlFor="firstName">First Name</AppLabel>
              <AppInput name="firstName" control={control} placeholder="John" />
            </AppLabelInputContainer>
            <AppLabelInputContainer>
              <AppLabel htmlFor="lastName">Last Name</AppLabel>
              <AppInput name="lastName" control={control} placeholder="Smith" />
            </AppLabelInputContainer>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <AppLabelInputContainer>
              <AppLabel htmlFor="lastName">Last Name</AppLabel>
              <AppInput name="lastName" control={control} placeholder="John" />
            </AppLabelInputContainer>
            <AppLabelInputContainer>
              <AppLabel htmlFor="userName">User Name</AppLabel>
              <AppInput
                name="userName"
                control={control}
                placeholder="john_smith_123"
              />
            </AppLabelInputContainer>
          </div>
          <AppLabelInputContainer className="mb-4">
            <AppLabel htmlFor="email">Email Address</AppLabel>
            <AppInput
              name="email"
              control={control}
              placeholder="john.smith@email.com"
              type="email"
              autoComplete="email"
            />
          </AppLabelInputContainer>
          <AppLabelInputContainer className="mb-4">
            <AppLabel htmlFor="password">Password</AppLabel>
            <AppInput
              name="password"
              control={control}
              placeholder="••••••••"
              type="password"
              autoComplete=""
            />
          </AppLabelInputContainer>
          <AppLabelInputContainer className="mb-8">
            <AppLabel htmlFor="twitterpassword">Company Name</AppLabel>
            <AppInput
              name="organizationName"
              control={control}
              placeholder="x company"
            />
          </AppLabelInputContainer>

          <AppButton
            type="submit"
            label="Sign up"
            variant="bottom-gradient"
            icon={
              signupApi.isPending ? (
                <AppSpinner />
              ) : (
                <IconArrowNarrowRight size={20} />
              )
            }
            disabled={signupApi.isPending}
          />

          <div className="mt-4">
            <p className="text-neutral-600 dark:text-neutral-300">
              Already have an account{" "}
              <Link to="/login" className="text-blue-600 dark:text-blue-300">
                login
              </Link>{" "}
              instead.
            </p>
          </div>

          {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              OnlyFans
            </span>
            <BottomGradient />
          </button>
        </div> */}
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
