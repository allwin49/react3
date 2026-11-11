
import { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import "./task3.css";

const users = [
  {
    id: 1,
    name: "Allwin",
    email: "allwin@gmail.com",
    age: 23,
    city: "Coimbatore",
    role: "Full Stack Developer"
  },
  {
    id: 2,
    name: "Arun",
    email: "arun@gmail.com",
    age: 25,
    city: "Chennai",
    role: "Frontend Developer"
  },
  {
    id: 3,
    name: "Kumar",
    email: "kumar@gmail.com",
    age: 28,
    city: "Madurai",
    role: "Backend Developer"
  },
  {
    id: 4,
    name: "Ravi",
    email: "ravi@gmail.com",
    age: 24,
    city: "Trichy",
    role: "UI/UX Designer"
  },
  {
    id: 5,
    name: "Vijay",
    email: "vijay@gmail.com",
    age: 22,
    city: "Salem",
    role: "QA Engineer"
  },
  {
    id: 6,
    name: "Divya",
    email: "divya@gmail.com",
    age: 26,
    city: "Erode",
    role: "Data Analyst"
  }
];

function UserCard({ user }) {
  const { name, email, age, city, role } = user;

  return (
    <article className="t3-card">
      <header className="t3-card__top">
        <div className="t3-avatar">
          {name.charAt(0).toUpperCase()}
        </div>

        <div>
          <h3 className="t3-card__name">{name}</h3>
          <p className="t3-card__role">{role}</p>
        </div>
      </header>

      <dl className="t3-details">
        <div className="t3-detail">
          <dt>Email</dt>
          <dd>{email}</dd>
        </div>

        <div className="t3-detail">
          <dt>City</dt>
          <dd>{city}</dd>
        </div>

        <div className="t3-detail">
          <dt>Age</dt>
          <dd>{age}</dd>
        </div>
      </dl>

      <footer className="t3-card__footer">
        {age < 24 && (
          <span className="t3-tag--new">Fresher</span>
        )}
      </footer>
    </article>
  );
}

function Task3() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="task3-container">
      <div className="task3-inner">

        <h1 className="t3-main-title">React Task 3</h1>

        <p className="t3-main-subtitle">
          List Rendering & Conditional Rendering
        </p>

        {isLoggedIn ? (
          <>
            <Home onLogout={handleLogout} />

            <section className="t3-users">
              <h2 className="t3-users__title">
                Student Details
                <span className="t3-users__count">
                  {users.length}
                </span>
              </h2>

              <div className="t3-grid">
                {users.map((user) => (
                  <UserCard key={user.id} user={user} />
                ))}
              </div>
            </section>
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}

      </div>
    </div>
  );
}

export default Task3;
