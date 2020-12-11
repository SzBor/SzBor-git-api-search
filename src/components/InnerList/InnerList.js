import React from "react";
import InnerListItem from "./InnerListItem";
import styles from "./InnerList.module.scss";



const InnerList = ({ items }) => {
 
    return (
        <>
            {items.length ? (
                <div className={styles.innerListWrapper}>
                    <h1 className={styles.innerListWrapper__header}>Ostatnie 5 commitów:</h1>
                    <ul className={styles.innerListWrapper__list}>
                        {items.map(item => (
                            <InnerListItem key={item.sha} {...item} />
                        )
                        )}
                    </ul>
                </div>
            ) : (
                    <h1 className={styles.innerListWrapper__noItems}>Brak commitów w tym repozytorium</h1>
                )}
        </>
    )
};


export default InnerList;
