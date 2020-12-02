const app = require("./app");

const port = app.get('port');
app.listen(port, ()=>{
    console.log(`you are listing on http://localhost:${port}`)
})