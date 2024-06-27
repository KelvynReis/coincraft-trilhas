import { Fragment, useState } from 'react'
import { navLinks } from '@/utils/navLinks'
import { RoutePaths } from '@/utils/ui/Route'
import { Dialog, Transition } from '@headlessui/react'
import { Icon } from './Icon'
import { Nav } from './Nav'
import { Button } from './Button'

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="absolute left-0 top-0 z-50 flex  w-full items-center justify-center bg-transparent  md:border-b-2 md:border-white">
            <div className="w-full flex justify-between mx-auto max-w-[1200px] lg:pt-[41px] lg:pb-[25px] px-8">
                <div className="flex w-full flex-1 items-center justify-between">
                    <div className="flex lg:hidden">
                        <div>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md p-2.5 !pl-0 text-white"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Icon
                                    className="h-10 w-10 text-black"
                                    aria-hidden="true"
                                    name="MdMenu"
                                />
                            </button>
                        </div>
                    </div>
                    <picture className="hidden items-center justify-center gap-4 md:flex">
                        <a
                            href={RoutePaths.home}
                            className="md:flex md:flex-col md:items-center md:justify-center"
                        >
                            <img
                                src="/assets/logos/logo-inova.png"
                                alt="Logo Inova maranhao"
                                width={143}
                                height={48}
                                className='object-contain w-[143px] h-[48px]'
                            />
                        </a>
                    </picture>
                    <div className="hidden items-start gap-6 sm:gap-x-[50px] lg:flex lg:gap-4 ">
                        {navLinks.map((link, i) => (
                            <Nav key={i} label={link.label} path={link.path} />
                        ))}
                    </div>

                    <Button variant="secondary" className=' px-6 py-2'>
                        <a href={RoutePaths.play} target='_blank' className="font-bold uppercase text-2xl text-white">
                            Jogar
                        </a>
                    </Button>
                </div>
            </div>
            <Transition show={mobileMenuOpen} as={Fragment}>
                <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>
                    <Transition
                        show={mobileMenuOpen}
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enterFrom="translate-x-full"
                        enterTo="-translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leaveFrom="-translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <Dialog.Panel className="primary-gradient fixed inset-y-0 z-[999] h-screen w-full overflow-y-auto px-6 sm:ring-1 sm:ring-gray-900/10">
                            <div className="relative h-screen">
                                <Transition
                                    show={mobileMenuOpen}
                                    as={Fragment}
                                    enter="ease-in-out duration-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-500"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="flex items-center justify-between">
                                        <button
                                            type="button"
                                            className="rounded-md p-2.5 text-white"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <Icon
                                                className="h-10 w-10 text-zinc-900"
                                                aria-hidden="true"
                                                name="MdClose"
                                            />
                                        </button>
                                    </div>
                                </Transition>
                                <div className="flex w-full flex-col items-center justify-center gap-10 ">
                                    <img
                                        src="/assets/logos/logo-inova.png"
                                        className="h-full w-[100px] object-cover"
                                        alt="Logo Inova maranhao"
                                        width={100}
                                        height={190}
                                    />
                                    <div className=" flex flex-col gap-20">
                                        <div className="flex flex-col items-center justify-center gap-7">
                                            {navLinks.map((link, i) => (
                                                <Nav
                                                    key={i}
                                                    label={link.label}
                                                    path={link.path}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                />
                                            ))}
                                            <Button variant="secondary" className=' px-6 py-2'>
                                                <a href={RoutePaths.play} target='_blank' className="font-bold uppercase text-2xl text-white">
                                                    Jogar
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition>
                </Dialog>
            </Transition>
        </header>
    )
}
