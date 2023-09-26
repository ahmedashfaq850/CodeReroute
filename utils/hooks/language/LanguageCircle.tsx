import React, { useContext } from 'react';
import styled from 'styled-components';
import {
    buttonBoxShadow,
    darkBrown,
    darkGray,
    darkWhite,
    sanSerifFont,
    white,
} from '../../../components/styles/theme';
import { LanguageContext } from './LanguageProvider';

const StyledDiv = styled.div`
    font-family: ${sanSerifFont};
    ${buttonBoxShadow};
    border: 1px solid ${darkGray};
    border-radius: 100%;
    font-size: 14px;
    color: ${darkBrown};
    background-color: ${({ isOpen }: { isOpen: boolean }) =>
        isOpen ? white : darkWhite};
    transform: rotate(90deg);
    cursor: pointer;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
`;

const LanguageCircle: React.FC<{
    isOpen: boolean;
    className?: string;
    onClick: () => unknown;
}> = ({ isOpen, onClick, className }) => {
    const { language } = useContext(LanguageContext);
    return (
        <StyledDiv
            className={className}
            onClick={onClick}
            isOpen={isOpen}
            unselectable="on"
        >
            {isOpen ? 'X' : language.toUpperCase()}
        </StyledDiv>
    );
};

export default LanguageCircle;
