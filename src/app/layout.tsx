"use client"; // This is a client component 👈🏽


import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
// import '/public/frontend/css/main.css'
import Script from "next/script";
import "./globals.css";
import { ReactNode, useEffect } from "react";

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import SideBar from '@/component/Sidebar';
import Header from '@/component/Header';




// 

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {

  // export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>) 

  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap.bundle.js");
  // },
  //   []);

  return (
    <html lang="en">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />



      <body>


        <div className="d-flex justify-content-between">

          <SideBar />

          <div className="flex-grow-1">

            <Header />
            <main className="py-3 p-md-5 overflow-hidden">
              {children}
            </main>

          </div>
        </div>



        <Script type="text/javascript" src="/js/script.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" ></Script>
      </body>
    </html>
  );
}

