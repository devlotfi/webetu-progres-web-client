import { useTranslation } from 'react-i18next';
import { components } from '../__generated__/schema';
import {
  Card,
  CardBody,
  Chip,
  cn,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

interface Props {
  periodeBilans?: components['schemas']['BilanPeriodeDTO'][];
}

export default function DiaPeriodeBilans({ periodeBilans }: Props) {
  const { t, i18n } = useTranslation();

  if (!periodeBilans || !Array.isArray(periodeBilans)) {
    return;
  }

  return (
    <div className="flex flex-col space-y-3">
      {periodeBilans.map((periodeBilan) => (
        <Card key={periodeBilan.id} className="border border-divider">
          <CardBody className="space-y-2">
            <div className="flex font-bold">
              {i18n.language === 'ar'
                ? periodeBilan.periodeLibelleAr
                : periodeBilan.periodeLibelleFr}
            </div>

            <div className="flex space-y-2 flex-col md:flex-row justify-between">
              <Chip color={periodeBilan.moyenne >= 10 ? 'primary' : 'danger'}>
                {t('average')}{' '}
                {i18n.language === 'ar'
                  ? periodeBilan.periodeLibelleAr
                  : periodeBilan.periodeLibelleFr}
                : {periodeBilan.moyenne}
              </Chip>

              <div className="flex space-x-2">
                <Chip variant="bordered" color="secondary">
                  {t('obtainedCredits')}: {periodeBilan.creditObtenu}
                </Chip>
                <Chip variant="bordered" color="secondary">
                  {t('aquiredCredits')}: {periodeBilan.creditAcquis}
                </Chip>
              </div>
            </div>

            <Table
              classNames={{
                wrapper: 'p-0',
              }}
              shadow="none"
              aria-label="Notes"
            >
              <TableHeader>
                <TableColumn>{''}</TableColumn>
                <TableColumn>Crd</TableColumn>
                <TableColumn>Coef</TableColumn>
                <TableColumn>Moy</TableColumn>
              </TableHeader>
              <TableBody>
                {periodeBilan.bilanUes.map((bilanUe) => (
                  <>
                    <TableRow
                      className={cn(
                        bilanUe.moyenne >= bilanUe.ueNoteObtention
                          ? 'bg-primary/10'
                          : 'bg-danger/10',
                      )}
                      key={bilanUe.id}
                    >
                      <TableCell className="rounded-tl-full rounded-bl-full">
                        (
                        {i18n.language === 'ar'
                          ? bilanUe.ueNatureLcAr
                          : bilanUe.ueNatureLcFr}
                        ) {bilanUe.ueCode}
                      </TableCell>
                      <TableCell>{bilanUe.credit}</TableCell>
                      <TableCell>{bilanUe.coefficient}</TableCell>
                      <TableCell
                        className={cn(
                          'rounded-tr-full rounded-br-full font-bold',
                          bilanUe.moyenne >= bilanUe.ueNoteObtention
                            ? 'text-primary'
                            : 'text-danger',
                        )}
                      >
                        {bilanUe.moyenne}
                      </TableCell>
                    </TableRow>

                    {bilanUe.bilanMcs.map((bilanMc) => (
                      <TableRow key={`${bilanUe.id}-${bilanMc.id}`}>
                        <TableCell>
                          {i18n.language === 'ar'
                            ? bilanMc.mcLibelleAr
                            : bilanMc.mcLibelleFr}
                        </TableCell>
                        <TableCell>{bilanMc.credit}</TableCell>
                        <TableCell>{bilanMc.coefficient}</TableCell>
                        <TableCell
                          className={cn(
                            'font-bold',
                            bilanMc.moyenneGenerale >= 10
                              ? 'text-primary'
                              : 'text-danger',
                          )}
                        >
                          {bilanMc.moyenneGenerale}
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
