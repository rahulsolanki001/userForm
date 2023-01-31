import "./ImageContainer.css";
import image from "../form-image.jpg"
const ImageContainer=()=>{

    return (
        <div className="img-container">
            <div className="img-div">
                <img src={image} alt="Study table"/>
            </div>
            <div className="text-container">
                <h1>Internship Task</h1>
                <hr id="title-underline"></hr>
                <p>This is an internship task by stackfusion. This is an mern based web application. You're seeing this through the
                    'R' of MERN that is React. When you submit the form on the right (if there are no errors) the api on the backend 
                    will be triggered through Express ('E' of Mern) and save the data supplied through it in MongoDB ('M' of MERN).
                </p>
            </div>
        </div>
    )
};

export default ImageContainer;