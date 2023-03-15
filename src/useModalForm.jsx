import { useState } from "react";
import Form from "./Form";
import Modal from "./Modal";



const useModalForm = ({ schema, fields, handleSubmitForm,title }) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const ModalForm = () => (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="p-10">
        <Form
          schema={schema}
          fields={fields}
          closeModal={closeModal}
          handleSubmitForm={handleSubmitForm}
          title={title}
        />
      </div>
    </Modal>
  );

  return { ModalForm, openModal, closeModal, handleSubmitForm };
};

export default useModalForm;
