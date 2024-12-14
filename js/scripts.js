$(function()
{
    ResizeIframe('#iframe_content');
});

const ResizeIframe = function(iframe)
{
    let iframe_height = $(iframe).contents().find("html").height();
    
    $(iframe).height(iframe_height);
}