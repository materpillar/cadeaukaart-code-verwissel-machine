function submit()
{
    var cd=document.forms["myform"]["code"].value;
    let hash = simpleHash(cd);
    if(hash===871)
        {
            window.location = "gutschein.html";
            alert("Ich liebe dich!");
        }
    else if(hash===1215)
        {
            window.location = "essen.html";
            alert("Ich liebe dich!");
        }
    else
        {
            alert("The code you've entered is incorrect");
        }
}

function simpleHash(str)
{
    let hash = 0;
    for (i = 0;i < str.length; i++) {
        hash += str.charCodeAt(i);
    }
    return hash;
}