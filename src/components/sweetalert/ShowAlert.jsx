import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const showAlert = (title, text, state, btnText) => {
  MySwal.fire({
    title: title,
    text: text,
    icon: state,
    confirmButtonText: btnText,
  });
};

export default showAlert;