import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 20px;
  }
`;

const TextStyle = css`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`;

const Text1 = styled.div<{ $disable: boolean }>`
  font-size: 20px;
  font-weight: 700;

  ${(props) => {
    if (props.$disable) {
      return css`
        text-decoration: line-through;
      `;
    }
    return css``;
  }}
`;

interface InfoPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Global styles={globalStyle} />
      {/* <div css={TextStyle}>{title}</div> */}
      <Text1 $disable>{description}</Text1>
      <Text1 $disable={false}>{author}</Text1>
    </div>
  );
};

export default InfoPage;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
