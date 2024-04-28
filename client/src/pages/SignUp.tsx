import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../store/slices/authSlice";
import { signUp } from "../services/authService";

interface FormState {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormState>({
    name: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      password: "",
    };

    if (!form.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!form.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!form.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        console.log("Form submitted successfully");
        const { email, password } = form;
        const response = await signUp({ email, password });
        dispatch(setAuthenticated(response.token));
        console.log("Signup successful:", response);
        setForm({
          name: "",
          email: "",
          password: "",
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Form validation failed");
    }
  };
  console.log(form);
  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <div className="w-1/2 justify-center items-center ">
        <div className="bg-white p-8 rounded shadow-md">
          <h1 className="text-2xl font-bold mb-4">Create Account/Sign up</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form?.name}
                onChange={handleOnChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form?.email}
                onChange={handleOnChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={form?.password}
                onChange={handleOnChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-700"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>

      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url(/assets/undraw_sign_in_re_o58h.svg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          height: "70%",
          width: "50%",
        }}
      ></div>
    </div>
  );
};

export default SignUp;
