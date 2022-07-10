import React from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';

const DeleteModal = ({ modal_delete, setmodal_delete }) => {
    const { _id, name } = modal_delete

    const handleDeleteProduct = () => {
        fetch(`http://localhost:5000/api/product/${_id}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    alert(`${name} is deleted`)
                    setmodal_delete(null)
                } else {
                    alert(data.error)
                }
            })
    }

    // const handleDeleteProduct = async (id) => {

    //     const response = await fetch(`http://localhost:5000/api/product/${id}`, {
    //         method: 'delete',
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.deletedCount) {
    //                 console.log(data)
    //                 setmodal_delete(null)
    //                 alert('Product deleted successfully')
    //             }
    //             else {
    //                 alert("Could not delete product.")
    //                 console.log('something went rong')
    //             }
    //         })
    // }
    return (
        <Modal
            isOpen={modal_delete}
            id="deleteRecordModal"
            centered
        >
            <div className="modal-header bg-light">
                <Button
                    type="button"
                    onClick={() => setmodal_delete(null)}
                    className="btn-close"
                    aria-label="Close"
                >
                    {' '}
                </Button>
            </div>
            <ModalBody>
                <div className="mt-2 text-center">
                    <lord-icon
                        src="https://cdn.lordicon.com/gsqxdxog.json"
                        trigger="loop"
                        colors="primary:#f7b84b,secondary:#f06548"
                        style={{ width: '100px', height: '100px' }}
                    ></lord-icon>
                    <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                        <h4>Are you Sure ?</h4>
                        <p className="text-muted mx-4 mb-0">
                            Are you Sure You want to Remove <span className='text-primary'>{name}</span> ?
                        </p>
                    </div>
                </div>
                <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                    <button
                        type="button"
                        className="btn w-sm btn-light"
                        onClick={() => setmodal_delete(null)}
                    >
                        Close
                    </button>
                    <button
                        onClick={() => handleDeleteProduct(_id)}
                        type="button"
                        className="btn w-sm btn-danger "
                        id="delete-record"
                    >
                        Yes, Delete It!
                    </button>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default DeleteModal;