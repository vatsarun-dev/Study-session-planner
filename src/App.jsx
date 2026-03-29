// Consume the shared app state from context instead of local component state.
import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import { MyContext } from "./context/MyContext";

const App = () => {
  const { click } = useContext(MyContext);

  return (
    // Keep the overall app fixed to the viewport so only the content pane scrolls.
    <div className="min-h-screen bg-black text-white flex flex-col md:h-screen md:flex-row md:overflow-hidden">
      <Navbar />

      {click ? <Form /> : <Dashboard />}
    </div>
  );
};

export default App;
