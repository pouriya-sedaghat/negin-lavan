import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const categories = [
    { to: "shades", src: "shades/main.png", alt: "shades" },
    { to: "pots", src: "pots/main.png", alt: "pots" },
    { to: "hearths", src: "hearths/main.png", alt: "hearths" },
    { to: "pool-chairs", src: "pool-chairs/main.png", alt: "pool chairs" },
    { to: "lights", src: "lights/main.png", alt: "lights" },
  ];

  useEffect(() => {
    document.body.style.backgroundImage = "url('/images/background/main.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";

    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundAttachment = "";
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-wrap justify-center content-center gap-3 bg-gray-100/50 border-2 rounded-lg p-3">
        {categories.map((category, index) => (
          <div
            key={index.toString()}
            className="w-35  rounded-full overflow-hidden"
          >
            <Link to={`/products/${category.to}`}>
              <img
                src={`/images/products/${category.src}`}
                alt={category.alt}
                className="w-full"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
