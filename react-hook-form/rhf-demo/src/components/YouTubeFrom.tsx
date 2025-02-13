import React from 'react'
import { useForm } from 'react-hook-form';

function YouTubeFrom() {

  const form = useForm();
  
  return (
    <div>
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name='username' />

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name='email' />

            <label htmlFor="channel">Channel</label>
            <input type="text" id="channel" name='channel' />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default YouTubeFrom