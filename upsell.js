
var scripts = document.getElementsByTagName('script');
var index = scripts.length - 1;
var myScript = scripts[index];
var queryString = myScript.src.replace(/^[^\?]+\??/,'');
var params = parseQuery( queryString );
function parseQuery ( query ) {
   var Params = new Object ();
   if ( ! query ) return Params; // return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) continue;
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}

// var fetchUrl = "apps/upsell?store_url=iv-store-two.myshopify.com" 
var fetchUrl = "apps/upsell?store_url=" + params['store_url']
var xmlhttp = new XMLHttpRequest();
var productXml = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var jsonRes = JSON.parse(this.responseText);
       console.log(jsonRes);
      productXml.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var productRes = JSON.parse(this.responseText);
      console.log(productRes);
      var priceUsd=Math.round(productRes.price/100);
      var discount=priceUsd*jsonRes.offer_percentage/100;
      var realPrice=Math.round(priceUsd-discount);
      var html=`<div id="upsell-wrapper">
  <div class="upsell-modal">
    <div class="upsell-modal-close">
      <a href="#" class="close-upsell"onclick="upsell()">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="61" height="61" transform="translate(0,-30)" viewBox="0 0 61 61">
<defs><style>.a{stroke:#fff;stroke-width:2px;}.b{fill:#fff;font-size:27px;font-family:Montserrat-Regular, Montserrat;}.c{stroke:none;}.d{fill:none;}.e{filter:url(#a);}</style><filter id="a" x="0" y="0" width="61" height="61" filterUnits="userSpaceOnUse"><feOffset dy="3" input="SourceAlpha"/><feGaussianBlur stdDeviation="3" result="b"/><feFlood flood-opacity="0.161"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter>
</defs><g transform="translate(-1003 -249)"><g class="e" transform="matrix(1, 0, 0, 1, 1003, 249)"><g class="a" transform="translate(9 6)">
<circle class="c" cx="21.5" cy="21.5" r="21.5"/><circle class="d" cx="21.5" cy="21.5" r="20.5"/></g></g>
<text class="b" transform="translate(1026 284)"><tspan x="0" y="0">x</tspan></text></g></svg>
      </a>
   	</div>
   
    <div class="upsell-grid" data-handle=`+productRes.handle+`>
       <div id='upsell-head-tags'>
 <p id='offer-note'>`+jsonRes.offer_note+`
    </p>
  </div>
<div id="upsell-header-box">
<svg class="css-1o1jfec" version="1.1" id="Layer_1" x="0px" y="0px"height="60"width="200" viewBox="0 0 1289.68 406.41" style="enable-background:new 0 0 1289.68 406.41" xml:space="preserve"><g><g><path d="M437.57,154.02c0-21.16,10.45-31.74,31.34-31.74s31.34,10.58,31.34,31.74v19.53h-18.56v-19.53
			c0-8.95-4.23-13.45-12.7-13.5h-0.16c-8.47,0-12.7,4.5-12.7,13.5v14.87c0,8.09,7.71,17.65,23.14,28.69
			c13.98,10.02,20.97,21.94,20.97,35.76v20.65c0,21.21-10.42,31.82-31.26,31.82c-20.95-0.05-31.42-10.66-31.42-31.82v-19.53h18.56
			v19.53c0,9,4.29,13.5,12.86,13.5c8.46,0,12.7-4.5,12.7-13.5v-18.64c0-8.73-7.71-18.62-23.14-29.65
			c-13.98-10.02-20.97-22.13-20.97-36.32V154.02z"></path><path d="M580.12,228.03l7.39,55.13h-18.89l-4.58-34.63h-28.37l-4.66,34.63H512.3l7.23-54.8l16.31-103.5h28.04L580.12,228.03z
			 M561.64,230.2l-11.81-89.44l-11.81,89.44H561.64z"></path><path d="M601.18,124.85h19.05l26.84,113.71V125.17l16.79-0.24v158.23h-19.04l-25.96-110.9v110.9h-17.68V124.85z"></path><path d="M684.75,124.85h33.83c19.23,0.05,28.85,10.69,28.85,31.9v94.58c0,21.16-10.15,31.77-30.46,31.82h-32.22V124.85z
			 M703.32,143.09v121.82h12.86c8.46,0,12.7-4.53,12.7-13.58v-94.58c0-9.11-4.23-13.66-12.7-13.66H703.32z"></path><path d="M868.61,253.98c0,21.16-10.45,31.77-31.34,31.82c-20.89,0-31.34-10.61-31.34-31.82v-99.97
			c0-21.16,10.45-31.74,31.34-31.74s31.34,10.58,31.34,31.74v19.53h-18.56v-19.53c0-8.95-4.23-13.45-12.7-13.5h-0.16
			c-8.47,0-12.7,4.5-12.7,13.5v99.97c0,9,4.26,13.5,12.78,13.5c8.52,0,12.78-4.5,12.78-13.5v-19.53h18.56V253.98z"></path><path d="M887.1,283.15V124.85h18.56v140.07h37.53v18.24H887.1z"></path><path d="M1017.92,253.98c0,21.16-10.45,31.77-31.34,31.82c-20.89,0-31.34-10.61-31.34-31.82v-99.97
			c0-21.16,10.45-31.74,31.34-31.74s31.34,10.58,31.34,31.74V253.98z M999.36,154.02c0-8.95-4.23-13.45-12.7-13.5h-0.16
			c-8.47,0-12.7,4.5-12.7,13.5v99.97c0,9,4.26,13.5,12.78,13.5c8.52,0,12.78-4.5,12.78-13.5V154.02z"></path><path d="M1099.09,253.9c0,21.21-10.45,31.85-31.34,31.9c-20.89,0-31.34-10.63-31.34-31.9V124.77h18.56V253.9
			c0,9.05,4.26,13.58,12.78,13.58c8.52,0,12.78-4.53,12.78-13.58V124.77h18.56V253.9z"></path><path d="M1119.18,124.85h33.83c19.23,0.05,28.85,10.69,28.85,31.9v94.58c0,21.16-10.15,31.77-30.46,31.82h-32.22V124.85z
			 M1137.74,143.09v121.82h12.86c8.46,0,12.7-4.53,12.7-13.58v-94.58c0-9.11-4.23-13.66-12.7-13.66H1137.74z"></path></g><path d="M241.51,83.8c31.89,0,61.88,12.42,84.43,34.97c22.55,22.55,34.97,52.54,34.97,84.43c0,31.89-12.42,61.88-34.97,84.43
		c-22.55,22.55-52.54,34.97-84.43,34.97c-31.89,0-61.88-12.42-84.43-34.97c-22.55-22.55-34.97-52.54-34.97-84.43
		c0-31.89,12.42-61.88,34.97-84.43S209.61,83.8,241.51,83.8 M241.51,79.81c-68.14,0-123.39,55.25-123.39,123.39
		c0,68.15,55.25,123.39,123.39,123.39c68.14,0,123.39-55.25,123.39-123.39C364.9,135.06,309.65,79.81,241.51,79.81L241.51,79.81z"></path><path d="M241.51,73.5c71.64,0,129.7,58.07,129.7,129.7c0,71.64-58.07,129.7-129.7,129.7s-129.7-58.07-129.7-129.7
		C111.81,131.57,169.87,73.5,241.51,73.5 M241.51,69.52c-35.71,0-69.28,13.91-94.53,39.15c-25.25,25.25-39.15,58.82-39.15,94.53
		c0,35.71,13.91,69.28,39.15,94.53c25.25,25.25,58.82,39.16,94.53,39.16s69.28-13.91,94.53-39.16
		c25.25-25.25,39.15-58.82,39.15-94.53c0-35.71-13.91-69.28-39.15-94.53C310.79,83.42,277.22,69.52,241.51,69.52L241.51,69.52z"></path><g><rect x="139.6" y="201.08" transform="matrix(0.707 -0.7072 0.7072 0.707 -72.8496 230.3039)" width="203.81" height="3.98"></rect></g><g><rect x="239.52" y="101.16" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -72.8545 230.2462)" width="3.98" height="203.81"></rect></g><path d="M165.53,222.6c0,1.17,0.95,2.05,2.04,2.05h3.36c1.09,0,2.04-0.88,2.04-2.05v-8.69c0-1.83-0.37-3.51-1.53-4.89l-8.33-10.15
		c-1.75-2.19-2.41-4.9-2.41-7.75v-5.92c0-3.72,3.14-6.86,6.87-6.86h3.36c3.72,0,6.87,3.06,6.87,6.86v5.7h-4.82v-5.7
		c0-1.1-0.95-2.04-2.04-2.04h-3.36c-1.09,0-2.04,0.94-2.04,2.04v5.92c0,1.83,0.36,3.43,1.53,4.89l8.26,10.15
		c1.83,2.19,2.48,4.89,2.48,7.74v8.69c0,3.8-3.14,6.87-6.87,6.87h-3.36c-3.8,0-6.87-3.07-6.87-6.87v-7.82h4.82V222.6z"></path><path d="M317.75,185.21c0-1.1-0.88-2.04-2.05-2.04h-3.14c-1.09,0-2.04,0.94-2.04,2.04v37.39c0,1.17,0.95,2.05,2.04,2.05h3.14
		c1.09,0,2.05-0.88,2.05-2.05v-7.82h4.82v7.82c0,3.8-3.07,6.87-6.86,6.87h-3.14c-3.72,0-6.86-3.07-6.86-6.87v-37.39
		c0-3.8,3.14-6.86,6.86-6.86h3.14c3.79,0,6.86,3.06,6.86,6.86v5.7h-4.82V185.21z"></path><g><path d="M264.53,153.18h-44.3c-0.12,0-0.24-0.01-0.35-0.03c-4.1-0.74-11.85-4.63-11.85-14.02c0-6.36,3.4-9.7,6.25-11.39
			c2.32-1.37,4.85-1.98,6.61-2.2c1.74-4.62,7.05-11.79,17.3-11.79c7.68,0,12.6,4.4,14.38,6.32c1.26-0.04,3.35,0.14,5.67,1.26
			c2.51,1.2,4.18,3.27,5,4.48c5.27,0.74,13.72,4.31,13.61,13.71c-0.11,10-8,13.3-12.16,13.65
			C264.64,153.18,264.59,153.18,264.53,153.18z M220.43,149.2h43.99c0.37-0.05,2.37-0.34,4.3-1.56c2.71-1.71,4.1-4.45,4.15-8.16
			c0.1-8.81-10.51-9.77-10.96-9.8c-0.68-0.06-1.3-0.46-1.61-1.07c-0.01-0.02-1.36-2.52-3.77-3.68c-2.4-1.15-4.43-0.83-4.45-0.82
			c-0.73,0.12-1.5-0.17-1.94-0.76c-0.17-0.22-4.37-5.6-11.94-5.6c-7.83,0-11.53,5.09-13.01,8c2.24,0.45,4.59,1.42,6.17,2.99
			c0.96,0.97,1.71,2.33,2.25,3.59c1.56-1.16,3.88-2.26,7.13-2.33c0.08,0,0.17,0,0.25,0c6.91,0,9.42,6.3,9.52,6.57
			c0.4,1.03-0.12,2.18-1.14,2.58c-1.03,0.4-2.18-0.12-2.58-1.14c-0.06-0.16-1.72-4.14-5.97-4.02c-4.5,0.09-6.25,2.94-6.32,3.06
			c-0.41,0.7-1.22,1.08-2.01,0.96c-0.8-0.12-1.45-0.7-1.65-1.49c-0.34-1.36-1.26-3.92-2.31-4.97c-1.33-1.33-4.21-2.12-6.22-2.12
			c-0.1,0-10.31,0.26-10.31,9.7C212.01,147.04,219.23,148.94,220.43,149.2z"></path></g><g><g><path d="M242.48,265.74c-6,0-10.88-4.88-10.88-10.87c0-5.99,4.88-10.87,10.88-10.87c5.99,0,10.87,4.88,10.87,10.87
				C253.35,260.87,248.47,265.74,242.48,265.74z M242.48,247.99c-3.8,0-6.89,3.09-6.89,6.88c0,3.8,3.09,6.89,6.89,6.89
				c3.79,0,6.88-3.09,6.88-6.89C249.36,251.08,246.28,247.99,242.48,247.99z"></path></g><g><path d="M260.24,292.38c-6,0-10.88-4.88-10.88-10.87c0-6,4.88-10.88,10.88-10.88c5.99,0,10.87,4.88,10.87,10.88
				C271.11,287.5,266.23,292.38,260.24,292.38z M260.24,274.62c-3.8,0-6.89,3.09-6.89,6.89c0,3.79,3.09,6.88,6.89,6.88
				c3.8,0,6.89-3.09,6.89-6.88C267.13,277.71,264.04,274.62,260.24,274.62z"></path></g><g><path d="M224.72,292.38c-5.99,0-10.87-4.88-10.87-10.87c0-6,4.88-10.88,10.87-10.88c5.99,0,10.86,4.88,10.86,10.88
				C235.59,287.5,230.71,292.38,224.72,292.38z M224.72,274.62c-3.8,0-6.89,3.09-6.89,6.89c0,3.79,3.09,6.88,6.89,6.88
				c3.79,0,6.88-3.09,6.88-6.88C231.6,277.71,228.52,274.62,224.72,274.62z"></path></g></g></g></svg>

</div>
<div id='upsell-popup-wrapper'>
  <div id='upsell-img-box'>
 	<img src=`+productRes.featured_image+` />
  </div>
  <div id='upsell-content-box'>
    <p id='upsell-product-name'>`+productRes.title+`</p>
	<div id=offer-div>
    <P id='offer'>`+jsonRes.offer_percentage+`% OFF</P>
	</div>

	
    <p id ='upsell-reviews'>720 Reviews</p>

    <p id='upsell-price'>`+productRes.price/100+`</p>
	<p id='upsell-discount-price'>`+realPrice+`</p>
    <button type='button'onclick="add_to_cart()" id='cartbtn'>ADD TO BAG

</button>
<div id='review-content'>
<p id 'testimonial-content'>`+jsonRes.testimonial_content+`
</p>
</div>
<div class="review_section">
<h6 id='testimonial-name'>`+jsonRes.testimonial_name+`</h6>
<div class="star">
  <svg class="svg-item" xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 11.8 10.957"><defs><style>.a{fill:#000;}</style></defs><path class="a" d="M13.6,7.168H9.728L8.55,3.654a.427.427,0,0,0-.8,0L6.572,7.168h-3.9a.423.423,0,0,0-.421.421.31.31,0,0,0,.008.071.4.4,0,0,0,.176.3L5.619,10.2,4.4,13.755a.423.423,0,0,0,.145.474.408.408,0,0,0,.237.1.516.516,0,0,0,.263-.095L8.15,12.022l3.108,2.215a.494.494,0,0,0,.263.095.378.378,0,0,0,.234-.1.417.417,0,0,0,.145-.474L10.679,10.2l3.158-2.265.076-.066a.4.4,0,0,0-.311-.7Z" transform="translate(-2.25 -3.375)"/></svg>
 <svg class="svg-item" xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 11.8 10.957"><defs><style>.a{fill:#000;}</style></defs><path class="a" d="M13.6,7.168H9.728L8.55,3.654a.427.427,0,0,0-.8,0L6.572,7.168h-3.9a.423.423,0,0,0-.421.421.31.31,0,0,0,.008.071.4.4,0,0,0,.176.3L5.619,10.2,4.4,13.755a.423.423,0,0,0,.145.474.408.408,0,0,0,.237.1.516.516,0,0,0,.263-.095L8.15,12.022l3.108,2.215a.494.494,0,0,0,.263.095.378.378,0,0,0,.234-.1.417.417,0,0,0,.145-.474L10.679,10.2l3.158-2.265.076-.066a.4.4,0,0,0-.311-.7Z" transform="translate(-2.25 -3.375)"/></svg>
  <svg class="svg-item" xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 11.8 10.957"><defs><style>.a{fill:#000;}</style></defs><path class="a" d="M13.6,7.168H9.728L8.55,3.654a.427.427,0,0,0-.8,0L6.572,7.168h-3.9a.423.423,0,0,0-.421.421.31.31,0,0,0,.008.071.4.4,0,0,0,.176.3L5.619,10.2,4.4,13.755a.423.423,0,0,0,.145.474.408.408,0,0,0,.237.1.516.516,0,0,0,.263-.095L8.15,12.022l3.108,2.215a.494.494,0,0,0,.263.095.378.378,0,0,0,.234-.1.417.417,0,0,0,.145-.474L10.679,10.2l3.158-2.265.076-.066a.4.4,0,0,0-.311-.7Z" transform="translate(-2.25 -3.375)"/></svg>
   <svg class="svg-item" xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 11.8 10.957"><defs><style>.a{fill:#000;}</style></defs><path class="a" d="M13.6,7.168H9.728L8.55,3.654a.427.427,0,0,0-.8,0L6.572,7.168h-3.9a.423.423,0,0,0-.421.421.31.31,0,0,0,.008.071.4.4,0,0,0,.176.3L5.619,10.2,4.4,13.755a.423.423,0,0,0,.145.474.408.408,0,0,0,.237.1.516.516,0,0,0,.263-.095L8.15,12.022l3.108,2.215a.494.494,0,0,0,.263.095.378.378,0,0,0,.234-.1.417.417,0,0,0,.145-.474L10.679,10.2l3.158-2.265.076-.066a.4.4,0,0,0-.311-.7Z" transform="translate(-2.25 -3.375)"/></svg>
    <svg class="svg-item" xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 11.8 10.957"><defs><style>.a{fill:#000;}</style></defs><path class="a" d="M13.6,7.168H9.728L8.55,3.654a.427.427,0,0,0-.8,0L6.572,7.168h-3.9a.423.423,0,0,0-.421.421.31.31,0,0,0,.008.071.4.4,0,0,0,.176.3L5.619,10.2,4.4,13.755a.423.423,0,0,0,.145.474.408.408,0,0,0,.237.1.516.516,0,0,0,.263-.095L8.15,12.022l3.108,2.215a.494.494,0,0,0,.263.095.378.378,0,0,0,.234-.1.417.417,0,0,0,.145-.474L10.679,10.2l3.158-2.265.076-.066a.4.4,0,0,0-.311-.7Z" transform="translate(-2.25 -3.375)"/></svg>
 </div>
</div>
</div>
</div>
</div>
</div>
</div>
`;
  
      var body=document.getElementsByTagName("body")[0];
    body.insertAdjacentHTML('beforeend',html);
    }
      }
     
      var url='https://sand-cloud.myshopify.com//products/'+jsonRes.handle+'.js';
      productXml.open("GET", url, true);
      productXml.send();
      
      
    }
}
xmlhttp.open("GET", fetchUrl, true);
xmlhttp.send();
 
      
var product_handle;
    var css = `#upsell-wrapper {

  z-index: 99999;
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
}
.svg-item{
margin-left: -7px;
}
.star{
margin-left: -7px;
}
div#review-content{
text-align:left;
padding:8px 0;
max-height:90px;
 	overflow:hidden;
}
div#review-content > h6{
font-size:14px;
margin:0;
padding:0;
}
h6{
font-size:14px;
margin:0;
padding:8px 0 0 0;
font-weight:bold;
text-transform:none;
display:inline;
}
div#review-content > p{
font-size:14px;
overflow: hidden;
	text-overflow: ellipsis;
 	display: -webkit-box;
 	-webkit-line-clamp: 2;
 	-webkit-box-orient: vertical;
font-style:italic;
}
div.upsell-grid{
	max-height: 100%;
	overflow: hidden;
	padding:0;
	margin:0;
}
div#upsell-header-box{
	border-bottom:2px solid #F3F3F3;
	padding-bottom:10px;
	margin-bottom:15px;
	text-align:center;
}
div#offer-div{
	border:1px solid #F68383;
	padding:0 4px;
	display:inline-block;
	position:absolute;
	top:0;
	left:1%;
}

.upsell-modal {
  
    position: fixed;
    left: 50%;
    top: 50%;
    height: auto;
    width: 587px;
    margin: -225px 0 0 -310px;
    box-sizing: border-box;
    padding: 20px;
  	border-radius:9px;
 	background: #fff;
    border:1px solid #F3F3F3;

}



.upsell-modal-close {
  position: absolute;
  right: 5px;
  top: 5px;
  text-align: right;
  width: 100%;
	padding:0;
	margin:0;
}


.close-upsell > img{
  transform: translateY(-35px);
}
.upsell-modal-close a {
  color: #000;
  font-size: 13px;
  margin-right:-35px;
}

	div#upsell-head-tags{
    	background-color:#000;
    	text-align:center;
		margin-left:10%;
		margin-right:10%;
		margin-bottom:10px;
  }
    p#offer{
    color:#F68383;
    display:inline;
    font-size:18px;
    font-family: 'Bebas Neue',sans-serif;
    font-weight:500;
	margin:0;
  }
  p#upsell-price{
    font-size:17px;
	color:#5F5F5F;
    display:inline;
    font-family: 'Bebas Neue',sans-serif;
    display: inline-block;
	font-weight:bold;
	margin:0;
	text-decoration: line-through;
	text-decoration-color: red;
	text-decoration-thickness: 2px;
  }

  div#upsell-head-tags > p{
    font-size:16px;
    padding:12px 34px;
	color:#ffff;
	font-family:'gotham-medium',sans-serif;
	margin:0;
  }
  
  p#upsell-captions{
    font-size:16px;
	padding-top:5px;
    text-align:center;
    color:#828282;
	font-family: 'Gotham', sans-serif;
	font-weight:600;
	margin:0;

  }
  p#upsell-product-name{
    font-size:23px;
    text-transform:uppercase;
    font-family: 'Bebas Neue',sans-serif;
	line-height: 28px;
	margin:0;
}


   p#describe{
	font-family: 'Gotham Book', sans-serif;
    font-size:11px;
	overflow: hidden;
	text-overflow: ellipsis;
 	display: -webkit-box;
 	-webkit-line-clamp: 4;
 	-webkit-box-orient: vertical;
	padding:20px 0 0 0;
	margin:0;
}
 
  
  button#cartbtn{
    color:#000;
    background-color:#98DBCE;
    padding:16px 80px;
    outline:none;
    border-radius:5px;
	border:2px solid #98DBCE;
	font-family: 'gotham-bold', sans-serif;
	font-size:12px;
	font-weight:600;
	
  }
  div#upsell-popup-wrapper{
    display:flex;
    flex-wrap: wrap;
    justify-content:space-between;
	position:relative;
    
  }
  div#upsell-img-box{
    width:49%;
    max-height:300px;
	overflow:hidden;
	text-align:center;

  }
  div#upsell-img-box >img{
	height:75%;
	width:75%
  }
  div#upsell-content-box{
    width:49%;
//     max-height:300px;
 	overflow:hidden;

  }
p#upsell-discount-price{
	font-size:23px;
	color:#211E1F;
	font-family: 'Bebas Neue',sans-serif;
	display:inline;
	padding:0 0 0 10px;
	margin:0;
}
p#upsell-reviews{
	font-size:11px;
	font-family: 'Gotham Book', sans-serif;
	color:#211E1F;
	font-weight:600;
	margin:0;
}


  @media (max-width: 1300px) {
     
        

  .upsell-modal {
      position: absolute;
      left: 30%;
      top: 45%;

       margin: -225px 0 0 -75px;
      background: #fff;
      box-sizing: border-box;
      padding: 20px;

  }
div#upsell-content-box{
	max-height:330px;
}
div#upsell-content-box:after{
	top:280px;
	height:50px;
}
    
 }
    @media (max-width: 1000px) {
       .upsell-modal{
         width:600px;
		 margin: -225px 0 0 -130px;
      }
    }
@media (max-width: 767px) {  
 
  .upsell-modal {
      position: absolute;
      left: 50%;
      top: 42%;
      height: auto;
      width: 309px;
      margin: -225px 0 0 -150px;
      background: #fff;
      box-sizing: border-box;
      padding: 20px;

  }
  div#upsell-popup-wrapper{
    height:auto;
  }
  div#upsell-img-box{
    width:100%;
    max-height:130px;
    }
  div#upsell-img-box >img{
	height:100%;
	width:75%;
  }
    
  div#upsell-content-box{
      	width:100%;
//       	max-height:240px;
		text-align:center;	
    }

button#cartbtn{
display:block;
margin:0 auto;
}
div#offer-div{
	 margin: 0 auto;
    display: block;
    padding: 0 3px;
    width: 56px;
    background: rgba(255,255,255,.5);
}
div#review-content > p{
	-webkit-line-clamp:2;
	
	
}
div#upsell-head-tags{
	margin-right:7%;
	margin-left:7%;
}

div#upsell-head-tags > p{
	padding:10px;
	margin:0;
	font-size:12px;
	
}
p#offer {
    color: #F68383;
    display: inline;
    font-size: 11px;
    font-family: ‘Bebas Neue’,sans-serif;
    font-weight: 500;
    margin: 0;
}
  
}`;
    
var head = document.head || document.getElementsByTagName('head')[0];
var preconnect = document.createElement('link');
preconnect.rel = 'preconnect'; 
preconnect.type = 'text/css';
preconnect.href = 'https://fonts.gstatic.com'; 
head.appendChild(preconnect);
var fontsNeue=document.createElement('link');
fontsNeue.rel = 'stylesheet'; 
fontsNeue.type = 'text/css';
fontsNeue.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'; 
head.appendChild(fontsNeue);
var fontMontserrat=document.createElement('link');
fontMontserrat.rel = 'stylesheet'; 
fontMontserrat.type = 'text/css';
fontMontserrat.href = 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap'; 
head.appendChild(fontsNeue);
head.appendChild(fontMontserrat);
var style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
      function upsell() {
  			document.getElementById("upsell-wrapper").style.display='none';
			}
console.log(product_handle);
function add_to_cart(){
  var variant_id = 6347393409;
  var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://sand-cloud.myshopify.com/cart/add.js",false);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); 
  xht.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhttp.send("id="+variant_id+"&return_to=/checkout");
}
