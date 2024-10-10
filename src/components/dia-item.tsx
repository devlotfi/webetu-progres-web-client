import {
  Card,
  CardHeader,
  Divider,
  CardBody,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Spinner,
} from '@nextui-org/react';
import { components } from '../__generated__/schema';
import { $api } from '../open-api-client';
import { useTranslation } from 'react-i18next';

interface Props {
  dia: components['schemas']['DiaDTO'];
}

export default function DiaItem({ dia }: Props) {
  const { t, i18n } = useTranslation();

  const { data, isLoading } = $api.useQuery(
    'get',
    '/api/infos/logoEtablissement/{etablissementId}',
    {
      params: {
        path: {
          etablissementId: `${dia.refEtablissementId}`,
        },
      },
      parseAs: 'text',
    },
  );

  return (
    <Card className="shadow-none md:shadow-xl border border-divider">
      <CardHeader className="text-primary font-bold">
        {dia.anneeAcademiqueCode} {dia.niveauCode}
      </CardHeader>
      <Divider></Divider>
      <CardBody className="p-0 flex-col-reverse lg:flex-row">
        <div className="flex flex-col flex-1">
          <Table
            hideHeader
            isStriped
            shadow="none"
            aria-label="Example static collection table"
          >
            <TableHeader>
              <TableColumn>Champ</TableColumn>
            </TableHeader>
            <TableBody className="p-0">
              <TableRow>
                <TableCell className="break-words break-all">
                  <div className="flex text-primary font-bold break-words break-all">
                    {t('registration')}:
                  </div>
                  <div className="flex">{dia.numeroMatricule}</div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="break-words break-all">
                  <div className="flex text-primary font-bold break-words break-all">
                    {t('level')}:
                  </div>

                  <div className="flex break-words break-all">
                    {i18n.language === 'ar'
                      ? dia.niveauLibelleLongAr
                      : dia.niveauLibelleLongLt}
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="break-words break-all">
                  <div className="flex text-primary font-bold break-words break-all">
                    {t('establishment')}:
                  </div>

                  <div className="flex break-words break-all">
                    {i18n.language === 'ar'
                      ? dia.llEtablissementArabe
                      : dia.llEtablissementLatin}
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="break-words break-all">
                  <div className="flex text-primary font-bold break-words break-all">
                    {t('domain')}:
                  </div>

                  <div className="flex break-words break-all">
                    {i18n.language === 'ar'
                      ? dia.ofLlDomaineArabe
                      : dia.ofLlDomaine}
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="break-words break-all">
                  <div className="flex text-primary font-bold break-words break-all">
                    {t('sector')}:
                  </div>

                  <div className="flex break-words break-all">
                    {i18n.language === 'ar'
                      ? dia.ofLlFiliereArabe
                      : dia.ofLlFiliere}
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="break-words break-all">
                  <div className="flex text-primary font-bold break-words break-all">
                    {t('speciality')}:
                  </div>
                  {dia.ofLlSpecialite && dia.ofLlSpecialiteArabe ? (
                    <div className="flex break-words break-all">
                      {i18n.language === 'ar'
                        ? dia.ofLlSpecialiteArabe
                        : dia.ofLlSpecialite}
                    </div>
                  ) : (
                    <Chip>Inconnu</Chip>
                  )}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="break-words break-all">
                  <div className="flex text-primary font-bold break-words break-all">
                    {t('registrationFees')}:
                  </div>
                  {dia.fraisInscriptionPaye === true ? (
                    <Chip color="success">{t('paid')}</Chip>
                  ) : dia.fraisInscriptionPaye === false ? (
                    <Chip color="danger">{t('notPaid')}</Chip>
                  ) : (
                    <Chip>{t('unknown')}</Chip>
                  )}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="break-words break-all">
                  <div className="flex text-primary font-bold break-words break-all">
                    {t('transportFees')}:
                  </div>
                  {dia.transportPaye === true ? (
                    <Chip color="success">{t('paid')}</Chip>
                  ) : dia.transportPaye === false ? (
                    <Chip color="danger">{t('notPaid')}</Chip>
                  ) : (
                    <Chip>{t('unknown')}</Chip>
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center min-w-[10rem] min-h-[10rem]">
            <Spinner size="lg" color="primary"></Spinner>
          </div>
        ) : (
          <img
            className="flex self-start h-[10rem] p-[0.5rem]"
            src={`data:image/jpeg;base64,${data}`}
            loading="lazy"
            alt="etablissement"
          />
        )}
      </CardBody>
    </Card>
  );
}
