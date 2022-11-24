function Header (props) {
    return (
        <header>
    <div className='headerLeft'>
        <img className='logo' width={40} height={40} src='/img/logo.png'/>
        <div className='headerInfo'>
            <h3>Gingerbread Store</h3>
            <p>магазин вкуснейших пряников</p>
        </div>
    </div>
    <ul className='headerRight'>
        <li onClick={props.onClickCart}>
            <img width={18} height={18} src='/img/basket.svg'/>
            <span>460руб.</span>
        </li>
        <li onClick={props.onClickContacts}>
            <b>Contacts</b>
        </li>
    </ul>
</header>
    );
}
export default Header;