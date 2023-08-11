import Card from '@@/components/card/Card';
import Paginate from '@@/components/paginate';
import { getPaginatedProducts, getAllProducts } from '@@/contentful/fetchProducts';
import { ProductI } from '@@/types/productI';
const LIMIT: number = parseInt(process.env.LIMIT!);
import { getDictionary } from "../../../getDictionary";
import Filter from '@@/components/filter';


type homeProps = {
  searchParams: {
    page: string,
    category: string
  },
  params: {
    lang: string
  }
}

async function Home({ searchParams, params }: homeProps) {

  const language = await getDictionary(params.lang);
  const category: string = searchParams.category || '';
  const page: number = parseInt(searchParams.page) || 1;

  const getPaginatedProductsList: ProductI[] = await getPaginatedProducts(page, LIMIT, params.lang, category);
  const allProductsList: ProductI[] = await getAllProducts(category);

  return (
    <>
      <main className='mt-4 mb-4 sm:ml-4 p-8 '>
        <div className="container flex mx-auto flex-col sm:flex-row justify-end ">
          {/* Left Part with Filters */}
          <Filter language={language} />

          {/* Right Part with Product Grid */}
          <div className='mx-8 '>
            <div className='flex justify-end'>
              <Paginate totalPage={Math.ceil(allProductsList.length / LIMIT)} category={category} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 no-scrollbar mt-4" style={{ overflow: 'auto', maxHeight: 'calc(100vh - 50px)' }}>
              {getPaginatedProductsList.map((product: ProductI) => (
                <Card key={product.name} product={product} />
              ))}
            </div>
          </div>

        </div>

      </main>
    </>

  )
}

export default Home