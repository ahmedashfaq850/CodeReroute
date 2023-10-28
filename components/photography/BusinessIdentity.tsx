import React from 'react';
import styled from 'styled-components';
import { ContentSlideUp } from '../styles/ContentSlideUp';
import {
    ContentStyles,
    Heading,
    darkWhite,
    photographyBreakPoint,
} from '../styles/theme';
import { useTranslate } from '../../utils/hooks/useTranslate';
import FormButton from '../sliderPanel/FormButton';
import EmploymentFormFields from '../employment/EmploymentFormFields';

const StyledDiv = styled.div`
    background-color: ${darkWhite};
    padding-bottom: 100px;
    .content-wrapper {
        padding-bottom: 0;
    }
    .content {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .investment-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .quote {
        margin-top: 20px;
    }
    @media only screen and (max-width: ${photographyBreakPoint}px) {
        .investment-section,
        .content {
            display: block;
        }
        .content {
            padding-bottom: 0;
        }
        .investment-content {
            padding-top: 0;
            padding-bottom: 0;
        }
    }
`;

const buttonText = 'APPLY HERE';
const BusinessIdentity: React.FC = () => {
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const formSectionRef = React.useRef<HTMLDivElement>(null);
    const t = useTranslate();
    const { heading, paragraphOne, paragraphTwo } = {
        heading: t('employment.heading'),
        paragraphOne: t('employment.paragraphOne'),
        paragraphTwo: t('employment.paragraphTwo'),
    };

    return (
        <>
            <StyledDiv>
                <ContentStyles
                    padding={100}
                    contentMargin
                    className="content-wrapper"
                >
                    <ContentStyles padding={undefined} className="content">
                        <div>
                            <ContentSlideUp>
                                <Heading>{heading}</Heading>
                            </ContentSlideUp>
                            <ContentSlideUp>
                                <p>{paragraphOne}</p>
                            </ContentSlideUp>
                            <ContentSlideUp>
                                <p>{paragraphTwo}</p>
                            </ContentSlideUp>
                        </div>
                    </ContentStyles>
                    <div className="button-wrapper">
                        <ContentSlideUp>
                            <FormButton
                                name="Employment Apply Here Button"
                                buttonText={buttonText}
                                sectionRef={sectionRef}
                                formSectionRef={formSectionRef}
                            />
                        </ContentSlideUp>
                    </div>
                </ContentStyles>
            </StyledDiv>
            <EmploymentFormFields
                sectionRef={sectionRef}
                formSectionRef={formSectionRef}
            />
        </>
    );
};

export default BusinessIdentity;
