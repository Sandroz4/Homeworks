import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="first">Home</Link>
      <Link to="/about" className="second">About</Link>
    </nav>
  );
}
