import { FaFilePdf, FaRegUser } from "react-icons/fa";
import { IoIosHome, IoMdMail } from "react-icons/io";
import { HiMiniPresentationChartLine } from "react-icons/hi2";

export const array = [
  {
    id: 1,
    content: "Home",
    href: "/",
    icon: <IoIosHome />,
  },
  {
    id: 2,
    content: "About",
    href: "/About",
    icon: <FaRegUser />,
  },
  {
    id: 3,
    content: "Contact",
    href: "/Contact",
    icon: <IoMdMail />,
  },
  {
    id: 4,
    content: "Projects",
    href: "/Projects",
    icon: <HiMiniPresentationChartLine />,
  },

  {
    id: 5,
    content: "Resume",
    href: "/Resume",
    icon: <FaFilePdf />,
  },
 
];
