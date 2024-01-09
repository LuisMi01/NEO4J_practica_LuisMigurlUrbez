import { gql } from '@apollo/client';


export const GET_COMICS_TITLES = gql`
    query GetComicsTitles {
        comics {
            title
        }
    }
`;