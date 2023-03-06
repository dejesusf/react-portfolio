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
              <tr>
                <td className="first">
                  <label htmlFor='name'>Name: </label>
                </td>
                <td className="center">
                  <input type='text' placeholder="Name" name="name" onChange={handleChange} value={name} />
                </td>
              </tr>
              <tr>
                <td className="first">
                  <label htmlFor='email'>Email: </label>
                </td>
                <td className="center">
                  <input type='email' placeholder="Email" onChange={handleChange} value={email} name="email" />
                </td>
              </tr>
              <tr>
                <td className="first">
                  <label htmlFor='message'>Message: </label>
                </td>
                <td className="center">
                  <textarea type='text' placeholder="Message" onChange={handleChange} value={message} name="message" />
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="center">
                  <button type="submit">Submit</button>
                </td>
              </tr>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}