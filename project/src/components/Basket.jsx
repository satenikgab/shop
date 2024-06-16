import { BasketItem } from "./BasketItem"

export const Basket = ({items,onAdd , onRemove ,onDecrease,total}) => {
    return <div>
        <h3>Basket</h3>
        
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
        <h3>Total {total}AMD</h3>
    </div>
}