var canvas = new fabric.canvas('myCanvas');

function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img) {
    block_image_object = Img;

    block_image_object.scaletowidth(block_image_width);
    block_image_object.scaletoheight(block_image_hight);
    block_image_object.set({
    top:block_y,
    left:block_x
    })
    Canvas.add(block_image_object);
    });
}

if(keypressed == '82')
{
    new_image('rrl.png')
    console.log("r");
}