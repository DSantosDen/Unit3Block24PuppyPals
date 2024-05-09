import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          //Why is this section displaying a warning?, also how do I use setPuppies in line 6
          <p
            onClick={() => {
              setFeatPupId(puppy.id);
            }}
          >
            {puppy.name}
          </p>
        );
      })}
      <p>
        {featPupId && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}{" "}
      </p>
    </div>
  );
}

export default App;
