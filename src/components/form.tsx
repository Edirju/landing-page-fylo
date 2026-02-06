import { useState } from "react";
import { Button } from "./button";

const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

export const Form = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = emailRegex.test(inputValue);

    if (isValid) {
      console.log("submit");
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setInputValue(value);

    // Limpiar el error si el input está vacío o es válido
    if (value === "" || emailRegex.test(value)) {
      setError(false);
    }
  };

  return (
    <div className="absolute -top-50 xl:-top-30 left-0 right-0 mb-75 text-center py-10 px-6 bg-Navy-850 rounded-[9px] w-84 mx-auto md:w-120 xl:w-180">
      <h2 className="font-raleway font-bold text-xl xl:text-2xl mb-4">
        Get early access today
      </h2>
      <p className="text-sm mb-8 xl:text-base">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col gap-6 xl:flex-row relative"
      >
        <input
          onChange={handleChange}
          value={inputValue}
          type="email"
          placeholder="Enter your email"
          required
          className="bg-White text-Navy-950 rounded-3xl w-full h-12 text-left px-6 placeholder:text-Navy-800/40 text-sm xl:flex-1"
        />
        {error && (
          <p className="text-Red-500 text-xs absolute -bottom-6 left-6">
            Please enter a valid email address
          </p>
        )}
        <Button
          text="Get Started For Free"
          styles="w-full xl:w-fit font-bold xl:px-10 "
        />
      </form>
    </div>
  );
};
