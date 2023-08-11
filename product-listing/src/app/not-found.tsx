import Link from 'next/link'
import PageNotFound from '../../public//page_not_found.svg'
import Image from 'next/image'

export default function NotFound() {
    return <>
        <div className='min-h-screen' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Image src={PageNotFound} alt="not found" width={500}
                height={500} />
            <div>
                <Link href="/en">Go back to Home</Link>
            </div>
        </div >

    </>
}
