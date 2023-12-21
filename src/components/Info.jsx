"use client"

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Info() {

    return (
        <div className="bg-white">

            <main className="isolate">
                {/* 1 content */}
                <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
                    <div className="mx-auto max-w-7xl px-6 py-6 sm:py-12 lg:px-8">
                        {/* Cambios aquí: Uso de grid para pantallas lg y xl */}
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-2 xl:gap-x-8">

                            {/* Contenedor de la imagen con tamaño controlado */}
                            <div className="lg:flex lg:justify-start xl:justify-start">
                                <img
                                    src="/img/carolina_chavez_001.png"
                                    alt=""
                                    className="px-12 my-12 w-full max-w-lg rounded-2xl object-cover sm:mt-3 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-0"
                                />
                            </div>

                            {/* Texto */}
                            <div>
                                <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-naranja-300 lg:col-span-2 xl:col-auto">
                                    Empieza tu <br /> terapia acá
                                </h1>
                                <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                                    <p className="text-lg leading-8 text-gray-900">
                                        La terapia online que te ofrezco te enseña, orienta, acompaña durante el proceso que necesites realizar en un espacio seguro de investigación y experimentación. Podrás resolver tus necesidades considerando, en conjunto, la mente, el cuerpo, las emociones, las experiencias, la consciencia, el inconsciente, es decir todo tu ser de manera holística.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                {/* 2 content */}
                <div className="relative isolate -z-10 overflow-hidden from-indigo-100/20">
                    <div className="mx-auto max-w-7xl px-6 py-6 sm:py-12 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-morado-300 lg:col-span-2 xl:col-auto">
                                Mirar hacia <br /> adentro
                            </h1>
                            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                                <p className="text-lg leading-8 text-gray-900">
                                    Podrás investigar mirando hacia dentro y experimentar con diferentes formas de percibir. Así también investigar tu relación con el entorno y experimentar con herramientas que te ayuden a adaptarte mejor a diversas situaciones difíciles que se presentan durante tu vida. Este proceso continuo de investigación y experimentación permite a una persona ser más feliz y gozar de bienestar.
                                </p>
                            </div>
                            <img
                                src="/img/carolina_chavez_001.png"
                                alt=""
                                className="px-12 my-12 w-full max-w-lg rounded-2xl object-cover sm:mt-3 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-0"
                            />
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}
