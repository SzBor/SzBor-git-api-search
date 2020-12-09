import React, { useState } from "react";
import styles from "./Form.module.scss";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Form = (props) => {
    const [username, setUsername] = useState('')

    const handleSubmit = event => {
        event.preventDefault()

        axios
            .get(`https://api.github.com/users/${username}`)
            .then(resp => {
                props.onSubmit(resp.data)
                setUsername('')
            })
    }

    return (
        <div className={styles.formWrapper}>
            <form className={styles.formWrapper__form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                    placeholder="GitHub username"
                    required
                />

                <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
            </form>
        </div>
    )
}

export default Form;