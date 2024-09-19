import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left font-Manregular text-primary">
  
    <div>
        <MenuButton className="bg-white flex items-center justify-center font-Manbold rounded-md appearance-none bg-transparent px-6 py-4 text-sm text-primary placeholder:text-slate-600 focus:outline-none sm:text-sm sm:leading-6 ring-1 ring-stroke shadow-sm hover:bg-accent hover:text-white active:scale-[0.98] active-duration-75 w-full">
          Rating
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>


      <MenuItems transition className="w-full  absolute right-0 z-20 mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
        <div className="py-1 w-full">
          <MenuItem>
            <button
              href="#"
              className="flex items-center gap-2 font-Manbold w-full text-md text-left px-4 py-4  text-gray-700 data-[focus]:bg-highlight data-[focus]:text-accent hover:bg-highlight"
            >
              <img src="/rating-icon.svg" alt="" />
              5 Star
            </button>
          </MenuItem>
          <MenuItem>
          <button
              href="#"
              className="flex items-center gap-2 font-Manbold w-full text-md text-left px-4 py-4  text-gray-700 data-[focus]:bg-highlight data-[focus]:text-accent hover:bg-highlight"
            >
              <img src="/rating-icon.svg" alt="" />
              4 Star
            </button>
          </MenuItem>
          <MenuItem>
          <button
              href="#"
              className="flex items-center gap-2 font-Manbold w-full text-md text-left px-4 py-4  text-gray-700 data-[focus]:bg-highlight data-[focus]:text-accent hover:bg-highlight"
            >
              <img src="/rating-icon.svg" alt="" />
              3 Star
            </button>
          </MenuItem>

          <MenuItem>
          <button
              href="#"
              className="flex items-center gap-2 font-Manbold w-full text-md text-left px-4 py-4  text-gray-700 data-[focus]:bg-highlight data-[focus]:text-accent hover:bg-highlight"
            >
              <img src="/rating-icon.svg" alt="" />
              2 Star
            </button>
          </MenuItem>

          <MenuItem>
          <button
              href="#"
              className="flex items-center gap-2 font-Manbold w-full text-md text-left px-4 py-4  text-gray-700 data-[focus]:bg-highlight data-[focus]:text-accent hover:bg-highlight"
            >
              <img src="/rating-icon.svg" alt="" />
              1 Star
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
