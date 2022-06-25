import React, {useState} from "react";
import {Logo, MenuClose, MenuIcon} from "./components/images";
import NavItem from "./components/NavItem";
import Button from "./components/Button";
import Section from "./components/Section";
import FooterSection from "./components/FooterSection";
import "./styles/App.css";

const product = [
    {title: "Overview"},
    {title: "Pricing"},
    {title: "Marketplace"},
    {title: "Features"},
    {title: "Integrations"}
];

const company = [
    {title: "About"},
    {title: "Team"},
    {title: "Blog"},
    {title: "Careers"}
];

const connect = [
    {title: "Contact"},
    {title: "Newsletter"},
    {title: "LinkedIn"}
];


function App() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    return (
        <>
            <header>
                <div className="nav-container">
                    <Logo/>
                    <div
                        className="menu-iconn"
                        onClick={() => setIsMenuActive(!isMenuActive)}
                    >
                        <MenuIcon className={isMenuActive ? "menu-icon-close" : ""}/>
                        <MenuClose className={isMenuActive ? "" : "menu-icon-close"}/>
                    </div>

                    <nav className={isMenuActive ? "menu menu-active" : "menu"}>
                        <menu className="main-nav">
                            <NavItem title={"Product"} dropContent={product}/>
                            <NavItem title={"Company"} dropContent={company}/>
                            <NavItem title={"Connect"} dropContent={connect}/>
                        </menu>
                        <hr/>
                        <menu className="auth-nav">
                            <li className="nav-item">Login</li>
                            <li className="nav-item btn btn-light ">Sign Up</li>
                        </menu>
                    </nav>
                </div>

                <div className="header-content">
                    <h1>
                        <span>A modern</span> <span>publishing platform</span>
                    </h1>
                    <p>Grow your audience and build your online brand</p>

                    <div className="btn-container">
                        <Button className={"btn-light"} title="Start for Free"/>
                        <Button title=" Learn More"/>
                    </div>
                </div>
            </header>

            <main>
                <section className="top-section">
                    <h2> Designed for the future</h2>
                    <div className="decorative"/>

                    <Section
                        title="
  Introducing an extensible editor"
                        content="
  Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
  change the looks of a blog."
                    />

                    <Section
                        title="Robust content management"
                        content=" Flexible content management enables users to easily move through posts. Increase the usability of your blog
            by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
                    />
                </section>

                <section className="mid-section">
                    {/* <div className="decorative "></div> */}

                    <Section
                        headingType="h2"
                        title="  State of the Art Infrastructure"
                        content="  With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
      This ensures your site will load instantly, no matter where your readers are, keeping your site competitive."
                    />
                </section>
                <section className="bot-section">
                    <div className="decorative">

                    </div>

                    <Section
                        title="Free, open, simple"
                        content="Blogr is a free and open source application backed by a large community of helpful developers. It supports
  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
                    />

                    <Section
                        title="
  Powerful tooling"
                        content="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
  capable of producing even the most complicated sites."
                    />
                </section>
            </main>

            <footer>
                <Logo/>

                <FooterSection head="Product" content={product}/>
                <FooterSection head="Company" content={company}/>
                <FooterSection head="Connect" content={connect}/>
            </footer>
        </>
    );
}

export default App;

/* 
 Product

  Overview
  Pricing
  Marketplace
  Features
  Integrations

  Company

  About
  Team
  Blog
  Careers

  Connect

  Contact
  Newsletter
  LinkedIn
  
  Login
  Sign Up

  A modern publishing platform
  Grow your audience and build your online brand

  Start for Free
  Learn More

  Designed for the future

  Introducing an extensible editor
  Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
  change the looks of a blog.

  Robust content management
  Flexible content management enables users to easily move through posts. Increase the usability of your blog 
  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.

  State of the Art Infrastructure
  With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
  This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.

  Free, open, simple
  Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.

  Powerful tooling
  Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
  capable of producing even the most complicated sites.

  Product

  Overview
  Pricing
  Marketplace
  Features
  Integrations

  Company

  About
  Team
  Blog
  Careers

  Connect
  
  Contact
  Newsletter
  LinkedIn

*/
