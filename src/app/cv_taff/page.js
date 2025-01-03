"use client";
import React from "react";
import DoughnutSkills from "./_DoughnutSkills";

export default function page() {
  return (
    <>
      <section className="bg-black min-h-fulls flex p-5 flex-col gap-5">
        {/* liens */}
        <div className="bg-green-500 p-2">
          <ul className="flex justify-around">
            <li>
              <div className="bg-black w-10 h-10"></div>
            </li>
            <li>
              <div className="bg-black w-10 h-10"></div>
            </li>
            <li>
              <div className="bg-black w-10 h-10"></div>
            </li>
            <li>
              <div className="bg-black w-10 h-10"></div>
            </li>
            <li>
              <div className="bg-black w-10 h-10"></div>
            </li>
          </ul>
        </div>

        {/* photo */}
        <div className="bg-green-500 h-64 w-64 mx-auto"></div>

        {/* nom prenom */}
        <div className="bg-green-500">
          <h1>Lorem ipsum</h1>
        </div>

        {/* titre du poste visé */}
        <div className="bg-green-500">
          <h2>Loremipsum</h2>
        </div>

        {/* phrase phylosophique d'accroche */}
        <div className="bg-green-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nisi
            iure! Suscipit saepe nostrum exercitationem similique dolores quae
            ducimus debitis, id natus, nihil aperiam fugit qui excepturi, soluta
            obcaecati omnis!
          </p>
        </div>
      </section>

      <section className="bg-black min-h-fulls flex p-5 flex-col gap-5">
        <div className="bg-green-500">
          <h2>titre section</h2>
        </div>

        {/* points fort */}
        <div className="bg-green-500">
          <ul className="flex flex-col gap-5">
            <li>
              <h3>Lorem, ipsum dolor sit</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </li>
            <li>
              <h3>Lorem, ipsum dolor sit</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </li>
            <li>
              <h3>Lorem, ipsum dolor sit</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </li>
            <li>
              <h3>Lorem, ipsum dolor sit</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </li>
          </ul>
        </div>

        {/* skills forme de roue hoverable avec description en dessous quand les parties sont hover ou clické en sm */}
        <div className="bg-green-500 m-5">
          <DoughnutSkills />
        </div>
      </section>
      <section>
        <div className="bg-green-500">
          <h2>titre section</h2>
        </div>

        {/* experiences */}
        {/* education */}
        {/* projets */}
      </section>
      <section>{/* passions */}</section>
    </>
  );
}
