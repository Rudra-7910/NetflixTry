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
          className="p-8 md:p-12 w-full md:w-8/12 lg:w-4/12 bg-black/80 text-white rounded-lg mx-4 md:mx-0"
        >
          <h1 className="font-bold text-xl mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          <input
            type="email"
            placeholder="Email Address"
            className="p-2 my-2 w-full bg-gray-700 text-slate-300"
            {...register("email", {
              required: "Email is required",
            })}
          />

          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message}
            </p>
          )}

          <input
            type="password"
            placeholder="Password"
            className="p-2 my-2 w-full bg-gray-700 text-slate-300"
            {...register("password", {
              required: "Password is required",
            })}
          />

          {errors.password && (
            <p className="text-red-500 text-sm">
              {errors.password.message}
            </p>
          )}

          {errorMessage && (
            <p className="text-red-500 text-sm my-2">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-red-500 p-4 mt-4 w-full disabled:opacity-50"
          >
            {isSubmitting
              ? "Loading..."
              : isSignInForm
              ? "Sign In"
              : "Sign Up"}
          </button>

          <p
            className="p-2 cursor-pointer mt-3"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign up now"
              : "Already a user? Sign in"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;