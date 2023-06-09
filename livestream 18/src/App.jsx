import { useState, useRef } from "react";

const INITIAL_VALUE = [
  {
    id: 1,
    quote: "Never Give Up",
  },
  {
    id: 2,
    quote: "Believe in yourself",
  },
];

function App() {
  const [quotes, setQuotes] = useState(INITIAL_VALUE);
  const inputRef = useRef(null);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let { value } = event.target[0];

    setQuotes([
      ...quotes,
      { id: quotes[quotes.length - 1].id + 1, quote: value },
    ]);

    inputRef.current.value = "";
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-60 h-72 bg-gray-100 p-4 rounded-lg shadow-xl">
        {quotes.map((quote) => (
          <div key={quote.id}>
            <span>{quote.id}</span>. <span>{quote.quote}</span>
          </div>
        ))}
      </div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Add Quote"
          className="w-60 mt-8 bg-gray-800 text-white p-2 rounded-md"
        />
      </form>
    </div>
  );
}

export default App;
