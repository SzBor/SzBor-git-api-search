import React, { useEffect, useState } from "react";
import styles from "./InnerListItem.module.scss";
import Title from '../Title/Title';



const InnerListItem = (props) => {


  console.log(props)
  console.log(props.commit)


  return (
    <>

      <li className={styles.wrapper}>

        <div>
          <Title>{props.commit.author.date.slice(0, 10)}</Title>
          <p className={styles.wrapper__description}>Treść commita: {props.commit.message}</p>
        </div>
      </li>
      
    </>
  );
};





export default InnerListItem;
