import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
export default function Stats() {
  useEffect(() => {
    const res = fetch("http://localhost:5000/login");
    console.log(res);
  }, []);
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
}
