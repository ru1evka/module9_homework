const JsonParse = `{
    "list" : [
        {
            "name" : "Piter",
            "age" : "20",
            "prof" : "mechanic"
        },
        {
            "name" : "Vova",
            "age" : "60",
            "prof" : "pilot"  
        }
    ]
}`;

const parse = JSON.parse(JsonParse);
console.log('parse', parse)



