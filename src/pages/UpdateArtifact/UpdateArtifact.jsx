import React from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateArtifact = () => {
  // const { user } = useContext(AuthContext);
  const {
    name,
    image,
    type,
    context,
    description,
    createdAt,
    discoveredAt,
    discoveredBy,
    presentLocation,
    _id,
  } = useLoaderData();

  const handleUpdateArtifact = (e) => {
    e.preventDefault();

    const form = e.target;
    // const formData = new FormData(form);
    // const updateArtifact = Object.fromEntries(formData.entries());
    // console.log("from update page",updateArtifact);

    const updateArtifact = {
      name: form.name.value,
      image: form.image.value,
      type: form.type.value,
      context: form.context.value,
      description: form.description.value,
      createdAt: form.createdAt.value,
      discoveredAt: form.discoveredAt.value,
      discoveredBy: form.discoveredBy.value,
      presentLocation: form.presentLocation.value,
    };

    // send update data to the db
    fetch(`http://localhost:3000/artifact/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateArtifact),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Artifact updated successfully!",
            icon: "success",
            draggable: true,
            timer: 3000,
          });
        }
      });
  };

  return (
    <div className="min-h-[calc(100vh-305px)] my-15 sm:w-full w-11/12 mx-auto">
      <Helmet>
        <title>update</title>
      </Helmet>
      <h1 className="sm:text-5xl text-3xl font-bold text-center my-5 px-1">
        Modify Artifact Information
      </h1>
      <form onSubmit={handleUpdateArtifact}>
        <div className="grid md:grid-cols-2 grid-cols-1 sm:gap-8 gap-5">
          {/* name */}
          <fieldset className="fieldset ">
            <label className="label">Artifact Name</label>
            <input
              className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f] rounded-box"
              type="text"
              placeholder="artifact name"
              name="name"
              defaultValue={name}
            />
          </fieldset>

          {/* image */}
          <fieldset className="fieldset">
            <label className="label">Artifact PhotoURL</label>
            <input
              className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f] rounded-box"
              type="url"
              placeholder="artifact imageURL"
              name="image"
              defaultValue={image}
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
              // defaultValue="Pick a color"
              className="select bg-base-100 w-full border border-success focus:outline-none rounded-box"
              name="type"
              defaultValue={type}
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
              className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f] rounded-box"
              placeholder="Historical Context"
              name="context"
              defaultValue={context}
            />
          </fieldset>

          {/* short description */}
          <fieldset className="fieldset">
            <label className="label">Short Description</label>
            <input
              className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f] rounded-box"
              type="text"
              placeholder="Short Description"
              name="description"
              defaultValue={description}
            />
          </fieldset>

          {/* created at */}
          <fieldset className="fieldset">
            <label className="label">Create Date</label>
            <input
              className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f] rounded-box"
              type="text"
              placeholder="Created At ( 100 BC, 300 AD )"
              name="createdAt"
              defaultValue={createdAt}
            />
          </fieldset>

          {/* discovered at */}
          <fieldset className="fieldset">
            <label className="label">Discovered Date</label>
            <input
              className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f] rounded-box"
              type="text"
              placeholder="Discovered At (100 BC, 300AD)"
              name="discoveredAt"
              defaultValue={discoveredAt}
            />
          </fieldset>

          {/* discovered by */}
          <fieldset className="fieldset">
            <label className="label">Discoverd By</label>
            <input
              className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f] rounded-box"
              type="text"
              placeholder="Discoverd By"
              name="discoveredBy"
              defaultValue={discoveredBy}
            />
          </fieldset>

          {/* present location */}
          <fieldset className="fieldset">
            <label className="label">Present Location</label>
            <input
              className="input w-full border border-success focus:outline-none focus:bg-[#00bf830f] rounded-box"
              type="text"
              placeholder="Present Location"
              name="presentLocation"
              defaultValue={presentLocation}
            />
          </fieldset>

          <input
            type="submit"
            className="btn btn-outline btn-success rounded-box mt-[29px] transition duration-700 hover:text-white"
            value="Save Changes"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateArtifact;
