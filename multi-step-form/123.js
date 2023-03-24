function a(x,y,flag){
    return new Promise((resolve)=> {
      setTimeout(()=> {
        flag ? resolve (x**y) :resolve(x*y);
      }, 2000);
    })
  }
  
  
  async function addFunc(x,flag){
    let res=0;
    for (let i=1;i<=3;i++){
      res+= await a(x,i,flag);
    }
    return res 
  }
  
  addFunc(10,true).then((sum)=>{
    console.log(sum)
  })
  
  addFunc(20,false).then((sum)=>{
    console.log(sum)
  })
  
  