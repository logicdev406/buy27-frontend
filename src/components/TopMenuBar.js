import React, { useState, useEffect } from "react";
import DesktopTopMenuBar from "../sections/TopMenuBar/DesktopTopMenuBar";
import MobileTopMenuBar from "../sections/TopMenuBar/MobileTopMenuBar";

const TopMenuBar = ({ isAuthenticated, user }) => {
  const [isMobile, setisMobile] = useState(
    window.matchMedia("(max-width:768px)").matches
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setisMobile(window.matchMedia("(max-width:768px)").matches);
    });
  });

  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  if (!didMount) {
    return null;
  }

  return (
    <div>
      {isMobile ? (
        <MobileTopMenuBar />
      ) : (
        <DesktopTopMenuBar isAuthenticated={isAuthenticated} user={user} />
      )}
    </div>
  );
};

export default TopMenuBar;
