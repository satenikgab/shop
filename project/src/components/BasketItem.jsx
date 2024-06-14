export const BasketItem = ({title,price,count,id,onAdd,onRemove , onDecrease,subtotal}) => {
    return <tr>
       
        <td>{title}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{subtotal}</td>
        <td>
            <button onClick={() =>onAdd(id)}>+</button>
            <button onClick={() => onDecrease(id)}>-</button>
            <button onClick={() => onRemove(id)}>x</button>
        </td>
    </tr>
}