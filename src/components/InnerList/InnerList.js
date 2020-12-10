import React from "react";
import InnerListItem from "./InnerListItem";

import styles from "./InnerList.module.scss";



const InnerList = ({ items }) => {

    console.log(items)
 
    return (
        <>
            {items.length ? (
                <div className={styles.listWrapper}>
                    <h1 className={styles.listWrapper__header}>Ostatnie 5 commitów:</h1>
                    <ul>
                        {items.map(item => (
                            <InnerListItem key={item.id} {...item} />
                        )
                        )}
                    </ul>
                </div>
            ) : (
                    <h1 className={styles.listWrapper__noItems}>Brak repozytoriów tego uzytkownika</h1>
                )}
        </>
    )
};


export default InnerList;
