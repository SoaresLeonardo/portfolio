/* eslint-disable @typescript-eslint/no-unused-vars */
import Contact from './components/contact';
import Hero from './components/hero';
import Role from './components/role';
import Service from './components/service';
import Work from './components/work';

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <Service />
      <Role />
      <Contact />
    </main>
  );
}
