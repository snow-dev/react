/**
 * Created by snow on 06/09/2017.
 */

import React from 'react';
import CoolerCard from './CoolerCard';

export default function CoolersList({coolers}) {
    const emptyMessage = (
      <p> There is no coolers yet in your account.</p>
    );

    const coolersList = (
        <div className="ui four cards">
            {coolers.map(cooler => <CoolerCard cooler={cooler} key={cooler._id} />) }
        </div>
    );

    return(
        <div>
            {coolers.length === 0 ? emptyMessage : coolersList}
        </div>
    );
}

CoolersList.propTypes = {
    // eslint-disable-next-line
    coolers: React.PropTypes.array.isRequired
};