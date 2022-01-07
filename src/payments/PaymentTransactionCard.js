import { useState } from "react";
import CardHeader from "./CardHeader";

const PaymentTransactionCard = () => {
    const [submitState, setSubmitState] = useState('3px 3px rgb(0 0 0 / 48%)');


    const labelStyle = {
        fontSize: "1.5rem",
        display: 'flex',
        paddingTop: '5%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    };

    const labelInputStyle = {
        width: '70%',
        fontSize: '1.5rem',
        marginLeft: '1.5rem',
        borderRadius: '.5rem',
        border: '0px solid transparent',
        backgroundColor: 'rgb(230 226 226 / 60%)',
    };

    return (
        <div style={{
            width: '70%',
            minHeight: '240px',
            height: '40%',
            backgroundColor: 'rgb(255 254 178 / 27%)',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: '2px solid #ccc',
            boxShadow: "3px 3px rgba(0,0,0,0.4)",
            borderRadius: "2rem",
            paddingTop: '1%',
            fontSize: '2rem',

        }}>
            <CardHeader>
                TRANSACTION
            </CardHeader>
            <div>
                <form 
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    
                }}>
                    <label style={labelStyle}>
                        <span>Username</span>
                        <input type='text' placeholder='enter username' name='username' style={labelInputStyle}/>
                    </label>

                    <label style={labelStyle}>
                        <span>Pin</span>
                        <input type='text' placeholder='Pin' name='pin' style={labelInputStyle}/>
                    </label>

                    <input type='submit' value='Pay' 
                    onMouseEnter={() => setSubmitState("2px 2px rgb(0 0 0 )")}
                    onMouseLeave={() => setSubmitState("3px 3px rgb(0 0 0 / 48%)")}
                    
                    style={{
                        marginTop: '5%',
                        height: '2rem',
                        fontSize: '1.5rem',
                        width: '35%',
                        alignSelf: "flex-end",
                        border: '0px solid white',
                        borderRadius: '1rem',
                        boxShadow: `${submitState}`,
                        cursor: 'pointer', 
                    }}/>
                </form>
            </div>
        </div>
    )
};

export default PaymentTransactionCard;