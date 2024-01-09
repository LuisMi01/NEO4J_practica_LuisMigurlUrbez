import { gql } from '@apollo/client';


export const GET_COMICS_TITLES = gql`
    query GetComicsTitles {
        comic {
            title
            issue_number
            year
            description
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

export const GET_ESCENAS = gql `
    query GetEscenas{
        escena{
            title
            end
            start
        }
    }

`;

export const GET_PERSONAJE_DETALLE = gql `
    query GetPersonajeDetalle($name: String!){
        personajeDetalle(name: $name){
            name
            aliases
            identity
            education
            place_of_origin
        }
    }
`;

export const GET_ESCENA_DETALLE = gql`
    query GetEscenaDetalle($title: String!){
        escenaDetalle(title: $title){
            title
            end
            start
        }
    }

`;

export const GET_COMIC_DETALLE = gql`
    query GetComicDetalle($title: String!){
        comicDetalle(title: $title){
            title
            issue_number
            year
            description
        }
    }
`;