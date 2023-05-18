import React from 'react'

const ProfileCard = ({user}) => {

    const {name, age} = user;

    const handleClickButton = () => {
        console.log('Click button')
    }
    
      const handleChangeValue = (event) =>{
        console.log(event.target.value)
      }

      const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log("Form submit")
      }


      return (
    <form onSubmit={handleSubmitForm}>
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
        <input type='text' onChange={handleChangeValue} />
        <button type='submit'>Submit</button>

        <button onClick={handleClickButton}>Say hello</button>
    </form>
  );
};

export default ProfileCard;