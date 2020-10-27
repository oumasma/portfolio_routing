import React from "react";
import { FormattedMessage } from 'react-intl';


const Home = () => 
<div className="container">

    <h1><FormattedMessage id="Titre" /></h1>
    <p><FormattedMessage id="Présentation" /></p>
    <p><FormattedMessage id="Travaux" /></p>
    <p><FormattedMessage id="Contact" /></p>

</div>


export default Home