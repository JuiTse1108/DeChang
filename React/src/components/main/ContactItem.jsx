import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import "./ContactItem.css"

function ContactItem() {
    //表單驗證
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        // defaultValues: {

        // }
    });

    //日期選擇器
    const inputRef = useRef(null);

    const handleDateClick = () => {
        inputRef.current.click()
    };

    //將使用者輸入的資料存在sessionStorage
    const [Topic, setTopic] = useState(sessionStorage.getItem('topic') || '')
    const [Restaurant, setRestaurant] = useState(sessionStorage.getItem('restaurant') || '')
    const [DateTime, setDateTime] = useState(sessionStorage.getItem('datetime') || '')
    const [Name, setName] = useState(sessionStorage.getItem('name') || '')
    const [Phone, setPhone] = useState(sessionStorage.getItem('phone') || '')
    const [Email, setEmail] = useState(sessionStorage.getItem('email') || '')
    const [Address, setAddress] = useState(sessionStorage.getItem('address') || '')
    const [UploadName, setUploadName] = useState(sessionStorage.getItem('upload') || '未選擇任何檔案')
    const [Message, setMessage] = useState(sessionStorage.getItem('message') || '')

    function handleTopicInput(event) {
        const Value = event.target.value
        setTopic(Value)
        sessionStorage.setItem('topic', Value)
    }

    function handleRestaurantInput(event) {
        const Value = event.target.value
        setRestaurant(Value)
        sessionStorage.setItem('restaurant', Value)
    }

    function handleDateTimeInput(event) {
        const Value = event.target.value
        setDateTime(Value)
        sessionStorage.setItem('datetime', Value)
    }

    function handleNameInput(event) {
        const Value = event.target.value
        setName(Value)
        sessionStorage.setItem('name', Value)
    }

    function handlePhoneInput(event) {
        const Value = event.target.value
        if (/^\d*$/.test(Value)) {
            setPhone(Value)
            sessionStorage.setItem('phone', Value)
        }
        
    }

    function handleEmailInput(event) {
        const Value = event.target.value
        setEmail(Value)
        sessionStorage.setItem('email', Value)

    }

    function handleAddressInput(event) {
        const Value = event.target.value
        setAddress(Value)
        sessionStorage.setItem('address', Value)
    }

    function handleUploadInput(event) {
        const file = event.target.files[0];
        if (file) {
            setUploadName(file.name)
            sessionStorage.setItem('upload', file.name)
        } else {
            setUploadName('未選擇任何檔案');
        }
    }

    const maxLength = 500
    function handleMessageInput(event) {
        const Value = event.target.value
        if (Value.length <= maxLength) {
            setMessage(Value)
            sessionStorage.setItem('message', Value)
        }
    }

    return (
        <div className="contactContainer">
            <div className="information">Information</div>
            <form
                action="/api"
                onSubmit={handleSubmit((data) => {
                    console.log(data)
                })}
            // onClick={handleClick}
            >
                <div className="formElement">
                    <label htmlFor="">Topic</label>
                    <select
                        {...register("topic", {
                            required: "請選擇您的主旨"
                        })}
                        name="topic"
                        className="topic"
                        onChange={handleTopicInput}
                        value={Topic}
                    >
                        <option value=""></option>
                        <option value="意見回饋">意見回饋</option>
                        <option value="求職諮詢">求職諮詢</option>
                        <option value="推薦項目">推薦項目</option>
                    </select>
                    <p className="message">{errors.topic?.message}</p>
                </div>

                <div className="formElement">
                    <label htmlFor="">Restaurant</label>
                    <select
                        {...register("restaurant", {
                            required: "請選擇用餐地點"
                        })}
                        name="restaurant"
                        className="restaurant"
                        value={Restaurant}
                        onChange={handleRestaurantInput}
                    >
                        <option value=""></option>
                        <option value="台北101店">台北101店</option>
                        <option value="新北新板店">新北新板店</option>
                        <option value="台中中港店">台中中港店</option>
                        <option value="高雄夢時代店">高雄夢時代店</option>
                    </select>
                    <p className="message">{errors.restaurant?.message}</p>
                </div>

                <div className="formElement">
                    <div className="formBox datetimeContainer">
                        <label htmlFor="">DateTime</label>
                        <input
                            {...register("datetime", {
                                required: "請選擇用餐日期"
                            })}
                            type="datetime-local"
                            className="datetime"
                            value={DateTime}
                            ref={inputRef}
                            onChange={handleDateTimeInput}
                        />
                        <i
                            className="bi bi-calendar-event"
                            onClick={handleDateClick}
                        ></i>
                        <p className="message">{errors.datetime?.message}</p>
                    </div>
                    <div className="formBox">
                        <label htmlFor="">Name</label>
                        <input
                            {...register("name", {
                                required: "請填寫您的姓名",
                                maxLength: {
                                    value: 50
                                }
                            })}
                            type="text"
                            className="name"
                            value={Name}
                            maxLength={50}
                            onChange={handleNameInput}
                        />
                        <p className="message">{errors.name?.message}</p>
                    </div>
                </div>

                <div className="formElement">
                    <div className="formBox">
                        <label htmlFor="">Phone</label>
                        <input
                            {...register("phone", {
                                required: "請填寫您的電話",
                                maxLength: {
                                    value: 10
                                }
                            })}
                            type="tel"
                            className="phone"
                            value={Phone}
                            onChange={handlePhoneInput}
                            pattern="[0]{1}[0-9]{9}"
                            maxLength={10}
                        />
                        <p className="message">{errors.phone?.message}</p>
                    </div>

                    <div className="formBox">
                        <label htmlFor="">Email</label>
                        <input
                            {...register("email", {
                                required: "請填寫您的信箱"
                            })}
                            type="email"
                            className="email"
                            value={Email}
                            onChange={handleEmailInput}
                        />
                        <p className="message">{errors.email?.message}</p>
                    </div>

                </div>
                <div className="formElement">
                    <div className="formBox">
                        <label htmlFor="address">Address</label>
                        <input
                            {...register("address")}
                            type="text"
                            className="address"
                            value={Address}
                            onChange={handleAddressInput}
                        />
                        <p className="noMessage">{errors.email?.message}</p>
                    </div>
                    <div className="formBox">
                        <label htmlFor="upload">Upload</label>
                        <div className="uploadBox" tabIndex="0">
                            <p className="uploadName">{UploadName}</p>
                            <label htmlFor="uploadButton" className="uploadButton">上傳檔案</label>
                            <input
                                {...register("upload")}
                                type="file"
                                accept="image/*"
                                id="uploadButton"
                                onChange={handleUploadInput}
                            />
                        </div>
                        <p className="noMessage">{errors.email?.message}</p>
                    </div>
                </div>
                <div className="formElement">
                    <label htmlFor="message">Message</label>
                    <textarea
                        {...register("message", {
                            required: "請簡述您的建議"
                        })}
                        name="message"
                        id="message"
                        maxLength={maxLength}
                        value={Message}
                        onChange={handleMessageInput}
                    >
                    </textarea>
                    <p className="message">{errors.message?.message}</p>
                </div>
                <div className="formElement">
                    <input type="submit" value="submit" className="submitButton" />
                </div>
            </form>
        </div>
    );
}

export default ContactItem;
