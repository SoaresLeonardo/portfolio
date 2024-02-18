const Profile = () => {
  return (
    <section className="mx-[7vw] mb-[8vh] mt-[9vh]">
      <div className="mt-10 flex items-center justify-between">
        <div className="top-20 sm:sticky md:top-28 md:w-1/2 lg:top-32">
          <div className="w-full space-y-4 2xl:space-y-10">
            <p className="uppercase 2xl:text-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, sapiente optio et cupiditate quod quibusdam nam
              reprehenderit odit explicabo at ratione architecto voluptas odio
              <br /> <br />
              labore neque modi illum vitae deleniti! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Numquam enim, nostrum ipsam
              vero dolorem quo sunt eveniet hic optio. Magnam minus vitae
              molestiae numquam, ut eos distinctio officia. A, eum!
            </p>
          </div>
        </div>
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/3">
          <img
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            src="https://avatars.githubusercontent.com/u/100442262?v=4"
            width="600"
            height="800"
            alt="portrait image of Huy standing in front of a tree and foliage"
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
