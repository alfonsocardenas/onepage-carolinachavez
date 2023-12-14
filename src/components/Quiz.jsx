"use client"

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Quiz() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-naranja-300">

            <div className="relative isolate overflow-hidden pt-14">
                <img
                    src="/img/bg_conocernos.png"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Primero vamos a conocernos
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-white">
                            Antes de iniciar una terapia, es ideal conocer primeramente a tu terapeuta, así como tu terapeuta conocer tus necesidades por ello se ofrece una sesión cognoscitiva gratuita de 25 minutos para este encuentro.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-3xl bg-white px-5 py-4 text-sm font-semibold text-indigo-400 shadow-sm hover:bg-orange-500 hover:text-white uppercase"
                            >
                                Iniciar el cuestionario
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}