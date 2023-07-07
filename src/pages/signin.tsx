export default function SignIn() {
  return (
    <main className="gap-16 bg-gradient-to-t from-sky-200 to-violet-600 min-h-screen flex flex-col justify-center items-center text-neutral-100">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in
          </h2>
          <p className=" text-center text-sm font-semibold tracking-tight text-gray-800">
            Become a member
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-96 sm:max-w-sm">
          <form className="space-y-6" action="#">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-8 text-gray-100"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-md placeholder:text-gray-400 sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-8 text-gray-100"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required
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
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-md placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-100"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-200">
            Already a MEMBER?
            <a
              className="text-blue-500  hover:text-indigo-700 font-bold ml-1"
              href="http://localhost:5173/"
            >
              Login!
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
