var preetyJson=require("prettyjson")
var screen=
{
    clear: function()
    {
        process.stdout.write("\033c");
    },
    write: function(data,mode)
    {
        var output=data;
        if(mode==="json")
        {
            output=JSON.stringify(data)
        }
        else if(mode==="preety")
        {
            output=preetyJson.render(data,null,4);
        }
        console.log(output);
    }
};
module.exports = screen;