import { connect } from 'react-redux';
import { loadingBreweriesFilterOrNot, startLoader } from 'src/actions/randobiere';

// === Import Components
import BreweriesSearch from 'src/components/BreweriesSearch';

// === mapStateToProps
const mapStateToProps = (state) => ({
  redirectSearchbar: state.randobiere.redirectSearchbar,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  loadingBreweriesFilterOrNot: (region) => {
    dispatch(loadingBreweriesFilterOrNot(region));
  },
  startLoader: () => {
    dispatch(startLoader());
  },
});

// === creation of the assistant
export default connect(mapStateToProps, mapDispatchToProps)(BreweriesSearch);
