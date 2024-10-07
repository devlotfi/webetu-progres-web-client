import { faScroll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { $api } from "../open-api-client";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import {
  Card,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

export default function BacMarksPage() {
  const { authData } = useContext(AuthContext);

  if (!authData) {
    throw new Error("No user");
  }

  const { data, isPending } = $api.useQuery(
    "get",
    "/api/infos/bac/{userUUID}/notes",
    {
      params: {
        path: {
          userUUID: authData.uuid,
        },
      },
    }
  );

  if (isPending) {
    return (
      <div className="flex flex-col flex-1 justify-center items-center">
        <Spinner size="lg" color="primary"></Spinner>
      </div>
    );
  }

  if (!data) {
    return;
  }

  return (
    <div className="flex flex-1 flex-col items-center p-[0.5rem]">
      <div className="flex flex-col max-w-[50rem] w-full space-y-5">
        <div className="flex ml-[1rem] mt-[1rem] items-center space-x-3 text-primary font-bold text-[18pt]">
          <div className="flex h-[2.8rem] w-[2.8rem] justify-center items-center rounded-full bg-primary text-primary-foreground">
            <FontAwesomeIcon icon={faScroll}></FontAwesomeIcon>
          </div>
          <div className="flex">Bac marks</div>
        </div>

        <Card className="shadow-none lg:shadow-xl lg:border lg:border-divider">
          <Table isStriped aria-label="marks" shadow="none">
            <TableHeader>
              <TableColumn>Matiere</TableColumn>
              <TableColumn>Note</TableColumn>
            </TableHeader>
            <TableBody>
              {data.map((bacMark) => (
                <TableRow key={bacMark.refCodeMatiereLibelleFr}>
                  <TableCell className="break-words break-all">
                    {bacMark.refCodeMatiereLibelleFr}
                  </TableCell>
                  <TableCell className="text-primary font-bold">
                    {bacMark.note}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
