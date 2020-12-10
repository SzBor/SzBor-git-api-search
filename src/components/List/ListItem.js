import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";
import Title from '../Title/Title';

const ListItem = (props) => {
 console.log(props)
console.log(props.location)
  return (
    <li className={styles.wrapper}>
 
      <div>
        <Title>{props.login}</Title>
        <p className={styles.description}>{props.location}</p>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};



export default ListItem;
