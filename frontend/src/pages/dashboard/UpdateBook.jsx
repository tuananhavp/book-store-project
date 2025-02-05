import React, { useEffect, useState } from "react";
import SelectField from "./addBook/SelectField";
import InputField from "./addBook/InputField";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  clearBook,
  fetchABook,
  updateABook,
} from "../../redux/features/book/bookApi";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const book = useSelector((state) => state.book.book);
  const { id } = useParams();

  const options = [
    { value: "", label: "Choose The Category" },
    { value: "business", label: "Business" },
    { value: "fiction", label: "Fiction" },
    { value: "horror", label: "Horror" },
    { value: "advanture", label: "Adventure" },
    { value: "marketing", label: "Marketing" },
  ];
  const [imageFileName, setimageFileName] = useState(book.coverImage);
  const [imageFile, setimageFile] = useState();

  const onSubmit = async (data) => {
    console.log(data);
    const newData = {
      title: data.title,
      description: data.description,
      category: data.category,
      trending: data.trending,
      coverImage: data.coverImage,
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Uploaded!",
          text: "Your file has been uploaded.",
          icon: "success",
        });
        await dispatch(updateABook({ id, data: newData }));

        navigate("/dashboard/manage-books");
      }
    });
  };
  console.log(book);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setimageFile(file);
      setimageFileName(file.name);
    }
  };

  useEffect(() => {
    dispatch(fetchABook(id));

    return () => {
      dispatch(clearBook()); //
    };
  }, [dispatch, id]);
  useEffect(() => {
    if (book) {
      reset({
        title: book.title || "",
        description: book.description || "",
        category: book.category || "",
        oldPrice: book.oldPrice || "",
        newPrice: book.newPrice || "",
        trending: book.trending || false,
        coverImage: book.coverImage || "",
      });
    }
  }, [book, reset]);
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="2xl:w-2/6 w-3/4 p-6 shadow-md rounded-sm bg-white">
        <div>
          <h2 className="font-bold text-2xl text-gray-600 p-2">Update Book</h2>
        </div>
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
          {/* <div className="py-4 px-3">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Cover Image
            </label>
            <input
              {...register("coverImage")}
              type="text"
              className="mb-2 w-full"
            />
            {book && (
              <p className="text-sm text-gray-500">
                Selected: {book.coverImage}
              </p>
            )}
          </div> */}
          <InputField
            type={"text"}
            label={"Cover Image"}
            name={"coverImage"}
            register={register}
            placeholder={"Cover Image"}
          />
          <button className="w-full bg-blue-500 py-2 rounded-md text-white font-bold hover:opacity-85">
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
