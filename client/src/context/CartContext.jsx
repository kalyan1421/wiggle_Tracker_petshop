import React, { createContext, useContext, useReducer } from 'react';
import { useToast } from '@/hooks/use-toast';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      return action.payload;
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.productId);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.productId
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
          total: state.total + action.payload.quantity,
        };
      } else {
        return {
          ...state,
          items: [...state.items, {
            id: action.payload.productId,
            quantity: action.payload.quantity,
            product: action.payload.product,
          }],
          total: state.total + action.payload.quantity,
        };
      }
    }
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
        total: state.items.reduce((sum, item) =>
          item.id === action.payload.productId
            ? sum + action.payload.quantity
            : sum + item.quantity
        , 0),
      };
    case 'REMOVE_ITEM': {
      const itemToRemove = state.items.find(item => item.id === action.payload.productId);
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.productId),
        total: state.total - (itemToRemove?.quantity || 0),
      };
    }
    default:
      return state;
  }
};

const initialState = {
  items: [],
  total: 0,
};

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  const { toast } = useToast();

  const addToCart = async (productId, quantity = 1) => {
    try {
      const response = await fetch('/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, quantity }),
      });

      if (!response.ok) {
        throw new Error('Failed to add item to cart');
      }

      const result = await response.json();
      
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          productId,
          quantity,
          product: result.product,
        },
      });

      toast({
        title: "Added to cart",
        description: `${result.product?.name} has been added to your cart`,
      });

    } catch (error) {
      console.error('Error adding to cart:', error);
      toast({
        title: "Error",
        description: "Failed to add item to cart",
        variant: "destructive",
      });
      throw error;
    }
  };

  const updateCartItem = async (productId, quantity) => {
    try {
      const response = await fetch('/api/cart/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, quantity }),
      });

      if (!response.ok) {
        throw new Error('Failed to update cart item');
      }

      dispatch({
        type: 'UPDATE_ITEM',
        payload: { productId, quantity },
      });

    } catch (error) {
      console.error('Error updating cart item:', error);
      toast({
        title: "Error",
        description: "Failed to update cart item",
        variant: "destructive",
      });
      throw error;
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await fetch('/api/cart/remove', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) {
        throw new Error('Failed to remove item from cart');
      }

      dispatch({
        type: 'REMOVE_ITEM',
        payload: { productId },
      });

      toast({
        title: "Removed from cart",
        description: "Item has been removed from your cart",
      });

    } catch (error) {
      console.error('Error removing from cart:', error);
      toast({
        title: "Error",
        description: "Failed to remove item from cart",
        variant: "destructive",
      });
      throw error;
    }
  };

  const clearCart = async () => {
    try {
      const response = await fetch('/api/cart/clear', {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to clear cart');
      }

      dispatch({ type: 'SET_CART', payload: initialState });

      toast({
        title: "Cart cleared",
        description: "All items have been removed from your cart",
      });

    } catch (error) {
      console.error('Error clearing cart:', error);
      toast({
        title: "Error",
        description: "Failed to clear cart",
        variant: "destructive",
      });
      throw error;
    }
  };

  const value = {
    ...cart,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 