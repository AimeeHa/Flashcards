import './Register.css';
import './Button.css';
import InputRow from './InputRow';
import BackHomeButton from './BackHomeButton';
import { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = { name, email, password };
    console.log(formData); //TODO: send to backend
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
            />
            <div className="register-button">
              <button className="blue-button" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
