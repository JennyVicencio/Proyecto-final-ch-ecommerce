import { useState, createContext, useContext } from 'react';

export const CartContext = createContext({
   cart: []
});

export const CartProvider = ({children}) => {
   const [cart, setCart] = useState([]);

   const isInCart = (itemId) => cart.some(item => item.id === itemId);

   const addItem = (item, quantity) => {
      if(!isInCart(item.id)) {
         setCart(prev => [...prev, {...item, quantity}])
      }
      else {
         console.log("Producto ya agregado.");
      }
   }

   const getTotalPrice = () => {
      if(cart.length > 0) {
         return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
      }
      else { 
         return 0;
      }
   };

   const removeItem = (itemId) => {
      const cartUpdated = cart.filter(item => item.id !== itemId);
      setCart(cartUpdated);
   }

   const clearCart = () => setCart([]);

   return (
      <CartContext.Provider value={{cart, isInCart, addItem, removeItem, getTotalPrice, clearCart}}>
         {children}
      </CartContext.Provider>
   )
}

export const useCartContext = () => useContext(CartContext)
