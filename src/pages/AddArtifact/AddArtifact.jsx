import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
// import { body } from "motion/react-client";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddArtifact = () => {
  const { user } = useContext(AuthContext);
  // console.log("token",user.currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('form submitted');

    const form = e.target;
    const formData = new FormData(form);
    const newArtifact = Object.fromEntries(formData.entries());

    newArtifact.likedBy = [];
    // console.log(newArtifact);

    // send artifact to db
    fetch("https://a-kader-a11-server.vercel.app/artifact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newArtifact),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Artifact added successfully",
            icon: "success",
            draggable: true,
            timer: 3000,
          });
        }
        // console.log("after creating artifact",data);
      });
  };
  return (
    <div className="my-25 sm:w-full w-11/12 mx-auto">
      <Helmet>
        <title>add art</title>
      </Helmet>
      <div className="text-center space-y-5">
        <h1 className="sm:text-5xl text-3xl font-bold">
          Contribute to History: Add a New Artifact
        </h1>
        <p className="2xl:px-84 lg:px-44 ">
          Help preserve the past by sharing valuable artifacts with the world.
          Fill out the details of a historical item you've discovered or
          studied. Your contribution adds to a collective journey of
          exploration, heritage, and learning.
        </p>
      </div>
      <div className="shadow-sm shadow-[#00bf835d] lg:p-10 md:-4 p-2 rounded-box my-10">
        <h2 className="text-center font-semibold text-xl my-2">
          Artifact Submission Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 grid-cols-1 sm:gap-8 gap-5 ">
            {/* name */}
            <fieldset className="fieldset">
              <label className="label">Artifact Name</label>
              <input
                className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f]"
                type="text"
                placeholder="artifact name"
                name="name"
              />
            </fieldset>

            {/* image */}
            <fieldset className="fieldset">
              <label className="label">Artifact PhotoURL</label>
              <input
                className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f]"
                type="url"
                placeholder="artifact imageURL"
                name="image"
              />
            </fieldset>

            {/* artifact type */}
            <fieldset className="fieldset">
              <label className="label">Artifact Type</label>
              {/* <input
                className="input w-full"
                type="text"
                placeholder="artifact type"
                name="type"
              /> */}
              <select
                defaultValue="Pick a color"
                className="select w-full border border-success focus:outline-none focus:bg-[#00bf830f]"
                name="type"
              >
                <option disabled={true}>Artifact Type</option>
                <option>Tools</option>
                <option>Weapons</option>
                <option>Documents</option>
                <option>Writings</option>
                <option>Jewelry</option>
                <option>Religious Items</option>
                <option>Artwork</option>
                <option>Pottery</option>
                <option>Others</option>
              </select>
            </fieldset>

            {/* historical context */}
            <fieldset className="fieldset">
              <label className="label">Historical Context</label>
              <input
                type="text"
                className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f]"
                placeholder="Historical Context"
                name="context"
              />
            </fieldset>

            {/* short description */}
            <fieldset className="fieldset">
              <label className="label">Short Description</label>
              <input
                className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f]"
                type="text"
                placeholder="Short Description"
                name="description"
              />
            </fieldset>

            {/* created at */}
            <fieldset className="fieldset">
              <label className="label">Create Date</label>
              <input
                className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f]"
                type="text"
                placeholder="Created At ( 100 BC, 300 AD )"
                name="createdAt"
              />
            </fieldset>

            {/* discovered at */}
            <fieldset className="fieldset">
              <label className="label">Discovered Date</label>
              <input
                className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f]"
                type="text"
                placeholder="Discovered At (100 BC, 300AD)"
                name="discoveredAt"
              />
            </fieldset>

            {/* discovered by */}
            <fieldset className="fieldset">
              <label className="label">Discoverd By</label>
              <input
                className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f]"
                type="text"
                placeholder="Discoverd By"
                name="discoveredBy"
              />
            </fieldset>

            {/* present location */}
            <fieldset className="fieldset">
              <label className="label">Present Location</label>
              <input
                className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f]"
                type="text"
                placeholder="Present Location"
                name="presentLocation"
              />
            </fieldset>

            {/* adder name */}
            <fieldset className="fieldset">
              <label className="label">Artifact Name</label>
              <input
                className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f]"
                type="text"
                value={user.displayName}
                readOnly
                name="adderName"
              />
            </fieldset>

            {/* adder email */}
            <fieldset className="fieldset">
              <label className="label">Adder Email</label>
              <input
                className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f]"
                type="email"
                value={user.email}
                readOnly
                name="adderEmail"
              />
            </fieldset>
            <input
              type="submit"
              className="btn btn-outline btn-success rounded-box  mt-[29px]"
              value="Add Artifact"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddArtifact;
