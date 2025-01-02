// import Image from "next/image";
// import DocumentationContent from "../exercices/_documentationContent";
export const metadata = {
  title: "Documentation",
  description: "Documentation de l'api flask",
};
import DocumentationContent from "../exercices/_documentationContent";

export default function Documentation() {
  return (
    <div className="w-full max-w-md mx-auto bg-base-100 shadow-md rounded-md overflow-hidden">
      <DocumentationContent />
    </div>
  );
}
