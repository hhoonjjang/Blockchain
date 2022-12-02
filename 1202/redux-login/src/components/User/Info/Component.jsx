import styled from "styled-components";
const InfoComponent = ({ userName, onClick }) => {
  return (
    <InfoBox>
      {userName} 님 어서오고~
      <button
        onClick={() => {
          onClick();
        }}
      >
        로그아웃
      </button>
    </InfoBox>
  );
};

export default InfoComponent;

const InfoBox = styled.div`
  color: green;
  button {
    padding: 5px 10px;
    border-radius: 5px;
    border: 2px solid black;
    background-color: black;
    color: yellow;
  }
`;
