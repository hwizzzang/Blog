import { Link } from 'gatsby';
import styled from 'styled-components';

import { HeaderProps } from '@interfaces/components/header';
import Bio from '@components/Bio';

export default function Header(props: HeaderProps) {
    const { title } = props;

    return (
        <StyledHeader>
            <Bio />
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    background: pink;
`;
