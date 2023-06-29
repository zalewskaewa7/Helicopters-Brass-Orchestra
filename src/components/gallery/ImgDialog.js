import React from 'react';
import "./imgDialog.css";


// interface IProps {
//     path: string;
//     previousImage: string;
//     nextImage: string;
//     handleClickPreviousImage: [previousImage: string, index: number ]
// } 
const ImgDialog = (props) => {

    const handleClickPreviousImage =(event
        ) => {
            props.previousImage();
        }
    
        const handleClickNextImage =(event
            )   => {
                props.nextImage();
            }

    function closeDialog() {
        let biggerPhoto = document.getElementById("imgDialog");
        biggerPhoto.style.display = "none";
    }

    return ( 
        <div id="imgDialog" className="imgDialog" >
            <button  onClick={closeDialog} className="btnImg">&times;</button>
            <button id="btnPreviousImage" className="btnPreviousImage" onClick={handleClickPreviousImage}>&#8249;</button>
            <button id="btnNextImage" className="btnNextImage" onClick={handleClickNextImage}>&#8250;</button>
       <img className="showImg" src={props.path} alt={props.path} />
        </div>
     );
}
 
export default ImgDialog;