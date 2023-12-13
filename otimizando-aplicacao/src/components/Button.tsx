import { Icon } from "./Icon";

import "../styles/button.scss";
import { ButtonHTMLAttributes, useMemo } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  selected: boolean;
}

export function Button({ iconName, title, selected, ...rest }: ButtonProps) {
  const memorizedIcon = useMemo(() => {
    return <Icon name={iconName} color={selected ? "#FAE800" : "#FBFBFB"} />;
  }, [iconName, selected]);

  return (
    <button
      type="button"
      {...(selected && { className: "selected" })}
      {...rest}
    >
      {memorizedIcon}
      {title}
    </button>
  );
}
