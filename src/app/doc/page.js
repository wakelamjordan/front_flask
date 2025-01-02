// import Image from "next/image";
// import DocumentationContent from "../exercices/_documentationContent";
export const metadata = {
  title: "Documentation",
  description: "Documentation de l'api flask",
};
import DocumentationContent from "./_documentationContent";

export default function Documentation() {
  return <DocumentationContent />;
}
