"use client";

import { useEffect, useState } from "react";

import H1 from "@/components/H1";

export default function DocumentationContent() {
  const [dataDoc, setData] = useState(null); // Initialisation à null pour indiquer qu'il n'y a pas encore de données
  const [loading, setLoading] = useState(true); // Pour gérer l'état de chargement
  const [error, setError] = useState(null); // Pour gérer les erreurs
  const [responses, setResponses] = useState({}); // Stocke les réponses des tests pour chaque endpoint
  const [userInputs, setUserInputs] = useState({}); // Stocke les saisies utilisateur pour chaque endpoint

  const [urlGenerated, setUrlGenerated] = useState(null); // pour stocker l'url généré

  useEffect(() => {
    fetch("https://jordanwakelam.alwaysdata.net/flask/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Met à jour les données
        setLoading(false); // Fin du chargement
      })
      .catch((error) => {
        setError(error.message); // Capture l'erreur
        setLoading(false); // Fin du chargement même en cas d'erreur
      });
  }, []);

  // Fonction pour tester un endpoint
  const testEndpoint = (url, method, userInput, endpointIndex) => {
    // Concaténer l'input utilisateur directement à l'URL
    const fullUrl = `${url}${userInput}`;

    setUrlGenerated(fullUrl);

    let options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(fullUrl, options)
      .then((response) => response.json())
      .then((data) => {
        // Met à jour les réponses pour cet endpoint
        setResponses((prevResponses) => ({
          ...prevResponses,
          [endpointIndex]: { success: true, data: data },
        }));
      })
      .catch((error) => {
        // Capture et affiche l'erreur pour cet endpoint
        setResponses((prevResponses) => ({
          ...prevResponses,
          [endpointIndex]: { success: false, error: error.message },
        }));
      });
  };

  // Fonction pour gérer la saisie utilisateur
  const handleInputChange = (e, endpointIndex) => {
    setUserInputs((prevInputs) => ({
      ...prevInputs,
      [endpointIndex]: e.target.value,
    }));
  };

  // Affichage pendant le chargement
  if (loading) {
    return <p className="text-center text-gray-500">Chargement...</p>;
  }

  // Affichage en cas d'erreur
  if (error) {
    return (
      <p className="text-center text-red-500">
        Erreur de récupération des données : {error}
      </p>
    );
  }

  // Affichage une fois les données récupérées
  if (dataDoc) {
    return (
      <div className="">
        {/* Titre principal */}
        <H1 className="">
          {dataDoc.title}
        </H1>

        {/* Liste des endpoints */}
        <div className="space-y-6">
          {dataDoc.endpoints.map((endpoint, index) => {
            return (
              <div
                key={index}
                className="w-full p-6 border rounded-lg shadow-md bg-base-200 hover:shadow-lg transition-shadow duration-200"
              >
                {/* Méthode et URL */}
                <div className="mb-4">
                  <span className="px-3 py-1 text-sm font-bold uppercase rounded bg-primary text-primary-content">
                    {endpoint.method}
                  </span>
                  <div className="mt-2">
                    <code className="block text-sm font-mono text-secondary break-words">
                      {endpoint.url}
                    </code>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base text-gray-700 mb-4">
                  {endpoint.description}
                </p>

                {"parameters" in endpoint && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      testEndpoint(
                        endpoint.url,
                        endpoint.method,
                        userInputs[index],
                        index
                      );
                    }}
                    className="space-y-4"
                  >
                    <h3 className="font-semibold text-lg mb-3">
                      Saisir un paramètre :
                    </h3>
                    <input
                      type="text"
                      placeholder={"Exemple: " + endpoint.parameters.example}
                      className="p-2 border rounded bg-base-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      value={userInputs[index] || ""} // Utilisation de l'état global des inputs
                      onChange={(e) => handleInputChange(e, index)} // Mise à jour de l'input utilisateur
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-primary text-primary-content font-semibold rounded shadow hover:bg-primary-focus transition"
                    >
                      Tester
                    </button>
                  </form>
                )}

                {/* Résultats du test */}
                {responses[index] && (
                  <div className="mt-6 p-4 border rounded bg-base-100 shadow-sm">
                    <h4 className="font-semibold text-lg mb-3">Résultat :</h4>
                    <p>Url généré : {urlGenerated}</p>
                    {responses[index].success ? (
                      <pre className="text-sm bg-base-200 p-4 rounded">
                        {JSON.stringify(responses[index].data, null, 2)}
                      </pre>
                    ) : (
                      <p className="text-red-500">
                        Erreur : {responses[index].error}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Fallback au cas où aucune donnée n'est disponible (ce cas ne devrait pas se produire ici)
  return <p className="text-center text-gray-500">Aucune donnée disponible.</p>;
}
