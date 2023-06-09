import './Register.css';
import './Button.css';
import InputRow from './InputRow';
import BackHomeButton from './BackHomeButton';

function Register() {
  return (
    <>
      <div id="register-page">
        <div className="left">
          <BackHomeButton />
          <div className="left-content">Some wordssssssss</div>
        </div>
        <div className="right">
          <form className="register-form">
            <InputRow
              id="name"
              label="Name"
              placeholder="Type your first name"
              type="text"
            />
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
            <InputRow
              id="confirmation"
              label="Confirm Password"
              placeholder="Type your password again"
              type="password"
            />
            <div className="register-button">
              <button className="blue-button">Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
