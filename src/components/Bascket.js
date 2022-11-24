function Bascket({items=[], onClose, onClickForm, setCartItems}) {
    const removeItemHandler = (product) => {
        setCartItems(prev => prev.filter(el => el.id !== product.is))
        console.log(product)
    }

    return (
        <div className ="overlay">
        <div className="drawer">
            <h2>Корзина
                <img src='/img/btnRemove.svg' alt='Remove' onClick={onClose}/>
            </h2>
            <div className="items">
                {items.map((obj) =>(
                <div className="cartItem">
                    <img width={100} height={100} src={`${obj.imgUrl}`} alt={Image}/>
                    <div>
                        <p>{obj.title}</p>
                        <b>{obj.price}</b>
                    </div>
                    <button onClick={ () => removeItemHandler(obj)}><img
                        src='/img/btnRemove.svg' alt='Remove'/></button>
                </div>))
                }
            </div>
            <ul className='cartTotalBlock'>
               <li>
                    <span>Итого:</span><div></div><b>800 руб.</b>
                </li>
                <button onClick={onClickForm} className='pinkButton'>Оформите заказ</button>
            </ul>
        </div>
    </div>);
}
export default Bascket;