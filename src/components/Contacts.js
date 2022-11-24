function Contacts(props){
    return(
        <div className='contacts' >
            <div className='contacts_content'>
            <span>
                <h2>Наши контакты</h2>
                <img src='/img/btnRemove.svg' alt='Remove' onClick={props.onCloseContacts}/>

            </span>
                <ul>
                    <li>Адрес магазина: 345678 г.Харьков, ул. Шевченко 325/2</li>
                    <li>тел.+38023433333</li>
                    <li>email:пряники@gmail.com</li>
                </ul>
            </div>
        </div>
    )
}

export default Contacts;