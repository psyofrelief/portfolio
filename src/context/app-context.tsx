"use client";
import type { Project } from "@/types/project";
import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface AppContextType {
  projects: Project[];
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const projects = [
    {
      name: "ShorX",
      slug: "shorx",
      type: "Link Shortener",
      colour: "#CA1A41",
      description:
        "I created ShorX to simplify tracking and sharing URLs. The tool allows users to quickly shorten links and generate QR codes. It also features an intuitive dashboard for managing links, tracking clicks, and editing or deleting links. With secure user registration and login, ShorX ensures each action is personalised. The platform is responsive and accessible on all devices, making it ideal for both personal and professional use.",
      blueprint: [
        "I created the ShorX project with React for the frontend and Laravel for the backend to give users a smooth URL management and shortening experience. I used Inertia to to tether the two, so I could seamlessly give users a single page app feel. While React concentrates on rendering the dynamic user interface, Laravel powers database handling, link management, and user authentication, which ultimately reduces the load on the browser, since all the complex stuff is handled on the backend. To create the responsive design, I used Tailwind CSS.  I used migrations to handle schema changes and MySQL to store user data and links in the database. A third-party API makes it easy for users to share links by automatically pairing each shortened URL with a QR code. In order to ensure that new updates are tested and released automatically, I also set up CI/CD pipelines for seamless deployment to platforms like DigitalOcean and Vercel. I've put testing in place to verify the stability of key features and taken precautions to safeguard user data with security measures to make sure everything functions as it should.",
      ],
      techStack: ["Laravel", "React", "Inertia", "MySQL", "PHP", "TailwindCSS"],
      category: "WEB DEV",
      client: "Public",
      year: "2024",
      link: "https://www.shrx.me",
      source: "https://github.com/psyofrelief/shorx",
      displayImg: "/images/shorx/display.webp",
      dualScreenImg: "/images/shorx/desktop.webp",
      phonesImg: "/images/shorx/phones.webp",
    },
    {
      name: "Aywa Clothing",
      slug: "aywa-clothing",
      type: "Ecommerce",
      colour: "#35601E",
      description:
        "I created AYWA Clothing as a custom e-commerce platform for a customer, with the goal of reaching a worldwide audience with premium fashion. It provides a smooth shopping experience where customers can quickly browse a large selection of apparel items, add them to their carts, and make safe purchases. I focused on making sure the platform is simple to use and has a sleek, unique design that works well on desktop and mobile devices.  The client hasn't allowed the site to be view by the public yet, but I'm permitted to show you the live site and source code in private.",

      blueprint: [
        "I put gates and policies in place for the AYWA Clothing project to restrict access to sensitive actions, making sure that only people with permission could handle things like product management and order processing. In order to secure particular routes and verify user actions, I employed middleware, which produced a reliable and secure system for administrators and clients alike. Additionally, the project comes with a fully functional admin dashboard that lets the client easily manage orders, promotions, and products. The client's requirements guided the design of this dashboard, which was refined via ongoing cooperation.",
        "Customers can process payments securely and easily thanks to the Stripe integration, which guarantees that transactions are completed quickly and securely. I collaborated closely with the client throughout the development process to fully grasp their goals and ensure that the project reflected their preferences. In the end, we decided to have Stripe host the checkout page since this back-and-forth cooperation was crucial to realising the client's idea.",
        "In order to guarantee a user interface that is both intuitive and aesthetically pleasing, I used Figma to design the website layout while Adobe Illustrator was used to create the branding. The platform is designed to give users a smooth, accessible shopping experience while giving the client a safe and controllable backend. Features include a light/dark mode toggle, optimised performance, and an intuitive user flow.",
      ],
      techStack: [
        "Laravel",
        "NextJS",
        "TypeScript",
        "MySQL",
        "PHP",
        "TailwindCSS",
      ],
      category: "WEB DEV / LOGO",
      client: "AYWA",
      year: "2024",
      link: "https://www.aywa2dawrld.com",
      displayImg: "/images/aywa/display.webp",
      dualScreenImg: "/images/aywa/desktop.webp",
      phonesImg: "/images/aywa/phones.webp",
    },
    {
      name: "CapBlitz",
      slug: "capblitz",
      type: "Typing Test",
      colour: "#590254",
      description:
        "I developed CapBlitz to help users increase their typing accuracy and speed. It offers a user-friendly and accessible experience with real-time feedback, customisable themes, and seamless performance across devices. It provides real-time statistics to track typing accuracy and speed, enabling users to track their progress and improve their abilities in a dynamic and customised setting. The goal was just to enjoy making a good looking, unique frontend app to highlight my creativity and eye for good UI.",
      blueprint: [
        "Without using third-party libraries, I wrote all of the app's functionality, including the typing logic. I gave users the ability to personalize the timer and select between typing words or sentences because I wanted them to feel in control. Since local storage saves their preferences, such as themes and settings, the experience is consistent and personalised. I was able to guarantee quick load times and seamless device accessibility by hosting it on Vercel. CapBlitz is a reflection of my commitment to developing a straightforward yet powerful tool that helps users improve their typing abilities while having a customised experience.",
      ],
      techStack: ["NextJS", "TypeScript", "TailwindCSS"],
      category: "WEB DEV",
      client: "Public",
      year: "2024",
      link: "https://www.capblitz.com",
      source: "https://github.com/psyofrelief/capblitz",
      displayImg: "/images/capblitz/display.webp",
      dualScreenImg: "/images/capblitz/desktop.webp",
      phonesImg: "/images/capblitz/phones.webp",
    },
  ];

  const pathname = usePathname();

  // Close menu when the pathname changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <AppContext.Provider value={{ menuOpen, toggleMenu, closeMenu, projects }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Wrap in context provider");
  }
  return context;
};
