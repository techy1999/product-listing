import Image from "next/image";
import { ProductI } from "@@/types/productI";

type CardProps = {
    product: ProductI
};

const Card = ({ product }: CardProps) => {
    const { name, price, description, image, category } = product;

    return (
        <>
            <div className="card max-w-100 rounded overflow-hidden shadow-sm" style={{ width: '80%' }}>
                <Image
                    src={"http:" + image}
                    alt={name}
                    width={100}
                    height={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ width: "100%" }}
                />
                {/* <div style={{ position: 'relative', width: '50%' }}>
                    <Image
                        src={"http:" + image}
                        alt={name}
                        width={100}
                        height={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ width: "100%" }}
                    />
                </div> */}

                <div className="px-4 py-2">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                    <div className="mt-2">$ <span className="text-lg">{price}</span></div>
                </div>
                <div className="px-6 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{category}</span>
                </div>
            </div>

        </>
    );
};

export default Card;
