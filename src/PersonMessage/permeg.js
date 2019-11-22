import React from "react";
import Header from "./PerMegHeader/header";
import Bottom from "./PerMegBtm/bottom";

var PermegCss = require("./permeg.css")

export default class PersonMessage extends React.Component {
    render() {
        return (
            <div className={PermegCss.total}>
                <div className={PermegCss.intotal}>
                    <div>
                        <Header />
                    </div>


                    <div>
                        <Bottom />
                    </div>
                </div>
            </div>
        )
    }
}