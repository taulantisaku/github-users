import { Button as StyledButton } from "./StyledComponents";

export default function Button(props) {
  const { children, ...rest } = props;
  return <StyledButton {...rest}>{children}</StyledButton>;
}
