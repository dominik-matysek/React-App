function ShoppingListItem({item, quantity, completed}) {
    const styles = {color: completed ? "grey" : "red", textDecoration: completed ? "line-through" : "none"};
    return (
        <li style={styles}>{item} - {quantity}</li>
    );
}

// same as doing export default function 
export default ShoppingListItem;