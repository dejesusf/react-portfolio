import React, {useState} from 'react';

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleChange(e) {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}, for your submission! At this point in time, it will not be received as the backend code for the form has not yet been created.`)

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <main>
      <div className="row">
        <div className="column">
          <div className="top">
            <h1>CONTACT ME</h1>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="middle">
            <p>Hi! If you'd like to contact me, please fill out the form below.</p>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor='name'>Name: </label>
              <input type='text' placeholder="Name" name="name" onChange={handleChange} value={name} />
              <br />
              <label htmlFor='email'>Email: </label>
              <input type='email' placeholder="Email" onChange={handleChange} value={email} name="email" />
              <br />
              <label htmlFor='message'>Message: </label>
              <input type='text' placeholder="Message" onChange={handleChange} value={message} name="message" />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}