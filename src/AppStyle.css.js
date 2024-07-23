import {css} from "@emotion/css"
import { backgroundIMG } from "./assets";

export const AppStyle = () => {
    
    return css`

        color: white;
        background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${backgroundIMG}");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        background-color: #020204;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;

        h1{
            font-weight: normal;
        }

        .video{

            .video-container iframe {
                width: 700px;
                height: 400px;
            }

            @media(max-width: 880px){
                .video-container iframe {
                    width: 500px;
                    height: 300px;
                }
            }

            @media(max-width: 575px){
                .video-container iframe {
                    width: 300px;
                    height: 200px;
                }
            }
        }

        .select-video{
            width: 100vw;
            background-color: #333;

            @media(max-width: 880px){
                .video-reel{
                    width: 100%;
                    overflow-x: auto;
                }
            }
        }

        @media(max-width: 880px){
            background-position: unset;
        }

        @media(max-width: 575px){
            h1{
                font-size: 20px;
            }
        }
        
    `;

}