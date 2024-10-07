import { Button, cn, Divider, useDisclosure } from '@nextui-org/react';
import Logo from '../assets/svg/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faHome,
  faPen,
  faScroll,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { DashboardDataContext } from '../context/dashboard-data-context';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import DashboardNavbarDropdown from '../components/dashboard-navbar-dropdown';
import SignOutModal from '../components/sign-out-modal';
import SidebarItem from '../components/sidebar-item';

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { sidebarOpen, setSidebarOpen } = useContext(DashboardDataContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const sidebarNavigate = (path: string) => {
    navigate(path);
    if (!window.matchMedia(`(min-width: 1024px)`).matches) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="relative flex flex-1 bg-content2 max-h-screen sm:p-[0.7rem]">
      <div
        className={cn(
          'hidden fixed h-screen w-screen bg-black top-0 left-0 z-20 opacity-50 lg:hidden',
          sidebarOpen && 'flex',
        )}
      ></div>
      <div
        className={cn(
          'absolute top-0 lg:static h-screen sm:ml-[-0.7rem] lg:h-auto border-r border-divider lg:border-none rounded-tr-xl rounded-br-xl flex flex-col bg-content2 w-[17rem] px-[0.7rem] overflow-x-hidden duration-300 space-y-8 z-40',
          !sidebarOpen &&
            'ml-[-17rem] sm:ml-[-17rem] lg:ml-[-17rem] border-none',
        )}
      >
        <div className="flex justify-end pt-[1rem] lg:hidden">
          <Button
            isIconOnly
            variant="flat"
            onPress={() => setSidebarOpen(false)}
          >
            <FontAwesomeIcon icon={faAngleDoubleLeft}></FontAwesomeIcon>
          </Button>
        </div>
        <Divider className="lg:hidden pt-0"></Divider>
        <div className="flex flex-col items-center space-y-3 mt-[1.5rem]">
          <img className="h-[5rem]" src={Logo} alt="logo" />
          <div className="flex font-bold text-[15pt]">Progres</div>
        </div>
        <Divider></Divider>
        <div className="flex flex-col space-y-2">
          <SidebarItem
            icon={faHome}
            active={location.pathname === '/dashboard'}
            onPress={() => sidebarNavigate('/dashboard')}
          >
            Home
          </SidebarItem>
          <SidebarItem
            icon={faScroll}
            active={location.pathname === '/dashboard/bac'}
            onPress={() => sidebarNavigate('/dashboard/bac')}
          >
            Bac marks
          </SidebarItem>
          <SidebarItem
            icon={faUserGroup}
            active={location.pathname === '/dashboard/groupes'}
            onPress={() => sidebarNavigate('/dashboard/groupes')}
          >
            Groupes
          </SidebarItem>
          <SidebarItem
            icon={faPen}
            active={location.pathname === '/dashboard/dias'}
            onPress={() => sidebarNavigate('/dashboard/dias')}
          >
            Inscriptions
          </SidebarItem>
        </div>
      </div>

      <div className="flex flex-1 flex-col sm:rounded-2xl bg-background border-divider sm:border overflow-x-hidden">
        <div className="flex h-[4rem] px-[0.7rem] items-center justify-between border-b border-divider">
          <div className="flex items-center space-x-3">
            <Button
              isIconOnly
              variant="bordered"
              onPress={() => setSidebarOpen(!sidebarOpen)}
            >
              <FontAwesomeIcon
                className={cn(
                  'text-[13pt] duration-500',
                  sidebarOpen && 'rotate-180',
                )}
                icon={faAngleDoubleRight}
              ></FontAwesomeIcon>
            </Button>
            {!sidebarOpen ? (
              <img className="h-[2.7rem]" src={Logo} alt="logo" />
            ) : null}
          </div>

          <DashboardNavbarDropdown
            openSignOutModal={onOpen}
          ></DashboardNavbarDropdown>
          <SignOutModal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
          ></SignOutModal>
        </div>

        <div className="flex flex-1 overflow-y-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
