
import React from 'react'
import cart from '../../assets/carrito-compras-desarrollo-tienda-virtual.png'

const CardWidget = () => {
  return (
    <div className="flex items-center">
      <img
        src={cart}
        alt='cart-widget'
        className="w-20 h-20 mr-2 object-contain"
      />
      <span className="text-xl font-bold">0</span>
    </div>
  );
}

export default CardWidget;