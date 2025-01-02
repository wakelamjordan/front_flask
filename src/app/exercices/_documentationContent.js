// DocumentationContent.js
"use client";

import { useEffect } from "react";

export default function DocumentationContent() {
  useEffect(() => {
    fetch("https://jordanwakelam.alwaysdata.net/flask/")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) =>
        console.log(`Erreur de récupération des données : ${error}`)
      );
  }, []);

  return <div>documentation</div>;
}
