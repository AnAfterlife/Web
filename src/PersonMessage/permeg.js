import React from "react";

import Bottom from "./PerMegBtm/bottom";

var PermegCss = require("./permeg.css")

export default class PersonMessage extends React.Component {
    render() {
        return (
            <div className={PermegCss.total}>
                
                        <Bottom />
                    </div>
               
           
        )
    }
}