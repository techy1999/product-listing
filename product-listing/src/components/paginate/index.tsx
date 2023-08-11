"use client"
import Link from "next/link"
import { usePathname, useRouter } from 'next/navigation'
import { useState } from "react"
import './paginate.css';

const Paginate = ({ totalPage, category }: any) => {

    //Find the number of pages
    const router = useRouter()
    const pathname = usePathname();
    // const totalPages = 5;

    const page = 1;

    const [currentPage, setCurrentPage] = useState(page);

    const pages = [];
    for (let i = 1; i <= totalPage; i++) {
        pages.push({
            pageNumber: i,
            isCurrentPage: i === currentPage,
        });
    }

    const pageClickHandler = (page: number, category: string) => {
        setCurrentPage(page);
        router.push(`?page=${page}&category=${category}`)
        // alert(`clicked on page number ${page}`)
    }

    const mappedPages = pages.map((page) => {
        return (
            <li key={page.pageNumber} aria-current="page" onClick={() => pageClickHandler(page.pageNumber, category)} >
                <Link
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-400 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white "
                    href="#"
                ><span className={page.isCurrentPage ? 'bg-blue-400 px-3 py-1.5 text-sm rounded text-white' : ''}>{page.pageNumber}</span></Link>

                {/* {page.isCurrentPage ? '(c)' : ''} */}
            </li>
        );
    });

    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="list-style-none flex">
                    {mappedPages}
                </ul>
            </nav>
        </>
    )
}

export default Paginate
