import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./ContactItem.css"

function ContactItem() {
    //當前時間

    //表單驗證
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            topic: "",
            restaurant: "",
            datetime: "",
            name: "",
            phone: "",
            email: "",
            address: "",
            upload: ""
        }
    });

    //上傳的檔名
    const [uploadName, setuploadName] = useState('未選擇任何檔案');
    function handlefileChange(event) {
        const file = event.target.files[0];
        if (file) {
            setuploadName(file.name)
        } else {
            setuploadName('未選擇任何檔案');
        }
    }

    //將使用者輸入的資料存在sessionStorage
    const [topic, setTopic] = useState('')
    function handletopicInput(event) {
        setTopic(event.target.value)
        sessionStorage.setItem('Topic', event.target.value)
    }

    return (
        <div className="contactContainer">
            <div className="information">Information</div>
            <form
                action="/api"
                onSubmit={handleSubmit((data) => {
                    console.log(data)
                })}
            >
                <div className="formElement">
                    <label htmlFor="">Topic</label>
                    <select
                        {...register("topic", {
                            required: "請選擇您的主旨"
                        })}
                        name="topic"
                        className="topic"
                        onChange={handletopicInput}
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
                    >
                        <option value=""></option>
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                    </select>
                    <p className="message">{errors.restaurant?.message}</p>
                </div>

                <div className="formElement">
                    <div className="formBox">
                        <label htmlFor="">Date</label>
                        <input
                            {...register("datetime", {
                                required: "請選擇用餐日期"
                            })}
                            type="datetime-local"
                            className="datetime"
                        />
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
                            maxLength={50}
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
                        />
                        <p className="noMessage">{errors.email?.message}</p>
                    </div>
                    <div className="formBox">
                        <label htmlFor="upload">Upload</label>
                        <div className="uploadBox" tabIndex="0">
                            <p className="uploadName">{uploadName}</p>
                            <label htmlFor="uploadButton" className="uploadButton">上傳檔案</label>
                            <input
                                {...register("upload")}
                                type="file"
                                accept="image/*"
                                id="uploadButton"
                                onChange={handlefileChange}
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
                        maxLength={740}
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
