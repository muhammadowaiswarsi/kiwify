import { useForm } from "react-hook-form";
import { useState } from "react";
import logo from "../../assets/kiwify-logo.png";
import { useNavigate } from "react-router-dom";
import InputField from "../../Components/InputField";
import Button from "../../Components/Button";

const Login = () => {
  const {
    register,
    handleSubmit,
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
            Entrar na sua conta
          </h2>
          <p className="flex mt-2 text-center text-base leading-5 text-gray-600">
            Ou{" "}
            <p
              className="font-medium text-indigo-600 ml-1 hover:text-indigo-500 cursor-pointer focus:outline-none focus:underline"
              onClick={() => navigate("/signup")}
            >
              fazer cadastro
            </p>{" "}
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
          <form
            className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputField
              title={"E-mail"}
              id={"email"}
              type={"email"}
              disabled={submitting}
              register={{
                ...register("email", {
                  required: "Esse campo é obrigatório",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "O e-mail deve ser válido",
                  },
                }),
              }}
              error={errors?.email?.message || ""}
            />

            <InputField
              title={"Senha"}
              id={"password"}
              type={"password"}
              disabled={submitting}
              parentStyle={"mt-6"}
              register={{
                ...register("password", {
                  required: "Esse campo é obrigatório",
                }),
              }}
              error={errors?.password?.message || ""}
            />
            <div className="mt-2 mb-2 flex items-center justify-end">
              <a
                href="#"
                className="text-sm leading-5 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                Esqueceu a senha?
              </a>
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <Button title={"Entrar"} disabled={submitting} />
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
