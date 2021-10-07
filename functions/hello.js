//domian/.netlify/functions/hello

const items = [
    {id:1,name:'Aditya'},
    {id:2,name:'Aditi'},
]

exports.handler = async function(event,context){
    return {
        statusCode:200,
        body:JSON.stringify(items)
    }
}