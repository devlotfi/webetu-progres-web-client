import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import { useContext } from 'react';
import { DashboardDataContext } from '../context/dashboard-data-context';
import Progres from '../assets/svg/progres.svg';
import { useTranslation } from 'react-i18next';
import { formatDate } from '../utils';

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const { image, bacIndividu } = useContext(DashboardDataContext);

  return (
    <div className="flex flex-1 flex-col items-center space-y-7">
      <div className="flex flex-col items-center lg:max-w-[45rem] w-full pt-[3rem]">
        <img className="h-[5rem] px-[1rem]" src={Progres} alt="progres" />
        <Divider className="my-[1rem]"></Divider>
        <Card className="flex shadow-none w-full lg:shadow-xl lg:border lg:border-divider">
          <CardHeader>
            <div className="flex items-center space-x-3 text-primary font-bold text-[18pt]">
              <div className="flex h-[2.8rem] w-[2.8rem] justify-center items-center rounded-full bg-primary text-primary-foreground">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
              </div>
              <div className="flex">{t('user')}</div>
            </div>
          </CardHeader>
          <Divider></Divider>
          <CardBody className="space-y-5 p-0 pr-[1rem] pt-[1rem]">
            <div className="flex flex-col-reverse md:flex-row space-y-3 md:space-y-0 space-y-reverse space-x-reverse md:space-x-5 justify-between">
              <Table
                hideHeader
                isStriped
                shadow="none"
                aria-label="Example static collection table"
              >
                <TableHeader>
                  <TableColumn>Champ</TableColumn>
                  <TableColumn>Valeur</TableColumn>
                </TableHeader>
                <TableBody className="p-0">
                  <TableRow>
                    <TableCell className="text-primary font-bold break-words break-all">
                      {t('lastName')}:
                    </TableCell>
                    <TableCell>
                      <div className="flex break-words break-all">
                        {i18n.language === 'ar'
                          ? bacIndividu?.nomArabe
                          : bacIndividu?.nomLatin}
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="text-primary font-bold break-words break-all">
                      {t('firstName')}:
                    </TableCell>
                    <TableCell>
                      <div className="flex break-words break-all">
                        {i18n.language === 'ar'
                          ? bacIndividu?.prenomArabe
                          : bacIndividu?.prenomLatin}
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="text-primary font-bold break-words break-all">
                      {t('birthDate')}:
                    </TableCell>
                    <TableCell className="break-words break-all">
                      {bacIndividu?.dateNaissance
                        ? formatDate(new Date(bacIndividu.dateNaissance))
                        : null}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="text-primary font-bold break-words break-all">
                      {t('birthPlace')}:
                    </TableCell>
                    <TableCell>
                      <div className="flex break-words break-all">
                        {i18n.language === 'ar'
                          ? bacIndividu?.lieuNaissanceArabe
                          : bacIndividu?.lieuNaissance}
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="text-primary font-bold break-words break-all">
                      {t('identifier')}:
                    </TableCell>
                    <TableCell className="break-words break-all">
                      {bacIndividu?.identifiant}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <img
                className="flex self-start rounded-lg border border-divider ml-[1rem] h-[10rem]"
                src={`data:image/jpeg;base64,${image}`}
                alt="user"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
