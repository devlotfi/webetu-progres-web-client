import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';
import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { Constants } from '../constants';
import { useTranslation } from 'react-i18next';

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export default function SignOutModal({ isOpen, onOpenChange }: Props) {
  const { t } = useTranslation();
  const { setAuthData } = useContext(AuthContext);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {t('signOutModalTitle')}
            </ModalHeader>
            <ModalBody>
              <p>{t('signOutModalContent')}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                {t('cancel')}
              </Button>
              <Button
                color="danger"
                onPress={() => {
                  localStorage.removeItem(Constants.AUTH_DATA_STORAGE_KEY);
                  setAuthData(null);
                }}
              >
                {t('signOut')}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
