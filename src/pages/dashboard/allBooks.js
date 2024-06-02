import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";
function AllBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      const res = await api.get("/books");
      setBooks(res.data);
    }
    getBooks();
  }, [books]);
  function handleDelte(id) {
    if (window.confirm("Are you sure you want to delete this book?")) {
      api.delete(`/books/${id}`);
    }
  }
  return (
    <div className="container mx-auto my-10">
      <h1 className="font-bold text-5xl my-10">All Books</h1>
      <Link
        className="font-bold text-xl text-blue-500"
        to={"/dashboard/add-book"}
      >
        Add New Book
      </Link>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Author</th>
              <th className="py-3 px-6 text-left">Genre</th>
              <th className="py-3 px-6 text-left">Publication Year</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {books.map((book) => (
              <tr
                className="border-b border-gray-200 hover:bg-gray-100"
                key={book.id}
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {book.title}
                </td>
                <td className="py-3 px-6 text-left">{book.author}</td>
                <td className="py-3 px-6 text-left">{book.genre}</td>
                <td className="py-3 px-6 text-left">{book.year}</td>
                <td className="py-3 px-6 text-left space-x-4">
                  <Link
                    to={`/dashboard/edit-book/${book.id}`}
                    className="text-blue-500"
                  >
                    Edit
                  </Link>
                  <Link
                    onClick={() => handleDelte(book.id)}
                    className="text-red-500"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AllBooks;
