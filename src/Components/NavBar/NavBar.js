/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import DropDownIcon from '../../assets/icon/Polygon 1.svg';
import { Link, useLocation } from 'react-router-dom';
import Help from '../Help/Help';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [opens, setOpens] = useState(false);
  // get router pathname using react-router-dom
  const { pathname } = useLocation();
  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Blog', href: '/blogs', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Careers', href: '/career', current: false },
  ];
  return (
    <>
      <Help
        open={opens}
        setOpen={setOpens}
      />
      <Disclosure as='nav' className='bg-transparent absolute z-50 w-full '>
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
              <div className='relative flex items-center justify-between h-16'>
                <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='flex-shrink-0 flex items-center'>
                  <Link to={"/"}>
                    <img
                      className='block lg:hidden h-8 w-auto'
                      src='/logo.png'
                      alt='Workflow'
                    />
                    <img
                      className='hidden lg:block h-10 w-auto'
                      src='/logo.png'
                      alt='Workflow'
                    />
                  </Link>
                </div>
                <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                  <div className='hidden sm:block md:mx-auto sm:ml-6'>
                    <div className='flex space-x-4'>
                      {navigation.map(item => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.href === pathname
                              ? 'border-b-2 '
                              : 'text-gray-800 hover:border-b-2',
                            'px-3 py-2 text-sm font-medium border-indigo-500 border-b-blue-500'
                          )}
                          aria-current={item.current ? 'page' : undefined}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='hidden md:block'>
                  <div className='absolute  inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                    {/* Profile dropdown */}
                    <Menu as='div' className='ml-3 relative'>
                      <p style={{ cursor: 'pointer' }} onClick={() => setOpens(true)}>Support</p>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className='sm:hidden'>
              <div className='px-2 pt-2 pb-10 space-y-1 bg-white '>
                {navigation.map(item => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-black hover:bg-gray-700 hover:text-gray-900',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}>
                    {item.name}
                  </Disclosure.Button>
                ))}
                <div className='absolute  flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  <Disclosure.Button onClick={!open} as='div' className='ml-3 relative'>
                    <p style={{ cursor: 'pointer' }} onClick={() => setOpens(true)}>Support</p>
                  </Disclosure.Button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
