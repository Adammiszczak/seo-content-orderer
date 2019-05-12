(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t(20)},17:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(9),r=t.n(l),i=(t(17),t(1)),o=t(2),c=t(4),m=t(3),d=t(5),p=(t(18),t(10)),h=t(6),u=t(7),g=(t(19),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",{className:"pb-5"},"General Client Data"),s.a.createElement("form",{onSubmit:this.props.submitDomainData,className:"w-75 mx-auto"},s.a.createElement("div",{className:"form-group row"},s.a.createElement("label",{className:"col-sm-3 col-form-label",htmlFor:"domainUrl"},"Domain URL:"),s.a.createElement("div",{className:"col-sm-9"},s.a.createElement("input",{type:"text",className:"form-control",id:"domainUrl",onChange:this.props.handleChangeClient,name:"domainUrl",value:this.props.domainUrl,placeholder:"e.g. https://xyz.com/"}))),s.a.createElement("div",{className:"form-group row"},s.a.createElement("label",{className:"col-sm-3 col-form-label",htmlFor:"industry"},"Type of Industry:"),s.a.createElement("div",{className:"col-sm-9"},s.a.createElement("input",{type:"text",className:"form-control",id:"industry",onChange:this.props.handleChangeClient,name:"industry",value:this.props.industry,placeholder:"e.g. weddings in poznan, wedding parties poznan, bridal parties poznan"}))),s.a.createElement("div",{className:"form-group row"},s.a.createElement("div",{className:"col-sm-3"},"Is client new?"),s.a.createElement("div",{className:"col-sm-2 d-flex justify-content-start"},s.a.createElement("div",{className:"form-check"},s.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"isNew",onChange:this.props.handleChangeClient,name:"isNew",value:this.props.isNew}),s.a.createElement("label",{className:"form-check-label",htmlFor:"isNew"},"Check if new")))),s.a.createElement("div",{className:"form-group row"},s.a.createElement("div",{className:"col-sm-12"},!1===this.props.disabled&&s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save Data"),!1!==this.props.disabled&&s.a.createElement("button",{disabled:!0,type:"submit",className:"btn btn-primary"},"Save Data"),this.props.disabled?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement("span",{style:{fontSize:"20px"},className:"badge badge-info my-2 p-2"},"Go to next part!"))):null))))}}]),a}(n.Component)),b=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={allLandings:[],landingPage:{lpUrl:"",phrases:"",content:"",signs:""},rdySubmit:!1},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",{className:"my-5"},"Specific Landing Pages Data"),s.a.createElement("form",{onSubmit:this.props.submitLpData,className:"w-75 mx-auto"},s.a.createElement("div",{className:"form-group row"},s.a.createElement("label",{className:"col-sm-3 col-form-label",htmlFor:"lpUrl"},"Landing Page URL:"),s.a.createElement("div",{className:"col-sm-9"},s.a.createElement("input",{type:"text",className:"form-control",id:"lpUrl",onChange:this.props.handleChange,name:"lpUrl",value:this.props.lpUrl,placeholder:"e.g. https://xyz.com/wedding-parties-poznan/"}))),s.a.createElement("div",{className:"form-group row"},s.a.createElement("label",{className:"col-sm-3 col-form-label",htmlFor:"phrases"},"Phrases for Landing Page"),s.a.createElement("div",{className:"col-sm-9"},s.a.createElement("input",{type:"text",className:"form-control",id:"phrases",onChange:this.props.handleChange,name:"phrases",value:this.props.phrases,placeholder:"e.g. wedding parties poznan, bridal parties poznan, cheap wedding party poznan, best bridal party poznan"}))),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"content"},"Heading, paragraphs, sections"),s.a.createElement("textarea",{placeholder:"H1: Wedding parties Poznan\r\nGenerally about this type of parties, about companies at Poznan etc\r\n1000 signs\r\nH2: Why you should choose wedding parties in Poznan with Johns Weddings?\r\nClient advantages, experience, positive reviews, about organization\r\n1000-1500 signs ",className:"form-control",id:"content",onChange:this.props.handleChange,name:"content",value:this.props.content,rows:"6"})),s.a.createElement("div",{className:"form-group row"},s.a.createElement("label",{className:"col-sm-3 col-form-label",htmlFor:"signs"},"Approximately number of signs"),s.a.createElement("div",{className:"col-sm-9"},s.a.createElement("input",{type:"text",className:"form-control",id:"signs",onChange:this.props.handleChange,name:"signs",value:this.props.signs,placeholder:"e.g. 1500-2000"}))),s.a.createElement("div",{className:"form-group row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save LP Data"),this.props.allLandings>=1?s.a.createElement("button",{onClick:this.props.finalizeOrder,type:"button",className:"btn btn-danger mx-2"},"Finish Order!"):null))))}}]),a}(n.Component),f=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).submitDomainData=function(e){e.preventDefault(),t.setState({disabled:!t.state.disabled,rdySubmit:!0})},t.handleChangeClient=function(e){var a;a="isNew"===e.target.name?Object(u.a)({},t.state.clientData,Object(h.a)({},e.target.name,e.target.checked)):Object(u.a)({},t.state.clientData,Object(h.a)({},e.target.name,e.target.value)),t.setState({clientData:a})},t.submitLpData=function(e){e.preventDefault();var a=Object(u.a)({},t.state.landingPage);t.setState({allLandings:[].concat(Object(p.a)(t.state.allLandings),[a]),landingPage:{lpUrl:"",phrases:"",content:"",signs:""},rdySubmit:!0})},t.handleChange=function(e){var a;a=Object(u.a)({},t.state.landingPage,Object(h.a)({},e.target.name,e.target.value)),t.setState({landingPage:a})},t.finalizeOrder=function(){},t.state={liftingState:"Initial state",rdySubmit:!1,clientData:{domainUrl:"",industry:"",isNew:""},allLandings:[],landingPage:{lpUrl:"",phrases:"",content:"",signs:""},disabled:!1},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"orderMain"},s.a.createElement("h1",{className:"py-5 m-0"},"Start making your order!"),s.a.createElement(g,{disabled:this.state.disabled,submitDomainData:this.submitDomainData,handleChangeClient:this.handleChangeClient,domainUrl:this.state.clientData.domainUrl,industry:this.state.clientData.industry,isNew:this.state.clientData.isNew}),s.a.createElement(b,{submitLpData:this.submitLpData,handleChange:this.handleChange,lpUrl:this.state.landingPage.lpUrl,phrases:this.state.landingPage.phrases,content:this.state.landingPage.content,signs:this.state.landingPage.signs,allLandings:this.state.allLandings.length,finalizeOrder:this.finalizeOrder}))}}]),a}(n.Component),E=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(c.a)(this,Object(m.a)(a).call(this))).startHandler=function(){e.setState({startScreen:!e.startScreen})},e.state={startScreen:!1},e}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",null,!1===this.state.startScreen&&s.a.createElement("header",{className:"App-header"},s.a.createElement("h1",null,"SEO Content Orderer!"),s.a.createElement("button",{onClick:this.startHandler,className:"btn btn-light"},"Press to Start!")),!1!==this.state.startScreen&&s.a.createElement(f,null)))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.10bd80e3.chunk.js.map