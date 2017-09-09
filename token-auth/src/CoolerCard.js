/**
 * Created by snow on 07/09/2017.
 */
import React from 'react';

export default function CoolerCard({cooler}) {
    return(
        <div className="ui card">

            <div className="content">
                <div className="header">{cooler.serial}</div>
            </div>

            <div className="content">
                <div className="header">{cooler.macAddress}</div>
            </div>

        </div>
    )
}

CoolerCard.prototype = {
    // eslint-disable-next-line
  cooler: React.PropTypes.object.isRequired
}