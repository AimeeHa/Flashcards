import { useContext, useState } from 'react';
import './CreateFC.css';
import Layout from './Layout';
import { UserContext } from './UserProvider';

export default function CreateFC() {
  const user = useContext(UserContext);
  const [chooseManual, setChooseManual] = useState('chosen');
  const [chooseCsv, setChooseCsv] = useState('unchosen');

  if (user == null) {
    return (
      <Layout>
        <div className="null-user-message">
          Please log in to create your own flashcards.
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="create-page">
          <div className="create-options">
            <div
              className={`create-manually ${chooseManual}`}
              onClick={() => {
                setChooseManual('chosen');
                setChooseCsv('unchosen');
              }}
            >
              Create Manually
            </div>
            <div
              className={`create-csv ${chooseCsv}`}
              onClick={() => {
                setChooseManual('unchosen');
                setChooseCsv('chosen');
              }}
            >
              Create from .CSV
            </div>
          </div>
          <div className="create-form">
            <form>
              <input placeholder="Term" />
              <input placeholder="Definition" />
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}
