import Nav from './Nav'
import Meta from './Meta'
import Footer from './Footer'

function Layout({ children, content }) {
    return (
      <>
        <Meta />
        <Nav />
        <main>{children}</main>
        <Footer content={content}/>
      </>
    );
  }
  
  export default Layout;