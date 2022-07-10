import React, { useState } from 'react';
import './AddProduct.css'

const AddProduct = () => {

    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const onChangePicture = e => {
        if (e.target.files[0]) {
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        const product = {
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
        console.log(product);
        const postProducts = async () => {
            const response = await fetch("http://localhost:5000/api/product/", {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(product)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        console.log(data)
                        alert('Product added successfully')
                    }
                    else {
                        alert("Could not add product.")
                        console.log('something went rong')
                    }
                })

        }
        postProducts()
    }

    return (
        <div className='mb-5 mx-auto' style={{ width: '90%' }}>
            <form onSubmit={handleSubmit} className='needs-validation formBox' noValidate>
                <h2 className='mb-4'>Add product</h2>
                <label htmlFor="exampleInputEmail1" className="form-label">Media</label>
                <div className='d-flex justify-content-around mb-2'>
                    <div>
                        <label className='inputField' htmlFor="thumbnail">
                            <i className="fa-solid fa-credit-card"></i>
                            <span>Upload Thumbnail</span>

                        </label>
                        <input className="form-control" name='thumbnail' type="file" id='thumbnail' style={{ display: 'none' }} onChange={onChangePicture} />
                    </div>
                    <div>
                        <label className='inputField' htmlFor="imageinput">
                            <i className="fa-solid fa-image"></i>
                            <span>Upload Image</span>

                        </label>
                        <input className="form-control" name='image' type="file" id='imageinput' style={{ display: 'none' }} onChange={onChangePicture} />
                    </div>
                    <div>
                        <label className='inputField' htmlFor="video">
                            <i className="fa-solid fa-film"></i>
                            <span>Upload Video</span>

                        </label>
                        <input className="form-control" name='video' type="file" id='video' style={{ display: 'none' }} onChange={onChangePicture} />
                    </div>

                </div>
                <div className="mb-3">
                    <label htmlFor='productName' className="form-label">Name</label>
                    <input name='name' id='productName' required type="text" className="form-control" />
                </div>
                <label htmlFor='productName' className="form-label">Category</label>
                <select name='category' className="form-select mb-3" aria-label="Category" required>
                    <option value="Face">Face</option>
                    <option value="Body">Body</option>
                    <option value="Eye">Eye</option>
                    <option value="Hair Care">Hair Care</option>
                </select>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea name='description' required type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Instructions</label>
                    <textarea name='instruction' type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Usage</label>
                    <textarea name='usage' type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input name='price' required type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Discount</label>
                    <input name='discount' type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Specification</label>
                    <input name='specification' type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">In Stock</label>
                    <input name='availableStock' required type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Add</button>
            </form>

        </div >
    );
};

export default AddProduct;