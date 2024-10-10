import {
  faComputer,
  faLanguage,
  faMoon,
  faPowerOff,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
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
import { ThemeContext } from '../context/theme-context';
import { ThemeOptions } from '../types/theme-options';
import { DashboardDataContext } from '../context/dashboard-data-context';
import { useTranslation } from 'react-i18next';

interface Props {
  openSignOutModal: () => void;
}

export default function DashboardNavbarDropdown({ openSignOutModal }: Props) {
  const { bacIndividu, image } = useContext(DashboardDataContext);
  const { themeOption, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

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
        selectionMode="multiple"
        closeOnSelect={false}
        selectedKeys={[themeOption, i18n.language]}
        onAction={(key) => {
          {
            switch (key) {
              case ThemeOptions.SYSTEM:
                setTheme(ThemeOptions.SYSTEM);
                break;
              case ThemeOptions.LIGHT:
                setTheme(ThemeOptions.LIGHT);
                break;
              case ThemeOptions.DARK:
                setTheme(ThemeOptions.DARK);
                break;

              case 'en':
                i18n.changeLanguage('en');
                break;
              case 'fr':
                i18n.changeLanguage('fr');
                break;
              case 'ar':
                i18n.changeLanguage('ar');
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

        <DropdownSection showDivider>
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
        </DropdownSection>

        <DropdownSection title="Theme" showDivider>
          <DropdownItem
            startContent={<FontAwesomeIcon icon={faComputer}></FontAwesomeIcon>}
            key={ThemeOptions.SYSTEM}
            textValue="system"
          >
            {t('system')}
          </DropdownItem>
          <DropdownItem
            startContent={<FontAwesomeIcon icon={faSun}></FontAwesomeIcon>}
            key={ThemeOptions.LIGHT}
            textValue="light"
          >
            {t('light')}
          </DropdownItem>
          <DropdownItem
            startContent={<FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>}
            key={ThemeOptions.DARK}
            textValue="dark"
          >
            {t('dark')}
          </DropdownItem>
        </DropdownSection>

        <DropdownSection title="Language">
          <DropdownItem
            startContent={<FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>}
            key="en"
            textValue="en"
          >
            English
          </DropdownItem>
          <DropdownItem
            startContent={<FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>}
            key="fr"
            textValue="fr"
          >
            Français
          </DropdownItem>
          <DropdownItem
            startContent={<FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>}
            key="ar"
            textValue="ar"
          >
            العربية
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
