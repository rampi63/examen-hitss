import {css} from "@emotion/css"

export const HeaderStyle = () => {
    
    return css`

        position: fixed;
        top: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        border-bottom: 3px solid #d40101;
        z-index: 100;

        @media(max-width: 575px){
            .image{
                transform: scale(0.7);
            }
        }

    `;

}