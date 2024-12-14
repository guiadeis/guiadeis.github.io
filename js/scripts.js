$(function()
{
    const ResizeIframe = function(iframe)
    {
        let iframe_height_new = $(iframe).contents().find("html").height();
        if(iframe_height_new == iframe_height)
            return;
    
        iframe_height = iframe_height_new;
        console.log(iframe_height);
        
        if(iframe_height < 100)
            $(iframe).height(1080);
        else
            $(iframe).height(iframe_height);
    }
    
    var iframe_height = 0;
    $('#iframe_content').on('load', function()
    {
        setInterval(ResizeIframe, 1000, '#iframe_content');
    });
});
