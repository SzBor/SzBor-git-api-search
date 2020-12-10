import React, { useState, useContext } from "react";
import styles from "./Form.module.scss";
import AppContext from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Form = (props) => {
    const appContext = useContext(AppContext)

    const { handleSubmit, handleSearchChange } = appContext





    return (

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
        </div>
    )
}

export default Form;