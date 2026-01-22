import { useEffect, useRef, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Redirect() {
  const [time, setTime] = useState(5);
  const timeout = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    // reedirecionar aleatoriamente para /Home, /about ou /posts
    if (time === 0) {
      const random = Math.floor(Math.random() * 3);
      if (random === 0) navigate("/");
      else if (random === 1) navigate("/about");
      else navigate("/posts");
    }

    return () => clearTimeout(timeout.current);
  }, [time]);

  return (
    <div>
      <h1>Get out of here in {time}</h1>
    </div>
  );
}
