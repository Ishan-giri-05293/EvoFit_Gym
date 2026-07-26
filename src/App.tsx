/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { Home } from './pages/Home';
import { BookTrial } from './pages/BookTrial';
import { TransformationsPage } from './pages/TransformationsPage';

export default function App() {
  return (
    <Router>
      <div className="bg-zinc-950 text-white font-sans selection:bg-white selection:text-zinc-950">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book-trial" element={<BookTrial />} />
            <Route path="/transformations" element={<TransformationsPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}
