import React from "react";

const InputField = ({
  title,
  type,
  id,
  register,
  error,
  disabled,
  parentStyle,
}) => {
  return (
    <div className={parentStyle || ""}>
      <label
        htmlFor="email"
        className="block text-sm block font-medium mb-1 text-start  leading-5 mb-1 text-gray-700"
      >
        {title}
      </label>
      <div>
        <input
          id={id}
          name={id}
          type={type}
          className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          {...register}
          disabled={disabled}
        />
      </div>
      {error && (
        <div className="flex text-red-500 text-sm  text-start">{error}</div>
      )}
    </div>
  );
};

export default InputField;
