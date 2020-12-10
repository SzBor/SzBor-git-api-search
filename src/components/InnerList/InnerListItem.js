import React, { useEffect, useState } from "react";
import styles from "./InnerListItem.module.scss";




const InnerListItem = (props) => {


  console.log(props)
  console.log(props.commit)


  return (
    <>

      <li className={styles.wrapper}>

        <div>
          <h5>Data i godzina commita: {props.commit.author.date.slice(0, 10)} {props.commit.author.date.slice(11, 16)}</h5>
          <p className={styles.wrapper__description}><span>Treść commita:</span> {props.commit.message}</p>
        </div>
      </li>

    </>
  );
};





export default InnerListItem;
