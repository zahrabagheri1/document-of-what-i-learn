import React from 'react'
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

let renderCount = 0;

function YouTubeFrom() {
  const form = useForm();
  const { register, control } = form;
  // const { name, ref, onChange, onBlur } = register('username');

  renderCount++;
  return (
    <div>
      <h1>YouTube From ({renderCount/2})</h1>
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

      <DevTool control={control} />
    </div>
  )
}

export default YouTubeFrom