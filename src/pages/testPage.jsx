import { useState } from "react";
import MediaUpload from "../utils/mediaUpload";



export default function TestPage() {

    const [file, setfile] = useState(null);

    async function uploadImage() {
        const line = await MediaUpload(file);
        console.log(line);
    }

    return (
        <div className="w-full h-screen text-black text-2xl flex flex-col items-center justify-center gap-4 border-2 border-black">
            <input type="file" onChange={
                (e) => {
                    setfile(e.target.files[0]);
                }
            }/>
            <button onClick={uploadImage} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Upload Image</button>
        </div>
    );
}