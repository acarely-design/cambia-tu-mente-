/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Donation from './components/Donation';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-secondary selection:bg-brand-primary/20 selection:text-brand-primary">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Donation />
      </main>
      <Footer />
    </div>
  );
};

export default App;
