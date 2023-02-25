import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Inicio from './pages/inicio';
import Alerta from './pages/alerta';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Alerta />,
    },
    {
      path: "/Inicio",
      element: <Inicio />,
    },
  ]);
  return (
    <div>

      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
