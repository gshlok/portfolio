import React from 'react';
import CardNav from './CardNav';

const Navbar: React.FC = () => {
  const items = [
    {
      label: "About",
      bgColor: "#181818",
      textColor: "#FFEB3B",
      links: [
        { label: "Me", href: "#home", ariaLabel: "About Me" },
        { label: "Education", href: "#education", ariaLabel: "My Education" }
      ]
    },
    {
      label: "Skills", 
      bgColor: "#181818",
      textColor: "#FFEB3B",
      links: [
        { label: "Technical", href: "#skills", ariaLabel: "Technical Skills" },
        { label: "Experience", href: "#skills", ariaLabel: "Work Experience" }
      ]
    },
    {
      label: "Connect",
      bgColor: "#181818", 
      textColor: "#FFEB3B",
      links: [
        { label: "Email", href: "mailto:shlok@example.com", ariaLabel: "Email me" },
        { label: "LinkedIn", href: "https://linkedin.com/in/shlok", ariaLabel: "LinkedIn Profile" },
        { label: "GitHub", href: "https://github.com/shlok", ariaLabel: "GitHub Profile" }
      ]
    }
  ];

  return (
    <CardNav
      logo="SG"
      logoAlt="SG Portfolio"
      items={items}
      baseColor="#181818"
      menuColor="#F7F7F7"
      buttonBgColor="#FFEB3B"
      buttonTextColor="#181818"
      ease="power3.out"
    />
  );
};

export default Navbar;