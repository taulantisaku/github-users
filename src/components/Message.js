import styled from "styled-components";

const StyledMessage = styled.div`
  border: 1px solid red;
  padding: 10px;
  color: red;
`;

export default function Message(props) {
  return (
    <div className="App">
      <StyledMessage>{props.text}</StyledMessage>
      <StyledMessage>simple text</StyledMessage>
    </div>
  );
}
