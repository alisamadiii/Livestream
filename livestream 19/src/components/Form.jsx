import { useState } from "react";
import { motion } from "framer-motion";

const transition = { duration: 4, type: "spring", ease: "easeInOut" };

export default function Form() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmission = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const nameValue = event.target[0].value;
    const messageValue = event.target[1].value;

    if (nameValue.length == 0 || messageValue.length == 0) return;

    setTimeout(() => {
      setIsSubmitted(true);
      setName(nameValue);
      setMessage(messageValue);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      {isSubmitted ? (
        <div>
          <h1 className="text-2xl">
            Welcome{" "}
            <span className="px-2 font-bold text-blue-700 bg-blue-100">
              {name}
            </span>
          </h1>
          <p className="mt-12">This is the message you wrote for us:</p>
          <p className="text-2xl italic">"{message}"</p>
        </div>
      ) : (
        <form onSubmit={handleSubmission} className="flex flex-col gap-4">
          <input
            name="name"
            type="text"
            placeholder="name"
            className="p-4 border border-blue-500 outline-none w-96"
          />
          <textarea
            name="message"
            placeholder="message"
            cols="30"
            rows="10"
            className="p-4 border border-blue-500 outline-none w-96"
          ></textarea>
          <button className="w-24 py-4 text-white rounded-lg bg-blue-950">
            {isLoading ? "loading..." : "Submit"}
          </button>
        </form>
      )}

      <div className="container">
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437">
          <motion.path
            d="M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5"
            fill="#000"
            strokeWidth="12"
            stroke="rgba(255, 0, 0, 1)"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
        </svg> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          fill="currentColor"
          class="bi bi-check"
          viewBox="0 0 16 16"
        >
          <motion.path
            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
            fill="black"
            strokeDasharray={"10 10"}
            stroke={"red"}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
        </svg>
      </div>
    </div>
  );
}
