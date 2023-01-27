import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import "./landing.css";

const Landing = () => {
  const [data, setData] = useState(null);

  const getData = () => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    console.log(data);
    getData();
  }, []);
  if (!data) return null;
  return (
    <div>
      {data.map((character, index) => (
        <Card name={character.name} image={character.image} key={index} />
      ))}
    </div>
  );
};

export default Landing;
