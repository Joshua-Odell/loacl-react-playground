import React from 'react';

export default function Currency(props) {
    const money = new Intl
        .NumberFormat(this.props.locale,
            {
                style: 'currency',
                currency: this.props.currency
            })
        .format(this.props.value);
    return(
        <div className='currency'>
            { money }
        </div>
    )


}