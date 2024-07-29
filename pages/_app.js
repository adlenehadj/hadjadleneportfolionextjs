// src/pages/_app.js
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/globals.css';
import '../styles/Header.css';
import '../styles/Footer.css';
import '../styles/Home.css';
import '../styles/Projects.css';
import '../styles/Contact.css';
import '../styles/Testimonials.css';
import '../styles/AddTestimonials.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;



