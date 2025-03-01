import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const showSuccessAlert = (title, text) => {
  MySwal.fire({
    title: title,
    text: text,
    icon: 'success',
    confirmButtonText: 'ok',
  });
};

export default showSuccessAlert;