import './Login.css';
import './Button.css';

function Login() {
  return (
    <>
      <div id="login-page">
        <div className="left">
          <div className="back-to-home">
            <a href="/">Back to Home</a>
          </div>
          <div>Some wordssssssss</div>
        </div>
        <div className="right">
          <form className="login-form">
            <div className="login-title">Log In</div>
            <div className="username">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="loginButton">
              <button className="blue-button">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
