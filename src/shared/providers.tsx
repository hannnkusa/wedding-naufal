"use client";
import { FunctionComponent, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

interface ProvidersProps {
  children: ReactNode;
}

// Create a client
const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: 0 } },
});

const Providers: FunctionComponent<ProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster position="top-right" richColors />
    </QueryClientProvider>
  );
};

export default Providers;
