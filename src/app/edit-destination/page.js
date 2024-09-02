"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function EditDestination({ searchParams }) {
  const [destination, setDestination] = useState({
    name: "",
    title: "",
    description: "",
    image_url: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const id = searchParams.id;

  useEffect(() => {
    if (id) {
      fetchDestination(id);
    }
  }, [id]);

  const fetchDestination = async (id) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/destinations/${id}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      setDestination(response.data);
    } catch (error) {
      console.error("Error fetching destination:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDestination((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleImageChange = (event) => {
    console.log("Selected file:", event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const formData = new FormData();
    formData.append("name", destination.name);
    formData.append("title", destination.title);
    formData.append("description", destination.description);

    if (selectedFile) {
      const imageName =
        "image-" + Date.now() + "." + selectedFile.name.split(".").pop();
      formData.append("image_url", selectedFile, imageName);
    }
    formData.append("_method", "PUT");

    // Console log the formData before submitting
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/destinations/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      console.log("Response:", response.data);
      alert("Destination updated successfully!");
      router.push("/destinations");
    } catch (error) {
      console.error("Error updating destination:", error);
      if (error.message === "Network Error") {
        setErrorMessage(
          "Failed to connect to the server. The server might be down or not responding. Please try again later or contact the administrator."
        );
      } else {
        setErrorMessage(
          error.response?.data?.message ||
            "Failed to update destination. Please check the console for details."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 text-black">
      <h1 className="text-2xl font-bold mb-4 text-black">Edit Destination</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
        encType="multipart/form-data"
      >
        <div>
          <label htmlFor="name" className="block mb-1 text-black">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={destination.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded text-black"
          />
        </div>
        <div>
          <label htmlFor="title" className="block mb-1 text-black">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={destination.title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded text-black"
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1 text-black">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={destination.description}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded text-black"
            rows="4"
          ></textarea>
        </div>
        <div>
          <label htmlFor="image" className="block mb-1 text-black">
            Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="w-full p-2 border rounded text-black"
          />
        </div>
        <div>
          <label htmlFor="image_url" className="block mb-1 text-black">
            Current Image:
          </label>
          {destination.image_url && (
            <img
              src={`http://127.0.0.1:8000/api/${destination.image_url}`}
              alt="Destination Image"
              className="w-40 p-2 border rounded text-black"
            />
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {loading ? "Updating..." : "Update Destination"}
        </button>
        {/* {errorMessage && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4"
            role="alert"
          >
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )} */}
      </form>
    </div>
  );
}
