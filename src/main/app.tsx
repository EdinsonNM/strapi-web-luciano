import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./config/react-query.config";
import Router from "./routes/router";

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
