import { useState, useEffect } from "react";

const ApiTest = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchCharacters(apiLink) {
      const response = await fetch(apiLink);
      const data = await response.json();
      setData(data);
    }

    setTimeout(() => {
      fetchCharacters("https://swapi.dev/api/people");
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <ul className="items">
        {data ? (
          data?.results?.map((d) => (
            <li key={d?.name} className="item">
              <p>{d?.name}</p>
              <p>Height: {d?.height}</p>
              <p>Mass: {d?.mass}</p>
              <p>Skin Color: {d?.skin_color}</p>
            </li>
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </ul>
    </div>
  );
};

export default ApiTest;
