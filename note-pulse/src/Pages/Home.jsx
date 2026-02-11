import { Link } from "react-router-dom";
function home() {
  return (
    <div>
      <h1 className="font-serif">home</h1>
      <Link to="/login">Ir para Login</Link>
    </div>
  );
}

export default Home;
