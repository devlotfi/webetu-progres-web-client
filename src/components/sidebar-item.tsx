import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ButtonProps, cn } from '@nextui-org/react';

interface Props extends ButtonProps {
  active: boolean;
  icon: IconProp;
}

export default function SidebarItem({
  active,
  children,
  icon,
  ...props
}: Props) {
  return (
    <Button
      variant={active ? 'shadow' : 'light'}
      color={active ? 'primary' : 'default'}
      className="p-0 h-[2.8rem] rounded-full duration-300"
      {...props}
    >
      <div className="flex flex-1 justify-between items-center">
        <div className="flex text-[11pt] ml-[1rem] font-bold">{children}</div>
        <div className="flex h-[2.8rem] w-[2.8rem] justify-center items-center">
          <div
            className={cn(
              'flex bg-background h-[2.8rem] w-[2.8rem] duration-300 justify-center items-center rounded-full border border-divider',
              active && 'text-primary h-[2.3rem] w-[2.3rem] border-none',
            )}
          >
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </Button>
  );
}
