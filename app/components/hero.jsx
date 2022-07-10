import { ChevronRightIcon } from '@heroicons/react/solid'

export default function Hero() {
    return (
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
          <div>
            <a
              href="#"
              className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
            >
              <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                We're hiring intern
              </span>
              <span className="ml-4 text-sm">Visit our page</span>
              <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
            </a>
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-indigo-700 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-4xl">
              <span className="md:block">Platfrom Santri Nusantara</span>{' '}
              {/* <span className="text-indigo-800 md:block">online business</span> */}
            </h1>
            <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
              amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.
            </p>
            <p className="mt-8 text-sm text-gray-500 uppercase tracking-wide font-semibold sm:mt-10">Our Patners</p>
            <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
              <div className="flex flex-wrap items-start justify-between">
                <div className="flex justify-center px-1">
                  <img
                    className="h-9 sm:h-10"
                    src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                    alt="Tuple"
                  />
                </div>
                <div className="flex justify-center px-1">
                  <img
                    className="h-9 sm:h-10"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                  />
                </div>
                <div className="flex justify-center px-1">
                  <img
                    className="h-9 sm:h-10"
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
          <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
            <img src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-1.png"alt="" />
          </div>
        </div>
      </div>
    )
}