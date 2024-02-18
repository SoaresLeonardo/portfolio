import Contact from './components/contact';
import Hero from './components/hero';
import Role from './components/role';
import Work from './components/work';

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <Role />
      <Contact />
    </main>
  );
}
