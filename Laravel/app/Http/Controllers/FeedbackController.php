<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    //對應資料表的所有資料
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    //跳轉到建立表單的地方
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    //表單發送到資料庫
    public function store(Request $request)
    {
        //
        $feedback = new Feedback;
        $feedback->customer_topic = $request->input('customer_topic');
        $feedback->customer_restaurant = $request->input('customer_restaurant');
        $feedback->customer_datetime = $request->input('customer_datetime');
        $feedback->customer_name = $request->input('customer_name');
        $feedback->customer_phone = $request->input('customer_phone');
        $feedback->customer_email = $request->input('customer_email');
        $feedback->customer_address = $request->input('customer_address');
        // $feedback->customer_upload = $request->input('customer_upload');
        $feedback->customer_message = $request->input('customer_message');
        $feedback->save();
        return response()->json(['message' => '儲存成功'], 200);

    }

    /**
     * Display the specified resource.
     */
    //秀單筆資料，需要給id
    public function show(Feedback $feedback)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    //跳轉到編輯頁面
    public function edit(Feedback $feedback)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    //編輯完送出的資料
    public function update(Request $request, Feedback $feedback)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    //刪除
    public function destroy(Feedback $feedback)
    {
        //
    }
}
