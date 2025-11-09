import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold text-center pt-20">My Portfolio</h1>
      </div>
    </>
  );
}

export default App;
