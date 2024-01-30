import Link from "next/link";
import "./login.css";

export default function Layout({ children }) {
  return (
    <div>
      <ul className="login-menu">
        <li>
          <h4>Login Navbar</h4>
        </li>
        <li>
          <Link href="/login">Login Page</Link>
        </li>
        <li>
          <Link href="/login/loginstudent">Student Login Page</Link>
        </li>
        <li>
          <Link href="/login/loginteacher">Teacher Login Page</Link>
        </li>
      </ul>

      {children}
    </div>
  );
}
