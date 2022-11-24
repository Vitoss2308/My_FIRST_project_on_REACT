import Card from './components/Card';
import Header from './components/Header';
import Bascket from "./components/Bascket";
import UseForm from "./components/UseForm";
import Completion from "./components/Completion";
import Contacts from "./components/Contacts";
import React from "react";
import {createStore} from "redux";


const arr = [
    {id: '1', title:'Пряник "Новогодний тигренок"', price:400, imgUrl:'/img/gingerbreads/imgReaper1.png'},
    {id: '2',title:'Пряник "Новогодний сюрприз"', price:340, imgUrl:'/img/gingerbreads/imgReaper2.png'},
    {id: '3',title:'Пряник "Вкусная радость"', price:360, imgUrl:'/img/gingerbreads/imgReaper3.png'},
    {id: '4',title:'Зефир "Розовая сладость"', price:410, imgUrl:'/img/gingerbreads/imgReaper4.png'},
    {id: '5',title:'Пряник "Пора в школу"', price:380, imgUrl:'/img/gingerbreads/imgReaper5.png'},
    {id: '6',title:'Пряник "Вкуснее не бывает"', price:320, imgUrl:'/img/gingerbreads/imgReaper6.png'},
    {id: '7',title:'Пряник "Розовый кролик"', price:420, imgUrl:'/img/gingerbreads/imgReaper7.png'},
    {id: '8',title:'Пряник "Завтрак школьника"', price:350, imgUrl:'/img/gingerbreads/imgReaper8.png'},

];
function App() {
    const [formOpened, setFormOpened] = React.useState(false)
    const [cartOpened, setCartOpened] = React.useState(false)
    const [endOpened, setEndOpened] = React.useState(false)
    const [contactsOpened, setContactsOpened ] = React.useState(false)
    const [items, setItems] = React.useState(arr)
    const [cartItems, setCartItems] = React.useState([])
    const [searchValue, setSearchValue] = React.useState()
    const onAddToCart=(obj) => {

        setCartItems ([...cartItems, obj])
    }

    const onChangeInput = (e)=> {console.log(e.target.value); setSearchValue(e.target.value)}



    return (
        <div className="wrapper">

          {contactsOpened ? <Contacts onCloseContacts={()=>setContactsOpened(false)}/> : null}

          {endOpened ?<Completion  onHome={() => setEndOpened(false)}/> : null}

          {formOpened ? <UseForm onClickEnd={() => setEndOpened(true) || setFormOpened(false) || setCartOpened(false)}/> : null}

          {cartOpened? <Bascket items={cartItems} setCartItems={setCartItems} onClose={() => setCartOpened(false)}  onClickForm={()=> setFormOpened(true)  }/> : null}

           <Header onClickCart={() => setCartOpened(true)} onClickContacts = {() => setContactsOpened(true)}/>
           <div className="content">
              <div className='content-title'>
                 <h1>{searchValue ? `Поиск по запросу: "${searchValue}"`: 'Все пряники'}</h1>
                 <div className='search-block'>
                    <img src='/img/search.svg' alt='Search'/>
                    <input onChange={onChangeInput} placeholder='Поиск'/>
                </div>
            </div>

            <div className='container'>
                {items
                    .map((item,id) => (
                    <Card title={item.title}
                          price={item.price}
                          imgUrl={item.imgUrl}
                          key={item.id}
                          onFavorite={() => console.log('666 likes')}
                          onPlus={(obj) => onAddToCart(obj)}
                          />
                ))}
            </div>

        </div>
        </div>
  );
}

export default App;
