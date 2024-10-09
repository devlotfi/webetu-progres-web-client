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

interface Props {
  dia: components['schemas']['DiaDTO'];
}

export default function DiaGroups({ dia }: Props) {
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
    <div className="flex flex-col p-[1rem] space-y-3">
      {getGroups().map((group) => (
        <Card>
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
