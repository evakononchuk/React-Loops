import React from "react";

export default function Cities() {
  let cities = ["London", "Madrid", "Barceona", "Oslo"];

  return (
    <div className="Cities">
      <ul>
        {cities.map((city, index) => {
          return <li key={index}>{city}</li>;
        })}
      </ul>
    </div>
  );
}
