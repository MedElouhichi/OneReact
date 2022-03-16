import React , { useState }  from 'react';

function About() {

    
    const [txt , SetTxt] = useState(' ceci text ');

    const changetext = () => {

        SetTxt(<strong> nouveau text </strong> );

    }



    return(

        <div>
        
        <p>  {txt}  </p>

        <button onClick={changetext}>  change text   </button>
            

        </div>
    )


}



export default About