module.exports=function (a,b)
{
    this.a=a;
    this.b=b;
    this.flames=function()
    {
        let c=0;
        a.split('').forEach(function(i)
        {
            for(var j=0;j<b.length;j++)
            {
                if(i===b.charAt(j))
                    {i='/';
                        console.log(i+ " "+ b.charAt(j));
                        b=b.slice(0,j)+b.slice(j+1,b.length);
                    break;
                    }
            }
            if(i!='/') c+=1;
        });
            
        c=c+b.length;
        console.log(c);
            
    let relation=["Friends 👩🏼‍🤝‍👩🏻", "Love 💑", "Affection 😍", "Marriage 👨‍👩‍👧", "Enemy 🤼‍♂️", "Sister 👩‍👧"];
    let l=c;

    for(;relation.length>=2;)
    {
        l=c%relation.length-1;
       
        if(l==-1) 
           relation=relation.slice(0,-1);
        else 
            relation=relation.slice(0,l).concat(relation.slice(l+1,relation.length));
        console.log(l+">>"+relation);
    }
    
    console.log(c+b.length);
    return relation;

    // for(;x.length>2;)
    // {l=c-1;
    //     if(c>x.length)
    //         l=c-x.length-1;
        
    //     x=x.slice(0,l)+x.slice(l+1,x.length);
    // }
    // if(c%2==0) x=x.charAt(0);
    // else x=x.charAt(1);

    }
}
