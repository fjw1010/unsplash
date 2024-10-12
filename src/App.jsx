import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/Header";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main></main>
    </QueryClientProvider>
  );
}

export default App;
