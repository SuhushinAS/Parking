import logoSmall from '../images/logo1.svg';
import Menu from './Menu';

const Header = () => { // нужны размеры
    return (
      <header>
        <img src={logoSmall} alt='' />
        <Menu/>
      </header>
    )
}

export default Header;