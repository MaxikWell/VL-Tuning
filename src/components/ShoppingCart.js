import React, {useRef, Fragment} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector, useDispatch } from 'react-redux'
import {deleteItem} from '../redux/shoppingCart/shoppingCartAction'

//TODO RELOAD SAFE CART

const ShoppingCart = ({onToggle, isOpen}) => {

    const shoppingCartRef = useRef(null)

    const shoppingCart = useSelector(state => state.shoppingCart)

    const dispatch = useDispatch()

    console.log(shoppingCart)
    

    const toggleCart = (e) => {
        shoppingCartRef.current.classList.toggle("active")
    }

    const deleteFromCart = (e, nodeWithId) => {

        //for old browsers
        if(e.target.nodeName === "svg"){
            nodeWithId = e.target
        }else{
            nodeWithId = e.target.parentNode
        }
        console.log(nodeWithId.idtodelete)

        dispatch(deleteItem(nodeWithId.idtodelete))
        
    }

    const renderItems = () => {
        if(shoppingCart.items.length > 0){
            return shoppingCart.items.map((item, index) => {
                return (
                    <Fragment key = {index}>
                        <li 
                            className = "shoppingItem"
                        >
                            <div className = "pl-3 pr-3 d-flex justify-content-between align-items-center w-100">
                                <span>{item.Name}</span>
                                <span>{item.Price}$</span>
                            </div>
                                <FontAwesomeIcon 
                                    idtodelete = {item.ID}
                                    icon = "times-circle"
                                    onClick = {(e) => {deleteFromCart(e)}}
                                />
                        </li>
                        <hr />
                    </Fragment>
                )
            })
        } else {
            return <span className = "empty">Your cart is empty now</span>
        }
    }

    return(
        <>
            <div 
                className = "shoppingCart" 
                ref = {shoppingCartRef}
            >
                <div 
                    className='s'
                    onClick = {e => {toggleCart(e)}}
                >
                    <FontAwesomeIcon icon = 'shopping-cart' />
                </div>
                <div className = "shoppingCartContent">
                    <h2>Shopping Cart</h2>
                    <hr />
                    <ul className = "shoppingList">
                        {renderItems()}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart