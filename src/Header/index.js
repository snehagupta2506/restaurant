const Header = ({cartItems}) => {
  const getCartItemsCount = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const renderCartIcon = () => (
    <div className="d-flex justify-content-center align-items-center">
      <p className="n-8 cart-count">{getCartItemsCount()}</p>
    </div>
  )
  return (
    <header>
      <h1>UNI Resto Cafe</h1>
      <div>
        <p> My Orders</p>
        {renderCartIcon()}
      </div>
    </header>
  )
}

export default Header
