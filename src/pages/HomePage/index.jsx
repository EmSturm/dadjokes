import { useEffect, useState } from "react";
import "./style.css";
import { Joke } from "../../components/Joke";

export const HomePage = () => {
  const [joke, setJoke] = useState([]);

  useEffect(() => async () => {
    const response = await fetch("http://localhost:4000/api/jokes");
    const data = await response.json();
    setJoke(data.result);
  }, []);

  return (
    <div className="container">
      {joke.map((joke) => (
        <Joke
          key={joke.name}
          userAvatar={joke.userAvatar}
          userName={joke.userName}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};
