const Header = (props) => {
    return( 
        <div>
            <h2 className="header-text">{props.title}</h2>
            <p>{props.count}</p>
        </div>
    )
};
export default Header;