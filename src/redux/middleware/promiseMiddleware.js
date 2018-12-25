import Axios from 'axios';

export default store => next => action => {
 
    const {dispatch, getState} = store;

     /*如果dispatch来的是一个function，此处不做处理，直接进入下一级*/
     if (typeof action === 'function'){
         action(dispatch,getState);
         return;
     }

     /**解析 action */
     const {
         promise,
         types,
         afterSuccess,
         ...rest
     } = action;

     /**没有promise,证明不是想要发送ajax，直接进入下一步 */
    
     if(!action.promise){
         return next(action);
     }
   
    //  debugger
     /** 解析type */
     const [REQUET,SUCCESS,FAILURE] = types;
    
     /**开始请求时，发一个action */
     next({...rest, type:REQUET});

   
     /**定义请求成功时的方法 */
     const onFulfilled = result =>{
         next({
             ...rest, result, type:SUCCESS
         });

         if(afterSuccess){
             afterSuccess(dispatch, getState, result);
         }
     };
     /**定义请求失败是的方法 */
     const onRejected = error =>{
         next({
             ...rest, error, type:FAILURE
         });
     }

   
     return promise(Axios).then(onFulfilled,onRejected)
            .catch(error => {
                console.error('MIDDLEWARE ERROR:',error);
                onRejected(error)
            })

}