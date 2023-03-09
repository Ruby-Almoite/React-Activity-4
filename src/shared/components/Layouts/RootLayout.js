import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import {Link} from 'react-router-dom'
import './RootLayout.css'
const RootLayout = ({children}) => {

    return (
      <div className="root-main">

        <Header> </Header>

        <div className="nav">

        <Link to="/Home"> Home </Link> &nbsp;

        <Link to="/Cars"> Cars</Link> &nbsp;

        <Link to="/ContactUs"> Contact Us </Link> &nbsp;

        </div>

                {children}

        <Footer> </Footer>

      </div>
    );
  }
  
  export default RootLayout;