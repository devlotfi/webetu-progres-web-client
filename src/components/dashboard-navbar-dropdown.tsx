import { faGear, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from '@nextui-org/react';
import { useContext } from 'react';
import { DashboardDataContext } from '../context/dashboard-data-context';
import { useTranslation } from 'react-i18next';

interface Props {
  openSignOutModal: () => void;
  openSettingsModal: () => void;
}

export default function DashboardNavbarDropdown({
  openSettingsModal,
  openSignOutModal,
}: Props) {
  const { bacIndividu, image } = useContext(DashboardDataContext);
  const { t } = useTranslation();

  return (
    <Dropdown>
      <DropdownTrigger>
        <div className="flex items-center space-x-3">
          <div className="hidden md:flex flex-col leading-4 items-end font-bold">
            <div className="flex">
              {bacIndividu?.nomLatin} {bacIndividu?.prenomLatin}
            </div>
            <div className="flex">
              {bacIndividu?.nomArabe} {bacIndividu?.prenomArabe}
            </div>
          </div>
          <Avatar
            color="primary"
            isBordered
            src={`data:image/jpeg;base64,${image}`}
            imgProps={{ referrerPolicy: 'no-referrer' }}
            as="button"
          ></Avatar>
        </div>
      </DropdownTrigger>
      <DropdownMenu
        closeOnSelect={false}
        onAction={(key) => {
          {
            switch (key) {
              case 'settings':
                openSettingsModal();
                break;
              case 'sign-out':
                openSignOutModal();
                break;
            }
          }
        }}
      >
        <DropdownSection showDivider>
          <DropdownItem textValue="User">
            <div className="flex font-bold text-[13pt]">{t('user')}: </div>
            <div className="flex text-[10pt]">
              {bacIndividu?.nomLatin} {bacIndividu?.prenomLatin}
            </div>
          </DropdownItem>
        </DropdownSection>

        <DropdownItem
          key="settings"
          textValue="settings"
          closeOnSelect
          startContent={<FontAwesomeIcon icon={faGear}></FontAwesomeIcon>}
        >
          {t('settings')}
        </DropdownItem>
        <DropdownItem
          key="sign-out"
          className="text-danger"
          color="danger"
          textValue="sign-out"
          closeOnSelect
          startContent={<FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon>}
        >
          {t('signOut')}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
