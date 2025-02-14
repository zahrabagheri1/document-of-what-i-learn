import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

let renderCount = 0;

type FormData = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  }
  phoneNumbers: string[];
  phNumbers: {
    number: string;
  }[]
}

function YouTubeFrom() {
  const form = useForm<FormData>({
    defaultValues: {
      username: "Batman",
      email: "",
      channel: "",
      social: {
        twitter: "",
        facebook: ""
      },
      phoneNumbers: ["", ""],
      phNumbers: [{ number: "" }],

    }
    // defaultValues: async () => {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    //   const data = await response.json();
    //   return {
    //     username: "batman",
    //     email: data.email,
    //     channel: data.channel
    //   }
    // }
  });
  const { register, control, handleSubmit, formState } = form;
  // const { name, ref, onChange, onBlur } = register('username');
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: 'phNumbers',
    control
  })

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted", data)
  }

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
            },
            // validate: (fieldValue) => {
            //   return (fieldValue !== "admin@example.com" || "Enter a different email address")
            // }
            validate: {
              notAdmin: (fieldValue) => {
                return (fieldValue !== "admin@example.com" || "Enter a different email address")
              },
              notBlackListed: (fieldValue) => {
                return !fieldValue.endsWith("baddomain.com") || "This domain is not supported"
              }
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


        {/* Social */}
        <div className='form-control'>
          <label htmlFor="twitter">Twitter</label>
          <input type="text" id="twitter" {...register('social.twitter')} />
        </div>

        <div className='form-control'>
          <label htmlFor="facebook">Facebook</label>
          <input type="text" id="facebook" {...register('social.facebook')} />
        </div>

        {/* Phone Numbers */}
        <div className='form-control'>
          <label htmlFor='primary-phone'>Primary Phone Number</label>
          <input type="text" id="primary-phone" {...register('phoneNumbers.0')} />
        </div>

        <div className='form-control'>
          <label htmlFor='secondary-phone'>Secondary Phone Number</label>
          <input type="text" id="secondary-phone" {...register('phoneNumbers.1')} />
        </div>

        <div>
          <label>List of Phone Numbers</label>
          <div>
            {
              fields.map((field, index) => {
                return (
                  <div className='form-control' key={field.id}>
                    <input type='text' {...register(`phNumbers.${index}.number` as const)} />
                    {
                      index > 0 && (
                        <button type='button' onClick={()=> remove(index)}>Remove</button>
                      )
                    }
                  </div>
                )
              })
            }
            <button  type='button' onClick={() => append({ number: "" })}>Add phone number</button>
          </div>
        </div>

        <button type='submit'>Submit</button>
      </form>

      <DevTool control={control} />
    </div>
  )
}

export default YouTubeFrom