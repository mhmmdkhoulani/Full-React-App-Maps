import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function sumbit(data) {
    if (data.email === "admin@admin.com" && data.password === "admin1234") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  }
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(sumbit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" className="sr-only">
                Email address
              </label>
              <input
                {...register("email", {
                  required: "Email field is required",
                  validate: (value) => {
                    if (!value.includes("@")) {
                      return "Email should contains @";
                    }
                  },
                })}
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label for="password" className="sr-only">
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password field is required",
                  validate: (value) => {
                    if (value.length < 8) {
                      return "Password should be grater that 8 chars";
                    }
                  },
                })}
                type="password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
            <p className="text-red-500">
              {errors.email ? `${errors.email.message}` : " "}
            </p>
            <p className="text-red-500">
              {errors.password ? `${errors.password.message}` : " "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
