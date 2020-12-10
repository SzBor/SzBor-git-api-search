import React, { useContext } from "react";
import styles from "./Form.module.scss";
import AppContext from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Form = () => {
    const appContext = useContext(AppContext)
    const { handleSubmit, handleSearchChange } = appContext


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
                            required
                        />
                        <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                    </form>
                    {context.error ? <h3>Podano błędną nazwę użtkownika</h3> : <></>}
                    {context.errorRequest ? <h3>Brak odpowiedzi z servera</h3> : <></>}

                </div>
            )}

        </AppContext.Consumer>
    )
}

export default Form;