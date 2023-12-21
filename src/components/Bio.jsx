"use client"

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const timeline = [
    {
        name: 'Licenciada en Psicología',
        description:
            'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
        date: 'Ago 2021',
        dateTime: '2021-08',
    },
    {
        name: 'Doctora en Psicología',
        description:
            'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
        date: 'Dic 2021',
        dateTime: '2021-12',
    },
    {
        name: 'Coach Profesional',
        description:
            'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
        date: 'Feb 2022',
        dateTime: '2022-02',
    },
    {
        name: 'Diectora en CS Managering',
        description:
            'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
        date: 'Dic 2022',
        dateTime: '2022-12',
    },
]

export default function Bio() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-morado-300">

            <main className="isolate">
                {/* Bio section */}
                <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
                    <div
                        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-morado-300 shadow-xl shadow-indigo-600/10 ring-1 ring-morado-300 sm:-mr-80 lg:-mr-96"
                        aria-hidden="true"
                    />
                    <div className="mx-auto max-w-7xl px-6 py-6 sm:py-12 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-naranja-300 sm:text-6xl lg:col-span-2 xl:col-auto">
                                Carolina<br />Chávez
                            </h1>
                            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                                <p className="text-lg leading-8 text-white">
                                    Hola, me llamo Carolina y me gustaría que pudieras conocerme más y compartir contigo mi razón de ser, mis valores y aquello que me hace ser feliz.
                                    <br /><br />
                                    Soy peruana y viví durante más de 20 años en Lima. Me mudé a Barcelona aunque nunca dejé de relacionarme con Perú sobre todo trabajando como psicóloga y coach.
                                </p>
                            </div>
                            <img
                                src="/img/carolina_chavez_001.png"
                                alt=""
                                className="px-12 mb-12 w-full max-w-lg rounded-2xl object-cover sm:mt-3 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-0"
                            />
                        </div>
                    </div>
                    <div className="hidden absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
                </div>

                {/* Timeline section */}
                <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8 pb-20">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                        {timeline.map((item) => (
                            <div key={item.name}>
                                <time
                                    dateTime={item.dateTime}
                                    className="flex items-center text-sm font-semibold leading-6 text-white"
                                >
                                    <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                        <circle cx={2} cy={2} r={2} fill="currentColor" />
                                    </svg>
                                    {item.date}
                                    <div
                                        className="absolute -ml-2 h-px w-screen -translate-x-full bg-white sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                                        aria-hidden="true"
                                    />
                                </time>
                                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-naranja-300">{item.name}</p>
                                <p className="mt-1 text-base leading-7 text-white">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </main>
        </div>
    )
}
