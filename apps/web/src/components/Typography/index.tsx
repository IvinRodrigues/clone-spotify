import { TypographyText } from "./styles";
import { TypographyPops } from "./types";

function Typography({
  variant = "title",
  as = "span",
  children,
  size = undefined,
  color = undefined,
  link = false,
  ...rest
}: TypographyPops) {
  const finalAs = link ? "a" : as;

  return (
    <TypographyText
      variant={variant}
      as={finalAs}
      size={size}
      color={color}
      link={link}
      {...rest}
    >
      {children}
    </TypographyText>
  );
}

export { Typography };
