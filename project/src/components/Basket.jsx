import { BasketItem } from "./BasketItem"

export const Basket = ({items,onAdd , onRemove ,onDecrease,onSale,isSaleVisible}) => {
    return <div>
        <h3>Basket</h3>
        {isSaleVisible && <button onClick={() => { onSale()}} className="sale">Sale</button>}
        <table>
            <thead>
                <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>count</th>
                    <th>subtotal</th>
                    <th>actions</th>

                </tr>
            </thead>
            <tbody>
                {
                    items.map(elm =><BasketItem key ={elm.id} {...elm} onAdd={onAdd}  onRemove = {onRemove} onDecrease = {onDecrease}/>)
                }

            </tbody>
        </table>
    </div>
}