import React, {useEffect, useState} from "react";

function UseForm (props) {

    const [email, setEmail]=React.useState('');
    const [password, setPassword]=React.useState('');
    const [emailDirty, setEmailDirty]=React.useState(false);
    const [passwordDirty, setPasswordDirty]=React.useState(false);
    const [emailError, setEmailError]=React.useState('Введите Email');
    const [passwordError, setPasswordError]=React.useState('Введите пароль');
    const [formValid, setFormvalid] = useState(false)
    useEffect(() => {
        if (emailError || passwordError) {
            setFormvalid(false)
        } else {
            setFormvalid(true)
        }
    }, [emailError,passwordError])

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некоректный Email')
            if (e.target.value===0) {
                setEmailError('введите Email')
            }
        }
        else setEmailError('')

    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length <= 8) {
            setPasswordError('Пароль должен быть не менее 8 символов')
            if (!e.target.value) {
                setPasswordError('Пароль не введен')
            }

        } else {
            setPasswordError('')
        }
    }


    function storageClick (){
        localStorage.setItem('email', email)
        localStorage.setItem('password', password);
        props.onClickEnd()
    }
    return (
        <div className='overlay_form'>
            <div className='form'>
                <span>для продолжения покупки необходимо войти или зарегистрироваться</span>
                <h2>Вход</h2>
                {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                <input  onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email'
                       type='email' placeholder={'Введите email'} id='email'/>
                {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password'
                       type='password' placeholder={'Введите пароль'} id='password'/>
                <button onClick={storageClick} disabled={!formValid} type="submit">Вход</button>
            </div>
        </div>

     )
}

export default UseForm
