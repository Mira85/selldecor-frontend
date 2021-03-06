import { TiDeleteOutline } from "react-icons/ti";
import "./Cart.scss";
import Card from "react-bootstrap/Card";

function sum(input) {
    let sum = 0;
    input.map((obj) => sum += obj.price);
    return sum;
};

function Cart(props) {
    return (
        <div className="cartArea">
            <Card className="cartCard">
                <Card.Header className="cartHdr">Cart</Card.Header>
                <Card.Body>
                    <Card.Text className="cartText">
                        {props.cartData.map((item) => (
                            <div key={item._id} className="cartItem">
                                <div className="eachCartItem">
                                    <img src={item.img} alt={item.name} style={{
                                        height: "6.125rem",
                                        width: "6.125rem",
                                    }} />
                                    <div className="cartItemName">{item.name}</div>
                                    <div>${item.price}</div>
                                </div>
                                <TiDeleteOutline onClick={() => props.handleDeleteCartItem(item)} className="cartDeleteBtn" />
                            </div>
                        ))}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="cartTotal">
                    <div>Items in cart: {props.cartData.length}
                    </div>
                    <div>Total: ${sum(props.cartData)}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    )
}
export default Cart;