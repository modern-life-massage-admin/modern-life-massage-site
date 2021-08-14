import * as React from "react";

const services = [
  {
    title: "Hot Stone Therapy",
    description:
      "Hot Stone Therapy is a style of massage where heated stones are used to deepen relaxation and promote circulation in your muscles. Muscles that are heated with these stones release tension and stress much more deeply and quickly than with a traditional massage. The overall experience is very relaxing, nurturing, and rejuvenating.",
    image: "image",
  },
  {
    title: "Chair Massage",
    description:
      "Chair massage is a popular way of relieving stress and releasing tension right in your home or workplace. You receive your massage in a specialized ergonomic chair which will be brought to your location. In addition to the usual health benefits of massage, another benefit of chair massage is that it is done over the clothing. With seated massage, you can avoid the discomfort and awkwardness that you may feel in disrobing for a traditional massage. Also, chair massage sessions are usually shorter than traditional massage, making it convenient enough to fit into your busy schedule.",
    image: "image",
  },
  {
    title: "Swedish Massage",
    description:
      "Swedish Massage is a very relaxing and therapeutic style of bodywork. It combines oils or lotion with an array of strokes such as rolling, kneading, and percussion to help the body improve its circulation. The benefits of this type of bodywork are wide-ranging and include relief from aches and pains, decreased stress levels in the body, enhanced mental clarity, improved appearance, and greater flexibility.",
    image: "image",
  },
  {
    title: "Prenatal Massage",
    description:
      "Prenatal Massage is a style of bodywork designed specifically for pregnant women. Pregnancy is a time when a woman's body endures tremendous stress due to dramatic physical and emotional changes. Using various techniques specially developed for the expecting mother, Prenatal Massage helps release the pain and discomfort experienced throughout pregnancy. The benefits are profound, including emotional support, the relief of joint pain due to extra weight and postural imbalance, and improved breathing and relaxation. Prenatal Massage is offered only after the first trimester.",
    image: "image",
  },
  {
    title: "Deep Tissue Massage",
    description:
      "Deep Tissue Massage is a form of bodywork that aims to relieve tension in the deeper layers of tissue in the body. Deep Tissue Massage is a highly effective method for releasing chronic stress areas due to misalignment, repetitive motions, and past lingering injuries. Due to the nature of the deep tissue work, open communication during the session is crucial to make sure you do not get too uncomfortable. Keep in mind that soreness is pretty common, but should not last nor worsen over time.",
    image: "image",
  },
  {
    title: "Myofascial Massage",
    description:
      "Myofascial massage is a technique used to treat injuries and discomfort, reducing pain and increasing range of motion. Myofascial massage differs from other types of massage in that it targets the fascia - the membrane surrounding muscles - rather than the muscle itself. Since fascia completely encases every muscle in the body, imbalances in the fascia can have serious effects on your range of motion and comfort level. While other forms of massage can overlook the fascia, myofascial massage focuses specifically on releasing tension in this important membrane.",
    image: "image",
  },
  {
    title: "Geriatric Massage",
    description:
      "Geriatric massage is a form of massage designed to meet the specific needs of the elderly. It helps to improve blood circulation, relieve pain, and also increase range of motion. If you are elderly, geriatric massage can help you maintain and improve your overall health, as well as regain certain physical functions that have been reduced due to aging. In addition, since the elderly may not receive enough physical touch, this massage can also help alleviate symptoms of loneliness or depression.",
    image: "image",
  },
  {
    title: "Sports Massage",
    description:
      "Sports Massage is a type of massage designed for highly active people who engage in athletics.  Engaging in sports is harsh on the body and can often lead to injuries in both the short and long term. Sports Massage enhances performance and prolongs a sports career by helping to prevent injury, reduce pains and swelling in the body, relax the mind, increase flexibility, and dramatically improve recovery rates. Sports Massage is also highly effective in aiding the rapid recovery of an athlete from an injury by encouraging greater kinesthetic awareness and in turn promoting the body's natural immune function.  Sports massage typically involves lots of movement and stretching, and can be done while the client is fully clothed.",
    image: "image",
  },
];
const ServicesSection = () => (
  <section className="services-section">
    <h2>Our Services</h2>
    <div className="services-section__cards">
      {services.map((service) => (
        <div className="services-section__card">
          <div className="services-section__card-content">
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
    <svg
      width="229"
      height="153"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.968 153h7.052L0 118.249v12.24L12.968 153zM0 97.364L32.051 153h7.052L0 85.124v12.24zM0 64.239L51.135 153h7.051L0 51.999v12.24zM0 31.113L70.218 153h7.051L0 18.873v12.24zM1.16 0L89.3 153h7.052L8.21 0H1.159zM20.243 0l88.142 153h7.051L27.294 0h-7.051zM39.326 0l88.142 153h7.052L46.377 0h-7.051zM58.41 0l88.142 153h7.051L65.461 0h-7.052zM77.493 0l88.142 153h7.051L84.544 0h-7.051zM96.576 0l88.142 153h7.052L103.627 0h-7.051zM115.659 0l88.142 153h7.052L122.711 0h-7.052zM134.743 0l88.142 153H229v-1.625L141.794 0h-7.051zM153.826 0L229 130.489v-12.24L160.877 0h-7.051zM172.909 0L229 97.364v-12.24L179.961 0h-7.052zM191.993 0L229 64.239v-12.24L199.044 0h-7.051zM211.076 0L229 31.113v-12.24L218.127 0h-7.051z"
        fill="#000"
        fill-opacity=".5"
      />
    </svg>
  </section>
);

export default ServicesSection;
