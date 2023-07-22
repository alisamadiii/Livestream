import { useState, useCallback } from "react";
import Count from "./component/Count";
import Title from "./component/Title";
import Button from "./component/Button";

function App() {
  const [count, setCount] = useState(0);
  const [salary, setSalary] = useState(0);

  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);

  return (
    <div className="App">
      <Title />
      <section>
        <Count value={count} />
        <Button onClick={handleCount}>Increase number</Button>
      </section>

      <section>
        <Count value={salary} />
        <Button onClick={handleSalary}>Increase salary</Button>
      </section>
    </div>
  );
}

export default App;
