import { useState } from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Portfolio from './Portfolio';
import Resume from './Resume';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // Check the value of `currentPage` and return the corresponding component to render.
  const renderPage = () => {
    
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Passing currentPage from state and the function handlePageChange to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Method to return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}
