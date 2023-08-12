import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';




function Addmodal({showmodal,setmodal,addproducthandler,setimage,setbrand,setdescription,settitle}){


     











    const closehandler=()=>{
        setmodal(false)
    }

    return(

        <Modal show={showmodal}>
        <Modal.Header closeButton>
          <Modal.Title>Product Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="enter url" onChange={(e)=>setimage(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="enter title"  onChange={(e)=>settitle(e.target.value)}/>

      </Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="enter description"  onChange={(e)=>setdescription(e.target.value)}/>

      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Brand</Form.Label>
        <Form.Control type="text" placeholder="enter Brand" onChange={(e)=>setbrand(e.target.value)} />
      </Form.Group>

      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closehandler}>
            Close
          </Button>
          <Button onClick={addproducthandler} variant="primary" >
            add product
          </Button>
        </Modal.Footer>
      </Modal>
    )


}
export default Addmodal