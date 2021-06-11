(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},27:function(e,t,a){e.exports=a(45)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(22),r=a.n(i),o=(a(32),a(2)),c=a(3),u=a(5),l=a(4),m=a(6),h=a(14),d=a(11),g=(a(20),a(13)),p=a(7),y=a.n(p),f=(a(33),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this))).submitQuestion=function(e){e.preventDefault(),y.a.ajax({url:"".concat(a.state.api_url,"/questions"),type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify({question:a.state.question,answer:a.state.answer,difficulty:a.state.difficulty,category:a.state.category}),xhrFields:{withCredentials:!0},crossDomain:!0,success:function(e){document.getElementById("add-question-form").reset()},error:function(e){alert("Unable to add question. Please try your request again")}})},a.handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.state={question:"",answer:"",difficulty:1,category:1,categories:{},api_url:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("test 123"),console.log(this.state.api_url),y.a.ajax({url:"".concat(this.state.api_url,"/categories"),type:"GET",success:function(t){e.setState({categories:t.categories})},error:function(e){alert("Unable to load categories. Please try your request again")}})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"add-form"},s.a.createElement("h2",null,"Add a New Trivia Question"),s.a.createElement("form",{className:"form-view",id:"add-question-form",onSubmit:this.submitQuestion},s.a.createElement("label",null,"Question",s.a.createElement("input",{type:"text",name:"question",onChange:this.handleChange})),s.a.createElement("label",null,"Answer",s.a.createElement("input",{type:"text",name:"answer",onChange:this.handleChange})),s.a.createElement("label",null,"Difficulty",s.a.createElement("select",{name:"difficulty",onChange:this.handleChange},s.a.createElement("option",{value:"1"},"1"),s.a.createElement("option",{value:"2"},"2"),s.a.createElement("option",{value:"3"},"3"),s.a.createElement("option",{value:"4"},"4"),s.a.createElement("option",{value:"5"},"5"))),s.a.createElement("label",null,"Category",s.a.createElement("select",{name:"category",onChange:this.handleChange},Object.keys(this.state.categories).map(function(t){return s.a.createElement("option",{key:t,value:t},e.state.categories[t])}))),s.a.createElement("input",{type:"submit",className:"button",value:"Submit"})))}}]),t}(n.Component)),v=(a(34),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={visibleAnswer:!1},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"flipVisibility",value:function(){this.setState({visibleAnswer:!this.state.visibleAnswer})}},{key:"render",value:function(){var e=this,t=this.props,a=t.question,n=t.answer,i=t.category,r=t.difficulty,o=i.toLowerCase();return s.a.createElement("div",{className:"Question-holder"},s.a.createElement("div",{className:"Question"},a),s.a.createElement("div",{className:"Question-status"},s.a.createElement("img",{className:"category",src:"".concat(o,".svg"),alt:i}),s.a.createElement("div",{className:"difficulty"},"Difficulty: ",r),s.a.createElement("img",{src:"delete.png",className:"delete",onClick:function(){return e.props.questionAction("DELETE")},alt:"delete"})),s.a.createElement("div",{className:"show-answer button",onClick:function(){return e.flipVisibility()}},this.state.visibleAnswer?"Hide":"Show"," Answer"),s.a.createElement("div",{className:"answer-holder"},s.a.createElement("span",{style:{visibility:this.state.visibleAnswer?"visible":"hidden"}},"Answer: ",n)))}}]),t}(n.Component)),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={query:""},a.getInfo=function(e){e.preventDefault(),a.props.submitSearch(a.state.query)},a.handleInputChange=function(){a.setState({query:a.search.value})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("form",{onSubmit:this.getInfo},s.a.createElement("input",{placeholder:"Search questions...",ref:function(t){return e.search=t},onChange:this.handleInputChange}),s.a.createElement("input",{type:"submit",value:"Submit",className:"button"}))}}]),t}(n.Component),b=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).getQuestions=function(){y.a.ajax({url:"".concat(e.state.api_url,"/questions?page=").concat(e.state.page),type:"GET",success:function(t){e.setState({questions:t.questions,totalQuestions:t.total_questions,categories:t.categories,currentCategory:t.current_category})},error:function(e){alert("Unable to load questions111. Please try your request again")}})},e.getByCategory=function(t){y.a.ajax({url:"".concat(e.state.api_url,"/categories/").concat(t,"/questions"),type:"GET",success:function(t){e.setState({questions:t.questions,totalQuestions:t.total_questions,currentCategory:t.current_category})},error:function(e){alert("Unable to load questions222. Please try your request again")}})},e.submitSearch=function(t){y.a.ajax({url:"".concat(e.state.api_url,"/questions"),type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify({searchTerm:t}),xhrFields:{withCredentials:!0},crossDomain:!0,success:function(t){e.setState({questions:t.questions,totalQuestions:t.total_questions,currentCategory:t.current_category})},error:function(e){alert("Unable to load questions333. Please try your request again")}})},e.questionAction=function(t){return function(a){"DELETE"===a&&window.confirm("are you sure you want to delete the question?")&&y.a.ajax({url:"".concat(e.state.api_url,"/questions/").concat(t),type:"DELETE",success:function(t){e.getQuestions()},error:function(e){alert("Unable to load questions444. Please try your request again")}})}},e.state={questions:[],page:1,totalQuestions:0,categories:{},currentCategory:null,api_url:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getQuestions()}},{key:"selectPage",value:function(e){var t=this;this.setState({page:e},function(){return t.getQuestions()})}},{key:"createPagination",value:function(){for(var e=this,t=[],a=Math.ceil(this.state.totalQuestions/10),n=function(a){t.push(s.a.createElement("span",{key:a,className:"page-num ".concat(a===e.state.page?"active":""),onClick:function(){e.selectPage(a)}},a))},i=1;i<=a;i++)n(i);return t}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"question-view"},s.a.createElement("div",{className:"categories-list"},s.a.createElement("h2",{onClick:function(){e.getQuestions()}},"Categories"),s.a.createElement("ul",null,Object.keys(this.state.categories).map(function(t){return s.a.createElement("li",{key:t,onClick:function(){e.getByCategory(t)}},e.state.categories[t],s.a.createElement("img",{className:"category",src:"".concat(e.state.categories[t].toLowerCase(),".svg"),alt:""}))})),s.a.createElement(E,{submitSearch:this.submitSearch})),s.a.createElement("div",{className:"questions-list"},s.a.createElement("h2",null,"Questions"),this.state.questions.map(function(t,a){return s.a.createElement(v,{key:t.id,question:t.question,answer:t.answer,category:e.state.categories[t.category],difficulty:t.difficulty,questionAction:e.questionAction(t.id)})}),s.a.createElement("div",{className:"pagination-menu"},this.createPagination())))}}]),t}(n.Component),w=a(23),q=a.n(w),C=(a(35),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"navTo",value:function(e){window.location.href=window.location.origin+"/#"+e,"https://salstatice.github.io"===window.location.origin&&(window.location.href=window.location.origin+"/trivia-api/#"+e)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App-header"},s.a.createElement("img",{src:q.a,alt:""}),s.a.createElement("h1",{onClick:function(){e.navTo("")}},"Udacitrivia"),s.a.createElement("h2",{onClick:function(){e.navTo("")}},"List"),s.a.createElement("h2",{onClick:function(){e.navTo("/add")}},"Testing"),s.a.createElement("h2",{onClick:function(){e.navTo("/play")}},"Play"))}}]),t}(n.Component)),j=a(26),O=(a(36),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this))).selectCategory=function(e){var t=e.type,n=e.id,s=void 0===n?0:n;a.setState({quizCategory:{type:t,id:s}},a.getNextQuestion)},a.handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.getNextQuestion=function(){var e=Object(j.a)(a.state.previousQuestions);a.state.currentQuestion.id&&e.push(a.state.currentQuestion.id),y.a.ajax({url:"".concat(a.state.api_url,"/quizzes"),type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify({previous_questions:e,quiz_category:a.state.quizCategory}),xhrFields:{withCredentials:!0},crossDomain:!0,success:function(t){a.setState({showAnswer:!1,previousQuestions:e,currentQuestion:t.question,guess:"",forceEnd:!t.question})},error:function(e){alert("Unable to load question. Please try your request again")}})},a.submitGuess=function(e){e.preventDefault();a.state.guess.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();var t=a.evaluateAnswer();a.setState({numCorrect:t?a.state.numCorrect+1:a.state.numCorrect,showAnswer:!0})},a.restartGame=function(){a.setState({quizCategory:null,previousQuestions:[],showAnswer:!1,numCorrect:0,currentQuestion:{},guess:"",forceEnd:!1})},a.evaluateAnswer=function(){var e=a.state.guess.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();return a.state.currentQuestion.answer.toLowerCase().split(" ").includes(e)},a.state={quizCategory:null,previousQuestions:[],showAnswer:!1,categories:{},numCorrect:0,currentQuestion:{},guess:"",forceEnd:!1,api_url:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.ajax({url:"".concat(this.state.api_url,"/categories"),type:"GET",success:function(t){e.setState({categories:t.categories})},error:function(e){alert("Unable to load categories. Please try your request again")}})}},{key:"renderPrePlay",value:function(){var e=this;return s.a.createElement("div",{className:"quiz-play-holder"},s.a.createElement("div",{className:"choose-header"},"Choose Category"),s.a.createElement("div",{className:"category-holder"},s.a.createElement("div",{className:"play-category",onClick:this.selectCategory},"ALL"),Object.keys(this.state.categories).map(function(t){return s.a.createElement("div",{key:t,value:t,className:"play-category",onClick:function(){return e.selectCategory({type:e.state.categories[t],id:t})}},e.state.categories[t])})))}},{key:"renderFinalScore",value:function(){return s.a.createElement("div",{className:"quiz-play-holder"},s.a.createElement("div",{className:"final-header"}," Your Final Score is ",this.state.numCorrect),s.a.createElement("div",{className:"play-again button",onClick:this.restartGame}," Play Again? "))}},{key:"renderCorrectAnswer",value:function(){this.state.guess.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();var e=this.evaluateAnswer();return s.a.createElement("div",{className:"quiz-play-holder"},s.a.createElement("div",{className:"quiz-question"},this.state.currentQuestion.question),s.a.createElement("div",{className:"".concat(e?"correct":"wrong")},e?"You were correct!":"You were incorrect"),s.a.createElement("div",{className:"quiz-answer"},this.state.currentQuestion.answer),s.a.createElement("div",{className:"next-question button",onClick:this.getNextQuestion}," Next Question "))}},{key:"renderPlay",value:function(){return 5===this.state.previousQuestions.length||this.state.forceEnd?this.renderFinalScore():this.state.showAnswer?this.renderCorrectAnswer():s.a.createElement("div",{className:"quiz-play-holder"},s.a.createElement("div",{className:"quiz-question"},this.state.currentQuestion.question),s.a.createElement("form",{onSubmit:this.submitGuess},s.a.createElement("input",{type:"text",name:"guess",onChange:this.handleChange}),s.a.createElement("input",{className:"submit-guess button",type:"submit",value:"Submit Answer"})))}},{key:"render",value:function(){return this.state.quizCategory?this.renderPlay():this.renderPrePlay()}}]),t}(n.Component)),N=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){console.log("HOST",Object({NODE_ENV:"production",PUBLIC_URL:"."}).HOST),console.log("API_URL",Object({NODE_ENV:"production",PUBLIC_URL:"."}).API_URL);return s.a.createElement("div",{className:"App"},s.a.createElement(C,{path:!0}),s.a.createElement(h.b,{basename:"."},s.a.createElement(d.c,null,s.a.createElement(d.a,{path:"/",exact:!0,component:b}),s.a.createElement(d.a,{path:"/add",component:f}),s.a.createElement(d.a,{path:"/play",component:O}),s.a.createElement(d.a,{component:b}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(h.a,{basename:"."},s.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.fd2e2b97.chunk.js.map