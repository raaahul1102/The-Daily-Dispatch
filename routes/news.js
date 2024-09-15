
const express = require('express')
const axios = require('axios')
const newsr=express.Router()
const moment = require('moment')
const math = require('math')


newsr.get('/', async (req, res) => {
    try {
        // console.log("Making API request");
        // var url = 'http://newsapi.org/v2/top-headlines?' +
        //     'country=in&' +
        //     'apiKey=039e00eb5759475a931064aebdf8bebe';
        var url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=039e00eb5759475a931064aebdf8bebe';

        // var url = 'http://api.mediastack.com/v1/news?countries=in&access_key=7b76ac64522ad3e62be948e0b7687a37';

        const news_get = await axios.get(url);
        // console.log("API request completed", news_get.data);
        res.render('news', { articles: news_get.data.articles });

    } catch (error) {
        console.error("Error occurred:", error);
    }
});


newsr.post('/search',async(req,res)=>{
    const search=req.body.search
    //console.log(req.body.search)


    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=039e00eb5759475a931064aebdf8bebe`

        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})





    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

newsr.get('/news/:category',async(req,res)=>{
    var category = req.params.category;
    try {
        var url = 'http://newsapi.org/v2/top-headlines?country=us&category=' + category + '&apiKey=039e00eb5759475a931064aebdf8bebe';


        const news_get =await axios.get(url)
        res.render('category',{articles:news_get.data.articles})

    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

newsr.get

module.exports=newsr