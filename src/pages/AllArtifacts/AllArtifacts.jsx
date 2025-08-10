import { button } from "framer-motion/client";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, useLoaderData } from "react-router";
// import Artifact from "./Artifact";

const AllArtifacts = () => {
  const artifacts = useLoaderData();
  // console.log("all artifacts", artifacts);

  const [currenPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currenPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = artifacts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(artifacts.length / itemsPerPage);

  return (
    <div className="my-15 w-full">
      <Helmet>
        <title>all art</title>
      </Helmet>
      <h1 className="sm:text-5xl text-3xl font-bold text-center my-10">
        Every Artifact Tells a Story
      </h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-5 justify-end">
        {currentItem.map((artifact) => (
          <div
            key={artifact._id}
            className="card bg-[#00bf830f] sm:w-full  w-11/12 mx-auto shadow-sm shadow-[#00bf8341]"
          >
            <figure className="h-[270px] overflow-hidden">
              <img
                className="object-cover h-full w-full transition transform duration-300"
                src={artifact.image}
                alt={artifact.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{artifact.name}</h2>
              <p>
                {artifact.description.split(" ").length > 20
                  ? artifact.description.split(" ").slice(0, 10).join(" ") +
                    "..."
                  : artifact.description}
              </p>
              <div className="card-actions justify-end">
                <NavLink
                  to={`/artifactDetails/${artifact._id}`}
                  className="btn btn-outline btn-success transform duration-600"
                >
                  View Detail
                </NavLink>
              </div>
            </div>
          </div>
        ))}

        
      </div>
      <div className="flex justify-center mt-9 gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded ${
                currenPage === index + 1
                  ? "bg-green-400 text-white"
                  : "bg-gray-200 hover:bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
    </div>
  );
};

export default AllArtifacts;
