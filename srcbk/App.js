
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"

import store from "./store";
import { Provider } from "react-redux";
import{Helmet, HelmetProvider} from 'react-helmet-async'
import AnimatedRoutes from "AnimatedRoutes"
function App() {
  
  return (
    <HelmetProvider>

      <Helmet>
      <title>Francisco |  Software Developer</title>
      <meta name="description" content="Portfolio Web, Made your webPage" />
      <meta name="keywords" content="Portfolio, web, app mobile, react, python" />
      <meta name="robots" content='all' />
      <link rel="canonical" href="https://murkiva.com" />
      <meta name="author" content='Francisco Chacon' />
      <meta name="publisher" content='Francisco Chacon' />

       {/* Social Media Tags */}
       <meta property="og:title" content='Francisco |  Software Developer' />
        <meta property="og:description" content='Portfolio Web, Made your webPage' />
        <meta property="og:url" content="https://www.murkiva.com/" />
        <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

        <meta name="twitter:title" content='Francisco |  Software Developer' />
        <meta
            name="twitter:description"
            content='Portfolio Web, Made your webPage'
        />
        <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
        <meta name="twitter:card" content="summary_large_image" />

      </Helmet>

      <Provider store={store}>
      <Router>
      
   
      <AnimatedRoutes/>
    </Router>
      </Provider>

    </HelmetProvider>
    
  );
}

export default App;
