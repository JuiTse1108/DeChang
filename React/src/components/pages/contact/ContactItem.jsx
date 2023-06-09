import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import './ContactItem.css'

function ContectItem() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm()

    const onSubmit = async (data) => {
        axios.post('http://127.0.0.1:8000/api/upload', data)
            .then((response) => {
                // console.log('成功', response)
            })

            .catch((error) => {
                if (error.response) {
                    console.log(error.response.status); // 狀態碼
                    console.log(error.response.headers); // 回應頭
                    console.log(error.response.data); // 回應資料
                } else {
                    console.log(error.message); // 錯誤訊息
                }
            });
    }



    return (
        <div className='contactContainer'>
            <form
                // action='/upload'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='formElement'>
                    <label htmlFor='topic'>Topic</label>
                    <select
                        {...register('customer_topic', {
                            required: '請選擇您的主旨'
                        })}
                        className='topic'
                        name='customer_topic'
                        id='topic'
                    // value={topic}
                    // onChange={(event) => setTopic(event.target.value)}
                    >
                        <option value=''></option>
                        <option value='意見回饋'>意見回饋</option>
                        <option value='求職諮詢'>求職諮詢</option>
                        <option value='推薦項目'>推薦項目</option>
                    </select>
                    <p className='message'>{errors.customer_topic?.message}</p>
                </div>

                <div className='formElement'>
                    <label htmlFor='restaurant'>Restaurant</label>
                    <select
                        {...register('customer_restaurant', {
                            required: '請選擇用餐地點'
                        })}
                        className='restaurant'
                        name='customer_restaurant'
                        id='restaurant'
                    // value={restaurant}
                    // onChange={(event) => setRestaurant(event.target.value)}
                    >
                        <option value=''></option>
                        <option value='台北101店'>台北101店</option>
                        <option value='新北新板店'>新北新板店</option>
                        <option value='台中中港店'>台中中港店</option>
                        <option value='高雄夢時代店'>高雄夢時代店</option>
                    </select>
                    <p className='message'>{errors.customer_restaurant?.message}</p>
                </div>

                <div className='formElement'>
                    <div className='formBox datetimeContainer'>
                        <label htmlFor='datetime'>DateTime</label>
                        <input
                            {...register('customer_datetime', {
                                required: '請選擇用餐日期'
                            })}
                            type='datetime-local'
                            className='datetime'
                            name='customer_datetime'
                            id='datetime'
                        // value={datetime}
                        // onChange={(event) => setDatetime(event.target.value)}
                        />
                        <i
                            className='bi bi-calendar-event'
                        ></i>
                        <p className='message'>{errors.customer_datetime?.message}</p>
                    </div>
                    <div className='formBox'>
                        <label htmlFor='name'>Name</label>
                        <input
                            {...register('customer_name', {
                                required: '請填寫您的姓名',
                                maxLength: {
                                    value: 50
                                }
                            })}
                            type='text'
                            className='name'
                            name='customer_name'
                            id='name'
                            // value={name}
                            // onChange={(event) => setName(event.target.value)}
                            maxLength={50}
                        />
                        <p className='message'>{errors.customer_name?.message}</p>
                    </div>
                </div>

                <div className='formElement'>
                    <div className='formBox'>
                        <label htmlFor='phone'>Phone</label>
                        <input
                            {...register('customer_phone', {
                                required: '請填寫您的電話',
                                maxLength: {
                                    value: 10
                                }
                            })}
                            type='tel'
                            className='phone'
                            name='customer_phone'
                            id='phone'
                            // value={phone}
                            // onChange={(event) => setPhone(event.target.value)}
                            pattern='[0]{1}[0-9]{9}'
                            maxLength={10}
                        />
                        <p className='message'>{errors.customer_phone?.message}</p>
                    </div>

                    <div className='formBox'>
                        <label htmlFor='email'>Email</label>
                        <input
                            {...register('customer_email', {
                                required: '請填寫您的信箱'
                            })}
                            type='email'
                            className='email'
                            name='customer_email'
                            id='email'
                        // value={email}
                        // onChange={(event) => setEmail(event.target.value)}
                        />
                        <p className='message'>{errors.customer_email?.message}</p>
                    </div>

                </div>
                <div className='formElement'>
                    <div className='formBox'>
                        <label htmlFor='address'>Address</label>
                        <input
                            {...register('customer_address')}
                            type='text'
                            className='address'
                            name='customer_address'
                            id='address'
                        // value={address}
                        // onChange={(event) => setAddress(event.target.value)}
                        />
                        <p className='noMessage'>{errors.customer_email?.message}</p>
                    </div>
                    <div className='formBox'>
                        <label htmlFor='upload'>Upload</label>
                        <div className='uploadBox' tabIndex='0'>
                            <p className='uploadName'>{ }</p>
                            <p className='uploadButton'>上傳檔案</p>
                            <input
                                {...register('customer_upload')}
                                accept='image/*'
                                type='file'
                                name='customer_upload'
                                id='upload'
                            // value={upload}
                            // onChange={(event) => setUpload(event.target.value)}
                            />
                        </div>
                        <p className='noMessage'>{errors.customer_email?.message}</p>
                    </div>
                </div>
                <div className='formElement'>
                    <label htmlFor='message'>Message</label>
                    <textarea
                        {...register('customer_message', {
                            required: '請簡述您的建議'
                        })}
                        name='customer_message'
                        id='message'
                        // value={message}
                        // onChange={(event) => setMessage(event.target.value)}
                        maxLength={500}
                    >
                    </textarea>
                    <p className='message'>{errors.customer_message?.message}</p>
                </div>
                <div className='formElement'>
                    <input type='submit' value='submit' className='submitButton' />
                </div>
            </form>
        </div>
    );
}

export default ContectItem;