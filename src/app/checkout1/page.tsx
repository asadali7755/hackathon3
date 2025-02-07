"use client"
import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/products'
import { getCartItems } from '../actions/actions'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { BiChevronRight } from 'react-icons/bi'

const Checkout1 = () => {
    const [cartItems, setCartItems] = useState<Product[]>([])
        const [discount,setDiscount] = useState<number>(0)
        const [formValues,setFormValues] = useState({
            firstName :"",
            LastName: "",
            email: "",
            address:"",
            zipCode: "",
            city: "",
            phon: "",
        })

        const [formErrors,setFormErrors] = useState({
            firstName :false,
            LastName: false,
            email: false,
            address:false,
            zipCode: false,
            city: false,
            phon: false,
        })
        
        useEffect(()=>{
            setCartItems(getCartItems())
            const appliedDiscount = localStorage.getItem("appliedDiscount")
            if(appliedDiscount){
                setDiscount(Number(appliedDiscount))
            }
        },[])

       const subTotal = cartItems.reduce(
        (total,item)=> total + item.price * item.stockLevel,0 )
        const handleInputChange =(e:React.ChangeEvent<HTMLInputElement>) =>{
            setFormValues({
                ...formValues,
                [e.target.id]: e.target.value
            })
        }

        const validateForm = ()=>{
            const errors = {
                firstName: !formValues.firstName,
                LastName: !formValues.LastName,
                email:!formValues.email,
                phon:!formValues.phon,
                address:!formValues.address,
                zipCode:!formValues.zipCode,
                city: !formValues.city

            };
            setFormErrors(errors);
            return Object.values(errors).every((error)=>!error);
        }

        const handlePlaceOrder = ()=>{
            if(validateForm()){
                localStorage.removeItem("appliedDiscount")
            }
        }

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='mt-6'>
         <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
               <nav className='flex items-center gap-2 py-4'>
                <Link href={"/cart"}
                className='text-[#666666] hover:text-black transition text-sm'>
                cart
                </Link>
                <BiChevronRight className='w-4 h-4 text-[#666666]' />
                <span className='text-sm'>
                    CheckOut
                </span>
               </nav>
         </div>
      </div>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
         <div className='grid grid-col-1 lg-grid-col-2 gap-8'>
            <div className='bg-white border rounded-lg p-6 space-y-6'>
                <h2 className='text-lg font-semibold mb-4'>
                    OrderSummary
                </h2>
                {cartItems.length > 0 ?(

                   cartItems.map((item)=>(
                    <div key={item._id} className='flex-center gap-4 ppy-3 border-b'>
                          <div className='w-16 h-16 rounded overflow-hidden'>
                            {item.image && (
                                <Image
                                src={urlFor(item.image).url()}
                                alt='image'
                                width={50}
                                height={50}
                                className='object-cover w-full h-full'
                                 />
                            )}
                          </div>
                          <div className='flex-1'>
                            <h3 className='text-sm font-medium'>{item.name}</h3>
                            <p className='text-xs text-gray-500'> Quintity : {item.stockLevel}</p>
                            </div>
                            <p className='text-sm font-medium'>${item.price * item.stockLevel}</p>
                          </div>
                   ))
                 ) : (
                      <p className='text-sm text-gray-500'>your cart is empty</p>
                )}
                <div className=' text-right pt-4'>
                    <p className="text-sm">
                        subTotal : <span>${subTotal}</span>
                    </p>
                    <p className='text-sm'>
                        discount : <span className='font-medium'>${discount}</span>
                    </p>
                    <p className='text-lg font-semibold'>
                        Total : <span className='font-medium'>${subTotal.toFixed(2)}</span>
                    </p>
                </div>
            </div>
                             
           <div className='bg-white border rounded-lg p-6 space-y-6'>
            <h2 className='text-xl font-semibold'>billing information</h2>
            <div className='grid  grid-cols1 sm:grid-cols2 gap-4'>
                <div>
                    <label htmlFor='FirstName'>First Name</label>
                    <input 
                    type="text"
                    id="firstName"
                    placeholder="Enter Your First Name"
                    value={formValues.firstName}
                    onChange={handleInputChange}
                    className='border'
                     />
                     {formErrors.firstName && (
                        <p className='text-sm  text-red-500'>
                            First Name is Required
                        </p>
                     )}
                </div>

                <div>
                    <label htmlFor='LasrName'>Last Name</label>
                    <input 
                    type="text"
                    id="LastName"
                    placeholder="Enter Your Last Name"
                    value={formValues.LastName}
                    onChange={handleInputChange}
                    className='border gap-2'
                     />
                     {formErrors.LastName && (
                        <p className='text-sm text-red-500'>
                            Last Name is Required
                        </p>
                     )}
                     <div>

                    <label htmlFor='Address'>Address</label>
                    <input 
                    type="text"
                    id="Address"
                    placeholder="Enter Your First Name"
                    value={formValues.address}
                    onChange={handleInputChange}
                    className='border gap-2'
                     />
                     {formErrors.address && (
                        <p className='text-sm text-red-500'>
                            Address is Required
                        </p>
                     )}
                     <div>
                    <label htmlFor='Email'>email</label>
                    <input 
                    type="text"
                    id="email"
                    placeholder="Enter Your email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    className='border gap-2'
                     />
                     {formErrors.email && (
                        <p className='text-sm text-red-500'>
                            Email is Required
                        </p>
                     )}
                     <div>
                    <label htmlFor='Phon'>phone</label>
                    <input 
                    type="number"
                    id="phon"
                    placeholder="Enter Your number"
                    value={formValues.phon}
                    onChange={handleInputChange}
                    className='border gap-2'
                     />
                     {formErrors.phon && (
                        <p className='text-sm text-red-500' >
                            Phon number is Required
                        </p>
                     )}
                     <div>
                    <label htmlFor='ZipCode'>zipCode</label>
                    <input 
                    type="text"
                    id="ZipCode"
                    placeholder="Enter Your ZipCode"
                    value={formValues.zipCode}
                    onChange={handleInputChange}
                    className='border gap-2'
                     />
                     {formErrors.zipCode && (
                        <p className='text-sm text-red-500'>
                            ZipCode is Required
                        </p>
                     )}
                     <div className='gap-1'>
                    <label htmlFor='City'>city</label>
                    <input 
                    type="text"
                    id="city"
                    placeholder="Enter Your City Name"
                    value={formValues.city}
                    onChange={handleInputChange}
                    className='border gap-2'
                     />
                     {formErrors.city && (
                        <p className='text-sm text-red-500'>
                            CityName is Required
                        </p>
                     )}
                </div>
                <button className='w-full h-12 bg-blue-500 hover:bg-blue-700 text-white' onClick={handlePlaceOrder}>place Order</button>
                </div>
                </div>
                </div>
                </div>
                </div>
              
            </div>
           </div>

         </div>
      </div>
    </div>
  );
};

export default Checkout1
