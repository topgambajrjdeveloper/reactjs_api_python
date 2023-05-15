import axios from 'axios';
import {
    GET_ARTICLE_LIST_SUCCESS,
    GET_ARTICLE_LIST_FAIL,
    GET_ARTICLE_SUCCESS,
    GET_ARTICLE_FAIL,
    GET_ARTICLE_LIST_CATEGORIES_SUCCESS,
    GET_ARTICLE_LIST_CATEGORIES_FAIL,
    GET_SEARCH_ARTICLE_SUCCESS,
    GET_SEARCH_ARTICLE_FAIL,
    GET_AUTHOR_ARTICLE_LIST_SUCCESS,
    GET_AUTHOR_ARTICLE_LIST_FAIL
} from "./types"

export const get_author_article_list = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`
        }
    };

    try{

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/article/author_list`, config)

        if(res.status === 200){
            dispatch({
                type: GET_AUTHOR_ARTICLE_LIST_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_AUTHOR_ARTICLE_LIST_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: GET_AUTHOR_ARTICLE_LIST_FAIL
        });
    }
}

export const get_author_article_list_page = (page) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`
        }
    };

    try{

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/article/author_list?p=${page}`, config)

        if(res.status === 200){
            dispatch({
                type: GET_AUTHOR_ARTICLE_LIST_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_AUTHOR_ARTICLE_LIST_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: GET_AUTHOR_ARTICLE_LIST_FAIL
        });
    }
}

export const get_artcle_list = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/article/list`, config)
        

        if(res.status === 200){
            dispatch({
                type: GET_ARTICLE_LIST_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_ARTICLE_LIST_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: GET_ARTICLE_LIST_FAIL
        });
    }
}

export const get_article_list_page = (page) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/article/list?p=${page}`, config)

        if(res.status === 200){
            dispatch({
                type: GET_ARTICLE_LIST_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_ARTICLE_LIST_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: GET_ARTICLE_LIST_FAIL
        });
    }
}

export const get_article_list_category = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/article/by_category?slug=${slug}`, config)

        if(res.status === 200){
            dispatch({
                type: GET_ARTICLE_LIST_CATEGORIES_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_ARTICLE_LIST_CATEGORIES_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: GET_ARTICLE_LIST_CATEGORIES_FAIL
        });
    }
}

export const get_article_list_category_page = (slug, page) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/article/by_category?slug=${slug}&p=${page}`, config)

        if(res.status === 200){
            dispatch({
                type: GET_ARTICLE_LIST_CATEGORIES_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_ARTICLE_LIST_CATEGORIES_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: GET_ARTICLE_LIST_CATEGORIES_FAIL
        });
    }
}

export const get_article = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/article/detail/${slug}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_ARTICLE_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_ARTICLE_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_ARTICLE_FAIL
        });
    }
}

export const search_article = (search_term) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/article/search?s=${search_term}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_SEARCH_ARTICLE_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_SEARCH_ARTICLE_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_SEARCH_ARTICLE_FAIL
        });
    }
};

export const search_article_page = (search_term,page) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/article/search?p=${page}&s=${search_term}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_SEARCH_ARTICLE_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_SEARCH_ARTICLE_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_SEARCH_ARTICLE_FAIL
        });
    }
};