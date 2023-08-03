import Image from "next/image";

interface table {
    index: number;
    name: string;
    launched: string;
    downloads: number;
    action: string;
    imgSrc: string;
}

const tableData: table[] = [
    {
        index: 1,
        name: "VBG Black Metal",
        imgSrc: '/images/Table/bitcoin.svg',
        launched: 'Jan 2022',
        downloads: 10000,
        action: "Explore",
    },
    {
        index: 2,
        name: "VBG Castle Mania",
        imgSrc: '/images/Table/cryptoone.svg',
        launched: 'July 2021',
        downloads: 15000,
        action: "NA",
    },
    {
        index: 3,
        name: "VBG Tournaments",
        imgSrc: '/images/Table/cryptothree.svg',
        launched: 'Dec 2020',
        downloads: 25000,
        action: "Explore",
    },
    {
        index: 4,
        name: "VBG Time to Die",
        imgSrc: '/images/Table/cryptotwo.svg',
        launched: 'Oct 2023',
        downloads: 0,
        action: "NA",
    },
]

const Table = () => {
    return (
        <>
            <div className='mx-auto max-w-7xl pt-40 px-6' id="games-section">
                <div className="table-b bg-navyblue p-8 overflow-x-auto">
                    <h3 className="text-offwhite text-2xl">Our Latest Releases</h3>
                    <table className="table-auto w-full mt-10">
                        <thead>
                            <tr className="text-white bg-darkblue rounded-lg">
                                <th className="px-4 py-4 font-normal">#</th>
                                <th className="px-4 py-4 text-start font-normal">NAME</th>
                                <th className="px-4 py-4 font-normal">LAUNCHED</th>
                                <th className="px-4 py-4 font-normal">DOWNLOADS</th>
                                <th className="px-4 py-4 font-normal">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((items, i) => (
                                <tr key={i} className="border-b border-b-darkblue">
                                    <td className="px-4 py-6 text-center text-white">{items.index}</td>
                                    <td className="px-4 py-6 text-center text-white flex items-center justify-start gap-5 "><Image src={items.imgSrc} alt={items.imgSrc} height={50} width={50} />{items.name}</td>
                                    <td className="px-4 py-6 text-center text-white">{items.launched.toLocaleString()}</td>
                                    <td className={`px-4 py-6 text-center ${items.downloads < 0 ? 'text-red' : 'text-green'} `}>{items.downloads}+</td>
                                    <td className={`px-4 py-6 text-center ${items.action === 'Explore' ? 'text-green' : 'text-red'}`}>
                                        {items.action}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Image src={'/images/Table/Untitled.svg'} alt="ellipse" width={2460} height={102} className="md:mb-40 md:-mt-6" />
        </>
    )
}

export default Table;
