import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const EditModal = ({ modal_list, setmodal_list }) => {
    const { _id, name, category, description, instruction, usage, price, discount, specification, availableStock } = modal_list

    const updateProduct = async (event) => {
        event.preventDefault()
        const updatedProduct = {
            name: event.target.name.value,
            category: event.target.category.value,
            description: event.target.description.value,
            instruction: event.target.instruction.value,
            usage: event.target.usage.value,
            price: event.target.price.value,
            discount: event.target.discount.value,
            specification: event.target.specification.value,
            availableStock: event.target.availableStock.value,
        }
        const updateProduct = async () => {
            const response = await fetch(`http://localhost:5000/api/product/${_id}`, {
                method: 'put',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(updatedProduct)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.message) {
                        console.log(data)
                        setmodal_list(null)
                        alert('Product updated successfully')
                    }
                    else if (data.error) {
                        alert("Could not update product.")
                        console.log('something went rong')
                    }
                })

        }
        updateProduct()

    }

    return (
        <Modal className=""
            isOpen={modal_list}
            // toggle={() => {
            //     tog_list();
            // }}
            centered
        >
            <div className="modal-header bg-light p-3">
                <h5 className="modal-title" id="exampleModalLabel">
                    {' '}
                    Edit Product{' '}
                </h5>
                <Button
                    type="button"
                    onClick={() => {
                        setmodal_list(null);
                    }}
                    className="btn-close"
                    aria-label="Close"
                ></Button>
            </div>
            <form onSubmit={updateProduct}>
                <ModalBody>
                    <div className="mb-3 px-3">
                        <label htmlFor="customername-field" className="form-label">
                            Name
                        </label>
                        <input
                            name='name'
                            defaultValue={name}
                            type="text"
                            id="customername-field"
                            className="form-control"
                            placeholder="Enter Name"
                        />
                    </div>
                    <div className="mb-3 px-3">
                        <label htmlFor='productName' className="form-label">Category</label>
                        <select defaultValue={category} name='category' className="form-select mb-3" aria-label="Category" required>
                            <option value="Face">Face</option>
                            <option value="Body">Body</option>
                            <option value="Eye">Eye</option>
                            <option value="Hair Care">Hair Care</option>
                        </select>
                    </div>

                    <div className="mb-3 px-3">
                        <label htmlFor="description-field" className="form-label">
                            Description
                        </label>
                        <input
                            name='description'
                            defaultValue={description}
                            type="text"
                            className="form-control"
                            placeholder="Enter description"
                        />
                    </div>
                    <div className="mb-3 px-3">
                        <label className="form-label">Instructions</label>
                        <textarea defaultValue={instruction} name='instruction' type="text" className="form-control" />
                    </div>

                    <div className="mb-3 px-3">
                        <label htmlFor="phone-field" className="form-label">
                            Images
                        </label>
                        <input
                            name='image'
                            type="file"
                            className="form-control"
                            placeholder="Enter category"
                        />
                    </div>

                    <div className="mb-3 px-3">
                        <label htmlFor="phone-field" className="form-label">
                            Videos
                        </label>
                        <input
                            name='video'
                            type="file"
                            className="form-control"
                            placeholder="Enter category"
                        />
                    </div>

                    <div className="mb-3 px-3">
                        <label htmlFor="phone-field" className="form-label">
                            Thumbnail
                        </label>
                        <input
                            name='thumbnail'
                            type="file"
                            className="form-control"
                            placeholder="Enter category"
                        />
                    </div>

                    <div className="mb-3 px-3">
                        <label className="form-label">Usage</label>
                        <textarea defaultValue={usage} name='usage' type="text" className="form-control" />
                    </div>
                    <div className="mb-3 px-3">
                        <label className="form-label">Price</label>
                        <input defaultValue={price} name='price' required type="text" className="form-control" />
                    </div>
                    <div className="mb-3 px-3">
                        <label className="form-label">Discount</label>
                        <input defaultValue={discount} name='discount' type="text" className="form-control" />
                    </div>
                    <div className="mb-3 px-3">
                        <label className="form-label">Specification</label>
                        <input defaultValue={specification} name='specification' type="text" className="form-control" />
                    </div>
                    <div className="mb-3 px-3">
                        <label className="form-label">In Stock</label>
                        <input defaultValue={availableStock} name='availableStock' required type="text" className="form-control" />
                    </div>

                </ModalBody>
                <ModalFooter>
                    <div className="hstack gap-2 justify-content-end px-3">
                        <button
                            type="button"
                            className="btn btn-light"
                            onClick={() => {
                                setmodal_list(null);
                            }}
                        >
                            Close
                        </button>
                        <button type="submit" className="btn btn-success" id="add-btn">
                            Edit Product
                        </button>
                    </div>
                </ModalFooter>
            </form>
        </Modal>
    );
};

export default EditModal;