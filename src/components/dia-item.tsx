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

interface Props {
  dia: components['schemas']['DiaDTO'];
}

export default function DiaItem({ dia }: Props) {
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
                    Matricule:
                  </div>
                  <div className="flex">{dia.numeroMatricule}</div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="break-words break-all">
                  <div className="flex text-primary font-bold break-words break-all">
                    Niveau:
                  </div>
                  <div className="flex flex-col">
                    <div className="flex break-words break-all">
                      {dia.niveauLibelleLongLt}
                    </div>
                    <div className="flex break-words break-all">
                      {dia.niveauLibelleLongAr}
                    </div>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="break-words break-all">
                  <div className="flex text-primary font-bold break-words break-all">
                    Etablissement:
                  </div>
                  <div className="flex flex-col">
                    <div className="flex break-words break-all">
                      {dia.llEtablissementLatin}
                    </div>
                    <div className="flex break-words break-all">
                      {dia.llEtablissementArabe}
                    </div>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="break-words break-all">
                  <div className="flex text-primary font-bold break-words break-all">
                    Domaine:
                  </div>
                  <div className="flex flex-col">
                    <div className="flex break-words break-all">
                      {dia.ofLlDomaine}
                    </div>
                    <div className="flex break-words break-all">
                      {dia.ofLlDomaineArabe}
                    </div>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="break-words break-all">
                  <div className="flex text-primary font-bold break-words break-all">
                    Filiere:
                  </div>
                  <div className="flex flex-col">
                    <div className="flex break-words break-all">
                      {dia.ofLlFiliere}
                    </div>
                    <div className="flex break-words break-all">
                      {dia.ofLlFiliereArabe}
                    </div>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="break-words break-all">
                  <div className="flex text-primary font-bold break-words break-all">
                    Specialite:
                  </div>
                  {dia.ofLlSpecialite && dia.ofLlSpecialiteArabe ? (
                    <div className="flex flex-col">
                      <div className="flex break-words break-all">
                        {dia.ofLlSpecialite}
                      </div>
                      <div className="flex break-words break-all">
                        {dia.ofLlSpecialiteArabe}
                      </div>
                    </div>
                  ) : (
                    <Chip>Inconnu</Chip>
                  )}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="break-words break-all">
                  <div className="flex text-primary font-bold break-words break-all">
                    Frais inscription:
                  </div>
                  {dia.fraisInscriptionPaye === true ? (
                    <Chip color="success">Payé</Chip>
                  ) : dia.fraisInscriptionPaye === false ? (
                    <Chip color="danger">Non Payé</Chip>
                  ) : (
                    <Chip>Inconnu</Chip>
                  )}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="break-words break-all">
                  <div className="flex text-primary font-bold break-words break-all">
                    Frais transport:
                  </div>
                  {dia.transportPaye === true ? (
                    <Chip color="success">Payé</Chip>
                  ) : dia.transportPaye === false ? (
                    <Chip color="danger">Non Payé</Chip>
                  ) : (
                    <Chip>Inconnu</Chip>
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
            alt="etablissement"
          />
        )}
      </CardBody>
    </Card>
  );
}
