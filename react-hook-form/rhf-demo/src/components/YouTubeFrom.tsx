import React from 'react'
import { useForm } from 'react-hook-form';

function YouTubeFrom() {

  const form = useForm();
  const { register } = form;
  // const { name, ref, onChange, onBlur } = register('username');


  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" 
        {...register('username')}
        // name={name} ref={ref} onChange={onChange} onBlur={onBlur} 
        />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register('email')} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register('channel')} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default YouTubeFrom