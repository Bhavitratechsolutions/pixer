"use client"; // This is a client component 👈🏽


import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
// import '/public/frontend/css/main.css'
import Script from "next/script";
import "../globals.css";
import { ReactNode, useEffect } from "react";

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import SideBar from '@/component/Sidebar';
import Header from '@/component/Header';




// 

export default function Dashboard({ children, }: Readonly<{ children: React.ReactNode }>) {


    return (



        <div className="d-flex justify-content-between">

            <SideBar />

            <div className="flex-grow-1">

                <Header />
                <main className="py-3 p-md-5 overflow-hidden">
                    {children}
                </main>

            </div>
        </div>




    );
}

