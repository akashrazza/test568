import React from 'react';
import PaymentCard from './PaymentCard';
import PaymentTransactionCard from './PaymentTransactionCard';

const PaymentIndex =  () => {

    return(
        <div style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: "space-evenly",
        }}>
            <PaymentCard />
            <PaymentTransactionCard />
        </div>
    )

};

export default PaymentIndex;