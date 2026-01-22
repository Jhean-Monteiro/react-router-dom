import { useParams, useSearchParams } from "react-router-dom";
import "./style.css";

export default function Posts() {
  const params = useParams();
  const { id } = params;

  // Query String
  const [qs] = useSearchParams();

  return (
    <div>
      <h1>
        Post Page {`Para ${id}`} {`qs: ${qs.get("page")}`}
      </h1>
      <p>This is a post page.</p>
    </div>
  );
}
