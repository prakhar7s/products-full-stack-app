import "./App.css";
import Loader from "./components/loader/loader";
import { MainPage } from "./pages/main";
import { connect } from "react-redux";
import { ErrorBoundary } from "./utils/error-boundry";
import { Toaster } from "react-hot-toast";

function App(props) {
  const { loading } = props;
  return (
    <div>
      <ErrorBoundary>
        <Toaster />
        {loading && <Loader />}
        <MainPage />
      </ErrorBoundary>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loadingReducer.loading,
});

export default connect(mapStateToProps, null)(App);
