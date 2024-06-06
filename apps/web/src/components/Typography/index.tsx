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
  const finalTabIndex = variant === "link" || link ? 0 : undefined;

  return (
    <TypographyText
      variant={variant}
      as={finalAs}
      size={size}
      color={color}
      link={link}
      tabIndex={finalTabIndex}
      {...rest}
    >
      {children}
    </TypographyText>
  );
}

export { Typography };
