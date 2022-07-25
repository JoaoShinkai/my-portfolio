$(function(){
    if(localStorage.getItem("theme") == "dark"){
        setThemeDark();
        $("#switch-button").prop("checked", true);
        $('.joaoshinkai-switch-button').toggleClass('night')
    }else{
        setThemeLight();
    }
    function setThemeDark(){
        document.documentElement.style.setProperty("--background-color", "#232220");
        document.documentElement.style.setProperty("--primary-color", "#8c7ae6");
        document.documentElement.style.setProperty("--font-color", "#fff");
        document.documentElement.style.setProperty("--secondary-background-color", "#2f2e36");
        document.documentElement.style.setProperty("--tertiary-background-color", "#322f46");
    }
    function setThemeLight(){
        document.documentElement.style.setProperty("--background-color", "#f7f7f7");
        document.documentElement.style.setProperty("--primary-color", "#8c7ae6");
        document.documentElement.style.setProperty("--font-color", "#2b2b2b");
        document.documentElement.style.setProperty("--secondary-background-color", "#fff");
        document.documentElement.style.setProperty("--tertiary-background-color", "#e1e1e1");
    }
    $("#switch-button").change(function(event){
        var check=event.target;
        if(check.checked){
            setThemeDark();
            $('.joaoshinkai-switch-button').toggleClass('night')
            localStorage.setItem("theme","dark")
        }else{
            setThemeLight()
            $('.joaoshinkai-switch-button').toggleClass('night')
            localStorage.setItem("theme","light")
        }
    })
})