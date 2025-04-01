import { useContext, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink } from 'react-router'
import { UserContext } from '../../context/userContext.js'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { email } = useContext(UserContext)


  const userNavigation = [
    { name: 'Home', path: '/' },
    { name: 'Catalog', path: '/cars/catalog' },
    { name: 'Add Car', path: '/cars/create' },
    { name: 'Logout', path: '/logout' },
  ]


  const guestNavigation = [
    { name: 'Home', path: '/' },
    { name: 'Catalog', path: '/cars/catalog' },
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
  ]

  const navItems = email ? userNavigation : guestNavigation

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link className="home" to="/">
              AutoMile
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className="text-sm font-semibold text-gray-100">
                {item.name}
              </Link>
            ))}
          </div>

      
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-700">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
               <p>Auto Mile</p>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-300"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-700">
                <div className="space-y-2 py-6">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-100 hover:bg-gray-700"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
             
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  )
}
