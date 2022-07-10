import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import useBrandProducts from '../../hooks/useBrandProducts';
import '../../styles/ManageProduct.css'
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';

const ManageProduct = () => {
    const navigate = useNavigate()
    const [products] = useBrandProducts()
    const [modal_list, setmodal_list] = useState(null);

    const [modal_delete, setmodal_delete] = useState(null);

    return (
        <React.Fragment>
            <div className='my-5 mx-auto shadow py-5' style={{ width: '100%' }}>
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-">Products</h4>
                                </CardHeader>

                                <CardBody>
                                    <div id="customerList">
                                        <Row className="g-4 mb-3">
                                            <Col className="col-sm-auto">
                                                <div>
                                                    <Button
                                                        color="success"
                                                        className="add-btn"
                                                        id="create-btn"
                                                        onClick={() => navigate('/dashboard/addProduct')}
                                                    >
                                                        <i className="ri-add-line align-bottom me-1"></i>{' '}
                                                        Add
                                                    </Button>
                                                </div>
                                            </Col>
                                        </Row>

                                        <div className="table-responsive table-card mt-3 mb-1 mx-auto">
                                            <table
                                                className="table align-middle table-nowrap"
                                                id="customerTable"
                                            >
                                                <thead className="table-light">
                                                    <tr>
                                                        <th scope="col" style={{ width: '50px' }}>
                                                            <div className="form-check">
                                                                {/* <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    id="checkAll"
                                                                    value="option"
                                                                /> */}
                                                            </div>
                                                        </th>
                                                        <th className="sort" data-sort="customer_name">
                                                            Name
                                                        </th>
                                                        <th className="sort" data-sort="description">
                                                            Category
                                                        </th>
                                                        <th className="sort" data-sort="category">
                                                            Price
                                                        </th>
                                                        <th className="sort" data-sort="tags">
                                                            In Stock
                                                        </th>
                                                        <th className="sort" data-sort="status">

                                                        </th>

                                                    </tr>
                                                </thead>
                                                <tbody className="list form-check-all">

                                                    {
                                                        products.map(product =>
                                                            <tr key={product._id}>
                                                                <th scope="row">
                                                                    <div className="form-check">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            name="checkAll"
                                                                            value="option1"
                                                                        />
                                                                    </div>
                                                                </th>
                                                                <td className="id" style={{ display: 'none' }}>
                                                                    <Link to="#" className="fw-medium link-primary">
                                                                        #VZ2101
                                                                    </Link>
                                                                </td>
                                                                <td className="name">{product.name}</td>
                                                                <td className="category">{product.category}</td>
                                                                <td className="price">₹{product.price}</td>
                                                                <td className="availableStock">{product.availableStock}</td>
                                                                <td>
                                                                    <button
                                                                        onClick={() => setmodal_list(product)}
                                                                        className='btn-light manageBtn'>
                                                                        <i className="fa-solid fa-pencil"></i>
                                                                    </button>
                                                                    <button className='btn-light manageBtn'
                                                                        onClick={() => setmodal_delete(product)}
                                                                    >
                                                                        <i className="fa-solid fa-trash-can"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>)
                                                    }
                                                </tbody>
                                            </table>
                                            <div className="noresult" style={{ display: 'none' }}>
                                                <div className="text-center">
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/msoeawqm.json"
                                                        trigger="loop"
                                                        colors="primary:#121331,secondary:#08a88a"
                                                        style={{ width: '75px', height: '75px' }}
                                                    ></lord-icon>
                                                    <h5 className="mt-2">Sorry! No Result Found</h5>
                                                    <p className="text-muted mb-0">
                                                        We've searched more than 150+ Orders We did not find
                                                        any orders for you search.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-end">
                                            <div className="pagination-wrap hstack gap-2">
                                                <Link
                                                    className="page-item pagination-prev disabled"
                                                    to="#"
                                                >
                                                    Previous
                                                </Link>
                                                <ul className="pagination listjs-pagination mb-0"></ul>
                                                <Link className="page-item pagination-next" to="#">
                                                    Next
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* edit modal */}
            {modal_list && <EditModal
                modal_list={modal_list}
                setmodal_list={setmodal_list}
            ></EditModal>}

            {/* delete confirmation modal */}
            {modal_delete && <DeleteModal
                modal_delete={modal_delete}
                setmodal_delete={setmodal_delete}
            ></DeleteModal>}
        </React.Fragment>
    );
};

export default ManageProduct;