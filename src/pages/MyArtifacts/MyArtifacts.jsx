import React, { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const MyArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  // const artifacts = useLoaderData();
  // console.log(artifacts);
  const navigate = useNavigate();

  useEffect(() => {
    if (userEmail) {
      fetch(`http://localhost:3000/myArtifacts?email=${userEmail}`)
        .then((res) => res.json())
        .then((data) => setArtifacts(data));
    }
  }, [userEmail]);

  // ---delete artifact---
  const handleDeleteArtifact = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/artifact/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                timer: 3000,
              });
              navigate("/allArtifacts")

              // remove from ui
              const remainingArtifact = artifacts.filter(
                (artifact) => artifact._id !== _id
              );
              setArtifacts(remainingArtifact);
            }
          });
      }
    });
    
  };

  return (
    <div className="min-h-[calc(100vh-405px)] my-15">
      <h1 className="sm:text-5xl text-3xl font-bold text-center my-5 px-1">
        My Time Capsules
      </h1>
      {artifacts?.length > 0 ? (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="sm:text-xl text-xs sm:font-bold font-light">
                <th className="hidden lg:table-cell">#</th>
                <th>Artifact Name</th>
                <th>Artifact Type</th>
                <th className="hidden lg:table-cell">Discovered By</th>
                <th className="hidden lg:table-cell">Present Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {artifacts?.map((artifact, index) => (
                <tr key={artifact._id} className="sm:text-lg text-xs">
                  <th className="hidden lg:table-cell">{index + 1}</th>
                  <td>{artifact.name}</td>
                  <td>{artifact.type}</td>
                  <td className="hidden lg:table-cell">
                    {artifact.discoveredBy}
                  </td>
                  <td className="hidden lg:table-cell">
                    {artifact.presentLocation}
                  </td>
                  <td className="flex flex-col sm:gap-2">
                    <button className="btn btn-accent sm:mt-auto mt-3 px-1 sm:py-1">
                      <Link to={`/updateArtifact/${artifact._id}`}>update</Link>
                    </button>{" "}
                    <button
                      onClick={() => handleDeleteArtifact(artifact._id)}
                      className="btn btn-secondary sm:mt-auto mt-3 px-1 sm:py-1"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="my-15">
          {artifacts.length === 0 && (
            <div className="text-center my-5">
              <p className="mb-2">You haven’t submitted any artifact yet.</p>
              <Link to="/addArtifacts" className="btn px-4 py-2 rounded">
                Go to Add Artifacts
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyArtifacts;
