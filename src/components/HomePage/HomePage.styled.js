import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;

export const Heading = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const SubHeading = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 22px;
  color: var(--black-text-cl);
  background-color: var(--green-bg-cl);
  text-decoration: none;
  transition: color var(--transition), background-color var(--transition);

  &:hover {
    background-color: var(--blue-cl);
    color: var(--light-text-cl);
  }
`;

export const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 50%;
  margin-left: 30px;
`;
