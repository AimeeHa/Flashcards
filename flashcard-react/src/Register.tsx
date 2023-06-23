import './Register.css';
import './Button.css';
import InputRow from './InputRow';
import BackHomeButton from './BackHomeButton';
import { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleNameChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setName(event.target.value);
  };

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

  const handleConfirmationChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmation(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmation) {
      alert('Passwords do not match!'); //TODO: change to a better way
    }

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
    } else {
      alert('This email has already been registered!'); //TODO: change to a better way
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
          <div>Passwords do not match. Please re-enter your passwords.</div>
          <div>
            This email has already been registered. Please use another email or
            back to <a href="/login">login</a>.
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
