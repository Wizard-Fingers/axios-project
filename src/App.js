import React from "react";
import Time from "./components/Time";
import DateToday from "./components/Date";
import  Quote  from "./components/Quote";

export default function App() {
  return (
    <div className="App">
      
      <Time />
      <DateToday />
      <Quote/>
    </div>
  );
}


