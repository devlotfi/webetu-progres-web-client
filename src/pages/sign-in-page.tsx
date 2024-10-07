import {
  Button,
  Card,
  CardBody,
  cn,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Navbar,
  NavbarContent,
} from "@nextui-org/react";
import ProgresSignIn from "../assets/svg/progres-sign-in.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComputer,
  faEye,
  faEyeSlash,
  faInfoCircle,
  faKey,
  faMoon,
  faPaintBrush,
  faSignIn,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/svg/logo.svg";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/theme-context";
import { ThemeOptions } from "../types/theme-options";
import { $api } from "../open-api-client";
import { useFormik } from "formik";
import * as yup from "yup";
import { AuthContext } from "../context/auth-context";
import { Constants } from "../constants";

export default function SignInPage() {
  const { setAuthData } = useContext(AuthContext);
  const { appliedTheme, themeOption, setTheme } = useContext(ThemeContext);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().required(),
      password: yup.string().required(),
    }),
    onSubmit(values) {
      console.log(values);
      mutate({
        body: values,
      });
    },
  });

  const { mutate, isPending, isError } = $api.useMutation(
    "post",
    "/api/authentication/v1/",
    {
      onSuccess(data) {
        console.log(data);
        localStorage.setItem(
          Constants.AUTH_DATA_STORAGE_KEY,
          JSON.stringify(data)
        );
        setAuthData(data);
      },
    }
  );

  return (
    <div className="flex flex-1 flex-row">
      <div className="flex flex-col flex-1">
        <div className="flex">
          <Navbar className="border-b border-divider xl:border-none">
            <NavbarContent justify="start">
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    startContent={
                      <FontAwesomeIcon icon={faPaintBrush}></FontAwesomeIcon>
                    }
                  >
                    Themes
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  selectionMode="single"
                  selectedKeys={[themeOption]}
                  onAction={(key) => {
                    setTheme(key as ThemeOptions);
                  }}
                >
                  <DropdownItem
                    key={ThemeOptions.SYSTEM}
                    startContent={
                      <FontAwesomeIcon icon={faComputer}></FontAwesomeIcon>
                    }
                  >
                    System
                  </DropdownItem>
                  <DropdownItem
                    key={ThemeOptions.LIGHT}
                    startContent={
                      <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
                    }
                  >
                    Light
                  </DropdownItem>
                  <DropdownItem
                    key={ThemeOptions.DARK}
                    startContent={
                      <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
                    }
                  >
                    Dark
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarContent>
          </Navbar>
        </div>

        <div className="flex flex-1 justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-3 md:space-y-5 w-[90%] md:w-[70%]"
          >
            <div className="flex flex-col items-center space-y-3 md:space-y-7 my-[1rem]">
              <img className="h-[4rem] md:h-[6rem]" src={Logo} alt="progres" />
              <div className="flex text-center text-[13pt] md:text-[19pt] px-[0.5rem]">
                Welcome to the progres platform
              </div>
            </div>
            <div className="flex items-center space-x-3 text-[20pt]">
              <FontAwesomeIcon
                className="text-primary"
                icon={faSignIn}
              ></FontAwesomeIcon>
              <div className="flex">Sign in</div>
            </div>
            <Input
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              label="Identifier"
              placeholder="Enter your identifier"
              startContent={<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>}
            />
            <Input
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type={showPassword ? "text" : "password"}
              label="Password"
              placeholder="Enter your password"
              startContent={<FontAwesomeIcon icon={faKey}></FontAwesomeIcon>}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="toggle password visibility"
                >
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>
                  ) : (
                    <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                  )}
                </button>
              }
            />

            {isError ? (
              <Card
                shadow="none"
                className="border border-danger text-danger bg-background"
              >
                <CardBody>
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
                    <div className="flex">An error occured</div>
                  </div>
                </CardBody>
              </Card>
            ) : null}

            <Button
              type="submit"
              color="primary"
              startContent={<FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>}
              isLoading={isPending}
            >
              Sign in
            </Button>
          </form>
        </div>
      </div>

      <div className="flex-1 p-[2rem] hidden xl:flex">
        <div
          className={cn(
            "flex flex-1 space-y-5 flex-col justify-center items-center rounded-xl",
            appliedTheme === ThemeOptions.LIGHT
              ? "sign-in-bg-light"
              : "sign-in-bg-dark"
          )}
        >
          <img className="h-[13rem]" src={ProgresSignIn} alt="progres" />
        </div>
      </div>
    </div>
  );
}
