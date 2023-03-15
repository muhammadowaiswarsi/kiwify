import { useForm } from "react-hook-form";
import { useState } from "react";
import logo from "../../assets/kiwify-logo.png";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    setSubmitting(true);
    console.log(data);
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 md:px-8 lg:px-8">
      <div>
        <div className="flex flex-col items-center sm:mx-auto sm:w-full sm:max-w-md ">
          <img src={logo} alt="Company Logo" className="mx-auto h-12 w-auto" />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Criar nova conta
          </h2>
          <p className="flex mt-2 text-center text-base leading-5 text-gray-600">
            Ou{" "}
            <p
              className="font-medium text-indigo-600 ml-1 hover:text-indigo-500 cursor-pointer focus:outline-none focus:underline"
              onClick={() => navigate("/login")}
            >
              entrar na sua conta existente
            </p>{" "}
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
          <form
            className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 mb-1 text-gray-700 text-start"
              >
                E-mail
              </label>
              <div>
                <input
                  id="email"
                  type="email"
                  className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("email", {
                    required: "Esse campo é obrigatório",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "O e-mail deve ser válido",
                    },
                  })}
                  disabled={submitting}
                />
              </div>
              {errors.email && (
                <div className="flex text-red-500 text-sm  text-start">
                  {errors.email.message}
                </div>
              )}
            </div>

            <div className="mt-6">
              <label
                htmlFor="reEmail"
                className="block text-sm block font-medium mb-1 text-start  leading-5 mb-1 text-gray-700"
              >
                Repetir e-mail
              </label>
              <div>
                <input
                  id="reEmail"
                  type="email"
                  name="reEmail"
                  className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("reEmail", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                    validate: (value) => value === watch("email"),
                  })}
                  disabled={submitting}
                />
              </div>

              {errors.reEmail && (
                <p className="flex text-red-500 text-sm  text-start">
                  {errors.reEmail.type === "validate"
                    ? "Os dois e-mails devem ser iguais."
                    : "Esse campo é obrigatório"}
                </p>
              )}
            </div>

            <div className="mt-6">
              <label
                htmlFor="password"
                className="text-sm block font-medium text-start  leading-5  text-gray-700"
              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                {...register("password", {
                  required: "Esse campo é obrigatório",
                })}
                disabled={submitting}
              />
              {errors.password && (
                <span className="flex text-red-500 text-sm  text-start">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="mt-6 text-start">
              <label htmlFor="terms" className="relative flex items-start mt-2">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    {...register("terms", { required: true })}
                    className={`rounded cursor-pointer form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out ${
                      errors.terms ? "border-red-500" : ""
                    }`}
                  />
                </div>
                <div className="ml-2 text-sm leading-5">
                  <span className="font-medium text-gray-700">
                    Eu li e aceito os{" "}
                    <span className="underline cursor-pointer">
                      termos de uso
                    </span>
                    ,{" "}
                    <span className="underline cursor-pointer">
                      termos de licença de uso de software
                    </span>
                    ,{" "}
                    <span className="underline cursor-pointer">
                      política de conteúdo
                    </span>{" "}
                    da Kiwify
                  </span>
                  {errors.terms && (
                    <p className="text-red-500 mt-2">
                      (Esse campo é obrigatório)
                    </p>
                  )}
                </div>
              </label>
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="leading-normal w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  disabled={submitting}
                >
                  {submitting ? "Criar conta..." : " Criar conta"}
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
