import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";

const LikedArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      setLikedArtifacts([]);
      setLoading(false);
      return;
    }
    fetch(`http://localhost:3000/likedArtifacts/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLikedArtifacts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLikedArtifacts([]);
        setLoading(false);
      });
  }, [user?.email]);
  return (
    <div className="min-h-[calc(100vh-285px)] py-20 sm:w-full w-11/12 mx-auto">
      <Helmet>
        <title>liked art</title>
      </Helmet>
      <h1 className="sm:text-5xl text-3xl font-bold text-center my-10 px-1">
        You Favorites Artifact
      </h1>
      {loading ? (
        <p className="text-center mt-10">Loading liked artifacts...</p>
      ) : likedArtifacts.length === 0 ? (
        <div className="text-center">
          <p className="text-center mt-10 ">
            Hey <span className="font-semibold"> {user.displayName} </span>
            you have not liked any artifacts yet. <br />
            go to artifact page , and like artifact
          </p>
          <Link className="btn btn-outline btn-success mt-5 transform duration-600" to="/allArtifacts">
            All Artifact
          </Link>
        </div>
      ) : (
        <ul className="max-w-4xl mx-auto space-y-6">
          {likedArtifacts?.map((artifact) => (
            <li
              key={artifact._id}
              className="flex gap-5 sm:flex-row flex-col border border-success bg-[#00bf8308] p-4 rounded-md shadow-sm"
            >
              <img
                src={artifact.image}
                className="sm:size-40  rounded  shadow-[0_0_10px_#00bf835d]"
                alt=""
              />
              <span>
                <h2 className="text-xl font-semibold">
                  Artifact name :
                  <span className="font-light">
                    {artifact.name || "Untitled Artifact"}
                  </span>
                </h2>
                <h2 className="font-semibold">
                  Discovered by :{" "}
                  <span className="font-light">{artifact.discoveredBy}</span>
                </h2>
                <p className="mt-2 font-semibold">
                  Short descr. :
                  <span className="font-light">
                    {" "}
                    {artifact.description || "No description available."}
                  </span>
                </p>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LikedArtifacts;
