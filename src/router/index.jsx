import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
  import App from "../App";
  import { Users , Posts , Albums , Cars ,  } from "@pages";

  const Index = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<App />}>
         <Route index element={<Users />}/>
         <Route path="posts" element={<Posts />}/>
         <Route path="albums" element={<Albums />}/>
         <Route path="cars" element={<Cars />}/>
        </Route>
      )
    );
    return <RouterProvider router={router}/>;
  };
  
  export default Index;
  