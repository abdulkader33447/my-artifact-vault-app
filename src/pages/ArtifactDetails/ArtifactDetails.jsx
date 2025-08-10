import { useContext, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ArtifactDetails = () => {
  const { user } = useContext(AuthContext);

  const artDetails = useLoaderData();
  // console.log(artDetails);

  const {
    adderEmail,
    adderName,
    context,
    createdAt,
    description,
    discoveredAt,
    discoveredBy,
    image,
    name,
    presentLocation,
    type,
    likedBy,
    _id,
  } = artDetails || {};
  const [liked, setLiked] = useState(likedBy.includes(user?.email));
  // console.log("liked", liked);
  const [likeCount, setLikeCount] = useState(likedBy.length);

  // handle like/dislike
  const handleLike = () => {
    if (user?.email === adderEmail)
      return Swal.fire({
        icon: "warning",
        title: "Lojja!",
        text: "You cannot like your own artifact!",
      });
      //live server-https://a-kader-a11-server.vercel.app/
    fetch(`https://a-kader-a11-server.vercel.app/artifact/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: user?.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const isLiked = data?.liked;
        setLiked(isLiked);
        setLikeCount((prev) => (isLiked ? prev + 1 : prev - 1));
        Swal.fire({
          icon: "success",
          title: isLiked ? "Liked!" : "Disliked",
          text: isLiked
            ? "You have liked this artifact."
            : "You have disliked this artifact",
          timer: 2500,
        });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="my-25">
      <Helmet>
        <title>art detail</title>
      </Helmet>
      <h1 className="sm:text-5xl text-3xl font-bold text-center my-10 px-1">
        Journey Through Time
      </h1>

      <div className="px-1 py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl w-11/12 md:px-24 lg:px-8 lg:py-20 shadow-sm shadow-[#00bf835d] rounded ">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
                {name}
              </h2>
              <p className="text-base  md:text-lg">{description}</p>
            </div>
            <div className="grid space-y-3 sm:gap-2 sm:grid-cols-1 sm:space-y-0">
              {/* <ul className="space-y-3 text-xs">
               
              </ul> */}
              <ul className="space-y-3 sm:text-lg text-xs">
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Discovered By :
                  <span className="text-gray-400">{discoveredBy}</span>
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Discovered At :{" "}
                  <span className="text-gray-400"> {discoveredAt}</span>
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Created At :
                  <span className="text-gray-400"> {createdAt}</span>
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Artifact Context :
                  <span className="text-gray-400"> {context}</span>
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Artifact Type : <span className="text-gray-400"> {type}</span>
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Present Location :{" "}
                  <span className="text-gray-400"> {presentLocation}</span>
                </li>

                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Contributor :{" "}
                  <span className="text-gray-400"> {adderName}</span>
                </li>

                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Contributor Email :{" "}
                  <span className="text-gray-400"> {adderEmail}</span>
                </li>
                <li className="flex items-center gap-2">
                  <button
                    onClick={handleLike}
                    // disabled={liked}
                    className="btn btn-outline btn-success flex items-center gap-2  transform duration-700 hover:text-white"
                  >
                    {liked ? (
                      <AiFillLike className="text-xl" />
                    ) : (
                      <AiOutlineLike className="text-xl" />
                    )}
                    {liked ? "Liked" : "Like"}
                  </button>
                  <p className="text-xl">Likes: {likeCount}</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-96 rounded shadow-lg sm:h-[800px] shadow-[#00bf8328]"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
