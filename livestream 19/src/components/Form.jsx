import { useState } from "react";

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
    </div>
  );
}
