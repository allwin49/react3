
function Home({ onLogout }) {
  return (
    <section className="t3-home">
      <div className="t3-home__text">
        <p className="t3-eyebrow">Home</p>

        <h2 className="t3-home__title">
          Welcome Back!
        </h2>

        <p className="t3-home__subtitle">
          You are successfully logged in.
        </p>
      </div>

      <button
        type="button"
        className="t3-btn t3-btn--outline"
        onClick={onLogout}
      >
        Logout
      </button>
    </section>
  );
}

export default Home;
