import React from "react";

const PopularBooks = () => {
  return (
    <div className="mb-15  sm:w-full w-11/12 mx-auto">
      <div className="mb-5">
        <h1 className="sm:text-5xl text-3xl font-bold text-center my-5">
          Most Popular Books on Artifacts
        </h1>
        <p className="sm:w-[550px] mx-auto text-center sm:text-xl px-1">
          Discover the knowledge behind history’s most fascinating objects.
          Explore these highly recommended books to deepen your understanding of
          historical artifacts and ancient civilizations.
        </p>
      </div>

      <div className="">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-items-center">
          <div className="card bg-base-100 sm:w-96 shadow-sm">
            <figure className="px-2 pt-2">
              <img
                src="https://i.ibb.co/1fhqYmx3/a-history-of-the-world-in-100-objects-original-imafy3efp4ucjbsa.webp"
                alt="Shoes"
                className="rounded-none h-70"
              />
            </figure>
            <div className="card-body text-start  p-2">
              <h2 className="card-title">
                A History of the World in 100 Objects{" "}
              </h2>
              <h1 className="font-semibold">
                Author: <span className="font-light"> Neil MacGregor</span>
              </h1>
              <p className="">
                <span className="font-semibold">Summary:</span> This book tells
                the story of human history through 100 carefully chosen
                artifacts from the British Museum’s vast collection — from
                ancient tools to modern inventions.
              </p>
              <p>Rating: ⭐ 4.7/5</p>
              <div className="card-actions">
                <a
                  className="btn btn-primary"
                  href="https://en.wikipedia.org/wiki/A_History_of_the_World_in_100_Objects"
                  target="_blank"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* The Archaeology of Knowledge */}
          <div className="card bg-base-100 sm:w-96 shadow-sm">
            <figure className="px-2 pt-2">
              <img
                src="https://i.ibb.co/4nd12Ctr/9780203604168.jpg"
                alt="Shoes"
                className="rounded-none h-70"
              />
            </figure>
            <div className="card-body text-start  p-2">
              <h2 className="card-title">The Archaeology of Knowledge </h2>
              <h1 className="font-semibold">
                Author: <span className="font-light"> Michel Foucault</span>
              </h1>
              <p className="">
                <span className="font-semibold">Summary: </span> A deep dive
                into the philosophy of historical documentation and how
                knowledge about the past is formed and categorized.
              </p>
              <p>Rating: ⭐ 4.5/5</p>
              <div className="card-actions">
                <a
                  className="btn btn-primary"
                  href="https://en.wikipedia.org/wiki/The_Archaeology_of_Knowledge"
                  target="_blank"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/*  Lost Cities, Ancient Tombs */}
          <div className="card bg-base-100 sm:w-96 shadow-sm">
            <figure className="px-2 pt-2">
              <img
                src="https://i.ibb.co/W4fZtrTZ/57355940.jpg"
                alt="Shoes"
                className="rounded-none h-70"
              />
            </figure>
            <div className="card-body text-start  p-2">
              <h2 className="card-title">Lost Cities, Ancient Tombs </h2>
              <h1 className="font-semibold">
                Author: <span className="font-light">National Geographic</span>
              </h1>
              <p className="">
                <span className="font-semibold">Summary: </span> A collection of
                powerful archaeological discoveries and stories that shaped our
                understanding of ancient civilizations.
              </p>
              <p>Rating: ⭐ 4.8/5</p>
              <div className="card-actions">
                <a
                  className="btn btn-primary"
                  href="https://www.indigo.ca/en-ca/lost-cities-ancient-tombs-100-discoveries-that-changed-the-world/9781426221989.html"
                  target="_blank"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularBooks;
