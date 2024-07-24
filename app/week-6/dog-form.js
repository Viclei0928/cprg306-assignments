import { useState } from "react";


    export default function DogForm( {closeFormFunc}) {

        let controlStyles = "block mb-4";
        let inputStyles = "block mt-1 p-1 w-full rounded-sm text-black bg-slate-400 focus:bg-slate-100";

        const [dogId, setDogId] = useState (0);
        const [dogName, setDogName] = useState ("");
        const [dogAge, setDogAge] = useState (0);
        
        //const handleDogIdChange = (event) => setDogsId(event.target.value);

        const handleSubmit = (event) => {
            //prevent the default functionality of the form
            event.preventDefault();
            //create new Dog object to be added to the dogList
            let newDog = {
                id: dogId,
                name: dogName,
                age: dogAge
            }

            onCreateDog(newDog);

            setDogId(0);
            setDogName("");
            setDogAge(0);

            closeFormFunc();

        }

        return(
            <div onClick={closeFormFunc} className="absolute w-full h-full flex items-center justify-center bg-slate-800/70"> 
                <section onClick={ (event) => event.stopPropagation () } className="max-w-md p-8 rounded-lg shadow-md bg-slate-600 text-white">
                    <h2>Add new dog for Adoption</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={controlStyles}>
                            <label>ID: </label>
                            <input onChange={ (event) => setDogId(event.target.value) } type="number"  className={inputStyles}/>
                        </div>
                        <div className={controlStyles}>
                            <label>Name: </label>
                            <input onChange={ (event) => setDogName(event.target.value) } type="text" className={inputStyles}/>
                        </div>                                                                  //I LOVE YOUUU!!! viclei :3
                        <div className={controlStyles}>
                            <label>Age: </label>
                            <input onChange={ (event) => setDogAge(event.target.value) } type="number" className={inputStyles}/>
                        </div>
                        <div className={controlStyles}>
                            <button className="w-full py-2 px-4 rounded-sm bg-orange-300 hover:bg-orange-100 text-amber-800">Add Dog</button>
                        </div>
                    </form>
                </section>
            </div>
        );
    }