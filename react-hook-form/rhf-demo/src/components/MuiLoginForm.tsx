import React from 'react'
import { TextField, Button, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';


type FormData = {
    email: string;
    password: string;
}
function MuiLoginForm() {
    const form = useForm<FormData>({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const { register, handleSubmit, formState: { errors }, control } = form;

    const onSubmit = (data: FormData) => {
        console.log(data)
    }


    return (
        <>
            <h1>Mui Login Form</h1>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>

                <Stack direction='row' spacing={2} width={400}>
                    {/* Email  */}
                    <TextField label='Email' type='email'
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            }
                        })}
                        error={!!errors.email}
                        helperText={errors?.email?.message}
                    />

                    {/* Password   */}
                    <TextField label='Password' type='password'
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is required'
                            }
                        })}
                        error={!!errors.password}
                        helperText={errors?.password?.message}
                    />

                    <Button type='submit' variant='contained' color='primary'>
                        Login
                    </Button>

                </Stack>
            </form>

            <DevTool control={control} />
        </>
    )
}

export default MuiLoginForm