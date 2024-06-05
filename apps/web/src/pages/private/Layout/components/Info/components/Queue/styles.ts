import styled from "styled-components";

const QueuePreview = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  img {
    width: 56px;
    height: 56px;
    border-radius: 4px;
    object-fit: cover;
  }
`;

const QueueInfo = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
`;

export { QueuePreview, QueueInfo };
