import Contact from '../(home)/components/contact';

/* eslint-disable @next/next/no-img-element */
export default function Me() {
  return (
    <section className="w-full pt-[24vh]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center">
        <div className="flex w-full items-start justify-center gap-5">
          <div className="aspect-w-4 aspect-h-3 h-[456px] w-1/2 overflow-hidden rounded-2xl">
            <img
              src="https://avatars.githubusercontent.com/u/100442262?v=4"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex w-1/2 flex-col gap-5 p-5">
            <h3 className="text-5xl font-medium">
              Me chamo Leonardo, Web Developer
            </h3>
            <p className="w-full max-w-2xl text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              expedita, molestiae libero magnam illo culpa aperiam. Aliquid
              incidunt repellat, ratione nulla odio culpa ea numquam doloremque
              ducimus sequi molestias voluptatem! Lorem ipsum dolor sit amet,
              <br />
              <br />
              consectetur adipisicing elit. Quod laudantium neque tempore optio
              inventore accusamus doloremque eum voluptatum quis excepturi
              tempora quam reprehenderit dicta, architecto in totam nobis rem
              minus?
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  );
}
