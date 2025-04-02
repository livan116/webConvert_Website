import Header from "../../Layouts/Header";
import PageHero from "../../Components/Common/PageHero";
import CtaSection from "../../Components/Common/CtaSection";
import Footer from "../../Layouts/Footer";
import WeBelieve from "../../Components/Team/WeBelieve";
// import TeamMembersSection from "../../Components/Team/TeamMembersSection";
import TestimonialSection from "../../Components/Team/TestimonialSection";
import BlogSection from "../../Components/HomePage1/BlogSection";
import MobileHeaderSidebar from "../../Layouts/MobileHeader";
import TeamSection from "../../Components/About/TeamSection";

const Team = () => {

  return (
    <>
      <Header />
       <MobileHeaderSidebar />
      <PageHero
        className="about-header-area"
        title={"Meet The Team Member"}
        breadcrumb={["Home", "Meet The Team"]}
      />
      <CtaSection />
      <TeamSection />
      <WeBelieve />
      {/* <TeamMembersSection title="Executive Team" data={executiveTeam} /> */}
      <TestimonialSection />
      {/* <TeamMembersSection title="Leadership" data={leadershipTeam} /> */}
      <BlogSection />
      <Footer />
    </>
  );
};

// const executiveTeam = [
//   {
//     name: "John Doe",
//     position: "CEO & Founder",
//     image: "../assets/img/all-images/team-img1.png",
//     socials: [
//       { icon: "../assets/img/icons/facebook.svg", link: "#" },
//       { icon: "../assets/img/icons/instagram.svg", link: "#" },
//       { icon: "../assets/img/icons/linkedin.svg", link: "#" },
//       { icon: "../assets/img/icons/youtube.svg", link: "#" },
//     ],
//   },
//   {
//     name: "Jane Smith",
//     position: "Digital Marketing Officer",
//     image: "../assets/img/all-images/team-img2.png",
//     socials: [
//       { icon: "../assets/img/icons/facebook.svg", link: "#" },
//       { icon: "../assets/img/icons/instagram.svg", link: "#" },
//       { icon: "../assets/img/icons/linkedin.svg", link: "#" },
//       { icon: "../assets/img/icons/youtube.svg", link: "#" },
//     ],
//   },
//   {
//     name: "Sarah Thompson",
//     position: "Web Designer",
//     image: "../assets/img/all-images/team-img3.png",
//     socials: [
//       { icon: "../assets/img/icons/facebook.svg", link: "#" },
//       { icon: "../assets/img/icons/instagram.svg", link: "#" },
//       { icon: "../assets/img/icons/linkedin.svg", link: "#" },
//       { icon: "../assets/img/icons/youtube.svg", link: "#" },
//     ],
//   },
//   {
//     name: "David Garcia",
//     position: "Content Writer",
//     image: "../assets/img/all-images/team-img4.png",
//     socials: [
//       { icon: "../assets/img/icons/facebook.svg", link: "#" },
//       { icon: "../assets/img/icons/instagram.svg", link: "#" },
//       { icon: "../assets/img/icons/linkedin.svg", link: "#" },
//       { icon: "../assets/img/icons/youtube.svg", link: "#" },
//     ],
//   },
// ];

// const leadershipTeam = [
//   {
//     name: "John Doe",
//     position: "CEO & Founder",
//     image: "../assets/img/all-images/team-img1.png",
//     socials: [
//       { icon: "../assets/img/icons/facebook.svg", link: "#" },
//       { icon: "../assets/img/icons/instagram.svg", link: "#" },
//       { icon: "../assets/img/icons/linkedin.svg", link: "#" },
//       { icon: "../assets/img/icons/youtube.svg", link: "#" },
//     ],
//   },
//   {
//     name: "Jane Smith",
//     position: "Digital Marketing Officer",
//     image: "../assets/img/all-images/team-img2.png",
//     socials: [
//       { icon: "../assets/img/icons/facebook.svg", link: "#" },
//       { icon: "../assets/img/icons/instagram.svg", link: "#" },
//       { icon: "../assets/img/icons/linkedin.svg", link: "#" },
//       { icon: "../assets/img/icons/youtube.svg", link: "#" },
//     ],
//   },
//   {
//     name: "Sarah Thompson",
//     position: "Web Designer",
//     image: "../assets/img/all-images/team-img3.png",
//     socials: [
//       { icon: "../assets/img/icons/facebook.svg", link: "#" },
//       { icon: "../assets/img/icons/instagram.svg", link: "#" },
//       { icon: "../assets/img/icons/linkedin.svg", link: "#" },
//       { icon: "../assets/img/icons/youtube.svg", link: "#" },
//     ],
//   },
//   {
//     name: "David Garcia",
//     position: "Content Writer",
//     image: "../assets/img/all-images/team-img4.png",
//     socials: [
//       { icon: "../assets/img/icons/facebook.svg", link: "#" },
//       { icon: "../assets/img/icons/instagram.svg", link: "#" },
//       { icon: "../assets/img/icons/linkedin.svg", link: "#" },
//       { icon: "../assets/img/icons/youtube.svg", link: "#" },
//     ],
//   },
//   {
//     name: "Florence Walker",
//     position: "Future Creative Director",
//     image: "../assets/img/all-images/team-img9.png",
//     socials: [
//       { icon: "../assets/img/icons/facebook.svg", link: "#" },
//       { icon: "../assets/img/icons/instagram.svg", link: "#" },
//       { icon: "../assets/img/icons/linkedin.svg", link: "#" },
//       { icon: "../assets/img/icons/youtube.svg", link: "#" },
//     ],
//   },
//   {
//     name: "Sally Mann",
//     position: "Designer",
//     image: "../assets/img/all-images/team-img10.png",
//     socials: [
//       { icon: "../assets/img/icons/facebook.svg", link: "#" },
//       { icon: "../assets/img/icons/instagram.svg", link: "#" },
//       { icon: "../assets/img/icons/linkedin.svg", link: "#" },
//       { icon: "../assets/img/icons/youtube.svg", link: "#" },
//     ],
//   },
//   {
//     name: "Miss Darrin Larkin",
//     position: "Orchestrator",
//     image: "../assets/img/all-images/team-img11.png",
//     socials: [
//       { icon: "../assets/img/icons/facebook.svg", link: "#" },
//       { icon: "../assets/img/icons/instagram.svg", link: "#" },
//       { icon: "../assets/img/icons/linkedin.svg", link: "#" },
//       { icon: "../assets/img/icons/youtube.svg", link: "#" },
//     ],
//   },
//   {
//     name: "Stacy White",
//     position: "Coordinator",
//     image: "../assets/img/all-images/team-img12.png",
//     socials: [
//       { icon: "../assets/img/icons/facebook.svg", link: "#" },
//       { icon: "../assets/img/icons/instagram.svg", link: "#" },
//       { icon: "../assets/img/icons/linkedin.svg", link: "#" },
//       { icon: "../assets/img/icons/youtube.svg", link: "#" },
//     ],
//   },
// ];

export default Team;
