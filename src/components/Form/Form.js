import React, { useState, useContext } from "react";
import styles from "./Form.module.scss";
import AppContext from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Form = (props) => {
    const appContext = useContext(AppContext)

    const { handleSubmit, handleSearchChange } = appContext

 

   

    return (
        <AppContext.Consumer>
        {context => (
                <div className={styles.formWrapper}>
            <form className={styles.formWrapper__form} onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    onChange={(e) => handleSearchChange(e)}
                    placeholder="GitHub username"
                    required
                />

                <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
            </form>
        </div>)}
        </AppContext.Consumer>
    )
}

export default Form;