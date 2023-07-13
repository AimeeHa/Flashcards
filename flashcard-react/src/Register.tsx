import './Register.css';
import './Button.css';
import InputRow from './InputRow';
import BackHomeButton from './BackHomeButton';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginLeftContent from './LoginLeftContent';
import { UserContext } from './UserProvider';

function Register() {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const [isError, setIsError] = useState('');

  const createHandleInputChange = (setStateFunc: any) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setStateFunc(event.target.value);
    };
  };

  const handleNameChange = createHandleInputChange(setName);
  const handleEmailChange = createHandleInputChange(setEmail);
  const handlePasswordChange = createHandleInputChange(setPassword);
  const handleConfirmationChange = createHandleInputChange(setConfirmation);

  // USEEFFECT TO CLEAR ERROR ALERTS AFTER 2 SECONDS
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

  // HANDLE FORM SUBMISSION
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmation) {
      setIsError('Passwords do not match. Please try again.');
    } else {
      const formData = { name: name, email: email, password: password };

      const response = await fetch('http://localhost:8000/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        console.log('Successfully registered!');
        navigate('/login');
      } else if (response.status === 400) {
        setIsError(
          'This email has already been registered. Please use another email or back to Homepage for login.',
        );
      } else {
        alert(response.status + ' ' + response.statusText);
      }
    }
  };

  const rightContent =
    user?.username === null ? (
      <>
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
          <div className="alert-shown">{isError}</div>
        </div>
      </>
    ) : (
      <>
        <div className="already-logged-in-message">
          You are currently logged in. Please log out first.
        </div>
      </>
    );

  return (
    <>
      <div id="register-page">
        <div className="left">
          <BackHomeButton />
          {LoginLeftContent('Register and start your study journey here.')}
        </div>
        <div className="right">{rightContent}</div>
      </div>
    </>
  );
}

export default Register;
