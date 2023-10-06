import React, {useState} from 'react';
import './landing.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const Buttonmodal = ()=>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState("");
    const [Fullname, setFullname] = useState("");



    const handleSubmit = async (e)=>{

      e.preventDefault();
      payWithPaystack();
      alert("details were sent");
      const url = "http://localhost/fundapi/users/loadData";
      const userdetails =   {
                  Fullname:Fullname,
                  email:email,
                  amount: amount
                  };
      try{
      alert("details were sent");
      
      const outcome = await axios.post(url,userdetails)
      console.log(outcome)
      //  .then(res=> {console.log(res)})
          }

      catch(err){
                   console.log(err)
                  }
    }

  

    function payWithPaystack(e) {
    e.preventDefault();
    const mypublic = 'pk_test_8034d18842cf55407594aa2516a13e53de32dacf'  
    let handler = PaystackPop.setup({
    key: mypublic, // Replace with your public key
    email: email,
    amount: amount * 100,
    currency: 'NGN',
    ref: 'K'+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();
}

    // const payWithPaystack = ()=> {
    //   const handler = PaystackPop.setup({
    //     key: 'pk_test_456836ae28dfc0480736747fc38b70f2b22d681f', 
    //     email,
    //     amount: amount * 100,
    //     currency: 'NGN',
    //     callback: (response)=> {
    //     const reference = response.reference;
    //     alert('Payment complete! Reference: ' + reference);
          
    //     },
    //     onClose: ()=> {
    //       alert('Transaction was not completed, window closed.');
    //     },
    //     });
    //     handler.openIframe();
    // }
    
    
    


return(

    <div>
        <button className='btn btn-info btn-md m-2' onClick={handleShow}>Donate</button>
    

        <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
        <Modal.Title>Enter details to complete payment</Modal.Title>
         </Modal.Header>

        <Modal.Body>
        <Form onSubmit={payWithPaystack}>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        value = {email}
        type="email"
        required
        id="email-address"
        placeholder="name@example.com"
        onChange = {(e)=>setEmail(e.target.value)}
        autoFocus
        />
        </Form.Group>

   
    <Form.Group className="mb-3">
      <Form.Label>Fullname</Form.Label>
      <Form.Control
        type="text"
        placeholder='Enter Full name'
        required
        value = {Fullname}
        id='fullname'
        onChange = {(e)=>setFullname(e.target.value)}
        autoFocus />
    </Form.Group>


    <Form.Group className="mb-3">
      <Form.Label>Amount</Form.Label>
      <Form.Control 
      type="tel" 
      placeholder='Enter Amount'
      required
      value = {amount}
      id='amount'
      onChange = {(e)=>setAmount(e.target.value)} 
      autoFocus />
    </Form.Group>

    <Modal.Footer>
  <Button variant="primary" onClick={handleClose}>
    cancel
  </Button>
  <Button type="submit" variant="warning" onClick={handleClose} >
    submit
  </Button>
 
  {/* <PaystackButton{...componentProps}/> */}
</Modal.Footer>

  </Form>
</Modal.Body>



</Modal>

</div>
)
}
export default Buttonmodal;