import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { useNavigate } from 'react-router-dom';

function getRandomTerm(category: string) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexGrow: 0.8,
        gap: '12px',
      }}
    >
      <div className="terms">
        {/* TODO: */}
        {category == 'TECH' ? 'TECH' : category == 'ENG' ? 'TOO TIRED' : ''}
      </div>
      <div
        className="view-definition"
        onClick={() => {
          // TODO: Change link
          navigate('/explore');
        }}
      >
        <div>What's this?</div>
        <div className="view-arrow">
          <EastRoundedIcon style={{ width: '0.6em' }} />
        </div>
      </div>
    </div>
  );
}

export default getRandomTerm;
