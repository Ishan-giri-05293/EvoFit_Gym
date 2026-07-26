/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { WhyChoose } from '../components/WhyChoose';
import { Memberships } from '../components/Memberships';
import { Trainers } from '../components/Trainers';
import { Transformations } from '../components/Transformations';
import { Gallery } from '../components/Gallery';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { VisitEvo } from '../components/VisitEvo';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // remove the '#'
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <WhyChoose />
      <Memberships />
      <Trainers />
      <Transformations />
      <Gallery />
      <Testimonials />
      <FAQ />
      <VisitEvo />
    </>
  );
}
