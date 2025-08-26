import Accordion from "../../ui/Accordion";

const accodionData = [
  {
    title: "What is Soloenpreventa ?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio autem magni totam porro quod id consectetur dicta. Animi, quisquam qui! Error officia quisquam delectus nemo ad enim sequi provident quibusdam.",
    defaultOpen: true,
  },
  {
    title: "How can I contact with Soloenpreventa ?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio autem magni totam porro quod id consectetur dicta. Animi, quisquam qui! Error officia quisquam delectus nemo ad enim sequi provident quibusdam.",
  },
  {
    title: "What is the payment method of Soloenpreventa ?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio autem magni totam porro quod id consectetur dicta. Animi, quisquam qui! Error officia quisquam delectus nemo ad enim sequi provident quibusdam.",
  },
  {
    title: "How can I join to Soloenpreventa ?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio autem magni totam porro quod id consectetur dicta. Animi, quisquam qui! Error officia quisquam delectus nemo ad enim sequi provident quibusdam.",
  },
  {
    title: "Is Soloenpreventa friendly ?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio autem magni totam porro quod id consectetur dicta. Animi, quisquam qui! Error officia quisquam delectus nemo ad enim sequi provident quibusdam.",
  },
  {
    title: "How can I see my house before buy ?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio autem magni totam porro quod id consectetur dicta. Animi, quisquam qui! Error officia quisquam delectus nemo ad enim sequi provident quibusdam.",
  },
];

function FAQSection() {
  return (
    <section className="mt-20">
      <h2 className="text-center text-[32px] font-semibold">
        Frequently Ask Questions
      </h2>
      <div className="mt-16 flex flex-col gap-[30px] lg:flex-row">
        {/* Col 1 ====== */}
        <div className="flex flex-1 flex-col gap-[30px]">
          {accodionData
            .filter((_, index) => index % 2 === 0)
            .map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                content={item.content}
                defaultOpen={item.defaultOpen}
                className=""
              />
            ))}
        </div>

        {/* Col 2 ====== */}
        <div className="flex flex-1 flex-col gap-[30px]">
          {accodionData
            .filter((_, index) => index % 2 === 1)
            .map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                content={item.content}
                className=""
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
