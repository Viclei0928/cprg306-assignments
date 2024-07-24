import DogCard from "./dog-card";


export default function DogList( {listOfDogs} ){

    return(
        <div>
            {listOfDogs.map ( (dog) => (
               // <p>{dog.name}</p>
               <DogCard dogObj = {dog}/>
            ))}
        </div>
    )
}