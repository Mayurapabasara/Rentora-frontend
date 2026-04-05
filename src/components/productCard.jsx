import "./productCard.css"

export default function ProductCard(props){

    return (
        <div className="productCard">
            <h1>{props.name}</h1>
            <p>Price: ${props.price.toFixed(2)}</p>
            <img  className="productCard" src={props.image} alt={props.name}/>
            <button>Add to card</button>

        </div>
    )
}