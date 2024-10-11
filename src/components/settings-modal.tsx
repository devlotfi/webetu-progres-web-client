import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Listbox,
  ListboxItem,
  ListboxSection,
} from '@nextui-org/react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComputer,
  faLanguage,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../context/theme-context';
import { ThemeOptions } from '../types/theme-options';

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export default function SettingsModal({ isOpen, onOpenChange }: Props) {
  const { t, i18n } = useTranslation();
  const { themeOption, setTheme } = useContext(ThemeContext);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          {t('settings')}
        </ModalHeader>
        <ModalBody className="py-[1rem]">
          <Listbox
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={[themeOption, i18n.language]}
          >
            <ListboxSection showDivider title={t('theme')}>
              <ListboxItem
                key={ThemeOptions.SYSTEM}
                onPress={() => setTheme(ThemeOptions.SYSTEM)}
                startContent={
                  <FontAwesomeIcon icon={faComputer}></FontAwesomeIcon>
                }
              >
                {t('system')}
              </ListboxItem>
              <ListboxItem
                key={ThemeOptions.LIGHT}
                onPress={() => setTheme(ThemeOptions.LIGHT)}
                startContent={<FontAwesomeIcon icon={faSun}></FontAwesomeIcon>}
              >
                {t('light')}
              </ListboxItem>
              <ListboxItem
                key={ThemeOptions.DARK}
                onPress={() => setTheme(ThemeOptions.DARK)}
                startContent={<FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>}
              >
                {t('dark')}
              </ListboxItem>
            </ListboxSection>
            <ListboxSection title={t('language')}>
              <ListboxItem
                key="en"
                onPress={() => i18n.changeLanguage('en')}
                startContent={
                  <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>
                }
              >
                English
              </ListboxItem>
              <ListboxItem
                key="fr"
                onPress={() => i18n.changeLanguage('fr')}
                startContent={
                  <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>
                }
              >
                Français
              </ListboxItem>
              <ListboxItem
                key="ar"
                onPress={() => i18n.changeLanguage('ar')}
                startContent={
                  <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>
                }
              >
                العربية
              </ListboxItem>
            </ListboxSection>
          </Listbox>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
