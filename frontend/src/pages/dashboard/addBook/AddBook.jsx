import React, { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addBook } from "../../../redux/features/book/bookApi";
import Swal from "sweetalert2";

const AddBook = () => {
  const options = [
    { value: "", label: "Choose The Category" },
    { value: "business", label: "Business" },
    { value: "fiction", label: "Fiction" },
    { value: "horror", label: "Horror" },
    { value: "advanture", label: "Adventure" },
    { value: "marketing", label: "Marketing" },
  ];
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [imageFileName, setimageFileName] = useState("");
  const [imageFile, setimageFile] = useState(null);

  const onSubmit = async (data) => {
    console.log(data);
    const newData = {
      title: data.title,
      description: data.description,
      category: data.category,
      trending: data.trending,
      coverImage: imageFileName,
      oldPrice: data.oldPrice,
      newPrice: data.newPrice,
    };
    console.log(newData);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Uploaded!",
          text: "Your file has been uploaded.",
          icon: "success",
        });
        dispatch(addBook(newData));
      }
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setimageFile(file);
      setimageFileName(file.name);
    }
  };
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="2xl:w-2/6 w-3/4 p-6 shadow-md rounded-sm bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* TitleTitle */}
          <InputField
            type="text"
            label="Title"
            name="title"
            register={register}
            placeholder={"Name..."}
          />
          {/* Description */}
          <InputField
            type={"text"}
            label={"Description"}
            name={"description"}
            register={register}
            placeholder={"Description..."}
          />
          {/* Category */}
          <SelectField
            options={options}
            label={"Category"}
            name={"category"}
            register={register}
          ></SelectField>
          {/* Old Price */}
          <InputField
            type={"text"}
            label={"Old Price"}
            name={"oldPrice"}
            register={register}
            placeholder={"Old Price"}
          />
          {/* New Price */}
          <InputField
            type={"text"}
            label={"New Price"}
            name={"newPrice"}
            register={register}
            placeholder={"New Price"}
          />
          {/* Trending */}
          <div className="mt-6 px-3">
            <label className="inline-flex items-center">
              <input
                {...register("trending")}
                className="rounded text-blue-600 focus:ring"
                type="checkbox"
              />
              <span className="ml-2">Trending</span>
            </label>
          </div>
          {/* Choose file */}
          <div className="py-4 px-3">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Cover Image
            </label>
            <input
              {...register("coverImage")}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mb-2 w-full"
            />
            {imageFileName && (
              <p className="text-sm text-gray-500">Selected: {imageFileName}</p>
            )}
          </div>
          <button className="w-full bg-green-500 py-2 rounded-md text-white font-bold hover:opacity-85">
            Add New Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
