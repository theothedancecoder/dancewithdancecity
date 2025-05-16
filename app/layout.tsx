import type { Metadata } from "next";
import React from "react";
import "./globals.css";




export const metadata: Metadata = {
  title: "Dance with Dancecity",
  description: "Community hub for dance activities, events and volunteering",
};

export default function RootLayout({
  children
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     
       <body>{children}</body> 
     
    </html>
  );
}
