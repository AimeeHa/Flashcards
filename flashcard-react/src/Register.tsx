import './Register.css';
import './Button.css';
import InputRow from './InputRow';
import BackHomeButton from './BackHomeButton';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const [isPwError, setIsPwError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);

  const createHandleInputChange = (setStateFunc: any) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setStateFunc(event.target.value);
    };
  };

  const handleNameChange = createHandleInputChange(setName);
  const handleEmailChange = createHandleInputChange(setEmail);
  const handlePasswordChange = createHandleInputChange(setPassword);
  const handleConfirmationChange = createHandleInputChange(setConfirmation);

  // const handleNameChange = async (
  //   event: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   setName(event.target.value);
  // };

  // const handleEmailChange = async (
  //   event: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   setEmail(event.target.value);
  // };

  // const handlePasswordChange = async (
  //   event: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   setPassword(event.target.value);
  // };

  // const handleConfirmationChange = async (
  //   event: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   setConfirmation(event.target.value);
  // };

  // USEEFFECT TO CLEAR ERROR ALERTS AFTER 2 SECONDS
  useEffect(() => {
    let timeoutId: number | undefined;

    if (isPwError) {
      timeoutId = setTimeout(() => {
        setIsPwError(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
    [isPwError];
  });

  useEffect(() => {
    let timeoutId: number | undefined;

    if (isEmailError) {
      timeoutId = setTimeout(() => {
        setIsEmailError(false);
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
    [isEmailError];
  });

  // HANDLE FORM SUBMISSION
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmation) {
      setIsPwError(true);
    } else {
      const formData = { name: name, email: email, password: password };

      const response = await fetch('http://localhost:8000/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        console.log('Successfully registered!');
        navigate('/login');
      } else if (response.status === 400) {
        setIsEmailError(true);
      } else {
        alert(response.status + ' ' + response.statusText);
      }
    }
  };

  return (
    <>
      <div id="register-page">
        <div className="left">
          <BackHomeButton />
          <div className="left-content">Some wordssssssss</div>
        </div>
        <div className="right">
          <form className="register-form" onSubmit={handleSubmit}>
            <InputRow
              id="name"
              label="Name"
              placeholder="Type your first name"
              type="text"
              onChange={handleNameChange}
            />
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
            <InputRow
              id="confirmation"
              label="Confirm Password"
              placeholder="Type your password again"
              type="password"
              onChange={handleConfirmationChange}
            />
            <div className="register-button">
              <button className="blue-button" type="submit">
                Register
              </button>
            </div>
          </form>
          <div className="alert-root">
            <div className={isPwError ? 'alert-shown' : 'alert-hidden'}>
              Passwords do not match. Please try again.
            </div>
            <div className={isEmailError ? 'alert-shown' : 'alert-hidden'}>
              This email has already been registered. Please use another email
              or back to &nbsp;
              <a
                href="/login"
                style={{
                  color: '#3D808E',
                  fontWeight: '500',
                }}
              >
                login
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
