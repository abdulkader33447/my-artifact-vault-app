import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const PopularBooks = () => {
  return (
    <div className="mb-25  sm:w-full w-11/12 mx-auto">
      <div className="mb-10">
        <motion.h1
          className="sm:text-5xl text-3xl font-bold text-center my-5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.7,
            scale: { type: "spring", duration: 1 },
          }}
        >
          Most Popular Books on Artifacts
        </motion.h1>
        <motion.p
          className="sm:w-[550px] mx-auto text-center sm:text-xl px-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.7,
            scale: { type: "spring", duration: 1 },
          }}
        >
          Discover the knowledge behind history’s most fascinating objects.
          Explore these highly recommended books to deepen your understanding of
          historical artifacts and ancient civilizations.
        </motion.p>
      </div>

      <div className="">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 justify-items-center">
          {/* A History of the World in 100 Objects */}
          <div className="card w-11/12 shadow-sm shadow-[#00bf8357] bg-[#00bf830f]">
            <figure className="px-2 pt-2">
              <img
                src="https://i.ibb.co/1fhqYmx3/a-history-of-the-world-in-100-objects-original-imafy3efp4ucjbsa.webp"
                alt="Shoes"
                className="rounded-none h-70 pt-5"
              />
            </figure>
            <div className="card-body text-start  p-5">
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
                  className="btn btn-outline btn-success transform duration-600"
                  href="https://en.wikipedia.org/wiki/A_History_of_the_World_in_100_Objects"
                  target="_blank"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* The Archaeology of Knowledge */}
          <div className="card w-11/12  shadow-sm shadow-[#00bf8357] bg-[#00bf830f]">
            <figure className="px-2 pt-2">
              <img
                src="https://i.ibb.co/4nd12Ctr/9780203604168.jpg"
                alt="Shoes"
                className="rounded-none h-70 pt-5"
              />
            </figure>
            <div className="card-body text-start  p-5">
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
                  className="btn btn-outline btn-success transform duration-600"
                  href="https://en.wikipedia.org/wiki/The_Archaeology_of_Knowledge"
                  target="_blank"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/*  Lost Cities, Ancient Tombs */}
          <div className="card w-11/12 shadow-sm shadow-[#00bf8357] bg-[#00bf830f]">
            <figure className="px-2 pt-2">
              <img
                src="https://i.ibb.co/W4fZtrTZ/57355940.jpg"
                alt="Shoes"
                className="rounded-none h-70 pt-5"
              />
            </figure>
            <div className="card-body text-start  p-5">
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
                  className="btn btn-outline btn-success transform duration-600"
                  href="https://www.amazon.com/Lost-Cities-Ancient-Tombs-Discoveries/dp/1426221983"
                  target="_blank"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/*  The story of art */}
          <div className="card w-11/12 shadow-sm shadow-[#00bf8357] bg-[#00bf830f]">
            <figure className="px-2 pt-2">
              <img
                src="https://i.ibb.co/FT6qt02/978071483247020210514-4-1y4hzb9.jpg"
                alt="Shoes"
                className="rounded-none h-70 pt-5"
              />
            </figure>
            <div className="card-body text-start p-5">
              <h2 className="card-title">The Story Of Art</h2>
              <h1 className="font-semibold">
                Author: <span className="font-light">E.H. Gombrich</span>
              </h1>
              <p className="">
                <span className="font-semibold">Summary: </span> The Story of
                Art, one of the most famous and popular books on art ever
                written, has been a world bestseller for over four decades.
              </p>
              <p>Rating: ⭐ 4.7/5</p>
              <div className="card-actions">
                <a
                  className="btn btn-outline btn-success transform duration-600"
                  href="https://www.amazon.com/Story-Art-H-Gombrich/dp/0714832472"
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
