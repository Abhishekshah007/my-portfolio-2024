"use client"
import Home from "./Home/page";


import { Suspense, useEffect } from "react";
export default function Page() {
  useEffect(() => {
    // Only run this on the client-side
    const userAgent = navigator.userAgent.toLowerCase();

    // Check if the user is on Android or iOS device
    if (userAgent.includes("android") || userAgent.includes("iphone") || userAgent.includes("ipad")) {
      alert(
        "You can view the site on a smartphone, but it is advisable to view it on a desktop or laptop. It's not fully responsive yet, and you may face issues. I spent my time building this site, and while it hasn't helped me earn, I'm eager to work for you instead! Hire me!"
      );
    }
  }, []); // Empty dependency array ensures this runs only once, after initial render
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
 

);
}