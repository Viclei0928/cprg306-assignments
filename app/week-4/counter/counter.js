export default function Counter({currentCount, incrementCountFunction}){

    return (
        <div className="bg-slate-300 p-s">
            <h1 className="text-2x1">Increment Counter</h1>
            <p className="text-1g"> Counter: {currentCount}</p> 
        </div>
    )
}