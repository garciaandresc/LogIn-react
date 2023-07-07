/* import { Link } from "react-router-dom"; */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

interface LoginData {
  username: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginData>();

  function onSubmit(data: LoginData) {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("response: ", res);
        if (res?.token) {
          localStorage.setItem("token", res.token);
          /* const token = localStorage.getItem("token"); */
          navigate("/dashboard");
        } else {
          toast.error("token no encontrado");
        }
      })
      .catch(() => {
        toast.error("A donde cainal, no pasas prro");
      });
  }

  return (
    <main className="gap-16 bg-gradient-to-b from-sky-200 to-violet-600 min-h-screen flex flex-col justify-center items-center text-neutral-100">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-96 sm:max-w-sm">
          <ToastContainer />
          <form
            className="space-y-6"
            action="#"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-8 text-gray-100"
              >
                User Name
              </label>
              <div className="mt-2">
                <input
                  {...register("username", {
                    required: { value: true, message: "nombre requerido" },
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-md placeholder:text-gray-400 sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href=""
                    className="font-semibold text-indigo-700 hover:text-indigo-200"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  id="password"
                  {...register("password", {
                    required: { value: true, message: "Contraseña requerida" },
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-md placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-100"
              >
                Login
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-200">
            Not registered yet? Become a MEMBER?
            <a
              className="text-blue-800  hover:text-indigo-300 font-bold ml-2 mr-2"
              href="http://localhost:5173/signin"
            >
              Join now!
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
