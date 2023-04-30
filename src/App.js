import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Root } from "./containers/Root";
import { Homepage } from "./containers/Homepage";
import { CreatePost } from "./containers/CreatePost";
import { PostDetail } from "./containers/PostDetails";
import "./App.css";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Homepage />} />
        <Route path="createpost" element={<CreatePost />} />
        <Route path="/posts/:postID" element={<PostDetail />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
