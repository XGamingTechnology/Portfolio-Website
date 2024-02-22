import { FaBriefcase } from "react-icons/fa";
import Link from "next/link";

const HireMeCard: React.FC = () => {
  return (
    <div className="fixed top-12 right-0 m-8 transform hover:-translate-y-2 transition duration-500 ease-in-out blur-background hidden sm:block hover:text-black">
      <Link href="mailto:gloryofmaster90@gmail.com">
        <a className="bg-transparent text-white border border-purple-100 hover:bg-white hover:text-black font-bold py-2 px-4 rounded-full flex items-center">
          <FaBriefcase className="text-2xl mr-2" />
          <span className="text-md md:text-sm hover:text-black">Should you wish to team up with me,</span>
        </a>
      </Link>
    </div>
  );
};

export default HireMeCard;
