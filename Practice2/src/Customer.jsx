import PropTypes from 'prop-types'

function Customer(props){

    const logged =  <div className="customerGreet">
                        <h2>Welcome: {props.name}</h2>
                        <p>Age: {props.age}</p>
                        <p>Address: {props.address}</p>
                        <p>Is Logged: {props.isLoggedIn ? "Logged" : "Not yet"}</p>
                    </div>

    const notLogged =   <div className="customerGreet2">
                            <h2>Please login to continue using this site</h2>
                            <h2>Welcome: Guest</h2>
                            <p>Is Logged: {props.isLoggedIn ? "Logged" : "Not yet"}</p>
                        </div>

    return (props.isLoggedIn ? logged : notLogged);

}

Customer.proptypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    address: PropTypes.string,
    isLoggedIn: PropTypes.bool
}

Customer.defaultProps = {
    name: "Guest",
    isLoggedIn: false
}
export default Customer