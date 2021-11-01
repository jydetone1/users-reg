import React, {useState} from 'react'
import Eye from '../components/icons/Eye'
import "../components/Form.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Gender from './Gender';


const schema = yup.object().shape({
    email: yup.string().email().required("email is required"),
    password: yup.string().required("password is required").min(6).max(15),
    confirmPassword: yup.string().required().oneOf([yup.ref("password"), null]),
  });

const Form =() => {
    const { register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema),
      });
    
    const [visible, setVisibilty] = useState(false)
    const[shown, setShown] = useState(false)

    const passwordVisitbilty  = (e) => {
        setVisibilty(!visible)
    }

    const passwordShown = (e) => {
        setShown(!shown)
    }
    
    const submitForm = (data) => {
        reset(alert(`Gender:${data.gender} Email:${data.email} password:${data.password} confirmPassword:${data.confirmPassword}`))
       
      }

    return (
        <div> 
            <section className="users__field">
              <div className="container">
                 <form onSubmit={handleSubmit(submitForm)}noValidate> 
                   <Gender inputRef= {register}/>
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label fields_input">E-mail</label>
                        <input 
                           type="email" 
                           name ="email"
                           className="form-control p-3 rounded-box" 
                           id="email" 
                           placeholder="email"
                           {...register('email')} 
                           autoComplete="off"
                         />
                          <p className="text-danger pt-1"> {errors.email?.message}</p>
                    </div>

                    <div className="mb-4 right__eye">
                        <label htmlFor="password" className="form-label fields_input">Create Password</label>
                        <input 
                           type={visible ? "text" : "password"} 
                           name="password"
                           className="form-control p-3 rounded-box" 
                           id="password" 
                           placeholder="password"
                           {...register('password')} 
                           autoComplete="off"
                        />
                        <span onClick={passwordVisitbilty } className="eye__right"><Eye/></span>
                        <p className="text-danger pt-1">{errors.password?.message}</p>
                    </div>

                    <div className="mb-4 right__eye">
                        <label htmlFor="confirmPassword" className="form-label fields_input">confirm Password</label>
                        <input 
                          type={shown ? "text" : "password"} 
                          name="confirmPassword"
                          className="form-control p-3 rounded-box" 
                          id="confirmPassword" 
                          placeholder="confirm password"
                          {...register('confirmPassword')} 
                          autoComplete="off"
                        />
                        <span onClick={passwordShown} className="eye__right"><Eye/></span>
                        <p className="text-danger pt-1"> {errors.confirmPassword && "Passwords Should Match!"}</p>  
                    </div>

                    <div className="d-grid">
                      <button className="btn p-3" type="submit">Sign Up</button>
                    </div>
                    <span className="text-center account__location d-block mt-3">Already have an account? <a className="text-success" href="log">Log in</a></span>
                    <span className="text-center account__location d-block mt-2">Review privacy and disclosures <a className="text-success" href="here">here</a></span>
                  </form>
              </div>
            </section>
        </div>
      )
}


export default Form