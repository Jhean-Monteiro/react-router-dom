import "./style.css";
import { useLocation } from "react-router-dom";

export default function Home() {
  const { state } = useLocation();

  return (
    <div>
      <h1>Página Inicial</h1>
      <p>{state as string}</p>
    </div>
  );
}
