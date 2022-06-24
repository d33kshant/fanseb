import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
} from 'reactstrap';

import { Link } from 'react-router-dom';


const ProductsList = () => {
  const [modal_list, setmodal_list] = useState(false);
  function tog_list() {
    setmodal_list(!modal_list);
  }

  const [modal_delete, setmodal_delete] = useState(false);
  function tog_delete() {
    setmodal_delete(!modal_delete);
  }

  useEffect(() => {
    const attroptions = {
      valueNames: [
        'name',
        'born',
        {
          data: ['id'],
        },
        {
          attr: 'src',
          name: 'image',
        },
        {
          attr: 'href',
          name: 'link',
        },
        {
          attr: 'data-timestamp',
          name: 'timestamp',
        },
      ],
    };

    const existOptionsList = {
      valueNames: ['contact-name', 'contact-message'],
    };
  });

  return (
    <React.Fragment>
      <div className='my-5 mx-auto shadow py-5' style={{width:'70%'}}>
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
                            onClick={() => tog_list()}
                          >
                            <i className="ri-add-line align-bottom me-1"></i>{' '}
                            Add 
                          </Button>
                        </div>
                      </Col>
                    </Row>

                    <div className="table-responsive table-card mt-3 mb-1">
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
                              Description
                            </th>
                            <th className="sort" data-sort="category">
                              Category
                            </th>
                            <th className="sort" data-sort="tags">
                              Tags
                            </th>
                            <th className="sort" data-sort="status">
                              Specifications
                            </th>
                            
                          </tr>
                        </thead>
                        <tbody className="list form-check-all">

                          <tr>
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
                            <td className="name">Jeans</td>
                            <td className="description">Black jeans</td>
                            <td className="category">Jeans</td>
                            <td className="tags">Jeans, Black</td>
                            <td className="specifications">Black jeans</td>
                          </tr>

                          <tr>
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
                            <td className="name">Denim Jacket</td>
                            <td className="description">Denim Jacket</td>
                            <td className="category">Jacket</td>
                            <td className="tags">Denim, Jacket, Blue</td>
                            <td className="specifications">Blue denim jacket</td>
                          </tr>

                          <tr>
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
                            <td className="name">Jeans</td>
                            <td className="description">Blue jeans</td>
                            <td className="category">Jeans</td>
                            <td className="tags">Jeans, Blue</td>
                            <td className="specifications">Blue jeans</td>
                          </tr>

                          
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

      {/* Add Modal */}
      <Modal className=""
        isOpen={modal_list}
        toggle={() => {
          tog_list();
        }}
        centered
      >
        <div className="modal-header bg-light p-3">
          <h5 className="modal-title" id="exampleModalLabel">
            {' '}
            Add Product{' '}
          </h5>
          <Button
            type="button"
            onClick={() => {
              setmodal_list(false);
            }}
            className="btn-close"
            aria-label="Close"
          ></Button>
        </div>
        <form>
          <ModalBody>
          

            <div className="mb-3 px-3">
              <label htmlFor="customername-field" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="customername-field"
                className="form-control"
                placeholder="Enter Name"
                required
              />
            </div>

            <div className="mb-3 px-3">
              <label htmlFor="description-field" className="form-label">
                Description
              </label>
              <input
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
                type="text"
                className="form-control"
                placeholder="Enter category"
                required
              />
            </div>

            <div className="mb-3 px-3">
              <label htmlFor="phone-field" className="form-label">
                Tags
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter category"
                required
              />
            </div>

            <div className="mb-3 px-3">
              <label htmlFor="phone-field" className="form-label">
                Images
              </label>
              <input
                type="file"
                className="form-control"
                placeholder="Enter category"
                required
              />
            </div>

            <div className="mb-3 px-3">
              <label htmlFor="phone-field" className="form-label">
                Videos
              </label>
              <input
                type="file"
                className="form-control"
                placeholder="Enter category"
                required
              />
            </div>

            <div className="mb-3 px-3">
              <label htmlFor="phone-field" className="form-label">
                Thumbnail
              </label>
              <input
                type="file"
                className="form-control"
                placeholder="Enter category"
                required
              />
            </div>

            <div className="mb-3 px-3">
              <label htmlFor="phone-field" className="form-label">
                Specifications
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter category"
                required
              />
            </div>

            <div className="mb-3 px-3">
              <label htmlFor="status-field" className="form-label">
                Select Colors
              </label>
              <select
                className="form-control"
                data-trigger
                name="status-field"
                id="status-field"
              >
                <option value="">Colours</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="blue">Blue</option>
                <option value="black">Black</option>

              </select>
            </div>

            <div className="mb-3 px-3">
              <label htmlFor="status-field" className="form-label">
                Size
              </label>
              <select
                className="form-control"
                data-trigger
                name="status-field"
                id="status-field"
              >
                <option value="">Size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>

            <div className="mb-3 px-3">
              <label htmlFor="status-field" className="form-label">
                Type
              </label>
              <select
                className="form-control"
                data-trigger
                name="status-field"
                id="status-field"
              >
                <option value="">Type</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
                <option value="type4">Type 4</option>
                <option value="type5">Type 5</option>

              </select>
            </div>

          </ModalBody>
          <ModalFooter>
            <div className="hstack gap-2 justify-content-end px-3">
              <button
                type="button"
                className="btn btn-light"
                onClick={() => setmodal_list(false)}
              >
                Close
              </button>
              <button type="submit" className="btn btn-success" id="add-btn">
                Add Product
              </button>
            </div>
          </ModalFooter>
        </form>
      </Modal>

      {/* Remove Modal */}
      <Modal
        isOpen={modal_delete}
        toggle={() => {
          tog_delete();
        }}
        className="modal fade zoomIn"
        id="deleteRecordModal"
        centered
      >
        <div className="modal-header">
          <Button
            type="button"
            onClick={() => setmodal_delete(false)}
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
                Are you Sure You want to Remove this Record ?
              </p>
            </div>
          </div>
          <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
            <button
              type="button"
              className="btn w-sm btn-light"
              onClick={() => setmodal_delete(false)}
            >
              Close
            </button>
            <button
              type="button"
              className="btn w-sm btn-danger "
              id="delete-record"
            >
              Yes, Delete It!
            </button>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default ProductsList;
