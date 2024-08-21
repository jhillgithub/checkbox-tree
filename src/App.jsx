import React from "react";
import { Tree } from "./components/Tree";
import { useFetchData } from "./hooks/useFetchData";

const App = () => {
  const { loading, error, data } = useFetchData();
  if (loading) {
    return (
      <div className="grid place-content-center text-3xl">Loading data...</div>
    );
  }
  if (error) {
    return (
      <div className="grid place-content-center text-3xl">
        Error loading data
      </div>
    );
  }
  return (
    <div className="container mx-auto flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Checkbox Tree</h1>
      <Tree {...data} />
    </div>
  );
};

export default App;
