(this["webpackJsonppic-map"]=this["webpackJsonppic-map"]||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/space.bde89f90.jpg"},17:function(e,a,t){"use strict";var n=t(0),s=t.n(n),o=t(1),l=t(2),r=t(4),i=t(3),c=(t(26),t(16)),m=t.n(c),u=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={},n}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"search-container"},s.a.createElement("div",{id:"background"}),s.a.createElement("img",{src:m.a,alt:"search-back"}),s.a.createElement("div",{className:"search-bar-area"},s.a.createElement("span",null,"My Unsplash API"),s.a.createElement("div",null,s.a.createElement("input",{type:"text",className:"search-bar search-bar-text",placeholder:"Search Images",onKeyUp:this.props.onKeypress}))))}}]),t}(n.Component),d=t(7),p=t(6),h=t.n(p),f=(t(41),function(e){var a=e.user,t=e.onMouseOver,n=void 0!==t&&t,o=e.link,l=e.download;a||(a={profile_image:{large:""},username:""});return s.a.createElement("div",{className:"image-buttons-container ".concat(!1===n?"hidden":"visible")},s.a.createElement("div",{className:"image-shadow"}),s.a.createElement("div",{className:"image-buttons image-buttons-top"},s.a.createElement("button",{className:"fas fa-heart"}),s.a.createElement("button",{className:"fas fa-plus"}," Collect")),s.a.createElement("div",{className:"image-buttons image-buttons-bottom"},s.a.createElement("span",{className:"image-buttons-profile"},s.a.createElement("div",null,s.a.createElement("img",{src:a.profile_image.large,alt:a.username})),s.a.createElement("div",{className:"image-buttons-profile-username"},a.username)),s.a.createElement("button",{onClick:function(e){e.stopPropagation(),l(o)},className:"fas fa-arrow-down"})))}),v=(t(42),function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var n,s=e.props;return Object(o.a)(this,t),(n=a.call(this,s)).submitInfo=function(){n.props.onClick(n.props.src,n.props.user,n.props.img,n.props.download,n.props.link)},n.onMouseOver=function(){n.setState({hover:!0})},n.onMouseLeave=function(){n.setState({hover:!1})},n.state={hover:!1},n}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"picture show-up"},s.a.createElement("a",{href:"#none",onMouseOver:this.onMouseOver,onMouseLeave:this.onMouseLeave,onClick:this.submitInfo},s.a.createElement("img",{className:"unsplash-img",src:this.props.src.regular,alt:""}),s.a.createElement(f,{user:this.props.user,onMouseOver:this.state.hover,link:this.props.link,download:this.props.download})))}}]),t}(n.Component)),g=(t(43),function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var n,s=e.props;return Object(o.a)(this,t),(n=a.call(this,s)).changeModalImg=function(){!0===n.state.isSmall?n.setState({isSmall:!1}):n.setState({isSmall:!0})},n.onMouseOverImg=function(){n.setState({imgHover:!0})},n.onMouseLeaveImg=function(){n.setState({imgHover:!1})},n.clickDownload=function(){n.props.modalDownload(n.props.modalDownloadlink)},n.state={isSmall:!0,imgHover:!1},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"image-modal-portal ".concat(!1===this.props.modalShow?"hidden":"visible")},s.a.createElement("div",{className:"image-modal-close"},s.a.createElement("button",{className:"fas fa-times",onClick:function(){e.setState({isSmall:!0}),e.props.onClickCloseModal()}})),s.a.createElement("div",{className:"image-modal"},s.a.createElement("div",null,s.a.createElement("div",{className:"image-modal-header"},s.a.createElement("span",{className:"image-buttons-profile"},s.a.createElement("div",null,s.a.createElement("img",{src:null===this.props.modalUser?"":this.props.modalUser.profile_image.large,alt:null===this.props.modalUser?"":this.props.modalUser.username})),s.a.createElement("div",{className:"image-buttons-profile-username",style:{color:"black"}},null===this.props.modalUser?"":this.props.modalUser.username)),s.a.createElement("div",{className:"image-buttons image-buttons-top",style:{position:"relative",display:"inline-flex",top:"initial"}},s.a.createElement("button",{className:"fas fa-heart"}),s.a.createElement("button",{className:"fas fa-plus"}," Collect"),s.a.createElement("button",{className:"fas fa-download",onClick:this.clickDownload}," Download"))),s.a.createElement("div",{className:"image-modal-body"},s.a.createElement("div",null,s.a.createElement("a",{href:"#none",onClick:this.changeModalImg,onMouseOver:this.onMouseOverImg,onMouseLeave:this.onMouseLeaveImg,style:{active:"none"}},s.a.createElement("i",{className:"fas fa-expand ".concat(!1===this.state.imgHover?"hidden":"visible")}),s.a.createElement("img",{src:!0===this.state.isSmall?this.props.modalSrc:this.props.modalImg.urls.regular,alt:""})))),s.a.createElement("div",null,s.a.createElement("div",null)))))}}]),t}(n.Component)),b=(t(44),function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).chunkArray=function(e,a){for(var t=[];e.length;)t.push(e.splice(0,a));return t},n.onClickPic=function(e,a,t,s,o){n.setState({modalSrc:e.small,modalUser:a,modalShow:!0,modalImg:t,modalDownload:s,modalDownloadlink:o}),document.body.classList.add("body-modal-open")},n.onClickCloseModal=function(){n.setState({modalShow:!1}),document.body.classList.remove("body-modal-open")},n.download=function(e){window.open(e,"_blank")},n.state={page:1,perPage:9,images:[],modalShow:!1,modalSrc:"",modalUser:null,modalImg:null},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.searchUnsplashAPI(this.props.keyword,this.state.page,this.state.perPage),window.addEventListener("scroll",this.handleScroll.bind(this))}},{key:"componentDidUpdate",value:function(e){e.keyword!==this.props.keyword&&(this.initState(),this.searchUnsplashAPI(this.props.keyword,this.state.page,this.state.perPage))}},{key:"initState",value:function(){this.setState({page:1,perPage:9,images:[]})}},{key:"componentWillMount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e="innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight,a=document.body,t=document.documentElement,n=Math.max(a.scrollHeight,a.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight);e+window.pageYOffset>=n-200&&(this.setState({page:this.state.page+1}),this.searchUnsplashAPI(this.props.keyword,this.state.page,this.state.perPage))}},{key:"searchUnsplashAPI",value:function(e,a,t){var n=this;new h.a({accessKey:"c6cb812211b9bbe3a04c9509dd69bc4dffaf796877a88526d8292e1a784866c8",secret:"1b1d49f833c6a26b16a144d38ca9f2911370d66d14972e661b7924071e96d687",callbackUrl:"https://hyunse.github.io/pic-map/"}).search.photos(e,a,t).then(p.toJson).then((function(e){if(e.results){var a=n.chunkArray(e.results,3);n.state.images.length>0?(a=n.state.images.map((function(e,t){return[].concat(Object(d.a)(e),Object(d.a)(a[t]))})),n.setState({images:a})):n.setState({images:a}),console.log(a)}}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},this.state.images.map((function(a,t){return s.a.createElement("div",{className:"column",key:t},a.map((function(a,t){return s.a.createElement(v,{img:a,src:a.urls,link:a.links.download,download:e.download,user:a.user,key:a.id,onClick:e.onClickPic})})))})))),s.a.createElement(g,{modalShow:this.state.modalShow,modalUser:this.state.modalUser,modalSrc:this.state.modalSrc,modalDownloadlink:this.state.modalDownloadlink,modalImg:this.state.modalImg,modalDownload:this.state.modalDownload,onClickCloseModal:this.onClickCloseModal}))}}]),t}(n.Component)),E=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).onKeypress=function(e){var a=e.target.value;"Enter"===e.key&&n.setState({keyword:a})},n.state={keyword:"puppy"},n}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(u,{onKeypress:this.onKeypress}),s.a.createElement(b,{keyword:this.state.keyword}))}}]),t}(n.Component);t(45);a.a=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(E,null))}},18:function(e,a,t){e.exports=t(19)},19:function(e,a,t){"use strict";t.r(a),function(e){var a=t(13),n=t.n(a),s=t(0),o=t.n(s),l=t(14),r=t.n(l),i=t(15),c=t.n(i),m=t(17);n.a.config(),e.fetch=c.a,r.a.render(o.a.createElement(m.a,null),document.getElementById("root"))}.call(this,t(5))},26:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){}},[[18,1,2]]]);
//# sourceMappingURL=main.9817b7fa.chunk.js.map