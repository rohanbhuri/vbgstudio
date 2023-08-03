"use client"
import Image from "next/image";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

interface faqdata {
    heading: string;
    subheading: string;
}

const faqdata: faqdata[] = [
    {
        heading: "1. What types of games does VBG develop?",
        subheading: 'At VBG, we pride ourselves on our versatility. We create a wide range of games, including action-adventure, puzzle, simulation, and RPGs. Our diverse portfolio allows developers to explore various genres and showcase their creativity.'
    },
    {
        heading: "2. Does VBG support cross-platform game development?",
        subheading: 'Absolutely! We are all about breaking barriers. VBG fully embraces cross-platform game development, enabling our developers to create games that can be enjoyed on multiple devices and operating systems. Whether it is PC, console, mobile, or VR, we are ready to conquer them all.'
    },
    {
        heading: "3. What opportunities for growth and learning does VBG offer to its game developers?",
        subheading: 'VBG is committed to fostering continuous learning and professional growth. As part of our team, developers gain access to cutting-edge technologies, workshops, and mentoring from industry experts. We encourage innovation and support developers in honing their skills to excel in the ever-evolving gaming landscape.'
    },

]

const Faq = () => {
    return (
        <div className="my-20 px-6" id="faq-section">
            <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">FAQs</h3>
            <p className="text-center lg:text-lg font-normal text-bluish">VBG: Answering Your Queries</p>

            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2">
                    {/* Column-1 */}
                    <div>
                        <div className="w-full px-4 pt-16">

                            {faqdata.map((items, i) => (
                                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5" key={i}>
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                                                    <span>{items.heading}</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-purple-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">{items.subheading}</Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Column-2 */}
                    <div className="mt-32">
                        <Image src={'/images/Faq/faq.svg'} alt="faq-image" width={941} height={379} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Faq;
