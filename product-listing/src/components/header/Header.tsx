import Link from "next/link";
import { getDictionary } from "../../../getDictionary";
import Selector from "../languageSelector";
import { languageArray } from "@@/constants";

type headerProps = {
    lang: string
}
const Header = async ({ lang }: headerProps) => {
    // console.log("params in header", lang);
    const language = await getDictionary(lang);
    // console.log("langage : -  ", language);
    return (
        <>
            <header className="bg-gray-800 text-white py-4">
                <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <div className="font-bold">
                            <Link href="/">
                                {language.title.name}
                            </Link>
                        </div>
                        <button className="md:hidden text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:flex space-x-6 mb-4 md:mb-0">
                        <Link href="?category=men&page=1" className="hover:text-gray-300">{language.menu.men}</Link>
                        <Link href="?category=women&page=1" className="hover:text-gray-300">{language.menu.women}</Link>
                        <Link href="?category=kid&page=1" className="hover:text-gray-300">{language.menu.kid}</Link>

                    </div>
                    <div className="md:hidden flex flex-col items-center mt-4">
                        <Link href="?category=men&page=1" className="hover:text-gray-300 mb-2">{language.menu.men}</Link>
                        <Link href="?category=women&page=1" className="hover:text-gray-300 mb-2">{language.menu.women}</Link>
                        <Link href="?category=kid&page=1" className="hover:text-gray-300 mb-2">{language.menu.kid}</Link>
                    </div>
                    <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                placeholder={`${language.search.searchText}`}
                                className="py-1 px-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            />
                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-md">{language.search.searchText}</button>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Selector languages={languageArray} />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
