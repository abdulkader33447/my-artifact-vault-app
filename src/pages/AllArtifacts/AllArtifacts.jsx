import React from "react";
import { NavLink, useLoaderData } from "react-router";
// import Artifact from "./Artifact";

const AllArtifacts = () => {
  const artifacts = useLoaderData();
  console.log("all artifacts", artifacts);
  return (
    <div className="my-15">
      <h1 className="sm:text-5xl text-3xl font-bold text-center my-5">
        Every Artifact Tells a Story
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {artifacts.map((artifact) => (
          <div key={artifact._id} className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src={artifact.image}
                alt={artifact.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{artifact.name}</h2>
              <p>
                {artifact.description}
              </p>
              <div className="card-actions justify-end">
                <NavLink to={`/artifactDetails/${artifact._id}`} className="btn btn-primary">View Detail</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllArtifacts;
