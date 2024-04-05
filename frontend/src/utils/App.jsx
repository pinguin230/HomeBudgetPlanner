import { router } from '../routes/router';
import './App.scss';
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
