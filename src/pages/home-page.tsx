import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardBody,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useContext } from "react";
import { DashboardDataContext } from "../context/dashboard-data-context";

export default function HomePage() {
  const { image, bacIndividu } = useContext(DashboardDataContext);

  const formatZero = (value: number) => (value < 10 ? `0${value}` : value);
  const formatDate = (date: Date) => {
    return `${date.getFullYear()}/${formatZero(date.getMonth() + 1)}/${formatZero(date.getDate())}`;
  };

  return (
    <div className="flex flex-1 flex-col items-center space-y-7">
      <div className="flex text-[13pt] px-[0.5rem] md:text-[20pt] font-bold mt-[1rem] text-center">
        Welcome to the Progres platform
      </div>
      <Card className="flex w-full lg:max-w-[45rem] shadow-none lg:shadow-xl lg:border lg:border-divider">
        <CardBody className="space-y-5">
          <div className="flex mt-[0.5rem] items-center ml-[0.5rem] space-x-3 text-primary font-bold text-[18pt]">
            <div className="flex h-[2.8rem] w-[2.8rem] justify-center items-center rounded-full bg-primary text-primary-foreground">
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </div>
            <div className="flex">User info</div>
          </div>
          <Divider></Divider>
          <div className="flex flex-col-reverse md:flex-row space-y-3 md:space-y-0 space-y-reverse space-x-reverse md:space-x-5 justify-between">
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
                  <TableCell className="text-primary font-bold break-words break-all">
                    Nom:
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <div className="flex break-words break-all">
                        {bacIndividu?.nomLatin}
                      </div>
                      <div className="flex break-words break-all">
                        {bacIndividu?.nomArabe}
                      </div>
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="text-primary font-bold break-words break-all">
                    Prenom:
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <div className="flex break-words break-all">
                        {bacIndividu?.prenomLatin}
                      </div>
                      <div className="flex break-words break-all">
                        {bacIndividu?.prenomArabe}
                      </div>
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="text-primary font-bold break-words break-all">
                    Date de naissance:
                  </TableCell>
                  <TableCell className="break-words break-all">
                    {bacIndividu?.dateNaissance
                      ? formatDate(new Date(bacIndividu.dateNaissance))
                      : null}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="text-primary font-bold break-words break-all">
                    Lieu de naissance:
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <div className="flex break-words break-all">
                        {bacIndividu?.lieuNaissance}
                      </div>
                      <div className="flex break-words break-all">
                        {bacIndividu?.lieuNaissanceArabe}
                      </div>
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="text-primary font-bold break-words break-all">
                    Identifiant:
                  </TableCell>
                  <TableCell className="break-words break-all">
                    {bacIndividu?.identifiant}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <img
              className="flex self-start rounded-lg border border-divider"
              src={`data:image/jpeg;base64,${image}`}
              alt="user"
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
