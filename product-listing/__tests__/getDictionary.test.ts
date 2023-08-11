import { getDictionary } from "../getDictionary";


describe('getDictionary for language transalation', () => {
    it('should return the dictionary for the given language', async () => {
        const expectedDictionary = {
            title: {
                name: 'Products',
            },
            search: {
                searchText: 'Search',
            },
            menu: {
                men: 'Men',
                women: 'Women',
                kid: 'Kid',
            },
            footer: {
                copyright: '© 2023 Your Company. All rights reserved',
            },
            filter: {
                all: 'All',
                men: 'Men',
                women: 'Women',
                kid: 'Kid',
            },
        };

        const lang = 'en';
        const dictionary = await getDictionary(lang);

        expect(dictionary).toEqual(expectedDictionary);
    });
});