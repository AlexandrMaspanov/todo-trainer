import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from './router/routes';

const router = createBrowserRouter(routes, {
  basename: '/todo-trainer/',
  future: {
    v7_startTransition: true,
  },
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
