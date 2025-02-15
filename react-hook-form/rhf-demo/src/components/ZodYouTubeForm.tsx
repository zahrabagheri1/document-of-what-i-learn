import React from 'react'
import { DevTool } from '@hookform/devtools'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod' 

const schema= z.object({
    username: z.string().nonempty({message: 'Username is required'}),
    email: z.string().email({message: 'Invalid email'}),
    channel: z.string().nonempty({message: 'Channel is required'})
})

type FormData = {   
    username: string;
    email: string;
    channel: string;
}

function ZodYouTubeForm() {
    const form = useForm<FormData>({
        defaultValues: {
            username: '',
            email: '',
            channel: ''
        },
        resolver: zodResolver(schema),
    })

    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

  return (
    <div>
        <h1>Zod YouTube Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* username */}        
            <div className='form-control'>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" {...register('username', {required: {value: true, message: 'Username is required'  }})} />
                <p className='error'>{errors.username?.message}</p>
            </div>

            {/* email */}
            <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register('email', {required: {value: true, message: 'Email is required'}})}/>
                <p className='error'>{errors.email?.message}</p>
            </div>  

            {/* channel */}
            <div className='form-control'>
                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" {...register('channel',{required: {value: true, message: 'Channel is required'}})}/>
                <p className='error'>{errors.channel?.message}</p>
            </div>  
            
            <button type='submit'>Submit</button>        
            

        </form>
        <DevTool control={control} />
    </div>
  )
}

export default ZodYouTubeForm