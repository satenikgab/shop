export const ProductItem = ({title,id,price,photo,onMove}) => {
    return <div>
        <h3>Product item</h3>
        <img src={photo} />
        <p>{title}</p>
        <p><strong>{price}USD</strong></p>
        <button onClick={()=>onMove(id)}>Add to basket</button>
        
    </div>
}