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
import Image from "next/image";
import TimeLineJob from "./_TimeLineJob";

// import MetaData from "./_MetaData";

import TimeLineDegree from "./_TimeLineDegree";

import DataContext from "./_DataContext";

// export const metadata = MetaData();

export default function Page() {
  const [data, setData] = useState(null); // Initialisation à null pour indiquer qu'il n'y a pas encore de données
  const [error, setError] = useState(null); // Pour capturer les erreurs

  useEffect(() => {
    // fetch("/data/secret_json.json")
      fetch("/data/secret_json.json")
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
  }, [data]);

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
    const classTransition = [
      "transition",
      "duration-300",
      "ease-in-out",
      "transform",
      "will-change-transform",
      "w-full",
      "hover:scale-125",
      "text-center",
    ].join(" ");
    return (
      <a
        className={classTransition}
        key={key}
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
    );
  });

  

  const listHobby = data.interests.map((item, key) => {
    const classTransition = [
      "transition",
      "duration-300",
      "ease-in-out",
      "transform",
      "will-change-transform",
      "w-full",
      "hover:scale-125",
      "text-center",
      "min-h-[70px]",
      "flex items-center justify-center",
    ].join(" ");
    return (
      <li key={key}>
        <div
          className={classTransition}
          // target={item.target ? item.target : "_blank"}
          // rel="noopener noreferrer"
          // aria-label={item.ariaLabel}
          // href={item.href}
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="link-hover text-4xl md:text-6xl overflow-hidden"
          />
        </div>
        <TextContainer>
          <H3>{item.name}</H3>
          {item.description}
        </TextContainer>
      </li>
    );
  });

  return (
    <DataContext.Provider value={data}>
      <Section className="bg-base-100 flex py-5 flex-col gap-5 md:grid grid-cols-2 rounded-box shadow-lg border border-base-300">
        {/* liens */}
        <div className="p-2 md:col-start-2 md:flex flex-col justify-center rounded-box">
          <nav className="flex justify-between mt-11 md:mx-10">
            {listSocial}
          </nav>
        </div>

        {/* photo */}
        <div className="h-64 w-64 lg:h-80 lg:w-80 mx-auto md:col-start-1 md:row-start-1 relative">
          {/* data.profile.photo1 data.profile.photo2 */}

          <div className="mask mask-squircle w-full">
            {"photo1" in data.profile && (
              <Image
                src={data.profile.photo1.src}
                alt={data.profile.photo1.alt}
                width={400}
                height={400}
                className=""
                priority
              />
            )}
            {"photo2" in data.profile && (
              <Image
                src={data.profile.photo2.src}
                alt={data.profile.photo2.alt}
                width={400}
                height={400}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 opacity-0 transition-all duration-300 hover:opacity-100"
              />
            )}
          </div>

          {/* {"photo1" in data.profile && data.profile.photo1.src}
          {"photo2" in data.profile && data.profile.photo2.src} */}
        </div>

        {/* nom prénom */}
        <TextContainer>
          <h1 className="text-4xl font-bold">{data.profile.name}</h1>
        </TextContainer>

        {/* titre du poste visé */}
        <TextContainer>
          <H2 className="text-lg font-semibold">
            <span
              dangerouslySetInnerHTML={{ __html: data.profile.title }}
            ></span>
          </H2>
        </TextContainer>

        {/* phrase philosophique d'accroche */}
        <TextContainer addClass=" md:col-span-2">
          <p dangerouslySetInnerHTML={{ __html: data.summary }}></p>
        </TextContainer>
      </Section>

      <Section className="bg-base-100 min-h-fulls flex py-5 flex-col gap-5 lg:grid grid-cols-2 rounded-box shadow-lg border border-base-300">
        {/* titre Section */}
        {/* <TextContainer addClass=" lg:col-start-1"> */}
        <TextContainer addClass="">
          {/* <H2 className="text-lg font-semibold">Professional experiences</H2> */}
          <H2 className="text-lg font-semibold">Education</H2>
        </TextContainer>

        {/* points forts */}
        {/* <TextContainer addClass=" md:col-span-2 lg:col-span-1 lg:col-start-1"> */}
        <TextContainer addClass="">
          {/* <TimeLineJob>{data.experience}</TimeLineJob> */}
          <TimeLineDegree>{data.education}</TimeLineDegree>

          {/* <ul className="flex flex-col gap-5">
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
          </ul> */}
        </TextContainer>

        <TextContainer addClass=" row-start-1 col-start-2">
          {/* <TextContainer addClass=" lg:col-start-2"> */}
          <H2 className="text-lg font-semibold">Skills</H2>
        </TextContainer>

        {/* skills */}
        {/* <div className="rounded-box text-base-content md:col-span-1 lg:col-span-1s lg:col-start-2"> */}
        <div className="rounded-box text-base-content">
          <DoughnutSkills data_skills={data.skills.technicalSkills} />
        </div>
      </Section>

      <Section className="bg-base-100 min-h-fulls flex py-5 flex-col gap-5 rounded-box shadow-lg border border-base-300">
        {/* expériences / éducation / projets */}
        <TextContainer>
          {/* <H2 className="text-lg font-semibold">Education</H2> */}
          <H2 className="text-lg font-semibold">Professional experiences</H2>
        </TextContainer>
        <TextContainer addClass=" md:col-span-2">
          {/* <TimeLineDegree>{data.education}</TimeLineDegree> */}
          <TimeLineJob>{data.experience}</TimeLineJob>

          {/* <ul className="flex flex-col gap-5">
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
          </ul> */}
        </TextContainer>
      </Section>

      <Section className="bg-base-100 min-h-fulls flex py-5 flex-col gap-5 rounded-box shadow-lg border border-base-300">
        {/* passions */}
        <TextContainer>
          <H2 className="text-lg font-semibold">Hobbies</H2>
        </TextContainer>
        <TextContainer addClass=" md:col-span-2">
          <ul className="flex justify-around flex-col md:flex-row">
            {listHobby}
            {/* <li>
              <div className="bg-primary w-10 h-10 rounded-full"></div>
            </li>
            <li>
              <div className="bg-primary w-10 h-10 rounded-full"></div>
            </li>
            <li>
              <div className="bg-primary w-10 h-10 rounded-full"></div>
            </li> */}
          </ul>
        </TextContainer>
      </Section>
    </DataContext.Provider>
  );
}
// }
