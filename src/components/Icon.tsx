import React from "react";
import { Icon } from "@iconify/react";

interface IconsProps {
  icon: string; // Cambia "any" al tipo correcto según el tipo de iconos que estés utilizando
  className?: string;
  width?: number;
  rotate?: number;
  hFlip?: boolean;
  vFlip?: boolean;
}

const Icons: React.FC<IconsProps> = ({
  icon,
  className,
  width,
  rotate,
  hFlip,
  vFlip,
}: IconsProps) => {
  return (
    <>
      <Icon
        width={width}
        rotate={rotate}
        hFlip={hFlip}
        icon={icon}
        className={className}
        vFlip={vFlip}
      />
    </>
  );
};

export default Icons;
