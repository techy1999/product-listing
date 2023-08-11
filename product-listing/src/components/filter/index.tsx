"use client";
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'

// Available Categories
const categories = ['men', 'women', 'kid', ''];

interface filterProps {
    language: {
        title: {
            name: string;
        };
        search: {
            searchText: string;
        };
        menu: {
            men: string;
            women: string;
            kid: string;
        };
        footer: {
            copyright: string;
        };
        filter: {
            all: string;
            men: string;
            women: string;
            kid: string;
        }
    }
}
const Filter = ({ language }: filterProps) => {

    const path = usePathname();
    const router = useRouter()

    // Handle category filter
    const handleChange = (event: any) => {
        const categorySelected = event.target.value.toLowerCase();
        if (categories.includes(categorySelected)) {
            router.push(`${path}/?category=${categorySelected}&page=1`);
        }
    };
    return (
        <>
            <div className="flex flex-col  space-y-2 sm:items-center" style={{ placeItems: "start" }} >
                <label className="inline-flex ">
                    <input
                        type="radio"
                        name="category"
                        value=""
                        onChange={handleChange}
                    />
                    <span className="ml-2">{language.filter.all}</span>
                </label>
                <label className="inline-flex ">
                    <input
                        type="radio"
                        name="category"
                        value="men"
                        onChange={handleChange}
                    />
                    <span className="ml-2">{language.filter.men}</span>
                </label>
                <label className="inline-flex">
                    <input
                        type="radio"
                        name="category"
                        value="women"

                        onChange={handleChange}
                    />
                    <span className="ml-2">{language.filter.women}</span>
                </label>
                <label className="inline-flex items-center">
                    <input
                        type="radio"
                        name="category"
                        value="kid"

                        onChange={handleChange}
                    />
                    <span className="ml-2">{language.filter.kid}</span>
                </label>
            </div>
        </>
    )
}

export default Filter
