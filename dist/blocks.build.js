!function(e){function t(l){if(a[l])return a[l].exports;var n=a[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,l){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a(1)},function(e,t,a){"use strict";var l=a(2),n=(a.n(l),a(3)),r=(a.n(n),a(4)),__=wp.i18n.__,c=wp.blocks.registerBlockType,o=wp.blockEditor,i=o.RichText,m=o.BlockControls,s=o.AlignmentToolbar,d=o.InspectorControls,u=o.ColorPalette,p=o.MediaUpload,w=o.MediaUploadCheck,g=wp.element.Fragment,f=wp.components,E=f.Panel,h=f.PanelBody,v=f.PanelRow,b=f.Button,k=(f.ResponsiveWrapper,f.RadioControl),y=["image"];c("gutencard/block-gutencard",{title:__("Gutencard","gutencard"),icon:{background:"#11acee",src:r.a.gutencard},category:"common",keywords:[__("gutencard","gutencard"),__("custom card block","gutencard")],supports:{align:["full","wide"]},attributes:{title:{type:"array",source:"children",selector:"h3"},content:{type:"array",source:"children",selector:"p"},contentStyle:{type:"object",default:{color:"black",textAlign:"left"}},backgroundStyle:{type:"object",default:{backgroundColor:"transparent"}},imageAlt:{attribute:"alt",selector:".featured-image"},imageUrl:{attribute:"src",selector:".featured-image"},imageId:{type:"number"},displayValue:{type:"string",default:"column"}},edit:function(e){var t=e.attributes,a=t.title,l=t.content,n=t.contentStyle,r=t.backgroundStyle,c=(t.image,t.imageUrl),o=t.imageId,f=t.displayValue,A=e.setAttributes,C=e.className,Z=function(e){return c?wp.element.createElement("img",{src:c,onClick:e,className:"image"}):wp.element.createElement("div",{className:"button-container"},wp.element.createElement(b,{className:o?"editor-post-featured-image__preview":"editor-post-featured-image__toggle",onClick:e},!o&&__("Set featured image","gutencard")))},M=function(){A({imageUrl:null})},N=function(e){A({title:e})},x=function(e){A({content:e})},L=function(e){var t=void 0===e?"none":e;A({contentStyle:{color:n.color,textAlign:t}})},S=function(e){A({contentStyle:{color:void 0===e?"none":e,textAlign:n.textAlign}})},_=function(e){A({backgroundStyle:{backgroundColor:void 0===e?"none":e}})},R=function(e){A({displayValue:e})};return[wp.element.createElement(m,null,wp.element.createElement(s,{value:n.textAlign,onChange:L})),wp.element.createElement(g,null,wp.element.createElement(d,null,wp.element.createElement(E,{className:C},wp.element.createElement(h,{title:__("Color Settings","gutencard"),initialOpen:!0},wp.element.createElement(v,null,__("Choose a text color.","gutencard")),wp.element.createElement(u,{value:n.color,onChange:S}),wp.element.createElement(v,null,__("Choose a background color.","gutencard")),wp.element.createElement(u,{value:r.backgroundColor,onChange:_})),wp.element.createElement(h,{title:__("Display Settings","gutencard"),initialOpen:!1},wp.element.createElement(k,{label:__("Choose Card Layout","gutencard"),selected:f,options:[{label:"Column",value:"column"},{label:"Column Reverse",value:"column-reverse"},{label:"Row",value:"row"},{label:"Row Reverse",value:"row-reverse"}],onChange:R}))))),wp.element.createElement("div",{className:"gutencard-title"},wp.element.createElement("h2",null,__("Gutencard Block","gutencard"))),wp.element.createElement("div",{className:[C,f].join(" "),style:r},wp.element.createElement("div",{className:"card-image"},wp.element.createElement(w,null,wp.element.createElement(p,{onSelect:function(e){A({imageAlt:e.alt,imageUrl:e.sizes.large.url})},allowedTypes:y,type:"image",value:o,render:function(e){var t=e.open;return Z(t)}})),!!c&&wp.element.createElement(w,null,wp.element.createElement("div",{className:"button-container"},wp.element.createElement(b,{className:"button",onClick:M,isLink:!0,isDestructive:!0},__("Remove","gutencard"))))),wp.element.createElement("div",{className:"card-content"},wp.element.createElement("div",{className:"card-title"},wp.element.createElement(i,{className:"heading",tagName:"h3",style:n,onChange:N,placeholder:__("Your card title","gutencard"),value:a})),wp.element.createElement("div",{className:"card-description"},wp.element.createElement(i,{tagName:"p",style:n,onChange:x,placeholder:__("Your card content","gutencard"),value:l}))))]},save:function(e){return wp.element.createElement("div",{className:["card",e.attributes.displayValue].join(" "),style:e.attributes.backgroundStyle},wp.element.createElement("div",{className:"card-image"},function(e,t){return e?t?wp.element.createElement("img",{className:"featured-image",src:e,alt:t}):wp.element.createElement("img",{className:"featured-image",src:e,alt:"","aria-hidden":"true"}):null}(e.attributes.imageUrl,e.attributes.imageAlt)),wp.element.createElement("div",{className:"card-content",style:e.option},wp.element.createElement("div",{className:"card-title"},wp.element.createElement(i.Content,{style:e.attributes.contentStyle,tagName:"h3",value:e.attributes.title})),wp.element.createElement("div",{className:"card-description"},wp.element.createElement(i.Content,{style:e.attributes.contentStyle,tagName:"p",value:e.attributes.content}))))}})},function(e,t){},function(e,t){},function(e,t,a){"use strict";var l={};l.gutencard=wp.element.createElement("svg",{height:"512pt",viewBox:"0 0 512 512",width:"512pt",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:"M477.94,409.5l-.26,3.84a79.42,79.42,0,0,1-38.31,60.32,136.28,136.28,0,0,1-52.47,17.49c-5.37.77-10.74,1.37-16,1.8-4.44.34-9.05.68-13.74.68a119,119,0,0,1-14.5-.52,77,77,0,0,1-26.71-6.39c-2.73-1.2-13,.59-15.53-1.11A30,30,0,0,1,285,462.83c-3.49-19.28-5.63-49.15,4.95-66.12a151.2,151.2,0,0,1,39.84-40.53c30.63-22.35,50.68-40.27,54.43-81.05A122.64,122.64,0,0,0,370.27,209c-14.84-33.1-29.86-76.61-63.56-92.22-1.2-.6-2.48-1.11-3.67-1.63L320.1,98.1l2.73.77c20.39,5.88,147.26,46.58,155.11,148.53a148.08,148.08,0,0,1-23.89,90.78,287.55,287.55,0,0,1-23.8,31.65c-9.9,11.69-23,22-28,37a19.08,19.08,0,0,0-1.11,8.7,20.24,20.24,0,0,0,11.35,13.31,49.39,49.39,0,0,0,9.9,3.84,48.2,48.2,0,0,0,25.34.09,46.24,46.24,0,0,0,10.15-4C464,425.46,477.77,417.35,477.94,409.5Z",fill:"#ff9801"}),wp.element.createElement("path",{d:"M447.74,432.8a82.27,82.27,0,0,1-34,40.86,136.33,136.33,0,0,1-52.47,17.49c-5.37.77-10.75,1.37-16,1.8a26,26,0,0,1-2.64.16,77,77,0,0,1-26.71-6.39c-2.73-1.2-13,.59-15.53-1.11A30,30,0,0,1,285,462.83c-3.49-19.28-5.63-49.15,4.95-66.12a151.2,151.2,0,0,1,39.84-40.53c30.63-22.35,50.68-40.27,54.43-81.05A122.64,122.64,0,0,0,370.27,209c-14.84-33.1-29.86-76.61-63.56-92.22-1.2-.6-2.48-1.11-3.67-1.63l10.75-10.75c40.69,14.59,131.9,57,138.55,143a148,148,0,0,1-23.89,90.78,286.29,286.29,0,0,1-23.8,31.65c-9.9,11.69-23,22-28,37a19,19,0,0,0-1.11,8.7,20.2,20.2,0,0,0,11.34,13.31,48.8,48.8,0,0,0,35.5,3.84A48.2,48.2,0,0,0,447.74,432.8Z",fill:"#fec108"}),wp.element.createElement("path",{d:"M329.77,211.15c.08,37.36-40.81,81.47-90.72,104.51a159.87,159.87,0,0,0-18,9.81c20-28.16-5.46-66.46-7.42-69.36,2.73-.09-2.23-11.4-.57-13.65C287.43,140,315,232.9,329.77,211.15Z",fill:"#fb79a6"}),wp.element.createElement("path",{d:"M400.73,274.54c-3.76,40.78-32.25,61.76-62.88,84.12a139.49,139.49,0,0,0-38.57,38.56A78.31,78.31,0,0,0,292,453.61a42.21,42.21,0,0,0,16,28.76,53.07,53.07,0,0,0,7.93,4.35,86.64,86.64,0,0,1-30,11.09,194.5,194.5,0,0,1-29.77,4.77c-.43,0-.77.09-1.2.09a142.75,142.75,0,0,1-20,.51,75.93,75.93,0,0,1-44.11-13.82c-29.94-22.95-35.66-66.89-23.54-99.56a130.48,130.48,0,0,1,53.83-64.33,159.87,159.87,0,0,1,18-9.81c49.91-23,63.56-63.31,63.48-100.68-.09-45.64-46-82.75-46-82.75,10.58-3,43.94-11.09,50.17-15.44A178,178,0,0,1,387,200,153.86,153.86,0,0,1,400.73,274.54Z",fill:"#ff9801"}),wp.element.createElement("path",{d:"M322.83,98.87a44.52,44.52,0,0,1-16.12,17.92,82.92,82.92,0,0,1-25,11.17,220.77,220.77,0,0,1,20.82,87,109.1,109.1,0,0,1-80.54,41c-2.81,0-5.63.09-8.36.18-30.12,1.44-54.18,11.17-85.49,42.48C94,332.72,68.42,281.53,59.89,264.47s-17.07-25.6,25.59-51.19c31.65-19,39.85-47.35,59.38-71.24,10.84,14.76-3.29-23.32,16.41,1.56-1.62-.34,3.81-8.67,3.56-9.95-1.8-7.34,6.29-10,9.53-16.86,13.15-27.73,14.51-23,41-21.53,1,0,31.63-4.35,32.65-4.27a102.91,102.91,0,0,0,25.85-14c10.15-7.17,26-12.29,50.51-8.79A41.17,41.17,0,0,1,322.83,98.87Z",fill:"#fb79a6"}),wp.element.createElement("path",{d:"M141.09,116,36.13,16a4.27,4.27,0,0,1,4.69-7L174.36,74.45Z",fill:"#ff9801"}),wp.element.createElement("path",{d:"M273.86,77a45.13,45.13,0,0,0-17.74,25.34c-1-.09-2.05-.18-3.08-.18-26.53-1.44-62.28.52-75.42,28.25a32.91,32.91,0,0,0-2,21.92c.26,1.28,2.05,9.39,3.67,9.73A66.7,66.7,0,0,1,144.86,142a27.69,27.69,0,0,1-3.75-26,.08.08,0,0,0,.08-.09A80.88,80.88,0,0,1,162.27,85.3a131.76,131.76,0,0,1,11.94-10.58l.17-.17A75.08,75.08,0,0,1,273.86,77Z",fill:"#fec108"}),wp.element.createElement("path",{d:"M243,164.91c-3.26-7.63-15.4-9.57-27.12-4.33s-18.58,15.67-15.32,23.3,15.4,9.57,27.12,4.33S246.3,172.54,243,164.91Z",fill:"#fff"}),wp.element.createElement("path",{d:"M228.06,177.82c0,7.49-5.75,13.57-12.86,13.57s-12.86-6.08-12.86-13.57,5.76-13.56,12.86-13.56S228.06,170.33,228.06,177.82Z",fill:"#37474f"}),wp.element.createElement("path",{d:"M236,169.61a8.54,8.54,0,1,1-8.54-8.53A8.53,8.53,0,0,1,236,169.61Z",fill:"#fff"}),wp.element.createElement("path",{d:"M131.65,118.79a35.35,35.35,0,0,0,1.94,20.53c.29.7.75,1.29,1.09,2-5.12,6.77-9.48,13.72-13.72,20.47A118.87,118.87,0,0,1,81.1,206C41,230,39.23,243.08,50.57,265l1.71,3.28c6.82,13.74,22.94,45.89,47.77,49.91a33.57,33.57,0,0,0,5.2.43,41.26,41.26,0,0,0,29-14c27.11-27.12,48-36.61,70.94-39.25a8.43,8.43,0,0,0,1.7,4.44c.24.3,23.18,29.42,8.14,49.48a138.08,138.08,0,0,0-55.72,67.51c-12.79,34.48-7.84,83.09,26.36,109.3a87.23,87.23,0,0,0,54.71,15.78c2,0,4.16-.23,6.21-.3a5.69,5.69,0,0,0,4.3-.22c2-.13,3.92-.11,6-.3a201.33,201.33,0,0,0,30.87-5,106.44,106.44,0,0,0,28.63-9.93A106.21,106.21,0,0,0,354,502.22c6.33,0,12.3-.36,17.61-.85a161,161,0,0,0,72.25-20.52,88.19,88.19,0,0,0,42.31-66.74c.13-1.45.22-2.9.26-4.36v-.09a8.53,8.53,0,0,0-8.31-8.69,8.23,8.23,0,0,0-8.74,8.15c-.2.53-2.17,4.79-15.59,12.17a39.84,39.84,0,0,1-37.26,0c-4-2.17-6.59-4.81-6.95-7.08a10.9,10.9,0,0,1,.74-4.76,71.23,71.23,0,0,1,17.82-24.74c2.95-3.11,5.89-6.2,8.6-9.38a288.44,288.44,0,0,0,24.54-32.62,156.65,156.65,0,0,0,25.15-96C478.53,143.68,362.87,104.31,333.14,95.86a50.7,50.7,0,0,0-.85-30.8,8.53,8.53,0,0,0-6.72-5.27c-26.49-3.79-44.17,1.7-55.89,9.84A71.16,71.16,0,0,0,223,47.87,77.78,77.78,0,0,0,173.47,64.5L44.64,1.39A12.65,12.65,0,0,0,28.33,5.66a12.61,12.61,0,0,0,1.91,16.51Zm92.2,145.61a122,122,0,0,0,67.93-26.08A99.38,99.38,0,0,1,288,253.2a93.71,93.71,0,0,1-50.85,53.86A73.27,73.27,0,0,0,223.85,264.4Zm60.06,225.09a188.18,188.18,0,0,1-28.61,4.59c-1.14.1-2.19.13-3.31.21-10.61-15.49-45.21-74.15,2-121.41A8.53,8.53,0,0,0,242,360.82c-48.41,48.4-24.68,107.19-9.74,133.66a65.51,65.51,0,0,1-36.31-11.94c-27.3-21-31.08-61.92-20.73-89.83a121.55,121.55,0,0,1,50.4-60.08,152.11,152.11,0,0,1,17-9.28A110.64,110.64,0,0,0,304,258.81c17.25-49.17-1.8-104.43-10.7-125.75a95.17,95.17,0,0,0,11.69-5.3,150.16,150.16,0,0,1,74.22,75.65,145.92,145.92,0,0,1,13,70.33c-3.36,37.16-29.34,56.07-59.41,78a149.56,149.56,0,0,0-40.79,41,85.06,85.06,0,0,0-8.44,62.43,53.41,53.41,0,0,0,15.06,30.4C293.82,487.14,288.83,488.34,283.91,489.49ZM469.41,248a139.68,139.68,0,0,1-22.56,85.6,269.7,269.7,0,0,1-23.11,30.71c-2.5,2.95-5.22,5.81-8,8.68a84.85,84.85,0,0,0-21.64,31.18,26.75,26.75,0,0,0-1.39,12.73,28,28,0,0,0,15.65,19.4,57.32,57.32,0,0,0,53.59-.11l.86-.47a74.08,74.08,0,0,1-28.07,30.66,106.84,106.84,0,0,1-29.55,12.3,8.37,8.37,0,0,0-5.77-.71,39.16,39.16,0,0,1-32.32-6.82c-10.81-10.13-13.72-30.92-8.41-60.12A8.53,8.53,0,0,0,341.94,408c-6.49,35.69-1.93,61.14,13.54,75.64.59.55,1.22,1,1.83,1.5a78.61,78.61,0,0,1-44.63-9.87,33.87,33.87,0,0,1-12.34-23.22,69.12,69.12,0,0,1,6.15-50.33,134,134,0,0,1,36.34-36.19c30.63-22.3,62.28-45.37,66.38-90.22a161.27,161.27,0,0,0-14.4-78.85,169.78,169.78,0,0,0-74.16-80,52.42,52.42,0,0,0,4.41-5.12C344.13,116.57,462.08,152.62,469.41,248Zm-204.94-144c.27-1.36,7-32.15,53.1-28a32.34,32.34,0,0,1-2.69,19.73c-5.36,10.71-17.32,18.77-35.53,24a8.52,8.52,0,0,0-5.28,12,216.07,216.07,0,0,1,19.81,80.38A100.9,100.9,0,0,1,222,247.4c-33.79,0-62.28,7.55-99.88,45.16a22.71,22.71,0,0,1-19.37,8.79c-16.21-2.63-30-30.29-35.22-40.7l-1.79-3.5C59.38,244.9,57,240.3,89.88,220.59a134.34,134.34,0,0,0,45.55-49.78c3.42-5.46,6.83-10.65,10.41-15.72A80.92,80.92,0,0,0,176.19,170a9.49,9.49,0,0,0,1.36.38v-.07a11.22,11.22,0,0,0,1.71.26,8.53,8.53,0,0,0,6.18-14.42,47.38,47.38,0,0,1-1.55-5.87,24.27,24.27,0,0,1,1.38-16.21c8.4-17.73,30.38-25.4,67.71-23.36.78,0,1.56.07,2.34.14A8.54,8.54,0,0,0,264.47,104.07ZM222,64.91a54.47,54.47,0,0,1,35.35,16.48,57.52,57.52,0,0,0-7.13,12.1c-18.93-.9-63.93-1.23-80.3,33.27a40.72,40.72,0,0,0-3.6,21.45A31.71,31.71,0,0,1,148.72,131c-3.74-12.87,8.57-28.67,19.56-39.66,17.57-17.57,35-26.45,51.75-26.45ZM159.17,76.5c-1,1-2,1.78-2.95,2.76a110.93,110.93,0,0,0-17.78,22.42L62,28.91Z"}),wp.element.createElement("path",{d:"M94,247.4a8.54,8.54,0,0,0-14.57-6A13.65,13.65,0,0,0,75.67,256c3.5,8.45,14.67,8.45,18.33,8.45a8.53,8.53,0,1,0,0-17.06Z"}),wp.element.createElement("path",{d:"M324.79,315.66a8.57,8.57,0,0,0,4.39-1.22c2-1.19,48.21-30.06,20.77-112.39a8.55,8.55,0,0,0-16.22,5.39c22.86,68.53-11.76,91.37-13.41,92.4a8.53,8.53,0,0,0,4.47,15.82Z"}),wp.element.createElement("circle",{cx:"385.79",cy:"402.79",r:"94.4",transform:"translate(-171.82 390.77) rotate(-45)",fill:"#fb79a6",stroke:"#000","stroke-miterlimit":"10","stroke-width":"13"}),wp.element.createElement("path",{d:"M323.81,368.84l29-29a9.28,9.28,0,0,1,13.07,0L467.72,441.74a2.54,2.54,0,0,1,.66,1.21l12,50.48a2.4,2.4,0,0,1-1.79,2.9,2.36,2.36,0,0,1-1.21,0l-50.55-11.89a2.37,2.37,0,0,1-1.16-.64h0L323.81,381.91a9.26,9.26,0,0,1,0-13.07Zm32.38-25.55-29,29a4.42,4.42,0,0,0,0,6.24L428.61,479.88l46.18,10.86-11-46.07L362.44,343.29a4.43,4.43,0,0,0-6.25,0Z",stroke:"#000","stroke-miterlimit":"10","stroke-width":"6"}),wp.element.createElement("path",{d:"M429.1,483.78a2.41,2.41,0,1,1-3.42-3.41l38.66-38.67a2.42,2.42,0,0,1,3.42,3.42Z",stroke:"#000","stroke-miterlimit":"10","stroke-width":"6"}),wp.element.createElement("rect",{x:"336.68",y:"377.64",width:"54.62",height:"4.83",transform:"translate(-162.13 368.69) rotate(-45)",stroke:"#000","stroke-miterlimit":"10","stroke-width":"6"}),wp.element.createElement("path",{d:"M371.71,410.49a2.41,2.41,0,1,1,3.41-3.41l44.55,44.55a2.41,2.41,0,1,1-3.41,3.41Z",stroke:"#000","stroke-miterlimit":"10","stroke-width":"6"}),wp.element.createElement("path",{d:"M381.36,400.84a2.42,2.42,0,0,1,3.42-3.42L429.33,442a2.42,2.42,0,0,1-3.42,3.42Z",stroke:"#000","stroke-miterlimit":"10","stroke-width":"6"}),wp.element.createElement("path",{d:"M344.68,396l35.21-35.21-17.45-17.45a4.43,4.43,0,0,0-6.25,0l-29,29a4.42,4.42,0,0,0,0,6.24Z",fill:"#f8bbd0",stroke:"#000","stroke-miterlimit":"10","stroke-width":"6","fill-rule":"evenodd"}),wp.element.createElement("polygon",{points:"464.67 448.21 432.16 480.72 474.79 490.74 464.67 448.21",fill:"#ffccbc",stroke:"#000","stroke-miterlimit":"10","stroke-width":"6","fill-rule":"evenodd"}),wp.element.createElement("path",{d:"M427.39,478.66l35.21-35.21-79.3-79.3-35.21,35.21,79.3,79.3ZM429.33,442a2.42,2.42,0,0,1-3.42,3.42l-44.55-44.55a2.42,2.42,0,0,1,3.42-3.42L429.33,442Zm6.24-6.24L391,391.18a2.41,2.41,0,0,1,3.41-3.41L439,432.32a2.41,2.41,0,0,1-3.41,3.41Zm-60.45-28.65,44.55,44.55a2.41,2.41,0,1,1-3.41,3.41l-44.55-44.55a2.41,2.41,0,1,1,3.41-3.41Z",fill:"#e6ee9c",stroke:"#000","stroke-miterlimit":"10","stroke-width":"6","fill-rule":"evenodd"}),wp.element.createElement("path",{d:"M371.9,364.21l4.93-4.92-13.77-13.77a3.51,3.51,0,0,0-4.93,0L355,348.61a7.17,7.17,0,0,1,3.09,1.83Z",fill:"#bb8e9d","fill-rule":"evenodd"}),wp.element.createElement("polygon",{points:"385.43 366.64 379.55 372.52 395.93 388.91 437.95 430.93 454.34 447.32 460.23 441.43 385.43 366.64",fill:"#adb277","fill-rule":"evenodd"}),wp.element.createElement("polygon",{points:"463.91 452.77 459.44 457.24 466.07 485.09 471.94 486.47 463.91 452.77",fill:"#c09a8e","fill-rule":"evenodd"}),wp.element.createElement("path",{d:"M391,391.18a2.41,2.41,0,0,1,3.41-3.41L439,432.32a2.41,2.41,0,0,1-3.41,3.41Z",stroke:"#000","stroke-miterlimit":"10","stroke-width":"6"})),t.a=l}]);