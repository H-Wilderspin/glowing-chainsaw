import React from 'react'
import plus from './imgs/icons/plus.svg'
import minus from './imgs/icons/minus.svg'
import PropTypes from 'prop-types'
import { ContextWhole } from './context'
import useHover from './utils/useHoverHook'

export default function MenuItem({ className, item }) {
  const { addToCart, removeFromCart, currency } = React.useContext(ContextWhole)
  const [hovered, ref, toggleHover] = useHover()

  const plusIcon = hovered &&
    <img
      className='MenuItem-plusBtn'
      src={plus}
      onClick={() => addToCart(item)}
      alt="plus"
    />

  const minusIcon = hovered &&
    <img
      className='MenuItem-minusBtn'
      src={minus}
      onClick={() => removeFromCart(item)}
      alt="minus"
    />
  const convertPrice = (item.price * currency.value).toLocaleString("en-UK", { style: "currency", currency: `${currency.name}` })
  const productName = hovered && <span className='MenuItem-span' alt="span">{item.name} {convertPrice}</span>
  const productDescription = hovered && <span className='MenuItem-productDescription'>{item.description}</span>
  const productQtyDisplay = item.quantity > 0 && <span className='MenuItem-quantity'>{item.quantity}</span>

  return (
    <div
      className={`${className} MenuItem-gridObject`}
      ref={ref}
      style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover' }}
      onClick={() => toggleHover()}
    >
      {productQtyDisplay}

      <dic>

        <div className='MenuItem-hoverElements'>
          {minusIcon}
          {productName}
          {plusIcon}
        </div>

        {productDescription}

      </dic>


    </div>
  )
}

MenuItem.propTypes = {
  className: PropTypes.string,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })
}
