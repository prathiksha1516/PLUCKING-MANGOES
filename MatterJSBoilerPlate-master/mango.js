var option={
    isStatic:true,
    restitution:0,
    friction:1,
    density:1.2
}
detectollision(stoneobj,mango1);
detectollision(stoneobj,mango2);
detectollision(stoneobj,mango3);
detectollision(stoneobj,mango4);
detectollision(stoneobj,mango5);

function draw(){
concole.log
}
function keypressed(){

    if(keycode===32){

        matter.body.positon(stoneobj.body,{x=325 ,y=445})
        launcherobject.attach(stoneobj.body)
    }
}

mongo1.display();
mongo2.display();
mongo3.display();
mongo4.display();
mongo5.display();