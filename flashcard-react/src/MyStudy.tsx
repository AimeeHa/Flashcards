import { useContext } from 'react';
import Layout from './Layout';
import './MyStudy.css';
import { UserContext } from './UserProvider';
import { TabView } from './TabsView';

export default function MyStudy() {
  const user = useContext(UserContext);

  if (user?.username === null) {
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
      <ul className="mystudy-list">
        <li className="mystudy-listitem">Owned Set 1</li>
        <li className="mystudy-listitem">Owned Set 2</li>
        <li className="mystudy-listitem">Owned Set 2</li>
        <li className="mystudy-listitem">Owned Set 2</li>
      </ul>
    </div>
  );
}

function SavedSet() {
  return (
    <div>
      <ul className="mystudy-list">
        <li className="mystudy-listitem">Saved Set 1</li>
        <li className="mystudy-listitem">Saved Set 2</li>
        <li className="mystudy-listitem">Saved Set 2</li>
        <li className="mystudy-listitem">Saved Set 2</li>
      </ul>
    </div>
  );
}
