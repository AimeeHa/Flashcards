import { useContext } from 'react';
import Layout from './Layout';
import './MyStudy.css';
import { UserContext } from './UserProvider';

export default function MyStudy() {
  const user = useContext(UserContext);

  if (user == null) {
    return (
      <Layout>
        <div className="null-user-message">
          Please log in to view your created flashcard sets.
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div>
          <ul>
            <li>Flashcard Set 1</li>
            <li>Flashcard Set 2</li>
          </ul>
        </div>
      </Layout>
    );
  }
}
