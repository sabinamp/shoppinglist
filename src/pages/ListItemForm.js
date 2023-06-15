import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import FormItem from '../components/FormItem';
import Button from '../components/Button';
import { useState } from 'react';

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const SubmitButton = styled(Button)`
  background: blue;
  margin: 2% 0;
`;


const ListItemForm=({onSubmitItemForm})=> {
  let navigate = useNavigate();
  const { listId } = useParams();
  const [title, setTitle]=useState('');
  const [price, setPrice]=useState(0.00);
  const [quantity, setQuantity]=useState(0.0);
  const [isEmptyTitle, setIsEmptyTitle] = useState(true);
  const [isValidQuantity, setIsValidQuantity] = useState(false);
  const [isValidPrice, setIsValidPrice]= useState(false);


  const submitHandler = async (event) => {
    event.preventDefault();
    const newItem = {
      title: title,
      price: price,
      quantity: quantity
    };
    try {
      await onSubmitItemForm(newItem);
      navigate(`/list/${listId}`); // Omit optional second argument
      //setTitle('');
      //setQuantity(0);
      //setPrice(0.00);
    } catch (error) {
      navigate("/error", {
        state: { message: "Failed to submit form" },
        replace: false,
       }); // Pass optional second argument
    }
  };
  
  const titleChangeHandler=(e)=>{ 
    const titleVal = e.target.value;
    if(titleVal.trim().length > 0){
      setTitle(titleVal);
      setIsEmptyTitle(false);
    }else{
      setIsEmptyTitle(true);
    }
    /* console.log(`title: ${title}`) */
  };

  const quantityChangeHandler=(e)=>{
    const amountVal = e.target.value;
    if( Number(amountVal) > 0.0){
      setIsValidQuantity(true);
    }
    setQuantity(amountVal);
  }

  const priceChangeHandler=(e)=>{
    const priceVal= e.target.value;
    if( Number(priceVal) >= 0.01){
      setIsValidPrice(true);
    }
    setPrice(priceVal);
  }
 

  return (
    <>
      {navigate && <NavBar goBack={() => navigate(-1)} title={`Add Item`} />}
      <FormWrapper>
        <form  onSubmit={submitHandler}>
          <FormItem id='title' label='Title' placeholder='Insert title' value={title} handleOnChange={titleChangeHandler}/>
          <FormItem id='quantity' label='Quantity' type='number' placeholder='0' value={quantity} handleOnChange={quantityChangeHandler}/>
          <FormItem id='price' label='Price' type='number' placeholder='0.00' min='0.01' step='0.01' value={price} handleOnChange={priceChangeHandler}/>
          <SubmitButton>Add Item</SubmitButton>
        </form>
      </FormWrapper>
    </>
  );
}

export default ListItemForm;