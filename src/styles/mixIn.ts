import { css } from 'styled-components';

import mediaQuery from '@styles/mediaQuery';

export const Container = css`
    width: 100%;
    min-width: 32rem;

    ${mediaQuery('lg')`
        max-width: 128rem;
        margin: 0 auto;
    `}
`;

export const Wrapper = css`
    padding: 0 1.6rem;

    ${mediaQuery('md')`
        padding: 0 2.4rem;
    `}

    ${mediaQuery('lg')`
        padding: 0 3.2rem;
    `}
`;
