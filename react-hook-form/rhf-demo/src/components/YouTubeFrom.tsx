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
  const { register, control, handleSubmit, formState } = form;
  // const { name, ref, onChange, onBlur } = register('username');
  const { errors } = formState;

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted", data)
  }

  console.log(errors)
  renderCount++;
  return (
    <div>
      <h1>YouTube From ({renderCount / 2})</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Username */}
        <div className='form-control'>
          <label htmlFor="username">Username</label>
          <input type="text" id="username"
            {...register('username', { required: "Username is required" })}
          // name={name} ref={ref} onChange={onChange} onBlur={onBlur} 
          />
          <p className='error'>{errors.username?.message}</p>
        </div>

        {/* E-mail */}
        <div className='form-control'>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" {...register('email', {
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email format'
            }
          })} />
          <p className='error'>{errors.email?.message}</p>
        </div>

        {/* Channel */}
        <div className='form-control'>
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...register('channel', { required: { value: true, message: "Channel is required" } })} />
          <p className='error'>{errors.channel?.message}</p>
        </div>

        <button type='submit'>Submit</button>
      </form>

      <DevTool control={control} />
    </div>
  )
}

export default YouTubeFrom