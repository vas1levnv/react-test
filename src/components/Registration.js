import React, {useState} from 'react';

function Registration() {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [check, setCheck] = useState(false)
    const [checkError, setCheckError] = useState(false)

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleChangeCheck = (event) => {
        if (event.target.checked) {
            setCheck(true)
        } else {
            setCheck(false)
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        if (!email){
            setEmailError(true)
        } else if(!password){
            setEmailError(false)
            setPasswordError(true)
        } else if(!check){
            setPasswordError(false)
            setCheckError(true)
        } else{
            setCheckError(false)
            console.log('данные отправлены')
           setEmail('')
           setPassword('')
           setCheck(false)
        }
    }

    return (
        <div className="container">
            <h1 className="mt-3">Авторизация</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    {emailError ?   <div className="text-danger">Введие email</div> : false }
                    <label htmlFor="exampleInputEmail1"
                           className="form-label"
                    >Email address</label>
                    <input type="email"
                           value={email}
                           onChange={handleChangeEmail}
                           className="form-control"
                           autoComplete="on"
                           id="exampleInputEmail1"
                           aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    {passwordError ?   <div className="text-danger">Введие пароль</div> : false }
                    <label htmlFor="exampleInputPassword1"
                           className="form-label">Password</label>
                    <input type="password"
                           className="form-control"
                           autoComplete="on"
                           value={password}
                           onChange={handleChangePassword}
                           id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    {checkError ?   <div className="text-danger">Пожалуйста нажмите на галку</div> : false }
                    <input type="checkbox"
                           checked={check}
                           onChange={handleChangeCheck}
                           className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label"
                           htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit"
                        className="btn btn-primary">Submit</button>
            </form>
            <button
                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                    className="btn btn-primary">Submitsadfgsa</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;