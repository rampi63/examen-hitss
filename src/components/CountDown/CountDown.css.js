import {css} from "@emotion/css"

export const CountDownStyle = () => {
    
    return css`

        display: flex;
        gap: 1rem;

        .interval{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 2px solid white;
            width: 80px;
            height: 80px;
            font-weight: 800;
            border-radius: 50px;

            .time{
                font-size: 30px;
            }

            .label{
                font-size: 15px;
            }
        }

        @media(max-width: 575px){
            transform: scale(0.7);
        }
    `;

}