import Authentication from 'api/axios/Authentication'
import { API_CONFIG } from 'api/config'
import Action from 'components/shared/Action'
import Button from 'components/shared/Button'
import Card from 'components/shared/Card'
import Container from 'components/shared/Container'
import InputField from 'components/shared/InputField'
import Logo from 'components/template/Logo'
import { useFormik } from 'formik'
import ClipLoader from "react-spinners/ClipLoader";
import React, { useState } from 'react'
import { setLayout } from 'store/layout/layoutSlice'
import { useDispatch } from 'react-redux'
import { LAYOUTS } from 'constants'
import { useNavigate } from 'react-router-dom'
import { storeCredentials } from 'store/auth/sessionSlice'
export default function Login() {
    const dispatch = useDispatch()
    const natvigate = useNavigate()
    let [loading, setLoading] = useState(false);
    const [resp_error, setError] = useState('')
    const onSubmit = (values) => {
        setLoading(true)
        new Authentication().authenticate({
            endpoint_extension: API_CONFIG.endpoint_extensions.auth,
            body: {
                identifier: values.email,
                password: values.password
            }
        }).then(resolve => {
            setLoading(false)
            if (resolve.status) {

                dispatch(storeCredentials(resolve.data))
                dispatch(setLayout(LAYOUTS.ADMIN_LAYOUT))
                natvigate('/dbd')
            }
            else {
                setError("Invalid credentials!")
                setTimeout(() => {
                    setError("")
                }, 3000);
            }
        })
    }
    const { values, touched, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            employee_number: '1234567890',
            password: '377529',
        },
        onSubmit
    })
    return (
        <Container className="flex items-center justify-center h-[100vh]">
            <div className="w-[100px] h-[100px] absolute bg-red-100 rounded-md"></div>
            {/* <div className="w-[50%] h-[100%] bg-defaultcolor absolute right-0 bg-coverd"></div> */}
            <Card className="w-[500px] h-[500px] bg-white shadow-dark border-0 flex items-center justify-center flex-col z-[5]">
                <Logo width={140} className='mb-2' />
                <h5 className='font-bold my-10 text-[20px] text-slate-700 mt-10'>Chilanga Cement Lunch</h5>
                <form onSubmit={handleSubmit} className="w-[83%] mt-10">
                    <h5 className='w-full items-center justify-center text-red-500 text-center'>{resp_error}</h5>
                    <div className="w-full grid grid-cols-1 gap-4">
                        <InputField
                            onChange={handleChange}
                            id="email"
                            value={values.employee_number}
                            labelClassName="text-black text-[15px]"
                            label="Employee number"
                            placeholder="Enter your employee number"
                            wrapperClass="w-full"
                            className="text-black h-[50px] text-[13px]"
                            required
                            type="text"
                        />
                        <InputField
                            onChange={handleChange}
                            id="password"
                            value={values.password}
                            labelClassName="text-black text-[15px]"
                            label="Password"
                            placeholder="Enter your password"
                            wrapperClass="w-full"
                            className="text-black h-[45px]"
                            required
                            type="password"
                        />
                        <div className="w-full h-full flex items-end justify-end mt-2">
                            <Button type="submit" disabled={loading ? true : false} onClick={handleSubmit} className="h-[45px] w-full border-0 bg-lafarge hover:bg-lafarge text-white font-bold" >
                                <span className="mr-3">{loading ? 'Please Wait' : 'Submit'}</span>
                                <ClipLoader
                                    color='#ffffff'
                                    loading={loading}
                                    size={20}
                                />
                            </Button>
                        </div>
                    </div>
                </form>
                <div className="my-5 w-[83%] flex items-center justify-between mt-10">
                    <Action title="Forgot Password?" className="text-defaultcolor text-[14px]" />
                    <Action title="Create Account" className="text-defaultcolor text-[14px]" />
                </div>
            </Card>
        </Container>
    )
}
