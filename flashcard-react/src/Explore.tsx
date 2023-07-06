import Slideshow from './Slideshow';
import Layout from './Layout';
import { TabView } from './TabsView';

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
        <div>POPULAR FLASHCARD SETS</div>
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
      <div className="allCategories">FLASHCARD SETS BY CATEGORY</div>
    </>
  );
}
