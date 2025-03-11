"use client";

import { useState} from "react";
import { usePathname } from "next/navigation"; // Usamos usePathname en lugar de useRouter
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  UserPlusIcon,
  UsersIcon,
  GiftIcon,
  UserGroupIcon,
  TrophyIcon,
  CalendarIcon,
  MicrophoneIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  BookOpenIcon,
  NewspaperIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  XMarkIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const about = [
  {
    name: "Historia de la ACRP",
    description: "Conoce los inicios y evolución de nuestra organización",
    href: "/nosotros/historia-acrp",
    icon: ChartPieIcon,
  },
  {
    name: "Comités",
    description: "Descubre los comités y sus funciones dentro de la ACRP",
    href: "/nosotros/comites",
    icon: UserGroupIcon,
  },
  {
    name: "Estatutos y Reglamentos",
    description: "Consulta los documentos oficiales de la ACRP",
    href: "/nosotros/estatutos",
    icon: DocumentTextIcon,
  },
  {
    name: "Contacto",
    description: "Contáctanos para más información",
    href: "/nosotros/contacto",
    icon: EnvelopeIcon,
  },
];

const awards = [
  {
    name: "Premios Anuales",
    description: "Reconocimientos otorgados por la ACRP",
    href: "/premios/anuales",
    icon: TrophyIcon,
  },
  {
    name: "Becas",
    description:
      "Oportunidades de financiamiento para estudiantes e investigadores",
    href: "/premios/becas",
    icon: AcademicCapIcon,
  },
];

const events = [
  {
    name: "Conferencia Anual",
    description: "El evento principal de la ACRP",
    href: "/conferencias/conferencia-anual",
    icon: MicrophoneIcon,
  },
  {
    name: "Talleres y Seminarios",
    description: "Eventos especializados organizados por la ACRP",
    href: "/conferencias/talleres",
    icon: AcademicCapIcon,
  },
  {
    name: "Calendario de Eventos",
    description: "Fechas importantes de conferencias y reuniones",
    href: "/conferencias/calendario",
    icon: CalendarIcon,
  },
  {
    name: "Programa de Conferencias",
    description: "Consulta la agenda detallada de las conferencias",
    href: "/conferencias/programa-conferencias",
    icon: ClipboardDocumentListIcon,
  },
];

const publications = [
  {
    name: "Revista Científica",
    description: "Publicaciones periódicas de la ACRP",
    href: "/publicaciones/revista",
    icon: BookOpenIcon,
  },
  {
    name: "Boletín Informativo",
    description: "Noticias y actualizaciones de la organización",
    href: "/publicaciones/boletin",
    icon: NewspaperIcon,
  },
  {
    name: "Documentos Técnicos",
    description: "Artículos y recursos para miembros",
    href: "/publicaciones/documentos",
    icon: DocumentTextIcon,
  },
];

const news = [
  {
    name: "Últimas Noticias",
    description: "Actualizaciones recientes de la ACRP",
    href: "/noticias/ultimas",
    icon: NewspaperIcon,
  },
  {
    name: "Archivo de Noticias",
    description: "Noticias pasadas de la organización",
    href: "/noticias/archivo",
    icon: ArchiveBoxIcon,
  },
];

const members = [
  {
    name: "Únete a la ACRP",
    description: "Información sobre cómo ser miembro",
    href: "/miembros/unete",
    icon: UserPlusIcon,
  },
  {
    name: "Directorio de Miembros",
    description: "Lista de miembros activos",
    href: "/miembros/directorio",
    icon: UsersIcon,
  },
  {
    name: "Beneficios de ser Miembro",
    description: "Ventajas de pertenecer a la ACRP",
    href: "/miembros/beneficios",
    icon: GiftIcon,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Usamos usePathname para leer la ruta actual

  // Función para verificar si un enlace está activo
  const isActiveMenuItem = (menuItemPath: string) => {
    return pathname === menuItemPath || pathname.startsWith(menuItemPath + "/");
  };
 

  return (
    <header
      className={`bg-white sticky top-0 z-50 shadow-md transition-all duration-300 pb-4`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">
              Asociación Cubana de Reconocimiento de Patrones
            </span>
            <div
               className="w-46 h-16 md:h-20  overflow-hidden relative"
            >
              <Image
                src="/Logo.webp"
                alt="Logo de ACRP"
                fill
                sizes="(max-width: 768px) 100vw, 192px"
                className="object-cover"
                priority
              />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Abrir menú principal</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 lg:items-center">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              <Link
                href={"/publicaciones"}
                className={`${
                  isActiveMenuItem("/publicaciones")
                    ? "text-indigo-600"
                    : "text-gray-900"
                } hover:text-indigo-500 relative inline-block font-medium transition duration-300 group`}
              >
                Publicaciones
                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 bg-indigo-500 transition-all duration-400 ${
                    isActiveMenuItem("/publicaciones")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {publications.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-indigo-100"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              <Link
                href={"/noticias"}
                className={`${
                  isActiveMenuItem("/noticias")
                    ? "text-indigo-600"
                    : "text-gray-900"
                } hover:text-indigo-500 relative inline-block font-medium transition duration-300 group`}
              >
                Noticias
                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 bg-indigo-500 transition-all duration-400 ${
                    isActiveMenuItem("/noticias")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {news.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-indigo-100"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              <Link
                href={"/conferencias"}
                className={`${
                  isActiveMenuItem("/conferencias")
                    ? "text-indigo-600"
                    : "text-gray-900"
                } hover:text-indigo-500 relative inline-block font-medium transition duration-300 group`}
              >
                Conferencias
                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 bg-indigo-500 transition-all duration-400 ${
                    isActiveMenuItem("/conferencias")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {events.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-indigo-100"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              <Link
                href={"/premios"}
                className={`${
                  isActiveMenuItem("/premios")
                    ? "text-indigo-600"
                    : "text-gray-900"
                } hover:text-indigo-500 relative inline-block font-medium transition duration-300 group`}
              >
                Premios
                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 bg-indigo-500 transition-all duration-400 ${
                    isActiveMenuItem("/premios")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full xl:-left-20 lg:-left-20 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {awards.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-indigo-100"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              <Link
                href={"/miembros"}
                className={`${
                  isActiveMenuItem("/miembros")
                    ? "text-indigo-600"
                    : "text-gray-900"
                } hover:text-indigo-500 relative inline-block font-medium transition duration-300 group`}
              >
                Miembros
                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 bg-indigo-500 transition-all duration-400 ${
                    isActiveMenuItem("/miembros")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full xl:-left-52 lg:-left-52 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {members.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-indigo-100"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              <Link
                href={"/nosotros"}
                className={`${
                  isActiveMenuItem("/nosotros")
                    ? "text-indigo-600"
                    : "text-gray-900"
                } hover:text-indigo-500 relative inline-block font-medium transition duration-300 group`}
              >
                Acerca de nosotros
                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 bg-indigo-500 transition-all duration-400 ${
                    isActiveMenuItem("/nosotros")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full  xl:-left-80 lg:-left-80 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {about.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-indigo-100"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-40 bg-black/50" />{" "}
        {/* Fondo oscuro semi-transparente */}
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">
                Asociación Cubana de Reconocimiento de Patrones
              </span>
              <div className="w-46 h-20 overflow-hidden relative">
                <Image
                  src="/Logo.webp"
                  alt="Logo de ACRP"
                  fill
                  sizes="(max-width: 768px) 100vw, 192px"
                  className="object-cover"
                  priority
                />
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Cerrar menú</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton
                    className={`${
                      isActiveMenuItem("/publicaciones")
                        ? " bg-indigo-300 font-bold text-white"
                        : "text-gray-900"
                    } group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold  hover:bg-indigo-300 hover:text-white`}
                  >
                    <Link
                      href={"/publicaciones"}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold "
                    
                    >
                      Publicaciones
                    </Link>

                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none transition-transform duration-200 group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                      {[...publications].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={`${
                            isActiveMenuItem(item.href)
                              ? " bg-indigo-300 font-bold text-white"
                              : "text-gray-900"
                          }  block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold  hover:bg-indigo-300 hover:text-white`}>
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                <DisclosureButton
                    className={`${
                      isActiveMenuItem("/noticias")
                        ? " bg-indigo-300 font-bold text-white"
                        : "text-gray-900"
                    } group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold  hover:bg-indigo-300 hover:text-white`}
                  ><Link
                      href={"/noticias"}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                    >
                      Noticias
                    </Link>

                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...news].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={`${
                            isActiveMenuItem(item.href)
                              ? " bg-indigo-300 font-bold text-white"
                              : "text-gray-900"
                          }  block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold  hover:bg-indigo-300 hover:text-white`}>
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                <DisclosureButton
                    className={`${
                      isActiveMenuItem("/conferencias")
                        ? " bg-indigo-300 font-bold text-white"
                        : "text-gray-900"
                    } group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold  hover:bg-indigo-300 hover:text-white`}
                  > <Link
                      href={"/conferencias"}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                    >
                      Conferencias
                    </Link>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...events].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={`${
                            isActiveMenuItem(item.href)
                              ? " bg-indigo-300 font-bold text-white"
                              : "text-gray-900"
                          }  block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold  hover:bg-indigo-300 hover:text-white`} >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                <DisclosureButton
                    className={`${
                      isActiveMenuItem("/premios")
                        ? " bg-indigo-300 font-bold text-white"
                        : "text-gray-900"
                    } group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold  hover:bg-indigo-300 hover:text-white`}
                  > <Link
                      href={"/premios"}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                    >
                      Premios
                    </Link>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...awards].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={`${
                            isActiveMenuItem(item.href)
                              ? " bg-indigo-300 font-bold text-white"
                              : "text-gray-900"
                          }  block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold  hover:bg-indigo-300 hover:text-white`}>
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                <DisclosureButton
                    className={`${
                      isActiveMenuItem("/miembros")
                        ? " bg-indigo-300 font-bold text-white"
                        : "text-gray-900"
                    } group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold  hover:bg-indigo-300 hover:text-white`}
                  > <Link
                      href={"/miembros"}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold"
                    >
                      Miembros
                    </Link>

                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...members].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={`${
                            isActiveMenuItem(item.href)
                              ? " bg-indigo-300 font-bold text-white"
                              : "text-gray-900"
                          }  block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold  hover:bg-indigo-300 hover:text-white`}>
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                <DisclosureButton
                    className={`${
                      isActiveMenuItem("/nosotros")
                        ? " bg-indigo-300 font-bold text-white"
                        : "text-gray-900"
                    } group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold  hover:bg-indigo-300 hover:text-white`}
                  ><Link
                      href={"/nosotros"}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold "
                    >
                      Acerca de nosotros
                    </Link>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...about].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={`${
                      isActiveMenuItem(item.href)
                        ? " bg-indigo-300 font-bold text-white"
                        : "text-gray-900"
                    }  block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold  hover:bg-indigo-300 hover:text-white`}
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
