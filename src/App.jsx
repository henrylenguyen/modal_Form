
import * as yup from "yup";
import useModalForm from "./useModalForm";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});
const handleSubmitForm = (data) => {
  console.log(data);
};

const fields = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
  },
];

function App() {
  const { ModalForm, openModal } = useModalForm({
    schema,
    fields,
    handleSubmitForm,
    title: "Đăng ký",
  });
  return (
    <div className="w-full h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <button
          className="bg-blue-400 p-5 text-white rounded-[50px] "
          onClick={openModal}
        >
          Nhấn vào để mở form
        </button>
      </div>
        <ModalForm />
    </div>
  );
}

export default App;
