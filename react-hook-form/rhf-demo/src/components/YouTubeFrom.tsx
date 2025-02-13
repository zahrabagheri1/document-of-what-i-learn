import React from 'react'
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

let renderCount = 0;

type FormData = {
  username: string;
  email: string;
  channel: string;
}

function YouTubeFrom() {
  const form = useForm<FormData>();
  const { register, control, handleSubmit } = form;
  // const { name, ref, onChange, onBlur } = register('username');

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted", data)
  }

  renderCount++;
  return (
    <div>
      <h1>YouTube From ({renderCount / 2})</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username</label>
        <input type="text" id="username"
          {...register('username', { required: "Username is required" })}
        // name={name} ref={ref} onChange={onChange} onBlur={onBlur} 
        />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register('email', {
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Invalid email format'
          }
        })} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register('channel')} />

        <button type='submit'>Submit</button>
      </form>

      <DevTool control={control} />
    </div>
  )
}

export default YouTubeFrom