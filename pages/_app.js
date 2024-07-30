// pages/_app.js
import { Provider } from 'react-redux';
import { TestimonialsProvider } from '../components/TestimonialsContext';
import store from '../redux/store';
import '../styles/globals.css';
import '../styles/Header.css';
import '../styles/Footer.css';
import '../styles/Home.css';
import '../styles/Projects.css';
import '../styles/Contact.css';
import '../styles/Testimonials.css';
import '../styles/AddTestimonials.css';
import '../styles/Login.css';
import '../styles/Signup.css';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <TestimonialsProvider>
        <Component {...pageProps} />
      </TestimonialsProvider>
    </Provider>
  );
}

export default MyApp;




