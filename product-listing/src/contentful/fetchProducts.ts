// Using the clientcontentful client
import { ProductI } from '@@/types/productI';
import clientContentful from './config';
import { EntryCollection, EntrySkeletonType } from 'contentful';

// Fetch all the products from contentful
export async function getAllProducts(category: string) {
    let products: ProductI[] = [];
    try {
        const entries: EntryCollection<EntrySkeletonType, undefined, string> = await clientContentful.getEntries({
            query: category
        });
        //console.log("entries", entries.items);

        products = entries.items.map((item: any) => ({
            name: item.fields.name,
            price: item.fields.price,
            description: item.fields.description,
            category: item.fields.category,
            image: item.fields.image.fields.file.url,
        }));
        // console.log("PRODUCTS", products);
    } catch (error) {
        console.log("ERROR", error);
        console.log("Something went wrong with the API call from Contentful");
    }

    return products;
};

// Fetch all the Products from contentful with pagination
// Note :-  page number should be less than total permissible pagenumber
export async function getPaginatedProducts(page: number, limit: number, languageContentful: string, category: string) {

    // contentful code is 'en-US' or set default language if no language
    if (languageContentful == 'en' || languageContentful == '') {
        languageContentful = 'en-US'
    }
    let products: ProductI[] = [];
    try {
        const entries: EntryCollection<EntrySkeletonType, undefined, string> = await clientContentful.getEntries({
            limit: limit,
            skip: (page - 1) * limit,
            locale: languageContentful,
            query: category
        });
        //console.log("entries", entries.items);

        products = entries.items.map((item: any) => ({
            name: item.fields.name,
            price: item.fields.price,
            description: item.fields.description,
            category: item.fields.category,
            image: item.fields.image.fields.file.url,
        }));
        // console.log("PRODUCTS", products);
    } catch (error) {
        console.log("ERROR", error);
        console.log("Something went wrong with the API call from Contentful");
    }

    return products;
};

// Filter product based on searchQuery [NOT IN SCOPE]
export async function searchProduct(seachQuery: string) {

}

