import { useEffect } from "react";
import { useForm } from "react-hook-form";
import api from "../../api";
import { useParams, useNavigate } from "react-router-dom";
function EditBook() {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    async function getBook() {
      const res = await api.get(`/books/${id}`);
      const data = res.data;
      setValue("title", data.title);
      setValue("author", data.author);
      setValue("genre", data.genre);
      setValue("year", data.year);
    }
    getBook();
  }, []);

  async function submit(data) {
    const book = {
      title: data.title,
      author: data.author,
      genre: data.genre,
      year: data.year,
    };

    try {
      await api.put(`/books/${id}`, book);
      navigate("/dashboard/allBooks");
    } catch (error) {}
  }

  return (
    <div className="container mx-auto my-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Edit Book</h2>
      <form onSubmit={handleSubmit(submit)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register("title", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="author"
          >
            Author
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register("author", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="genre"
          >
            Genre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register("genre", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="year"
          >
            Publication Year
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            {...register("year", { required: true })}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Edit Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditBook;
