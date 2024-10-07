import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { Constants } from "../constants";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export default function SignOutModal({ isOpen, onOpenChange }: Props) {
  const { setAuthData } = useContext(AuthContext);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Sign out confirmation
            </ModalHeader>
            <ModalBody>
              <p>Are you sure you want to sign out ?</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cancel
              </Button>
              <Button
                color="danger"
                onPress={() => {
                  localStorage.removeItem(Constants.AUTH_DATA_STORAGE_KEY);
                  setAuthData(null);
                }}
              >
                Sign out
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
