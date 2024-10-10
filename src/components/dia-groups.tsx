import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import { components } from '../__generated__/schema';
import { $api } from '../open-api-client';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

interface Props {
  dia: components['schemas']['DiaDTO'];
}

export default function DiaGroupes({ dia }: Props) {
  const { t } = useTranslation();
  const { data, isLoading } = $api.useQuery(
    'get',
    '/api/infos/dia/{diaId}/groups',
    {
      params: {
        path: {
          diaId: `${dia.id}`,
        },
      },
    },
  );

  if (isLoading) {
    return (
      <div className="flex flex-1 justify-center items-center">
        <Spinner size="lg" color="primary"></Spinner>
      </div>
    );
  }

  if (!data) {
    return;
  }

  const getGroups = (): components['schemas']['GroupeDTO'][] => {
    const groups: components['schemas']['GroupeDTO'][] = [];

    for (let i = 1; i < data.length; i += 2) {
      if (data[i]) {
        groups.push(data[i]);
      }
    }

    return groups;
  };

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center space-x-3 text-primary font-bold text-[18pt]">
        <div className="flex h-[2.8rem] w-[2.8rem] justify-center items-center rounded-full bg-primary text-primary-foreground">
          <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>
        </div>
        <div className="flex">{t('groups')}</div>
      </div>

      {getGroups().map((group) => (
        <Card className="border border-divider">
          <CardHeader className="font-bold">
            {group.periodeLibelleLongLt}
          </CardHeader>
          <Divider></Divider>
          <CardBody>
            <Table
              hideHeader
              removeWrapper
              shadow="none"
              aria-label="Example static collection table"
            >
              <TableHeader>
                <TableColumn>Champ</TableColumn>
                <TableColumn>Valeur</TableColumn>
              </TableHeader>
              <TableBody className="p-0">
                <TableRow>
                  <TableCell className="break-words break-all flex text-primary font-bold">
                    Section:
                  </TableCell>
                  <TableCell className="break-words break-all">
                    {group.nomSection}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="break-words break-all flex text-primary font-bold">
                    Groupe:
                  </TableCell>
                  <TableCell className="break-words break-all">
                    {group.nomGroupePedagogique}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
