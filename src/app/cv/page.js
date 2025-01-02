// import Image from "next/image";
import RootLayout from "../layout";
export const metadata = {
  title: "Cv",
  description: "page cv",
};
export default function Contact() {
  return (
    <RootLayout lang="en">
      <div className="w-full max-w-md mx-auto bg-base-100 shadow-md rounded-md overflow-hidden">
        cv
      </div>
    </RootLayout>
  );
}
