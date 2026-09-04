//analyzed
import { useState } from "react";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useForm } from "react-hook-form";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage("");
  };

  const handleSubmitClick = async (data) => {
    try {
      if (!isSignInForm) {
        await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
      } else {  
        await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMoT_jTjtMagTouVRlaiqByXGhNPuO79va38etXkrtw&s=10"
          className="w-screen h-screen object-cover"
        />
      </div>

      <div className="relative flex items-center justify-center h-screen pt-20 md:pt-0">
        <form
          onSubmit={handleSubmit(handleSubmitClick)}
          className="p-10 w-full md:w-8/12 lg:w-4/12 bg-black/75 text-white rounded-lg mx-4 md:mx-0 backdrop-blur-sm border border-gray-800 shadow-2xl"
        >
          <h1 className="font-bold text-3xl mb-8">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          <input
            type="email"
            placeholder="Email Address"
            className="p-4 my-2 w-full bg-gray-800/80 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white transition-all"
            {...register("email", {
              required: "Email is required",
            })}
          />

          {errors.email && (
            <p className="text-red-500 text-sm font-medium">
              {errors.email.message}
            </p>
          )}

          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-800/80 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white transition-all"
            {...register("password", {
              required: "Password is required",
            })}
          />

          {errors.password && (
            <p className="text-red-500 text-sm font-medium">
              {errors.password.message}
            </p>
          )}

          {errorMessage && (
            <p className="text-red-500 text-sm my-2 font-medium">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#E50914] p-3 mt-6 w-full rounded-md font-semibold text-lg hover:bg-red-700 transition-colors disabled:opacity-50"
          >
            {isSubmitting
              ? "Loading..."
              : isSignInForm
              ? "Sign In"
              : "Sign Up"}
          </button>

          <p
            className="p-2 cursor-pointer mt-8 text-gray-400 hover:text-white transition-colors"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? (
              <>New to Netflix? <span className="font-bold text-white">Sign up now.</span></>
            ) : (
              <>Already a user? <span className="font-bold text-white">Sign in.</span></>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;