import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input/Input'
import Button from '../Forms/Button/Button'

const LoginForm = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
  
    function handleSubmit(event) {
      event.preventDefault()
      fetch('https://dogsapi.origamid.dev/json/jwt-token/v1/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(response => {
            return response.json()

        }).then(json => {
            console.log(json);
        })

    }
  
    return (
    <section>
        <h1>Login</h1>
        <form action='' onSubmit={handleSubmit}>
            <Input label="Usuário" name="username" type="text" value={username} onChange={({target}) => setUsername(target.value)}/>
            <Input label="Senha" name="password" type="password" value={password} onChange={({target}) => setPassword(target.value)}/>
            <Button>Entrar</Button>
        </form>
        
        <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm