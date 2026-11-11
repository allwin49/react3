
function Login({ onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
  };

  return (
    <section className="t3-login">
      <form className="t3-login__card" onSubmit={handleSubmit}>
        <p className="t3-eyebrow">Login</p>

        <h2 className="t3-login__title">
          Welcome Back!
        </h2>

        <p className="t3-login__text">
          Please login to continue
        </p>

        <label className="t3-field">
          <span>Email</span>
          <input
            type="email"
            placeholder="Enter your email"
            defaultValue="demo@gmail.com"
            required
          />
        </label>

        <label className="t3-field">
          <span>Password</span>
          <input
            type="password"
            placeholder="Enter your password"
            defaultValue="password"
            required
          />
        </label>

        <button
          type="submit"
          className="t3-btn t3-btn--primary t3-btn--block"
        >
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
