import { getAllProducts } from "@@/contentful/fetchProducts";

describe('Fetch Product from contentful', () => {
    it('should fetch products successfully', async () => {
        const products = await getAllProducts("");
        expect(products).toBeDefined();
        expect(products.length).toBeGreaterThan(0);
        expect(products[0]).toHaveProperty('name');
        expect(products[0]).toHaveProperty('price');
        expect(products[0]).toHaveProperty('description');
        expect(products[0]).toHaveProperty('category');
        expect(products[0]).toHaveProperty('image');
    });

    it('should fail to fetch products if the contentful space id is invalid', async () => {
        try {
            await getAllProducts("");
        } catch (error: any) {
            expect(error.message).toBe('Failed to fetch products from Contentful');
        }
    });
})