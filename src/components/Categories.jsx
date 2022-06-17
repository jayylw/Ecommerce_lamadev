import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { categories } from '../data';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

function Categories() {
    return (
        <Container>
            {categories.map((el) => (
                <CategoryItem el={el} key={el.id} />
            ))}
        </Container>
    );
}

export default Categories;
