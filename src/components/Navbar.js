import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default function Navbar() {
  return (
      <div className="flex items-center justify-center">
        <nav className="w-9/12 pt-10">
          <ul className="flex justify-between">
            <li className="font-display font-semibold text-xl">
              Spotify Statistics
            </li>
            <div className="flex space-x-5">
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/stats"> Stats</Link>
              </li>
              <li>
                <Link to="/dashboard"> Dashboard</Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
      
  );
}
