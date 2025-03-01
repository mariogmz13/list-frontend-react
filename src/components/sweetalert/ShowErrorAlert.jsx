import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const showErrorAlert = (title, text) => {
  MySwal.fire({
    title: title,
    text: text,
    icon: 'error',
    confirmButtonText: 'ok',
  });
};

export default showErrorAlert;