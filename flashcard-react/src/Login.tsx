import './Login.css';
import './Button.css';
import InputRow from './InputRow';
import BackHomeButton from './BackHomeButton';
import { useEffect, useState } from 'react';
import LoginLeftContent from './LoginLeftContent';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isError, setIsError] = useState(false);

  const handleEmailChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    let timeoutId: number | undefined;

    if (isError) {
      timeoutId = setTimeout(() => {
        setIsError(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
    [isError];
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = { email, password };
    console.log(formData); //TODO: check and login
    // IF NOT SUCCESSFUL, SET ERROR ALERT
    setIsError(true);
  };

  return (
    <>
      <div id="login-page">
        <div className="left">
          <BackHomeButton />
          {LoginLeftContent('Log in and start having fun.')}
        </div>
        <div className="right">
          <div className="form-root">
            <form className="login-form" onSubmit={handleSubmit}>
              <InputRow
                id="email"
                label="Email"
                placeholder="Type your email"
                type="email"
                onChange={handleEmailChange}
              />
              <InputRow
                id="password"
                label="Password"
                placeholder="Type your password"
                type="password"
                onChange={handlePasswordChange}
              />
              <div className="login-button">
                <button className="blue-button" type="submit">
                  Log In
                </button>
              </div>
            </form>
            <div
              className="link-to-others"
              style={{ position: 'absolute', bottom: '12px', right: '22%' }}
            >
              <a href="/resetpassword">Forgot your password?</a>
            </div>
          </div>
          <div
            className="link-to-others"
            style={{ width: '50%', textAlign: 'center' }}
          >
            <a href="/register">New here? Register an account.</a>
          </div>
          <div className={'alert-root'}>
            <div className={isError ? 'alert-shown' : 'alert-hidden'}>
              Incorrect email or password. Please try again.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
