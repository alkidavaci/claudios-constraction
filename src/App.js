import './App.css';
import { ApolloProvider } from '@apollo/client';
  
  // Import component
  import {  Footer, Header, NotFound } from './components';
  import { Home, AboutUs, Services, Projects, ContactUs, NotFound } from './pages'

// Entry point. Defines the structure and layout 
function App() {
    return (
      <ApolloProvider client={client}>
        <Router>
        <div className="flex-column justify-flex-start min-100-vh">
            <Header />
            <div className="container" style={{padding:"15px"}}>
              <Routes>
                <Route 
                  path="/" 
                  element={<Home />} 
                />
                <Route 
                  path="/about-us" 
                  element={<AboutUs />} 
                />
                  <Route 
                  path="/services" 
                  element={<Services />} 
                />
                  <Route 
                  path="/projects" 
                  element={<Projects />} 
                />
                   <Route 
                  path="/contact-us" 
                  element={<ContactUs />} 
                />
                    <Route 
                  path="*" 
                  element={<NotFound />} 
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    );
  }

export default App;
