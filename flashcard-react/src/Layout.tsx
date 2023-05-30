import './Layout.css';
import Navbar from './Navbar';

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  return (
    <div id="layout">
      <Navbar />
      {props.children}
    </div>
  );
}

export default Layout;
