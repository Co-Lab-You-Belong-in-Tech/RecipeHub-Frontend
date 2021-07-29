import React, {useState} from 'react';
const request = require('request')

const intialValue = {
  url_name: '',
  url_body: '',
}

function App() {
  const [url, setUrl] = useState({...intialValue});

  const handleChange = ({target}) => {
    setUrl({...url, [target.name]: target.value});
  };

  const submitHandler = (event) => {
    event.preventDefault()
    data();
  };

  const data = () => {
    request(`${url}`, function (error, response, body) {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body);
      setUrl(body)
    });
  }
  const {url_name} = url
  console.log('url body', url_name);
  
  return (
    <div className="App">
      <form onSubmit={submitHandler}
      className='url'>
      <label htmlFor='url' className='d-block'>
        Enter URL Here:
      </label>
      <input 
      name='url_name'
      type='url'
      required
      onChange={handleChange}
      value={url.url_name}
      />
      <button type='submit' className='btn btn-primary mt-3'>Submit</button>
      </form>
    </div>
  );
}

export default App;
