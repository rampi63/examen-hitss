import {css} from "@emotion/css"

export const VideoButtonStyle = (isActivated = false) => {
    if(isActivated){
        return css`
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 17px;

            width: 200px;

            .circle-container{
                width: 100%;
                height: 200px;
                display: flex;
                justify-content: center;
                align-items: center;
                .circle-form{
                    width: 185px;
                    height: 185px;
                    border-radius: 100px;
                    background-color: red;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    font-weight: 600;
                    font-size: 14px;
                }
            }

            .title{
                white-space: nowrap;
            }


            @media(max-width: 575px){
                transform: scale(0.7);
            }
        `;
    }else{
        return css`
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 17px;

            .title{
                white-space: nowrap;
            }

            @media(max-width: 575px){
                transform: scale(0.7);
            }
        `;
    }  
}