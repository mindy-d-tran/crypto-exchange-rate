import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>CRYPTO PRICES</div>
      </Link>
      <Link to="/curencies">
        <div>CURRENCIES</div>
      </Link>
    </div>
  );
}
