import React, { useContext, useState } from "react";
import styles from "./Form.module.scss";
import AppContext from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Form = () => {
    const [userName, setUsername] = useState('')

    const appContext = useContext(AppContext)
    const { fetchRepos } = appContext

    const handleSearchChange = (e) => {
        setUsername(e.target.value)
    }
    const resetInputField = () => {
        setUsername('')
    }
    const handleSubmit = e => {
        e.preventDefault();
        fetchRepos(userName);
        resetInputField();

    }


    return (
        <AppContext.Consumer>
            {(context) => (
                <div className={styles.formWrapper}>
                    <h1>Wpisz nazwę użytkownika</h1>
                    <form className={styles.formWrapper__form} onSubmit={(e) => handleSubmit(e)}>
                        <input
                            type="text"
                            onChange={(e) => handleSearchChange(e)}
                            placeholder="Nazwa na GitHub"
                            value={userName}
                            required
                        />
                        <button><FontAwesomeIcon icon={faSearch} /></button>
                    </form>
                    {context.error ? <div className={styles.formWrapper__errorBox}><h3>Podano złą nazwę użtkownika</h3></div> : <></>}
                </div>
            )}
        </AppContext.Consumer>
    )
}

export default Form;