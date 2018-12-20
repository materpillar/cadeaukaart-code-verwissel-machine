function submit()
        {
            var cd=document.forms["myform"]["code"].value;
            
            if(cd=="ABENTEUER2019")
                {
                    window.location = "gutschein.html";
                    alert("Submission successful");
                }
            else
                {
                    alert("incorrect code");
                }
        }