import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CategoryTitleLink = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const CategoryPreviewWindow = styled(CategoryPreviewContainer)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
