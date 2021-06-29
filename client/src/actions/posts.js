import * as api from '../api'

//Action Creators

export const getPosts = ()=> async (dispatch) => {
    try{
        const { data } = await api.fetchPosts();

        dispatch({
            type : 'FETCH_ALL',
            payload : data
        })
    }
    catch(err){
        console.log(err.message)
    }

}

export const createPost = (post)=> async (dispatch)=>{
    try{
        const { data } = await api.createPost(post);

        dispatch({type:'CREATE', payload:data})
    }
    catch(err){
        console.log(err)
    }
}

export const updatePost =  (id,post) => async (dispatch)=>{
    const { data } = await api.updatePost(id,post);

    dispatch({
        type:'UPDATE',
        payload: data
    })
}


export const deletePost = (id)=> async (dispatch)=>{
    await api.deletePost(id);

    dispatch({
        type:"DELETE",
        payload:id
    })
}

export const likePost = (id)=> async (dispatch)=>{

    const {data} = await api.likePost(id);

    dispatch({
        type:"LIKE",
        payload:data
    })
}
//since we are dealing with an asyncronous 
//call we have to add async (dispatch) and a 
// dispatch in place of retun