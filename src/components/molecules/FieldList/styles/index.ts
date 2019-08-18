import styled from 'styled-components';

const Dl = styled.dl`
  dt {
    padding-bottom: 5px;

    &:not(:first-child) {
      padding-top: 10px;
    }
  }
`;

export default Dl;
