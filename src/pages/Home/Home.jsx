import Banner from "./Banner/Banner";
import HistoricalTimeline from "./HistoricalTimeline/HistoricalTimeline";
import PopularBooks from "./PopularBooks/PopularBooks";
import { Link, useLoaderData } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const artifacts = useLoaderData();
  // console.log("from home", artifacts);
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <div>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            scale: { type: "spring", duration: 1 },
          }}
        >
          <h1 className="sm:text-5xl text-3xl font-bold text-center my-5">
            Timeless Favorites
          </h1>
          <p className="sm:w-[550px] mx-auto text-center sm:text-xl px-1 mb-10">
            History’s most liked and admired relics
          </p>
        </motion.div>

        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 gap-5 sm:w-full w-11/12 mx-auto">
          {artifacts?.map((artifact) => (
            <div
              key={artifact._id}
              className="card bg-[#00bf830f] w-full shadow-sm shadow-[#00bf8357] mx-auto"
            >
              <figure className="h-[400px] overflow-hidden">
                <img
                  className="object-cover h-full w-full transition duration-300 transform group-hover:scale-105"
                  src={artifact.image}
                  alt="artifact"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {artifact.name}
                  <div className="badge badge-soft badge-info ">
                    <p className="sm:text-md text-xs">
                      Likes: {artifact.likeCount}
                    </p>
                  </div>
                </h2>
                <p>{artifact.description}</p>
                <motion.div
                  className="card-actions justify-end"
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    scale: { type: "spring", duration: 0.0001 },
                  }}
                >
                  <Link
                    to={`/artifactDetails/${artifact._id}`}
                    className="btn btn-outline btn-success transition duration-700 hover:text-white"
                  >
                    View Details
                  </Link>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-10">
        <Link to="/allArtifacts" className="btn btn-outline btn-success transition duration-700 hover:text-white">
          See All
        </Link>
      </div>
      <HistoricalTimeline />
      <PopularBooks />
    </div>
  );
};

export default Home;
