import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import "./ContactItem.css"

function ContactItem() {
    //表單驗證
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        // defaultValues: {

        // }
    });

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

    const handleTopicInput = (event) => {
        const Value = event.target.value
        setTopic(Value)
        sessionStorage.setItem('topic', Value)
    }

    const handleRestaurantInput = (event) => {
        const Value = event.target.value
        setRestaurant(Value)
        sessionStorage.setItem('restaurant', Value)
    }

    const handleDateTimeInput = (event) => {
        const Value = event.target.value
        setDateTime(Value)
        sessionStorage.setItem('datetime', Value)
    }

    const handleNameInput = (event) => {
        const Value = event.target.value
        setName(Value)
        sessionStorage.setItem('name', Value)
    }

    const handlePhoneInput = (event) => {
        const Value = event.target.value
        if (/^\d*$/.test(Value)) {
            setPhone(Value)
            sessionStorage.setItem('phone', Value)
        }

    }

    const handleEmailInput = (event) => {
        const Value = event.target.value
        setEmail(Value)
        sessionStorage.setItem('email', Value)

    }

    const handleAddressInput = (event) => {
        const Value = event.target.value
        setAddress(Value)
        sessionStorage.setItem('address', Value)
    }

    const handleUploadInput = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            if (file) {
                setUploadName(file.name)
                sessionStorage.setItem('upload', file.name)
            } else {
                setUploadName('未選擇任何檔案');
            }
        }
    }

    const maxLength = 500
    const handleMessageInput = (event) => {
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
                action="/upload"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
            >
                <div className="formElement">
                    <label htmlFor="topic">Topic</label>
                    <select
                        {...register("topic", {
                            required: "請選擇您的主旨"
                        })}
                        className="topic"
                        name="topic"
                        id="topic"
                        value={Topic}
                        onChange={handleTopicInput}
                    >
                        <option value=""></option>
                        <option value="意見回饋">意見回饋</option>
                        <option value="求職諮詢">求職諮詢</option>
                        <option value="推薦項目">推薦項目</option>
                    </select>
                    <p className="message">{errors.topic?.message}</p>
                </div>

                <div className="formElement">
                    <label htmlFor="restaurant">Restaurant</label>
                    <select
                        {...register("restaurant", {
                            required: "請選擇用餐地點"
                        })}
                        className="restaurant"
                        name="restaurant"
                        id="restaurant"
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
                        <label htmlFor="datetime">DateTime</label>
                        <input
                            {...register("datetime", {
                                required: "請選擇用餐日期"
                            })}
                            type="datetime-local"
                            className="datetime"
                            name="datetime"
                            id="datetime"
                            value={DateTime}
                            onChange={handleDateTimeInput}
                        />
                        <i
                            className="bi bi-calendar-event"
                        ></i>
                        <p className="message">{errors.datetime?.message}</p>
                    </div>
                    <div className="formBox">
                        <label htmlFor="name">Name</label>
                        <input
                            {...register("name", {
                                required: "請填寫您的姓名",
                                maxLength: {
                                    value: 50
                                }
                            })}
                            type="text"
                            className="name"
                            name="name"
                            id="name"
                            value={Name}
                            maxLength={50}
                            onChange={handleNameInput}
                        />
                        <p className="message">{errors.name?.message}</p>
                    </div>
                </div>

                <div className="formElement">
                    <div className="formBox">
                        <label htmlFor="phone">Phone</label>
                        <input
                            {...register("phone", {
                                required: "請填寫您的電話",
                                maxLength: {
                                    value: 10
                                }
                            })}
                            type="tel"
                            className="phone"
                            name="phone"
                            id="phone"
                            value={Phone}
                            onChange={handlePhoneInput}
                            pattern="[0]{1}[0-9]{9}"
                            maxLength={10}
                        />
                        <p className="message">{errors.phone?.message}</p>
                    </div>

                    <div className="formBox">
                        <label htmlFor="email">Email</label>
                        <input
                            {...register("email", {
                                required: "請填寫您的信箱"
                            })}
                            type="email"
                            className="email"
                            name="email"
                            id="email"
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
                            name="address"
                            id="address"
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
                                name="uploadButton"
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
