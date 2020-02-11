function submit()
{
    var cd = document.forms["myform"]["code"].value;
    let hash = simpleHash(cd.toUpperCase());

    // voucher codes
    if(hash === 682)
    {
		alert("Be happy!");
        window.location.assign("vouchers/voucher.html");
    }
    else
    {
        alert("The code you've entered is incorrect!");
    }
}

function showHash()
{
    var cd = document.forms["myform"]["code"].value;
    let hash = simpleHash(cd.toUpperCase());
    document.forms["myform"]["hash"].value = hash;
}

function simpleHash(str)
{
    let hash = 0;
    for (i = 0;i < str.length; i++)
    {
        hash += str.charCodeAt(i);
    }
    return hash;
}