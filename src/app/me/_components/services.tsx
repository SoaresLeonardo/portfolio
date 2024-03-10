import { services_details } from '@/data/services';

const Services = () => {
  return (
    <section className="mx-auto w-full">
      <div className="flex max-w-3xl flex-col items-start justify-start text-start">
        <h3 className="mb-11 text-[24px] font-normal">Posso ajudar com</h3>
        <ul className="flex flex-col items-start justify-start gap-11 divide-y divide-gray-200">
          {services_details.map((service, i) => (
            <li key={i} className="w-full">
              <div className="flex w-full flex-col items-start justify-start gap-5 rounded-xl pt-5 text-left">
                <h3 className="text-xl">{service.service_name}</h3>
                <p className="max-w-lg text-lg text-gray-700">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
