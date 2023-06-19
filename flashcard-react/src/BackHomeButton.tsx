import WestRoundedIcon from '@mui/icons-material/WestRounded';
import './BackHomeButton.css';
import { useNavigate } from 'react-router-dom';

export default function BackHomeButton() {
  const navigate = useNavigate();
  return (
    <div
      className="back-to-home"
      onClick={() => {
        navigate('/');
      }}
    >
      <div id="back-arrow">
        <WestRoundedIcon style={{ width: '0.7em' }} />
      </div>
      <div>Back to Home</div>
    </div>
  );
}
