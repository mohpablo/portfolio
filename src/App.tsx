import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { ThemeProvider } from "./context/ThemeContextProvider";

function App() {
  return (
    <>
     <ThemeProvider>
       <RouterProvider router={router} />
     </ThemeProvider>
    </>
  );
}

export default App;
