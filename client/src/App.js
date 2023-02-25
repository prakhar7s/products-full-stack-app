import "./App.css";
import Loader from "./components/loader/loader";
import { MainPage } from "./pages/main";
import { connect } from "react-redux";

function App(props) {
  const { loading } = props;
  return (
    <div>
      {loading && <Loader />}
      <MainPage />
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loadingReducer.loading,
});

export default connect(mapStateToProps, null)(App);
