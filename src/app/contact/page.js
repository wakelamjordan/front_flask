import Image from "next/image";
// import RootLayout from "../layout";
export default function Contact() {
  return (
    // <RootLayout>
      <div className="w-full max-w-md mx-auto bg-base-100 shadow-md rounded-md overflow-hidden">
        <div className="p-4">
          <div className="flex items-center space-x-4">
            {/* Photo de profil */}
            <Image
              src="https://avatars.githubusercontent.com/u/147444154?v=4"
              alt="Jordan Wakelam"
              className="w-20 h-20 rounded-full object-cover"
              width={80}
              height={80}
            />
            <div>
              {/* Nom et rôle */}
              <h1 className="text-lg font-semibold text-primary">
                Jordan Wakelam
              </h1>
              <p className="text-sm text-primary">Développeur Web</p>
              <p className="text-sm text-primary">Orienté Back-end</p>
            </div>
          </div>

          <hr className="my-4 border-base-300" />

          {/* Informations de contact */}
          <div className="space-y-1">
            <p className="text-sm text-base-content">
              <strong>Téléphone: </strong>
              <a href="tel:+33641162313" className="link link-primary">
                +33 6 41 16 23 13
              </a>
            </p>
            <p className="text-sm text-base-content">
              <strong>Email: </strong>
              <a
                href="mailto:jwakelams@gmail.com"
                className="link link-primary"
              >
                jwakelams@gmail.com
              </a>
            </p>
            <p className="text-sm text-base-content">
              <strong>Site web: </strong>
              <a
                href="https://wakelamjordan.github.io/"
                className="link link-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://wakelamjordan.github.io/
              </a>
            </p>
            <p className="text-sm text-base-content">
              <strong>Linkedin: </strong>
              <a
                href="https://www.linkedin.com/in/jordan-wakelam-350a24241"
                className="link link-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/jordan-wakelam-350a24241
              </a>
            </p>
            <p className="text-sm text-base-content">
              <strong>GitHub: </strong>
              <a
                href="https://github.com/wakelamjordan"
                className="link link-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/wakelamjordan
              </a>
            </p>
            <p className="text-sm text-base-content">
              <strong>Mon Cv: </strong>
              <a
                href="https://wakelamjordan.github.io/cv/"
                className="link link-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://wakelamjordan.github.io/cv/
              </a>
            </p>
          </div>
        </div>
      </div>
    // </RootLayout>
  );
}
