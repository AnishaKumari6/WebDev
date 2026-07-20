import "./login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>

        <form>
          
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">
            Login
          </button>

          <p className="signup-text">
            Don't have an account?
            <span> Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;