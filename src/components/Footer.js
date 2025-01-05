"use client";
import Link from "next/link";

import { useData } from "@/app/cv_en/_DataContext";

import { useEffect, useState } from "react";

function Footer({ links_list }) {
  const [data_context, setdata_context] = useState(null);

  const data = useData();

  useEffect(() => {
    console.log(data);
  }, [data]);

  const links_elements = links_list.map((link, index) => (
    <Link key={index} href={link.href}>
      {link.label}
    </Link>
  ));
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">{links_elements}</nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
