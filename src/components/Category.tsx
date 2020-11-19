import styled from 'styled-components';

import { CategoryProps } from '@interfaces/components/category';

export default function Category(props: CategoryProps) {
    const { categories } = props;

    return (
        <StyledCategory>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </StyledCategory>
    );
}

const StyledCategory = styled.div`
   
`;
