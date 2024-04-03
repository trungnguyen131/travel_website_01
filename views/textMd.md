//- mixin images_guides() 
//-     - 
//- 				const guides_image = [
//- 						"image-guides-2",
//- 						"image-guides-3",
//- 				]
//- 		- for(let $run = 0; $run < guides_image.length; $run++)
//- 				div(class="guides-item")
//- 						div(class="guides-item")
//- 								div(class="image-item")
//- 										img(src=`${../img/guides_image[$run]}.jpg`, alt="")