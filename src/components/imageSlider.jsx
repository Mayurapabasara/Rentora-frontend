import { useState } from "react"

export default function ImageSlider(props){

    const images = props.images
    const [activeImage, setActiveImage] = useState(0)

    return(
        <div className="w-150 h-full bg-black/1 object-cover">
            <img 
                className="w-full h-125" 
                src={images?.[activeImage]} 
            />

            <div className="w-full h-25 flex flex-row items-center justify-center gap-2">
                {
                    images.map(
                        (img, index) => {
                            return(
                                <img 
                                    onClick={()=>{setActiveImage(index)}}  
                                    key={index} 
                                    className={"w-22.5 h-22.5 object-cover" + (activeImage == index &&  "border-accent border-3")} src={img} 
                                />
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}