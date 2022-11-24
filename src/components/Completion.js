

function Completion(props) {
    return (

        <div className='completion'>
            <span>
                <h2>Благодарим за выбор товаров!</h2>
                <b onClick={props.onHome}>Home</b>
            </span>

            <div>
                <h3>Выберите способ оплаты и доставки.</h3>
                <b>Способ оплаты</b>
                <ul>
                    <li>Наличными при выдаче заказа</li>
                    <li>Банковской картой Visa, Mastercard</li>
                </ul>
                <b>Выбирите способ доставки</b>
                <ul>
                    <li>Самовывоз из магазина</li>
                    <li>Почта России</li>
                    <li>Курьерская служба СДЭК</li>
                </ul>
            </div>
        </div>

    )
}
export default Completion