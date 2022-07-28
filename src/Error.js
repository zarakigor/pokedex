import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h2>404</h2>
      <p>page not found psyduck ın resmi var</p>
      <Link to="/">back to home</Link>
    </div>
  );
}

export default Error;
