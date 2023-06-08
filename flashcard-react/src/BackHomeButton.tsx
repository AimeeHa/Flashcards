import WestRoundedIcon from '@mui/icons-material/WestRounded';
import './BackHomeButton.css';

export default function BackHomeButton() {
  return (
    <div className="back-to-home">
      <div id="back-arrow">
        <WestRoundedIcon style={{ width: '0.7em' }} />
      </div>
      <a href="/">Back to Home</a>
    </div>
  );
}
