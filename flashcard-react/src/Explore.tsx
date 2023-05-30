import Slideshow from './Slideshow';
import Layout from './Layout';

function Explore() {
  return (
    <Layout>
      <div className="mostSavedBanner">
        <Slideshow />
      </div>
      <div className="popularSets">
        <div>POPULAR FLASHCARD SETS</div>
      </div>
      <div className="allCategories">FLASHCARD SETS BY CATEGORY</div>
    </Layout>
  );
}

export default Explore;
