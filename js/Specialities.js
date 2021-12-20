var a;

function Show_Hide(RecipeMenu, BtnTxt)
    {
        if (a==1)
            {
                document.getElementById(RecipeMenu).style.display="none";
                document.getElementById(BtnTxt).innerHTML="Show Menu";
                return a=0;
            }
        else
            {
                document.getElementById(RecipeMenu).style.display="inline-block";
                document.getElementById(BtnTxt).innerHTML="Hide Menu";
                return a=1;
            }
    }