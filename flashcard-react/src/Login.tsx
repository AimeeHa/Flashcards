import './Login.css';
import './Button.css';
import InputRow from './InputRow';
import BackHomeButton from './BackHomeButton';
import { useContext, useEffect, useState } from 'react';
import LoginLeftContent from './LoginLeftContent';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserProvider';

function Login() {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isError, setIsError] = useState('');

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
        setIsError('');
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

    const response = await fetch('http://localhost:8000/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formData),
    });

    if (response.status === 200) {
      console.log('Successfully logged in!');
      navigate('/');
      navigate(0); // refresh page
    } else if (response.status === 400) {
      setIsError('Incorrect email or password. Please try again.');
    } else {
      alert(response.status + ' ' + response.statusText);
    }
  };

  const rightContent =
    user?.username === null ? (
      <>
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
        <div className="alert-root">
          <div className="alert-shown">{isError}</div>
        </div>
      </>
    ) : (
      <div className="already-logged-in-message">
        You have already logged in.
      </div>
    );

  return (
    <>
      <div id="login-page">
        <div className="left">
          <BackHomeButton />
          {LoginLeftContent('Log in and start having fun.')}
        </div>
        <div className="right">{rightContent}</div>
      </div>
    </>
  );
}

export default Login;
