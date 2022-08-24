import React, { useContext } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import {ReactComponent as Dogs} from '../Assets/dogs.svg'
import { UserContext } from '../userContext'



const Header = () => {

  const {data} = useContext(UserContext)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? <Link to="conta" className={styles.login}>         
          {data.email}
          </Link> : <Link to="login" className={styles.login}>         
          Login / Criar
          </Link>}
        
      </nav>
    </header>
  )
}

export default Header