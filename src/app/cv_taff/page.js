"use client";
import React from "react";
import DoughnutSkills from "./_DoughnutSkills";
import Section from "./_Section";
import TextContainer from "./_TextContainer";
import H2 from "./_H2";
import H3 from "./_H3";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./_IconeLib.js";

export default function Page() {
  const [data, setData] = useState(null); // Initialisation à null pour indiquer qu'il n'y a pas encore de données
  const [error, setError] = useState(null); // Pour capturer les erreurs

  useEffect(() => {
    // fetch("/data/secret_json.json")
      fetch("/data/data_json.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Met à jour les données
      })
      .catch((error) => {
        setError(error.message); // Capture l'erreur
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data === null) {
    return <div>Loading...</div>;
  }

  //   // Rendre un état de chargement tant que les données ne sont pas disponibles
  //   if (!data || Object.keys(data).length === 0) {
  //     return <div>Loading...</div>;
  //   }

  //   if (data.length > 0) {

  const listSocial = data.listSocial.map((item, key) => {
    return (
      <li key={key}>
        <a
          // className={classTransition}
          // key={key}
          target={item.target ? item.target : "_blank"}
          rel="noopener noreferrer"
          aria-label={item.ariaLabel}
          href={item.href}
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="link-hover text-4xl md:text-6xl"
          />
        </a>
      </li>
    );
  });

  console.log(listSocial);
  return (
    <>
      <Section className="bg-base-100 flex py-5 flex-col gap-5 md:grid grid-cols-2 rounded-box shadow-lg border border-base-300">
        {/* liens */}
        <div className="p-2 md:col-start-2 md:flex flex-col justify-center rounded-box">
          <ul className="flex justify-around">{listSocial}</ul>
        </div>

        {/* photo */}
        <div className="bg-primary h-64 w-64 mx-auto md:col-start-1 md:row-start-1 rounded-box"></div>

        {/* nom prénom */}
        <TextContainer>
          <h1 className="text-xl font-bold">Lorem ipsum</h1>
        </TextContainer>

        {/* titre du poste visé */}
        <TextContainer>
          <H2 className="text-lg font-semibold">Loremipsum</H2>
        </TextContainer>

        {/* phrase philosophique d'accroche */}
        <TextContainer addClass="md:col-span-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nisi
            iure! Suscipit saepe nostrum exercitationem similique dolores quae
            ducimus debitis, id natus, nihil aperiam fugit qui excepturi, soluta
            obcaecati omnis!
          </p>
        </TextContainer>
      </Section>

      <Section className="bg-base-100 min-h-fulls flex py-5 flex-col gap-5 lg:grid grid-cols-2 rounded-box shadow-lg border border-base-300">
        {/* titre Section */}
        <TextContainer addClass=" lg:col-span-2">
          <H2 className="text-lg font-semibold">Titre Section</H2>
        </TextContainer>

        {/* points forts */}
        <TextContainer>
          <ul className="flex flex-col gap-5">
            <li>
              <H3 className="font-bold">Lorem, ipsum dolor sit</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </li>
            <li>
              <H3 className="font-bold">Lorem, ipsum dolor sit</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </li>
            <li>
              <H3 className="font-bold">Lorem, ipsum dolor sit</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </li>
            <li>
              <H3 className="font-bold">Lorem, ipsum dolor sit</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </li>
          </ul>
        </TextContainer>

        {/* skills */}
        <div className="rounded-box text-base-content">
          <DoughnutSkills />
        </div>
      </Section>

      <Section className="bg-base-100 min-h-fulls flex py-5 flex-col gap-5 rounded-box shadow-lg border border-base-300">
        {/* expériences / éducation / projets */}
        <TextContainer>
          <H2 className="text-lg font-semibold">Titre Section</H2>
        </TextContainer>
        <TextContainer addClass=" lg:col-span-2">
          <ul className="flex flex-col gap-5">
            <li>
              <H3 className="font-bold">Lorem, ipsum dolor sit</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </li>
            <li>
              <H3 className="font-bold">Lorem, ipsum dolor sit</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </li>
            <li>
              <H3 className="font-bold">Lorem, ipsum dolor sit</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </li>
            <li>
              <H3 className="font-bold">Lorem, ipsum dolor sit</H3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </li>
          </ul>
        </TextContainer>
      </Section>

      <Section className="bg-base-100 min-h-fulls flex py-5 flex-col gap-5 rounded-box shadow-lg border border-base-300">
        {/* passions */}
        <TextContainer>
          <H2 className="text-lg font-semibold">Titre Section</H2>
        </TextContainer>
        <TextContainer addClass=" lg:col-span-2">
          <ul className="flex justify-around">
            <li>
              <div className="bg-primary w-10 h-10 rounded-full"></div>
            </li>
            <li>
              <div className="bg-primary w-10 h-10 rounded-full"></div>
            </li>
            <li>
              <div className="bg-primary w-10 h-10 rounded-full"></div>
            </li>
          </ul>
        </TextContainer>
      </Section>
    </>
  );
}
// }
