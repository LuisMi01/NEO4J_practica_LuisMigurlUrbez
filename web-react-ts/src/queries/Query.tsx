import { gql } from '@apollo/client';


export const GET_COMICS_TITLES = gql`
    query GetComicsTitles {
        comics {
            title
            issue_number
            year
        }
    }
`;

export const GET_PERSONAJES = gql`
    query GetPersonajes{
        characters{
            name
            aliases
            identity
            education
            place_of_origin
        }
    }
`;