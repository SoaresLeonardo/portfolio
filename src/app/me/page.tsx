import Services from './_components/services';

/* eslint-disable @next/next/no-img-element */
export default function Me() {
  return (
    <section className="w-full pb-32 pt-[24vh]">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-start justify-center">
        <h1 className="mb-5 text-[27px]">Web. Developer.</h1>
        <div className="flex w-full items-start justify-center gap-5">
          <div className="aspect-w-4 aspect-h-3 h-[350px] w-1/2 overflow-hidden rounded-2xl">
            <img
              src="https://avatars.githubusercontent.com/u/100442262?v=4"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex w-1/2 flex-col gap-5 p-5">
            <p className="w-full max-w-2xl text-[17px] text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              expedita, molestiae libero magnam illo culpa aperiam. Aliquid
              <br />
              <br />
              incidunt repellat, ratione nulla odio culpa ea numquam doloremque
              ducimus sequi molestias voluptatem! Lorem ipsum dolor sit amet,
              <br />
              <br />
              consectetur adipisicing elit. Quod laudantium neque tempore optio
              inventore accusamus doloremque eum voluptatum quis excepturi
              tempora quam reprehenderit dicta, architecto in totam nobis rem
              minus?
              <br />
              <br />
              consectetur adipisicing elit. Quod laudantium neque tempore optio
              inventore accusamus doloremque eum voluptatum quis excepturi
              tempora quam reprehenderit dicta, architecto in totam nobis rem
              minus?
            </p>
          </div>
        </div>
        <Services />
      </div>
    </section>
  );
}
