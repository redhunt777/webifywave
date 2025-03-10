import { AnimatedTestimonialsUI } from "../ui/Animated_Testimonials";
import { WiStars } from "react-icons/wi";

const AnimatedTestimonials = () => {
  const testimonials = [
    {
      quote:
        "Webify Wave delivered an outstanding, user-friendly website for our Mechanical Engineering freshers' ticket booking—smooth functionality, great design, and seamless experience!",
      name: "Md Darain",
      designation: "",
      src: "/darain1.jpg",
    },
    {
      quote:
        "They built a stunning and highly functional travel website for us! The design is engaging, fast, and perfectly showcases our trips.",
      name: "Kabir Talade",
      designation: "CEO at Explorify Trips",
      src: "/kabirTalade1.jpg",
    },
    {
      quote:
        "Webify Wave built a stunning and highly functional travel website for us! The design is engaging, fast, and perfectly showcases our trips.",
      name: "Samar Jal",
      designation: "Video Editor",
      src: "/Samar.png",
    },
    // {
    //   quote:
    //     "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    //   name: "James Kim",
    //   designation: "Engineering Lead at DataPro",
    //   src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   quote:
    //     "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    //   name: "Lisa Thompson",
    //   designation: "VP of Technology at FutureNet",
    //   src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
  ];
  return (
    <>
      <div className="md:mt-28 mt-20 flex flex-col md:flex-row">
        <div className="flex flex-col justify-center md:w-1/2 w-full md:px-12 px-8">
          <h1 className="text-primary mb-4 text-lg tracking-widest">
            Testimonals{" "}
            <span className="absolute">
              <WiStars className="inline text-primary text-6xl lg:ml-64" />
            </span>{" "}
          </h1>
          <h2 className="text-4xl relative">
            Client stories: Voices of success
          </h2>
        </div>

        <div className="md:w-1/2 w-full hidden md:block text-gray-300 text-xl pr-12 pl-16 flex flex-col justify-center">
          Our clients are our biggest supporters. Would you like to know what
          our clients think about us? Take a look for yourself in the
          testimonials below.
        </div>
      </div>
      <AnimatedTestimonialsUI testimonials={testimonials} />
    </>
  );
};

export default AnimatedTestimonials;
