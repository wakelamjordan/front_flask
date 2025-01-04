import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { useRef, useState } from "react";

ChartJS.register(ArcElement);

const DoughnutSkills = () => {
  const data = {
    labels: ["React", "JavaScript", "CSS", "HTML"], // Noms des compétences
    datasets: [
      {
        label: "Compétences",
        data: [25, 30, 20, 25], // Pourcentages (ou valeurs relatives)
        backgroundColor: ["#3e98c7", "#f39c12", "#27ae60", "#c0392b"], // Couleurs
        hoverOffset: 10, // Effet de survol
      },
    ],
  };

  //   let data = {
  //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //     datasets: [
  //       {
  //         label: "# of Votes",
  //         data: [12, 19, 3, 5, 2, 3],
  //         backgroundColor: [
  //           "rgba(255, 99, 132, 0.2)",
  //           "rgba(54, 162, 235, 0.2)",
  //           "rgba(255, 206, 86, 0.2)",
  //           "rgba(75, 192, 192, 0.2)",
  //           "rgba(153, 102, 255, 0.2)",
  //           "rgba(255, 159, 64, 0.2)",
  //         ],
  //         borderColor: [
  //           "rgba(255, 99, 132, 1)",
  //           "rgba(54, 162, 235, 1)",
  //           "rgba(255, 206, 86, 1)",
  //           "rgba(75, 192, 192, 1)",
  //           "rgba(153, 102, 255, 1)",
  //           "rgba(255, 159, 64, 1)",
  //         ],
  //         borderWidth: 1,
  //       },
  //     ],
  //   };

  const ChartRef = useRef(null);

  const [hoveredElement, setHoveredElement] = useState(null);

  let chart;
  const handleHover = (event) => {
    chart = ChartRef.current;
    // console.log(chart);
    if (!chart) return;

    const element = chart.getElementsAtEventForMode(
      event,
      "nearest",
      { intersect: true },
      false
    );

    if (element.length !== 0) {
      const index = element[0].index;
      setHoveredElement(index);
    } else if (hoveredElement !== null) {
      setHoveredElement(null);
    }
  };

  return (
    // <div className="h-96s grid grid-rows-2 gap-2s">
    <div className="grid grid-rows-2 gap-2 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-1 lg:grid-rows-2">
      <div className="m-0">
        <Doughnut
          ref={ChartRef}
          //   className="m-5"
          data={data}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false }, // Cache la légende
            },
            animation: {
              duration: 2000, // Durée de l'animation en millisecondes (ici 2 secondes)
              //   easing: "easeOutQuart", // Style d'animation (tu peux essayer d'autres valeurs comme "linear", "easeInOutQuad", etc.)
            },
            maintainAspectRatio: false,
          }}
          onMouseMove={handleHover}
          onMouseLeave={() => setHoveredElement(null)}
        />
      </div>

      <div className="bg-black m-5 p-5 rounded-box text-base-content">
        {hoveredElement !== null ? (
          <p className="text-white text-center">
            {data.labels[hoveredElement]}
          </p>
        ) : (
          <p className="text-white text-center">Sélectionnez une compétence</p>
        )}
      </div>
    </div>
  );
};

export default DoughnutSkills;
