import React from "react";
import SearchComponent from "./SearchComponent";
import DisplayCards from "./DisplayCards";
import HelpFaqSection from "./HelpFaqSection";
import Header from "../../Layouts/Header";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";
import Footer from "../../Layouts/Footer";
import PageHero from "../../Components/Common/PageHero";

const HelpCenterPage: React.FC = () => {
    return (
        <div>
            <Header/>
            <PageHero
        className="about-header-area"
        title={"Help Center"}
        breadcrumb={["Home", "Help Center"]}
      />
            <MobileHeaderSidebar/>
            <SearchComponent />
            <DisplayCards />
            <HelpFaqSection />
            <Footer/>
        </div>
    );
};

export default HelpCenterPage;