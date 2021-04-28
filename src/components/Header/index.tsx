import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
];
const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <Popover className='relative w-full bg-white'>
      {({ open }) => (
        <>
          <div className='sm:px-20 w-full px-4 mx-auto'>
            <div className='md:space-x-10 flex items-center justify-between py-4 border-b-2 border-gray-100'>
              <div className='lg:w-0 lg:flex-1 flex justify-start'>
                <a href='#'>
                  <span className='sr-only'>Workflow</span>
                  <img className='sm:h-20 w-auto h-8' src='logo.png' alt='' />
                </a>
              </div>
              <div className='md:hidden -my-2 -mr-2'>
                <Popover.Button className='hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md'>
                  <span className='sr-only'>Open menu</span>
                  <MenuIcon className='w-6 h-6' aria-hidden='true' />
                </Popover.Button>
              </div>
              <Popover.Group as='nav' className='md:flex hidden space-x-10'>
                <a
                  href='#'
                  className='hover:text-gray-900 text-base font-medium text-gray-500'
                >
                  Home
                </a>
                <a
                  href='#'
                  className='hover:text-gray-900 text-base font-medium text-gray-500'
                >
                  Gallery
                </a>
                <Popover className='relative'>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        )}
                      >
                        <span>About Us</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden='true'
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel
                          static
                          className='sm:px-0 md:-translate-x-1/2 absolute z-10 w-screen max-w-md px-2 mt-3 -ml-32 transform'
                        >
                          <div className='ring-1 ring-black ring-opacity-5 overflow-hidden rounded-lg shadow-lg'>
                            <div className='sm:gap-8 sm:p-8 relative grid gap-6 px-5 py-6 bg-white'>
                              {solutions.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className='hover:bg-gray-50 flex items-start p-3 -m-3 rounded-lg'
                                >
                                  <item.icon
                                    className='flex-shrink-0 w-6 h-6 text-indigo-600'
                                    aria-hidden='true'
                                  />
                                  <div className='ml-4'>
                                    <p className='text-base font-medium text-gray-900'>
                                      {item.name}
                                    </p>
                                    <p className='mt-1 text-sm text-gray-500'>
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className='bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8 px-5 py-5 space-y-6'>
                              {callsToAction.map((item) => (
                                <div key={item.name} className='flow-root'>
                                  <a
                                    href={item.href}
                                    className='hover:bg-gray-100 flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md'
                                  >
                                    <item.icon
                                      className='flex-shrink-0 w-6 h-6 text-gray-400'
                                      aria-hidden='true'
                                    />
                                    <span className='ml-3'>{item.name}</span>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter='duration-200 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Popover.Panel
              focus
              static
              className='md:hidden absolute inset-x-0 top-0 z-50 p-2 transition origin-top-right transform'
            >
              <div className='ring-1 ring-black ring-opacity-5 divide-gray-50 bg-white divide-y-2 rounded-lg shadow-lg'>
                <div className='px-5 pt-5 pb-6'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <img
                        className='w-auto h-8'
                        src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                        alt='Workflow'
                      />
                    </div>
                    <div className='-mr-2'>
                      <Popover.Button className='hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md'>
                        <span className='sr-only'>Close menu</span>
                        <XIcon className='w-6 h-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <nav className='gap-y-8 grid'>
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className='hover:bg-gray-50 flex items-center p-3 -m-3 rounded-md'
                        >
                          <item.icon
                            className='flex-shrink-0 w-6 h-6 text-indigo-600'
                            aria-hidden='true'
                          />
                          <span className='ml-3 text-base font-medium text-gray-900'>
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className='px-5 py-6 space-y-6'>
                  <div className='gap-y-4 gap-x-8 grid grid-cols-2'>
                    <a
                      href='#'
                      className='hover:text-gray-700 text-base font-medium text-gray-900'
                    >
                      Pricing
                    </a>

                    <a
                      href='#'
                      className='hover:text-gray-700 text-base font-medium text-gray-900'
                    >
                      Docs
                    </a>
                    {resources.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='hover:text-gray-700 text-base font-medium text-gray-900'
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
