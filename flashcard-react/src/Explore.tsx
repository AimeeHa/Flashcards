import Slideshow from './Slideshow';
import Layout from './Layout';
import { TabView } from './TabsView';
import './Explore.css';

function Explore() {
  return (
    <Layout>
      <TabView
        tabs={[
          {
            name: 'FLASHCARD SETS BY POPULARITY',
            view: <PopularSets />,
          },
          {
            name: 'FLASHCARD SETS BY CATEGORY',
            view: <AllSets />,
          },
        ]}
      ></TabView>
    </Layout>
  );
}

export default Explore;

function PopularSets() {
  return (
    <>
      <div className="mostSavedBanner">
        <Slideshow />
      </div>
      <div className="popularSets">
        <ul className="explore-list">
          <li className="explore-listitem"> Set 1</li>
          <li className="explore-listitem"> Set 2</li>
          <li className="explore-listitem"> Set 2</li>
          <li className="explore-listitem"> Set 2</li>
        </ul>
      </div>
    </>
  );
}

function AllSets() {
  return (
    <>
      <div className="mostSavedBanner">
        <Slideshow />
      </div>
      <div className="allCategories">
        <div>ENGLISH</div>
        <ul className="explore-list">
          <li className="explore-listitem"> Set 1</li>
          <li className="explore-listitem"> Set 2</li>
          <li className="explore-listitem"> Set 2</li>
          <li className="explore-listitem"> Set 2</li>
        </ul>
        <div>TECHNOLOGY</div>
        <ul className="explore-list">
          <li className="explore-listitem"> Set 1</li>
          <li className="explore-listitem"> Set 2</li>
          <li className="explore-listitem"> Set 2</li>
          <li className="explore-listitem"> Set 2</li>
        </ul>
        <div>OTHERS</div>
        <ul className="explore-list">
          <li className="explore-listitem"> Set 1</li>
          <li className="explore-listitem"> Set 2</li>
          <li className="explore-listitem"> Set 2</li>
          <li className="explore-listitem"> Set 2</li>
        </ul>
      </div>
    </>
  );
}
