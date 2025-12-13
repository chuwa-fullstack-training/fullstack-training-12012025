/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    let list1=[];
    let list2=[];
    let found=0;
    // set a for 1c; b for 5c ;c for 25c ;d for 50c 
    for(let d=0;d<48;d++){
        for(let c=0;c<48-d;c++){
            for(let b=0;b<48-d-c;b++){
                let a=48-d-c-b;

                if(a*1+b*5+c*25+d*50===100){
                    if(found===0){
                        list1=[a,b,c,d];
                        found=1;
                    }else if(found===1){
                        list2=[a,b,c,d];
                        console.log(list1);
                        console.log(list2);
                        return;
                    }
                }

            }
        }
    }
    
}

pickCoins();