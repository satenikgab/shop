import { ProductItem } from "./ProductItem"

export const ProductList = ({items,onMove}) => {
    return <div>
        <h3>Product list</h3>
        <div className="list">
            {
                items.map(elm => <ProductItem key ={elm.id} {...elm} onMove={onMove}/>)
            }
        </div>
    </div>
}