import React, { useEffect } from 'react'
import { useForm, useFieldArray, FieldErrors } from 'react-hook-form';
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
  }[];
  age: number;
  dob: Date;
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
      age: 0,
      dob: new Date()
    },
    // mode: "onBlur", //? validate when the user leaves the field
    // mode: 'onChange' //? validate when the user changes the field
    // mode: 'onTouched', //? validate when the user touches the field - when we use this mode, it can lead to a performance issue and multiple re-renders
    // mode: 'onValid', //? validate when the user enters a valid value
    // mode: 'onInvalid', //? validate when the user enters an invalid value
    // mode: 'onSubmit', //? default mode
    mode: 'all', //? validate all the time

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
  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
    reset
  } = form;

  // const { name, ref, onChange, onBlur } = register('username');
  const {
    errors,
    touchedFields,
    dirtyFields,
    isDirty,
    isValid,
    isSubmitting,
    isSubmitted,
    isSubmitSuccessful,
    submitCount
  } = formState;

  console.log({isSubmitting, isSubmitted, isSubmitSuccessful, submitCount})
  // console.log({touchedFields, dirtyFields, isDirty, isValid})


  const { fields, append, remove } = useFieldArray({
    name: 'phNumbers',
    control
  })

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted", data)
  }

  const onError = (errors: FieldErrors<FormData>) => {
    console.log("Form Error", errors)
  }

  const handleGetValue = () => {
    console.log("Get Value", getValues(["username", "channel"]))
  }

  const handleSetValue = () => {
    setValue("username", "", {
      shouldDirty: true,
      shouldValidate: true,
      shouldTouch: true
    })
  }

  // const watchUsername = watch(['username', 'email']);
  // const watchForm = watch();

  // useEffect(() => {
  //   const subscription = watch((value) => {
  //     console.log(value)
  //   })

  useEffect(()=>{
    if(isSubmitSuccessful){
      reset()
    }
  },[isSubmitSuccessful, reset])


  //   return () => subscription.unsubscribe()
  // }, [watch])

  renderCount++;
  return (
    <div>
      <h1>YouTube From ({renderCount / 2})</h1>
      {/* <h1>Username: {watchUsername}</h1> */}
      {/* <h1>Form: {JSON.stringify(watchForm)}</h1> */}

      <form className='form' onSubmit={handleSubmit(onSubmit, onError)} noValidate>
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
                },
                emailAvailable: async(fieldValue)=>{
                  const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`)
                  const data = await response.json();
                  return data.length === 0 || "Email is already exists"
                }
              }
            })} />
            <p className='error'>{errors.email?.message}</p>
          </div>


          {/* Channel */}
          <div className='form-control'>
            <label htmlFor="channel">Channel</label>
            <input type="text" id="channel" {...register('channel', {
              required: {
                value: true,
                message: "Channel is required"
              }
            })} />
            <p className='error'>{errors.channel?.message}</p>
          </div>

          {/* Age */}
          <div className='form-control'>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" {...register('age', {
              valueAsNumber: true,
              required: {
                value: true,
                message: "Age is required"
              }
            })} />
            <p className='error'>{errors.age?.message}</p>
          </div>

          {/* Date of Birth */}
          <div className='form-control'>
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" {...register('dob', {
              valueAsDate: true,
              required: {
                value: true,
                message: "Date of Birth is required"
              }
            })} />
            <p className='error'>{errors.dob?.message}</p>
          </div>

          {/* Social */}
          <div className='form-control'>
            <label htmlFor="twitter">Twitter</label>
            <input type="text" id="twitter" {...register('social.twitter', {
              // disabled: true, //? disable the field and it show undefined in the console
              disabled: watch("channel") === "",
              required: "Enter twitter profile"
            })} />
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
                          <button type='button' onClick={() => remove(index)}>Remove</button>
                        )
                      }
                    </div>
                  )
                })
              }
              <button type='button' onClick={() => append({ number: "" })}>Add phone number</button>
            </div>
          </div>

          {/* <button type='submit' disabled={!isDirty || !isValid || isSubmitting}>Submit</button> */}
          <button type='submit' disabled={!isDirty || isSubmitting}>Submit</button>
          <button type='button' onClick={handleGetValue}>Get value</button>
          <button type='button' onClick={() => reset()}>Reset</button>
          <button type='button' onClick={handleSetValue}>Set value</button>
      </form>

      <DevTool control={control} />
    </div>
  )
}

export default YouTubeFrom