import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm('https://formspree.io/f/mleaoeqy');
  if (state.succeeded) {
    return <p>Thanks for contacting RecipeHub!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        margin: 'auto',
        width: '30%',
        padding: '10px',
        justifyContent: 'center',
        border: '2px solid blue',
        // eslint-disable-next-line no-dupe-keys
        padding: '5px',
        boxShadow: '2px 2px grey',
      }}
      action='https://formspree.io/f/mleaoeqy'
      method='post'
    >
      <label htmlFor='email'>Email Address</label>
      <input id='email' type='email' name='email' />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <label htmlFor='message'>Message</label>
      <textarea id='message' name='message' />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <button type='submit' disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
export default ContactForm;
