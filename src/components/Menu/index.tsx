import "./style.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <button>
            <Link to="/">Home</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/about">About</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/posts">Posts</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/posts/10">Posts 10</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/redirect">Redirect</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}
