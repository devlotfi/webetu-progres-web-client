import { useTranslation } from 'react-i18next';
import { components } from '../__generated__/schema';
import { Card, CardBody, Chip, cn } from '@nextui-org/react';

interface Props {
  bilansAnnuels?: components['schemas']['BilanAnnuelDTO'][];
}

export default function DiaBilanAnnuel({ bilansAnnuels }: Props) {
  const { t, i18n } = useTranslation();

  if (!bilansAnnuels || !Array.isArray(bilansAnnuels)) {
    return;
  }

  return (
    <div className="flex flex-col space-y-3">
      {bilansAnnuels.map((bilanAnnuel) => (
        <Card className="border border-divider">
          <CardBody className="space-y-2">
            <Card shadow="none" className="border border-divider">
              <CardBody className="flex-col md:flex-row justify-between space-y-2 md:space-y-0 font-bold text-secondary">
                <div
                  className={cn(
                    'flex',
                    bilanAnnuel.moyenne >= 10
                      ? 'text-primary'
                      : 'text-danger-50',
                  )}
                >
                  {t('decision')}:{' '}
                  {i18n.language === 'ar'
                    ? bilanAnnuel.typeDecisionLibelleAr
                    : bilanAnnuel.typeDecisionLibelleFr}
                </div>

                <Chip color={bilanAnnuel.moyenne >= 10 ? 'primary' : 'danger'}>
                  {t('annualAverage')}: {bilanAnnuel.moyenne}
                </Chip>
              </CardBody>
            </Card>

            <div className="flex space-x-2">
              <Chip variant="bordered" color="secondary">
                {t('obtainedCredits')}: {bilanAnnuel.creditObtenu}
              </Chip>
              <Chip variant="bordered" color="secondary">
                {t('aquiredCredits')}: {bilanAnnuel.creditAcquis}
              </Chip>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
