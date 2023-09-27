import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/maintodo",
    element: <div>main todo</div>,
  },
]);
export default router;
