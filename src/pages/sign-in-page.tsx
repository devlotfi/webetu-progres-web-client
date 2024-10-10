import {
  Button,
  Card,
  CardBody,
  cn,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/svg/logo.svg';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/theme-context';
import { ThemeOptions } from '../types/theme-options';
import { $api } from '../open-api-client';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { AuthContext } from '../context/auth-context';
import { Constants } from '../constants';
import { useTranslation } from 'react-i18next';

export default function SignInPage() {
  const { t } = useTranslation();
  const { setAuthData } = useContext(AuthContext);
  const { appliedTheme, themeOption, setTheme } = useContext(ThemeContext);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      username: '',
      password: '',
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
    'post',
    '/api/authentication/v1/',
    {
      onSuccess(data) {
        console.log(data);
        localStorage.setItem(
          Constants.AUTH_DATA_STORAGE_KEY,
          JSON.stringify(data),
        );
        setAuthData(data);
      },
    },
  );

  return (
    <div
      className={cn(
        'flex flex-1 flex-col',
        appliedTheme === ThemeOptions.LIGHT
          ? 'sign-in-bg-light'
          : 'sign-in-bg-dark',
      )}
    >
      <Navbar className="border-b border-divider">
        <NavbarBrand>
          <img className="h-[2.5rem]" src={Logo} alt="logo" />
        </NavbarBrand>
        <NavbarContent justify="end">
          <Dropdown>
            <DropdownTrigger>
              <Button
                startContent={
                  <FontAwesomeIcon icon={faPaintBrush}></FontAwesomeIcon>
                }
              >
                {t('theme')}
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
                {t('system')}
              </DropdownItem>
              <DropdownItem
                key={ThemeOptions.LIGHT}
                startContent={<FontAwesomeIcon icon={faSun}></FontAwesomeIcon>}
              >
                {t('light')}
              </DropdownItem>
              <DropdownItem
                key={ThemeOptions.DARK}
                startContent={<FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>}
              >
                {t('dark')}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
      <div className="flex flex-col flex-1 justify-center items-center py-[3rem] px-[1rem]">
        <Card className="w-full max-w-[55rem] p-[0.5rem] sm:p-[1rem]">
          <CardBody>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
              <div className="flex flex-col items-center justify-center space-y-3 my-[1rem] md:my-0">
                <img
                  className="h-[4rem] md:h-[6rem]"
                  src={Logo}
                  alt="progres"
                />
                <div className="flex text-center text-[14pt] md:text-[16pt] px-[0.5rem]">
                  {t('welcomeMessage')}
                </div>
              </div>

              <Divider
                className="h-auto mx-[1rem] hidden md:flex"
                orientation="vertical"
              ></Divider>

              <div className="flex flex-col w-full space-y-3 md:space-y-5">
                <div className="flex items-center space-x-3 text-[20pt]">
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={faSignIn}
                  ></FontAwesomeIcon>
                  <div className="flex">{t('signIn')}</div>
                </div>
                <Input
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  label={t('username')}
                  placeholder={t('username')}
                  startContent={
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  }
                />
                <Input
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type={showPassword ? 'text' : 'password'}
                  label={t('password')}
                  placeholder={t('password')}
                  startContent={
                    <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                  }
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
                        <div className="flex">{t('anErrorOccured')}</div>
                      </div>
                    </CardBody>
                  </Card>
                ) : null}

                <Button
                  type="submit"
                  color="primary"
                  startContent={
                    <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
                  }
                  isLoading={isPending}
                >
                  {t('signIn')}
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
