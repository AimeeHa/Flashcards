import './Login.css';
import './Button.css';
import './FormInput.css';
import WestRoundedIcon from '@mui/icons-material/WestRounded';

function Login() {
  return (
    <>
      <div id="login-page">
        <div className="left">
          <div className="back-to-home">
            <div id="back-arrow">
              <WestRoundedIcon style={{ width: '0.8em' }} />
            </div>
            <a href="/">Back to Home</a>
          </div>
          <div>Some wordssssssss</div>
        </div>
        <div className="right">
          <form className="login-form">
            <div className="username">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Type your username"
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Type your password"
              />
            </div>
            <div className="login-button">
              <button className="blue-button">Log In</button>
              <div className="link-to-others">
                <a href="/resetpassword">Forgot your password?</a>
              </div>
            </div>
          </form>
          <div className="link-to-others">
            <a href="/register">Don't have an account? Register here.</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
