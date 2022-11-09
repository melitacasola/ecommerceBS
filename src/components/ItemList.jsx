import Item from "./Item";

const ItemList = ({productos}) => {
    console.log(productos);
    return ( 
        <>
            {productos.map((item) => (
                <Item producto={item} key={item.id} />
            ))
            }
        </>
     );
}
export default ItemList;