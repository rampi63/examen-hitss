import {css} from "@emotion/css"

export const FooterStyle = () => {
    
    return css`
        background-color: black;
        color: white;
        border-top: 3px solid #5f5f5f;
        display: flex;
        align-items: center;
        justify-content: center;


        .icon-container{
            width: 30px;
            height: 30px;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        @media(max-width: 768px){
            flex-direction: column;
            gap: 1rem;
        }

        @media(max-width: 575px){
            .image{
                transform: scale(0.7);
            }

            .label{
                font-size: 14px;
            }
        }
    `;

}