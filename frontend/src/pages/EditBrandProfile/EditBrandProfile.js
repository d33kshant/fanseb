import React from 'react';

const EditBrandProfile = () => {

    const editProfile = async event => {
        event.preventDefault()
        const brandName = event.target.name.value
        const description = event.target.description.value
        const category = event.target.category.value
        const tags = event.target.tags.value
        const image = event.target.image.value
        const thumbnail = event.target.thumbnail.value
        const specification = event.target.specification.value
        const brand = { brandName, description, category, tags, image, thumbnail, specification }
        console.log(brand);
    }
    return (
        <div className='w-100 mx-auto'>
            <h2>Edit Profile</h2>
            <form onSubmit={editProfile}>
                <div className="mb-3 px-3">
                    <label htmlFor="customername-field" className="form-label">
                        Brand Name
                    </label>
                    <input
                        name='name'
                        type="text"
                        id="customername-field"
                        className="form-control"
                        placeholder="Enter Name"
                        required
                    />
                </div>

                <div className="mb-3 px-3">
                    <label htmlFor="description-field" className="form-label">
                        Brand Description
                    </label>
                    <textarea
                        name='description'
                        type="text"
                        className="form-control"
                        placeholder="Enter description"
                        required
                    />
                </div>

                <div className="mb-3 px-3">
                    <label htmlFor="phone-field" className="form-label">
                        Category
                    </label>
                    <input
                        name='category'
                        type="text"
                        className="form-control"
                        placeholder="Enter category"
                    />
                </div>

                <div className="mb-3 px-3">
                    <label htmlFor="phone-field" className="form-label">
                        Tags
                    </label>
                    <input
                        name='tags'
                        type="text"
                        className="form-control"
                        placeholder="Enter category"
                    />
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
                    // required
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
                    // required
                    />
                </div>

                <div className="mb-3 px-3">
                    <label htmlFor="phone-field" className="form-label">
                        Specifications
                    </label>
                    <input
                        name='specification'
                        type="text"
                        className="form-control"
                        placeholder="Enter category"
                    />
                </div>


                <button type="submit" className="btn btn-success w-100" id="add-btn">
                    Edit Profile
                </button>

            </form>
        </div >
    );
};

export default EditBrandProfile;
