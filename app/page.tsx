"use client";

import { useState } from "react";

export default function Home() {
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [characters, setCharacters] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rawResponse, setRawResponse] = useState<string | null>(null); // To display raw AI response

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const text = event.target?.result as string;
        setFileContent(text);
      };
      reader.readAsText(file);
    }
  };

  const extractCharacters = async () => {
    if (fileContent) {
      setIsLoading(true);
      setError(null);
      setRawResponse(null); // Reset raw response
      try {
        const response = await fetch("/api/route", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: fileContent }),
        });

        if (response.ok) {
          const data = await response.json();
          setCharacters(data.characters);
          setRawResponse(JSON.stringify(data, null, 2)); // Set raw AI response to display in the text area
        } else {
          setError("Failed to extract characters. Please try again.");
        }
      } catch (err) {
        setError("An error occurred. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Character Extraction App</h1>
      <input type="file" accept=".txt" onChange={handleFileUpload} className="mb-4" />
      <button
        onClick={extractCharacters}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={isLoading}
      >
        {isLoading ? "Extracting..." : "Extract Characters"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Text Area for Raw AI Output */}
      <textarea
        value={rawResponse || ""}
        readOnly
        className="w-full h-40 mt-6 p-2 border border-gray-300"
        placeholder="Raw response will be displayed here..."
      ></textarea>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Extracted Characters</h2>
        {characters.length > 0 ? (
          <table className="table-auto mt-4 border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
                <th className="border border-gray-300 px-4 py-2">Personality</th>
              </tr>
            </thead>
            <tbody>
              {characters.map((character, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{character.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{character.description}</td>
                  <td className="border border-gray-300 px-4 py-2">{character.personality}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          !isLoading && <p>No characters extracted yet.</p>
        )}
      </div>
    </div>
  );
}
