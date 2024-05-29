import axios from "axios";

export const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    axios
      .post("http://localhost:4000/api/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        window.location.href = "/homey";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-5 font-Jaro">
      <div className="my-48 border-2 rounded-xl">
        <h1 className="text-center bg-sky-300 text-white">Login</h1>
        <div className="mx-auto p-5  w-1/2">
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center"
          >
            <label className="text-center mb-2">Username</label>
            <div className="w-full">
              <input
                className="border-2 w-full p-2 rounded-tl-xl rounded-br-xl"
                type="text"
                name="username"
              />
            </div>
            <label className="text-center mb-2">Password</label>
            <div className="w-full">
              <input
                className="border-2 w-full p-2 rounded-tl-xl rounded-br-xl"
                type="password"
                name="password"
              />
            </div>
            <button
              type="submit"
              className="border-2 px-5 py-2 mt-2 hover:bg-red-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
