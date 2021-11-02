import React, {useEffect} from "react";
import LinkForm from "./LinkForm"; 
import {db} from '../firebase' 

const Links = () => {

    const addOrEditLink = async (linkObject) => {
       await db.collection('Socios').doc().set(linkObject);
       console.log('new task added');
    }
    return <div>
        <h1>Componente Links</h1>
        <LinkForm addOrEditLink={addOrEditLink}/>
    </div>;
};

export default Links;
