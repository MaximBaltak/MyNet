import logo from './../../img/logo.png';
import stylse from './Header.module.css';
console.log(stylse)
const Header=()=>{

    return(
        <header className={stylse.header}>
        <img src={logo} alt="png" width="38px"/>
         <h1>MyNet</h1>
      </header>
    )
}
export default Header;