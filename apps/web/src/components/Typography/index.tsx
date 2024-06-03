import { TypographyText } from "./styles";
import { TypographyPops } from "./types";

function Typography({
  variant = "title",
  as = "span",
  children,
  size = undefined,
  color = undefined,
  ...rest
}: TypographyPops) {
  return (
    <TypographyText
      variant={variant}
      as={as}
      size={size}
      color={color}
      {...rest}
    >
      {children}
    </TypographyText>
  );
}

export { Typography };
