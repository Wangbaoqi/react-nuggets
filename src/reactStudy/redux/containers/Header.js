import { connect } from '../connect'
import Header from '../components/Header'



const mapStateToProps = (state, props) => {
  return {
    themeColor: state.themeColor,
    ...props
  }
}

export default connect(mapStateToProps)(Header);
