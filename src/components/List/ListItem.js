import React, { useEffect, useState } from "react";
import styles from "./ListItem.module.scss";
import Title from '../Title/Title';
import axios from 'axios';
import InnerList from "../InnerList/InnerList";


const ListItem = (props) => {
  const [commits, setCommits] = useState([]);


  const fetchData = async () => {

      const resp = await axios.get(`https://api.github.com/repos/${props.full_name}/commits`, { params: { per_page: 5 } })
      setCommits([...resp.data])
    
  }

  useEffect(() => {

    fetchData()
  }, [props.full_name])

  return (
    <>
      <li className={styles.wrapper}>
        <div>
          <Title><span className={styles.wrapper__description}>Nazwa:</span> {props.name}</Title>
          <p className={styles.wrapper__description}>Ostatnia zmiana: {props.updated_at.slice(0, 10)}</p>
        </div>
      </li>
      <InnerList items={commits}/>
    </>
  );
};





export default ListItem;
