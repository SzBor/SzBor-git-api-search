import React from 'react';
import styles from './AboutView.module.scss'
import { NavLink } from 'react-router-dom';
import profilePic from '../../assets/44950858_10156542105677347_7024185735754285056_o.jpg'


const AboutView = () => (
  <>
    <div className={styles.pageWrapper}>
      <div className={styles.pageWrapper__aboutWrapper}>
        <h1>Założenia tej aplikacji</h1>
        <h3>Napisz aplikację korzystając z najnowszego api react.js (hooki, Context, itd.) spełniającą poniższe założenia:</h3>
        <ul>
          <li>korzysta z publicznego API Githuba</li>
          <li>pozwala wpisać id użytkownika</li>
          <li>reaguje na błędne id</li>
          <li>wyświetla maksymalnie 5 ostatnio zmienionych projektów (w raz z sublistą commitów) podanego użytkownika</li>
          <li>wyświetla także założenia własne (tej rekrutacyjnej aplikacji) oraz jej autora</li>
          <li>wyświetla co drugi element każdej listy wyróżnionym kolorem</li>
          <li>korzysta z LESS / SASS. Spełnia wymogi BEM. Jest też estetyczna</li>
          <li>jest hostowana (github pages, heroku, itd..), a jej kod jest dostępny publicznie</li>

        </ul>
      </div>
      <div className={styles.pageWrapper__authorWrapper}>
        <h1>Autor aplikacji</h1>
        <img src={profilePic} />
        <h3>Szymon Borucki</h3>
      </div>
    </div>

      <NavLink className={styles.navWrapper__button} to="/">Powrót do strony głownej</NavLink>
   
  </>
);

export default AboutView;