const navItems1 = [
  { name: "About", link: "about" },
  { name: "Services", link: "service" },
  { name: "Works", link: "work" },
  { name: "Testimonials", link: "testimonials" },
  { name: "Blogs", link: "blog" },
  { name: "Contact", link: "contact" },
];

const navItems2 = [
  { name: "About", link: "about" },
  { name: "Services", link: "service" },
  { name: "Choose", link: "choose" },
  { name: "Works", link: "work" },
  { name: "Team", link: "team" },
  { name: "Blogs", link: "blog" },
];

const navItems3 = [
  { name: "About", link: "about" },
  { name: "Services", link: "service" },
  { name: "Case Study", link: "case" },
  { name: "Works", link: "works" },
  { name: "Testimonials", link: "testimonial" },
  { name: "Blog", link: "blog" },
];
const navItems4 = [
  { name: "About", link: "about" },
  { name: "Services", link: "service" },
  { name: "Case Study", link: "case" },
  { name: "Team", link: "team" },
  { name: "Testimonials", link: "testimonial" },
  { name: "Blog", link: "blog" },
];

const navItems5 = [
  { name: "About", link: "about" },
  { name: "Services", link: "service" },
  { name: "Choose", link: "choose" },
  { name: "Works", link: "work" },
  { name: "Team", link: "team" },
  { name: "Blogs", link: "blog" },
];

const navItems7 = [
  { name: "About", link: "about" },
  { name: "Services", link: "service" },
  { name: "Solution", link: "solution" },
  { name: "Pricing", link: "pricing" },
  { name: "Testimonials", link: "testimonial" },
  { name: "Blog", link: "blog" },
];

const navItems8 = [
  { name: "About", link: "about" },
  { name: "Services", link: "service" },
  { name: "Case Study", link: "case" },
  { name: "Works", link: "work" },
  { name: "Testimonials", link: "testimonial" },
  { name: "Blog", link: "blog" },
];

const navItems9 = [
  { name: "About", link: "about" },
  { name: "Services", link: "service" },
  { name: "Solution", link: "solution" },
  { name: "Pricing", link: "pricing" },
  { name: "Testimonials", link: "testimonial" },
  { name: "Blog", link: "blog" },
];

const navItems10 = [
  { name: "About", link: "about" },
  { name: "Services", link: "service" },
  { name: "Solution", link: "solution" },
  { name: "Pricing", link: "pricing" },
  { name: "Team", link: "team" },
  { name: "Blog", link: "blog" },
];

const singlePageNavLinks = () => {
  switch (document.body.classList[0]) {
    case "homepage1-body":
      return navItems1;
    case "homepage2-body":
      return navItems2;
    case "homepage4-body":
      return navItems3;
    case "homepage5-body":
      return navItems4;
    case "homepage3-body":
      return navItems5;
    case "homepage7-body":
      return navItems7;
    case "homepage8-body":
      return navItems8;
    case "homepage9-body":
      return navItems9;
    case "homepage10-body":
      return navItems10;
    default:
      return navItems1;
  }
};

export default singlePageNavLinks;
