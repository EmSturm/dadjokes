import { useEffect, useState } from "react";
import "./style.css";

export const HomePage = () => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [joke, setJoke] = useState('')

  useEffect (() => {
    const fetchJoke = async () => {
      const response = await fetch('http://localhost:4000/api/jokes')
      const data = await response.json();
      setJoke(data.result);
    };

    fetchJoke();
  }, []);

  return (
    <div className="container">
      <div className="container">
        <div className="joke">
          <div className="joke__body">
            <div className="joke__user">
              <img className="user-avatar" src="../img/user01.png" />
              <p className="user-name">Neroxx</p>
            </div>

            <p className="joke__text">
              The secret service isn't allowed to yell "Get down!" anymore when
              the president is about to be attacked. Now they have to yell
              "Donald, duck!"
            </p>
          </div>
          <div className="joke__likes">
            <button
              onClick={() => {
                setLike(like + 1);
              }}
              id="btn-up"
              className="btn-like btn-like--up"
            ></button>
            <span id="likes-up" className="likes-count likes-count--up">
              {like}
            </span>
            <button
              onClick={() => {
                setDislike(dislike + 1);
              }}
              id="btn-down"
              className="btn-like btn-like--down"
            ></button>
            <span id="likes-down" className="likes-count likes-count--down">
              {dislike}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
