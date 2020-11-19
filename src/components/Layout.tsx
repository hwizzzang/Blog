import styled from 'styled-components';

import Bio from '@components/Bio';
import Category from '@components/Category';
import Header from '@components/Header';
import { LayoutProps } from '@interfaces/components/layout';
import GlobalStyles from '@styles/global';

export default function Layout(props: LayoutProps) {
    const { categories, children, title } = props;

    return (
        <>
            <GlobalStyles />
            <StyledWrapper>
                <Header title={title} />
                <nav>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </nav>
                <StyledMainWrapper>{children}</StyledMainWrapper>
                <StyledFooter>©hwizzzang</StyledFooter>
            </StyledWrapper>
        </>
    );
}

export const StyledWrapper = styled.div`
    padding: 0 3.2rem;
`;

export const StyledMainWrapper = styled.main`
    background: lightcoral;
`;
export const StyledFooter = styled.footer`
    background: lightgoldenrodyellow;
`;
