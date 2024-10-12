import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/Header";
import { StrictMode } from "react";

const queryClient = new QueryClient();

function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Header />
        <main></main>
      </QueryClientProvider>
    </StrictMode>
  );
}

export default App;
