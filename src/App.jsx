import React from "react";
import { Tree } from "./components/Tree";

const data = {
  name: "Root",
  children: [
    { name: "Child 1" },
    { name: "Child 2", checked: true },
    { name: "Child 3" },
  ],
};

const App = () => {
  return (
    <div className="container mx-auto flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Checkbox Tree</h1>
      <Tree {...data} />
    </div>
  );
};

export default App;
