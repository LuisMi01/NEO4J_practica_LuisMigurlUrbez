import { gql } from '@apollo/client';


export const GET_COMICS_TITLES = gql`
    query GetComicsTitles {
        comic {
            title
            issue_number
            year
        }
    }
`;

export const GET_PERSONAJES = gql`
    query GetPersonajes{
        personaje{
            name
            aliases
            identity
            education
            place_of_origin
        }
    }
`;