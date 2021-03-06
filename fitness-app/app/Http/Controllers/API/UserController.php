<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\User;
use App\Models\Lesson;
use Illuminate\Support\Facades\Auth;
use Validator;

class UserController extends BaseController

{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'document_id' => 'required',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['name'] =  $user->name;
        return $this->sendResponse($success, 'User register successfully.');
    }
    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('MyApp')-> accessToken; 
            $success['name'] =  $user->name;
            return $this->sendResponse($success, 'User login successfully.');
        } 
        else{ 
            return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
        } 
    }

    public function indexUserLessons()
    {
        $user_id = auth('api')->user()->id;
        $user = User::find($user_id);
        $lessons = ($user->lessons);
        return $lessons;
    }

    public function storeUserLessons(Request $request)
    {
        $user = auth('api')->user();
        $lesson = Lesson::find($request->lesson_id);
        $input = $request->all();
        $user_lessons = $user->lessons;
        $validator = Validator::make($input, [
            'lesson_id' => 'required',
            'date' => 'required',
        ]);
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        } elseif ($lesson->places == 0) {
            return $this->sendError('Sold out reservations');
        }
        foreach ($user_lessons as $user_lesson) {
            if($user_lesson->pivot->lesson_id == $request->lesson_id) {
                return $this->sendError('You are already registered in the lesson');
            }
        }
        $user->lessons()->attach($request->lesson_id, ['date'=> $request->date]);
        $lesson->places -= 1;
        $lesson->save();

        return $lesson; 
    }
}