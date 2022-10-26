import { GridLoader } from 'react-spinners';

const Spinner = ({ loading }) => {
  return (
    <div className="screen-lock">
      <GridLoader color={'rgb(30, 41, 59)'} loading={loading} size={20} />
    </div>
  );
};

export default Spinner;