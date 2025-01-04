// "use client";
import { useEffect, useRef, useState } from "react";

const Section = ({ children }) => {
  const elementRef = useRef(null); // Chaque instance de Section a son propre ref
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          setIsVisible(true); // Marquer la section comme visible
          observerInstance.unobserve(entry.target); // Arrêter d'observer cette section
        }
      },
      { threshold: 0.1 } // Déclenche lorsque 10% du composant est visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current); // Observer l'élément actuel
    }

    return () => {
      if (elementRef.current) {
        observer.disconnect(); // Nettoyer l'observateur pour cet élément
      }
    };
  }, []);

  return (
    <section
      ref={elementRef}
      className={`bg-base-100 flex py-5 flex-col gap-5 md:grid grid-cols-2 rounded-box shadow-lg border border-base-300 ${
        isVisible ? "opacity-100 transition-opacity duration-500" : "opacity-0"
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
