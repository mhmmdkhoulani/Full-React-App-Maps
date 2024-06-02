import Navbar from "../components/Navbar";
import api from "../api";
import { useState, useEffect } from "react";
function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      const res = await api.get("/books");
      setBooks(res.data);
    }
    getBooks();
  }, [books]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-10">
        <h1 className="font-bold text-5xl my-10">All Books</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Title</th>
                <th className="py-3 px-6 text-left">Author</th>
                <th className="py-3 px-6 text-left">Genre</th>
                <th className="py-3 px-6 text-left">Publication Year</th>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
