import { useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { updateUser } from '../Service/Auth.service'
import { useFormik } from 'formik'
import { ToastContainer, toast } from "react-toastify";

export default function Dashboard() {
  const userdata = JSON.parse(localStorage.getItem('users'))
  const initial = {
    _id: userdata._id,
    firstname: userdata.firstname,
    lastname: userdata.lastname,
    addressline1: userdata.address.addressline1,
    addressline2: userdata.address.addressline2,
    state: userdata.address.state,
    city: userdata.address.city,
    phone: userdata.phone,
    email: userdata.email,
  }

  const [user, setUser] = useState(false)
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: initial,
    onSubmit: async (values) => {
      const userupdate = await updateUser(values)
      setUser(false)
      toast.success("Update Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      if (userupdate.data.status) {
        this.userdata = JSON.parse(localStorage.getItem('users'))
       
      }
    },
  })

  const handleShow = () => setUser(true)
  const handleClose = () => setUser(false)

  return (
    <>
      <div>
        <br />
        <div className="row mb-3">
          <div className="col-md-4"></div>
          <div className="card bg-muted col-md-4">
            <button className="btn btn-lg btn-primary" onClick={handleShow}>
              Edit Profile
            </button>
            &nbsp;&nbsp;
            <div className="card header bold text-danger">
              <h1>My Profile 👤</h1>
            </div>
            <div className="card-body">
              <h5 className="card-title">Firstname : {userdata.firstname}</h5>
              <br />
              <h5 className="card-text">Lastname :{userdata.lastname}</h5>
              <br />
              <h5 className="card-text">
                Address Line1 :{userdata.address.addressline1}
              </h5>
              <br />
              <h5 className="card-text">State :{userdata.address.state}</h5>
              <br />

              <h5 className="card-text">Phone : {userdata.phone}</h5>
              <br />
              <h5 className="card-text">Email : {userdata.email}</h5>
              <br />
            </div>
          </div>
        </div>
      </div>

      <Modal show={user} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-6">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  value={values?.firstname}
                  name="firstname"
                  onChange={handleChange}
                />
               
                <Form.Label>Address Line1</Form.Label>
                <Form.Control
                  type="text"
                  value={values?.addressline1}
                  name="addressline1"
                  onChange={handleChange}
                />
               
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  value={values?.state}
                  name="state"
                  onChange={handleChange}
                />
               
             
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  value={values?.lastname}
                  name="lastname"
                  onChange={handleChange}
                />
                

                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  value={values?.city}
                  name="city"
                  onChange={handleChange}
                />
               
               <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  value={values?.phone}
                  name="phone"
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
