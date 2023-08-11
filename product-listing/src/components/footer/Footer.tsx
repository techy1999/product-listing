import React from 'react'
import { getDictionary } from "../../../getDictionary";
type footerProps = {
    lang: string
}

const Footer = async ({ lang }: footerProps) => {

    const language = await getDictionary(lang);
    return (
        <>
            <footer className="footer bg-gray-800 text-white">
                <div className="container mx-auto px-4 py-6 flex flex-col items-center sm:flex-row justify-between">
                    <div className="text-gray-500">{language.footer.copyright}.</div>
                    <ul className="flex space-x-4 mt-4 sm:mt-0">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Linkdin</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
