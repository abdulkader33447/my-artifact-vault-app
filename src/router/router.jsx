import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddArtifact from "../pages/AddArtifact/AddArtifact";
import AllArtifacts from "../pages/AllArtifacts/AllArtifacts";
import ArtifactDetails from "../pages/ArtifactDetails/ArtifactDetails";
import MyArtifacts from "../pages/MyArtifacts/MyArtifacts";
import UpdateArtifact from "../pages/UpdateArtifact/UpdateArtifact";
import PrivateRoute from "../routes/PrivateRoute";
import LikedArtifacts from "../pages/LikedArtifacts/LikedArtifacts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addArtifacts",
        element: (
          <PrivateRoute>
            <AddArtifact />
          </PrivateRoute>
        ),
      },
      {
        path: "/allArtifacts",
        element: <AllArtifacts />,
      },
      {
        path: "/artifactDetails",
        element: (
          <PrivateRoute>
            <ArtifactDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/myArtifacts",
        element: (
          <PrivateRoute>
            <MyArtifacts />
          </PrivateRoute>
        ),
      },
      {
        path: "/likedArtifacts",
        element: (
          <PrivateRoute>
            <LikedArtifacts />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateArtifact",
        element: <UpdateArtifact />,
      },
    ],
  },
]);

export default router;
