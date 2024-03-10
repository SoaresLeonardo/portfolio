import WorkCard from './work-card';

const Work = () => {
  return (
    <section className="w-full pt-11">
      <div>
        <WorkCard
          work={{
            name: 'Acme Dashboard',
            created_at: '2024',
            href: 'https://github.com/',
            description:
              "I worked closely with co-founders Ilia Papas and Amy Pan to help define Band's visual language taking the product from Mto Version 1.",
            type: 'Website',
            image:
              'https://www.huyng.xyz/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ffwy0yv14lkat%2F1bqxvANkt1moTkqRYpu4Zn%2F2a83a385a9ee8b393c414c35fe0a27c1%2Fubimov.webp&w=1080&q=75'
          }}
        />
        <WorkCard
          work={{
            name: 'Acme Dashboard',
            created_at: '2024',
            href: 'https://github.com/',
            description:
              "I worked closely with co-founders Ilia Papas and Amy Pan to help define Band's visual language taking the product from Mto Version 1.",
            type: 'Website',
            image:
              'https://www.huyng.xyz/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ffwy0yv14lkat%2F1bqxvANkt1moTkqRYpu4Zn%2F2a83a385a9ee8b393c414c35fe0a27c1%2Fubimov.webp&w=1080&q=75'
          }}
          className="bg-black text-white"
        />
        <WorkCard
          work={{
            name: 'Acme Dashboard',
            created_at: '2024',
            href: 'https://github.com/',
            description:
              "I worked closely with co-founders Ilia Papas and Amy Pan to help define Band's visual language taking the product from Mto Version 1.",
            type: 'Website',
            image:
              'https://www.huyng.xyz/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ffwy0yv14lkat%2F1bqxvANkt1moTkqRYpu4Zn%2F2a83a385a9ee8b393c414c35fe0a27c1%2Fubimov.webp&w=1080&q=75'
          }}
          className="border border-gray-200 bg-transparent"
        />
        <WorkCard
          work={{
            name: 'Acme Dashboard',
            created_at: '2024',
            href: 'https://github.com/',
            description:
              "I worked closely with co-founders Ilia Papas and Amy Pan to help define Band's visual language taking the product from Mto Version 1.",
            type: 'Website',
            image:
              'https://www.huyng.xyz/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ffwy0yv14lkat%2F1bqxvANkt1moTkqRYpu4Zn%2F2a83a385a9ee8b393c414c35fe0a27c1%2Fubimov.webp&w=1080&q=75'
          }}
        />
      </div>
    </section>
  );
};

export default Work;
