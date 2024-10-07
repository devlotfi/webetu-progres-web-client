import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
export default function App() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}
