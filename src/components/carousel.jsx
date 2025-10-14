import { useState, useEffect } from "react";

const fender = [
  "/img/logoFender.png",
  "/img/fender1.png",
  "/img/fender2.png",
  "/img/fender3.png",
];

const gibson = [
  "/img/logoGibson.png",
  "/img/gibson1.png",
  "/img/gibson2.png",
  "/img/gibson3.png",
];

export default function Carousel() {
  const [foto, setFoto] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setFoto((prev) => (prev + 1) % fender.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="contenedor-carousel">
      <div className="carouselF">
        {fender.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`fender-${i}`}
            className={`carousel-image ${i === foto ? "active" : ""}`}
          />
        ))}
      </div>

      <div className="carouselG">
        {gibson.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`gibson-${i}`}
            className={`carousel-image ${i === foto ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
