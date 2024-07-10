import React from 'react';

import About from '../components/About';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';

export default function ContactUs() {
  return (
    <>
      <Header />
      <LazyShow>
        <>
          <div className="justify-center flex m-10">
            <div className="flex flex-col">
              <h1 className="justify-center flex">Contact Us</h1>
              <h5>
                Any questions or looking for a free quote? Contact us below!
              </h5>
            </div>
          </div>
          <ContactForm />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
    </>
  );
}
