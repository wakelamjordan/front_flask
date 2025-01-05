import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import H2 from "./_H2";
import Image from "next/image";

import { useRef, useState } from "react";

ChartJS.register(ArcElement);

const DoughnutSkills = ({ data_skills }) => {
  // console.log(data_skills);

  //   "technicalSkills": [
  //     {
  //       "name": "PHP",
  //       "image": "https://wakelamjordan.github.io/img/php-svgrepo-com.svg",
  //       "exemple": "Développement de solutions backend robustes avec PHP, gestion des sessions utilisateur, traitement des formulaires et création d'API REST.",
  // backgroundColor:"#3e98c7",
  // pourcentage: 25,
  //     },
  //   ],

  const data = {
    labels: [], // item.name
    datasets: [
      {
        label: "Compétences",
        data: [], // itel.pourcentages (ou valeurs relatives)
        backgroundColor: [], // item.backgroundColor
        hoverOffset: 10, // Effet de survol
      },
    ],
  };

  for (let i = 0; i < data_skills.length; i++) {
    data.labels.push(data_skills[i].name);
    data.datasets[0].data.push(data_skills[i].pourcentage);
    data.datasets[0].backgroundColor.push(data_skills[i].backgroundColor);
  }

  // console.log(data);

  // const data = {
  //   labels: ["React", "JavaScript", "CSS", "HTML"], // Noms des compétences
  //   datasets: [
  //     {
  //       label: "Compétences",
  //       data: [25, 30, 20, 25], // Pourcentages (ou valeurs relatives)
  //       backgroundColor: ["#3e98c7", "#f39c12", "#27ae60", "#c0392b"], // Couleurs
  //       hoverOffset: 10, // Effet de survol
  //     },
  //   ],
  // };

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

      // console.log(
      //   element[0].index,
      //   hoveredElement,
      //   element.length !== 0,
      //   hoveredElement !== null,
      //   index
      // );
    } else if (hoveredElement !== null) {
      setHoveredElement(null);
    }
  };

  return (
    // <div className="h-96s grid grid-rows-2 gap-2s">
    <div className="grid grid-rows-2 gap-2 lg:grid-cols-1 lg:grid-rows-2 min-h-[500px] md:min-h-[456px] lg:min-h-[370px]">
      {/* <H2 addClassName=" absolute left-0 -top-1/2">Compétences techniques</H2> */}
      <div className="m-0 relative">
        <div
          className={`h-12 w-12 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300${
            hoveredElement !== null
              ? " opacity-100 scale-100 pointer-events-auto animate-pulse"
              : " opacity-0 scale-50 pointer-events-none"
          }`}
        >
          {hoveredElement !== null && (
            <Image
              src={data_skills[hoveredElement].image}
              alt={`Picture of ${data_skills[hoveredElement].name}`}
              width={50}
              height={50}
            />
          )}
        </div>
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

      <div className="bg-black m-5 p-5 rounded-box text-base-content overflow-hidden">
        {hoveredElement !== null ? (
          <>
            <H2>{data_skills[hoveredElement].name}</H2>
            <p className="text-white">
              <span>{` ${data_skills[hoveredElement].pourcentage}% of my work. `}</span>
              {data_skills[hoveredElement].exemple}
            </p>
          </>
        ) : (
          <p className="text-lg font-semibold">Select a skill</p>
        )}
      </div>
    </div>
  );
};

export default DoughnutSkills;
