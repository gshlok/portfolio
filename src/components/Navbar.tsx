import React from 'react';
import CardNav from './CardNav';

const Navbar: React.FC = () => {
    const items = [
        {
            label: "Experience",
            bgColor: "#181818",
            textColor: "#FFEB3B",
            links: [
                { label: "My Experience", href: "#experience", ariaLabel: "My Work Experience" }
            ]
        },
        {
            label: "Education",
            bgColor: "#181818",
            textColor: "#FFEB3B",
            links: [
                { label: "My Education", href: "#education", ariaLabel: "My Education" }
            ]
        },
        {
            label: "Skills",
            bgColor: "#181818",
            textColor: "#FFEB3B",
            links: [
                { label: "My Skills", href: "#skills", ariaLabel: "My Skills" }
            ]
        },
        {
            label: "Projects",
            bgColor: "#181818",
            textColor: "#FFEB3B",
            links: [
                { label: "My Projects", href: "#projects", ariaLabel: "View My Projects" }
            ]
        }
    ];

    return (
        <CardNav
            logo="SG"
            logoAlt="SG Portfolio"
            items={items}
            baseColor="#181818"
            menuColor="#FFEB3B"
            buttonBgColor="#FFEB3B"
            buttonTextColor="#181818"
            ease="power3.out"
        />
    );
};

export default Navbar;