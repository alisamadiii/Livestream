import React, { useState } from "react";

export default function App() {
  const [profileData, setProfileData] = useState({
    name: "Ali and Tobi",
    age: 30,
    country: "India",
    dataOfBirth: "2005",
    job: "front-end",
    salary: 3000,
  });

  return (
    <div>
      <Profiles {...profileData} />
    </div>
  );
}

function Profiles({ name, age, country, dataOfBirth, job, salary }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{country}</h3>
      <h4>{dataOfBirth}</h4>
      <h5>{job}</h5>
      <h6>{salary}</h6>
    </div>
  );
}

/*
big component - extension for making component ✅
prop drilling ✅
React.Fragment ✅
lazy loading ✅
Messy Files ✅
prop plowing ✅
*/
