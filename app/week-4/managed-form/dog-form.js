"use client"
 
import { useState } from "react";
 
export default function DogForm(){
 
    const [dogName, setDogName] = useState("");
    const [imgUrl, setImageUrl] = useState("");
    const [dogBio, setDogBio] = useState("");
 
    const handleSubmit = (event) => {
        console.dir(event);
        // console.log("Hello WOrld");
        event.preventDefault();

        let newDog = {
            name: dogName,
            img: imageUrl,
            bio: dogBio,
        }

        alert(`This dog is named ${newDog.name}`);

        setDogName("");
        setImageUrl("");
        setDogBio("");
    }
 
    const handleDogName = (event) => {
        //console.dir(event);
        setDogName(event.target.value);
    }

    const handleImageUrl = (event) => setImageUrl(event.target.value);
    const handleDogBio = (event) => setDogBio(event.target.value);
 
    return (
        <form onnSubmit={handleSubmit}>
            <div>
                <label>Dog Name:</label>
                <input type="text" onChange={handleDogName} value = {dogName} />
            </div>
            <div>
                <label>Image URL:</label>
                <input type="text" onchange={handleImageUrl} value = {dogName}/>
            </div>
            <div>
                <label>Dog Bio:</label>
                <textarea onchange= {handleDogBio} value ={dogBio}></textarea>
            </div>
            <div>
                <button>Add Dog!</button>
            </div>
        </form>
    )
}
