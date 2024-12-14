$(function()
{
});

const ResizeIframe = function(iframe)
{
    
    $(iframe).load(function()
    {
        $(iframe).height( $(iframe).contents().find("body").height());
    });
    $(iframe).click(function()
    {
        $(iframe).height( $(iframe).contents().find("body").height());
    });
}