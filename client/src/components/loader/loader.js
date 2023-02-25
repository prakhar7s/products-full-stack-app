import Spinner from "../../assets/svgs/spinner.svg";

const Loader = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center w-100 h-100 position-fixed bg-light top-0 left-0"
      style={{
        zIndex: 99999999,
      }}
    >
      <img width="55" color="red" alt="loader" height="55" src={Spinner} />
    </div>
  );
};

export default Loader;
