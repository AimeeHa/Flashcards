import { useContext } from 'react';
import Layout from './Layout';
import './MyStudy.css';
import { UserContext } from './UserProvider';
import { TabView } from './TabsView';

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
        <TabView
          tabs={[
            {
              name: 'YOUR CREATED FLASHCARD SETS',
              view: <OwnedSet />,
            },
            {
              name: 'YOUR SAVED FLASHCARD SETS',
              view: <SavedSet />,
            },
          ]}
        ></TabView>
      </Layout>
    );
  }
}

function OwnedSet() {
  return (
    <div>
      <ul>
        <li>Owned Set 1</li>
        <li>Owned Set 2</li>
      </ul>
    </div>
  );
}

function SavedSet() {
  return (
    <div>
      <ul>
        <li>Saved Set 1</li>
        <li>Saved Set 2</li>
      </ul>
    </div>
  );
}
