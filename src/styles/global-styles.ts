import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: ${({ theme }) => theme.font.sizes.medium};
    }

    a {
        color: ${({ theme }) => theme.colors.secondary};
        text-decoration: none;
        transition: opacity 0.3s ease;

        &:hover {
            opacity: 0.6;
        }
    }
`;
