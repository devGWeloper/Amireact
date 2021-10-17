import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'gatsby';

export interface CategoryListProps {
  selectedCategory: string;
  categoryList: {
    // 프로퍼티 이름은 문자열, 프로퍼티 값은 숫자임을 나타내는 타입 표기 방법
    [key: string]: number;
  };
}

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`;

const CategoryItem = styled(Link)<{ $active: boolean }>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  cursor: pointer;

  ${(props) => {
    if (props.$active) {
      return css`
        font-weight: 800;
      `;
    }
    return css`
      font-weight: 400;
    `;
  }}

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          $active={name === selectedCategory}
          key={name}
        >
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  );
};

export default CategoryList;
