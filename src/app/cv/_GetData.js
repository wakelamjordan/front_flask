"use client";

import { useEffect, useState } from "react";

function GetData() {
  const [data, setData] = useState(null); // Initialisation à null pour indiquer qu'il n'y a pas encore de données
  const [error, setError] = useState(null); // Pour capturer les erreurs

  useEffect(() => {
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

  return <pre>{JSON.stringify(data, null, 2)}</pre>; // Affiche les données JSON formatées
}

export default GetData;
