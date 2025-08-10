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
import Loading from "../pages/Home/Shared/Loading";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/featuredArtifacts"),
        hydrateFallbackElement: <Loading />,
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
        loader: () => fetch("http://localhost:3000/artifact"),
        hydrateFallbackElement: <Loading />,
        element: <AllArtifacts />,
      },
      {
        path: "/artifactDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/artifact/${params.id}`),
        hydrateFallbackElement: <Loading />,
        element: (
          <PrivateRoute>
            <ArtifactDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/myArtifacts",
        // loader: ({ params }) =>
        //   fetch(`http://localhost:3000/myArtifacts?email=${params.email}`),
        // hydrateFallbackElement: <Loading />,
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
        path: "/updateArtifact/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/artifact/${params.id}`),
        hydrateFallbackElement: <Loading />,
        element: (
          <PrivateRoute>
            <UpdateArtifact />
          </PrivateRoute>
        ),
      },
      {
        path: "/*",
        element: <Error />,
      },
    ],
  },
]);

export default router;
