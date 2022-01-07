import { useState } from "react";
import CardHeader from "./CardHeader";
import GroupWorkIcon from '@material-ui/icons/GroupWork';

const PaymentCard = (props) => {

    const [addState, setAddState] = useState('3px 3px rgb(0 255 0 / 48%)');
    const [sellState, setSellState] = useState('3px 3px rgb(255 0 0 / 48%)');

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
            boxShadow: "2px 2px rgba(0,0,0,0.4)",
            borderRadius: "2rem",
            paddingTop: '1%',
            fontSize: '2rem',

        }}>
            <CardHeader>
                WALLET
            </CardHeader>
            <span
                style={{
                    width: '60%',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    justifyItems: "center"
                }}
            >
                Balance
                <div style={{ color: 'rgb(82 169 15)', fontWeight: '600' }}>
                    120 Coins
                </div>
                <GroupWorkIcon style={{color: 'rgb(82 139 15)'}}/>
            </span>
            <form>
                <label style={labelStyle}>
                    <span>Amount</span>
                    <input type='number' placeholder='Enter Amount' name='amount' style={labelInputStyle} min="0"/>
                </label>
                <div style={{
                    display: "flex",
                    width: '100%',
                    justifyContent: "space-evenly"
                }}>
                    <input type='submit' value='ADD'
                        onMouseEnter={() => setAddState("2px 2px rgb(0 0 0 )")}
                        onMouseLeave={() => setAddState("3px 3px rgb(0 255 0 / 40%)")}
                        style={{
                            marginTop: '5%',
                            height: '2rem',
                            fontSize: '1.5rem',
                            width: '30%',
                            border: '0px solid white',
                            borderRadius: '1rem',
                            boxShadow: `${addState}`,
                            cursor: 'pointer',
                        }} />
                    <input type='submit' value='SELL'
                        onMouseEnter={() => setSellState("2px 2px rgb(0 0 0 )")}
                        onMouseLeave={() => setSellState("3px 3px rgb(255 0 0 / 40%)")}
                        style={{
                            marginTop: '5%',
                            height: '2rem',
                            fontSize: '1.5rem',
                            width: '30%',
                            border: '0px solid white',
                            borderRadius: '1rem',
                            boxShadow: `${sellState}`,
                            cursor: 'pointer',
                        }} />
                </div>
            </form>
        </div>
    )
};

export default PaymentCard;