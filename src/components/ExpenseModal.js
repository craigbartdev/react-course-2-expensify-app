import React from 'react';
import Modal from 'react-modal';

export const ExpenseModal = (props) => (
    <Modal
        isOpen={props.modalVisible}
        onRequestClose={props.modalClose}
        contentLabel="Delete Expense"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Are you sure that you would like to delete this expense?</h3>
        <button onClick={props.modalAction} className="modal__button remove">Yes</button>
        <button onClick={props.modalClose} className="modal__button cancel">Cancel</button>
    </Modal>
);

export default ExpenseModal;