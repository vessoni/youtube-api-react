import styled from 'styled-components';


export const IframeContent = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; 
  height: 0;
      iframe{
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
    }
`;
