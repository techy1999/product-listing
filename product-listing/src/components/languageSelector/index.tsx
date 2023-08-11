"use client";
import { useRouter } from 'next/navigation';

const Selector = ({ languages }: any) => {
    const router = useRouter();

    const handleEnng = () => {
        router.push("/en");
    }
    const handlegerman = () => {
        router.push("/de");
    }
    return (
        <>
            <div className="relative flex">
                <button className=' text-white border-2 rounded-md mx-2 px-2 py-1' onClick={handleEnng}>EN</button>
                <button className="text-white border-2 rounded-md pt-1 px-2 py-1" onClick={handlegerman}>DE</button>
            </div>
        </>

    );
};

export default Selector;