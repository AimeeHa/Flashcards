import EastRoundedIcon from '@mui/icons-material/EastRounded';

function getRandomTerm(category: string) {
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
      <div className="view-definition">
        <div>
          <a href="/explore">What's this?</a>
        </div>
        <div className="view-arrow">
          <EastRoundedIcon style={{ width: '0.6em' }} />
        </div>
      </div>
    </div>
  );
}

export default getRandomTerm;
