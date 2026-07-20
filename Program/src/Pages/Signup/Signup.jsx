import "./Signup.css"
function Signup() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Signup</h1>

        <form>
          <div className="input-group">
            <label>First name</label>
            <input
              type="text"
              placeholder="Enter your First name"
            />
          </div>
          <div className="input-group">
            <label>Last name</label>
            <input
              type="texr"
              placeholder="Enter your Last name"
            />
          </div>
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
          <div className="input-group">
            <label>confirm Password</label>
            <input
              type="password"
              placeholder="Enter your confirm password"
            />
          </div>

          <button type="submit">
            Signup
          </button>

            
          
        </form>
      </div>
    </div>
  );
}
export default Signup;