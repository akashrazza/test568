const CardHeader = (props) => {
    return (
        <div style={{
            fontWeight: 800,
            color: 'rgb(22 26 65)',
        }}>
            {props.children}
        </div>
    )
};

export default CardHeader;