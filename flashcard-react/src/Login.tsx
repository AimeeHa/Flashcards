import './Login.css';
import './Button.css';
import InputRow from './InputRow';
import BackHomeButton from './BackHomeButton';

function Login() {
  return (
    <>
      <div id="login-page">
        <div className="left">
          <BackHomeButton />
          <div className="left-content">Some wordssssssss</div>
        </div>
        <div className="right">
          <form className="login-form">
            <InputRow
              id="email"
              label="Email"
              placeholder="Type your email"
              type="email"
            />
            <InputRow
              id="password"
              label="Password"
              placeholder="Type your password"
              type="password"
            />
            <div className="login-button">
              <button className="blue-button">Log In</button>
              <div className="link-to-others">
                <a href="/resetpassword">Forgot your password?</a>
              </div>
            </div>
          </form>
          <div
            className="link-to-others"
            style={{ width: '50%', textAlign: 'center' }}
          >
            <a href="/register">New here? Register an account.</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
