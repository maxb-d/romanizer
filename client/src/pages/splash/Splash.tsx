import { useState, useEffect } from "react";

import { SelectedPage } from "@/shared/types";
import SplashHeader from "@/layout/SplashHeader";
import Home from './components/Home'
import Features from "./components/Features";
import Thought from "./components/Thought";

type Props = {};

const Splash = (props: Props) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Accolligere
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSelectedPage(SelectedPage.Accolligere);
      } else {
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
        <SplashHeader
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
        />
        <div className='splash-container h-full'>
          <Home 
            setSelectedPage={setSelectedPage}
          />
          <Features 
            setSelectedPage={setSelectedPage}
          />
          <Thought 
            setSelectedPage={setSelectedPage}
          />
        </div>
    </>
  );
};

export default Splash;
