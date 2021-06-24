import Nav from './Nav'
import Meta from './Meta'
import Footer from './Footer'

function Layout({ children }) {
    return (
      <>
        <Meta></Meta>
        <Nav></Nav>
        <main>{children}</main>
        <Footer />
      </>
    );
  }
  
  export default Layout;