(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),o=n(5),s=n.n(o),r=(n(16),n(6)),l=n(7),b=n(8),d=n(10),u=n(9),j=(n(17),n(4)),h=n.n(j),O=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{className:h.a.section,children:[Object(c.jsx)("b",{className:h.a.title,children:t}),n]})},x=n(2),f=n.n(x),p=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(c.jsx)("ul",{className:f.a.buttonList,children:t.map((function(e){return Object(c.jsx)("li",{className:f.a.item,children:Object(c.jsx)("button",{type:"button",onClick:n,id:e,className:f.a.button,children:e})},e)}))})},v=function(e){var t=e.message;return Object(c.jsx)("p",{children:t})},g=function(e){var t=e.good,n=e.neutral,i=e.bad,a=e.total,o=e.positivePercentage;return Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsxs)("p",{children:["Good: ",t]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("p",{children:["Neutral: ",n]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("p",{children:["Bad: ",i]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("p",{children:["Total: ",a]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("p",{children:["Positive feedback: ",o,"%"]})})]})},k=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var n=t.target.id.toLowerCase();e.setState((function(e){return Object(r.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(e,t,n){return e+t+n},e.countPositiveFeedbackPercentage=function(e,t){return Math.round(100*e/t)},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,i=e.bad,a=this.countTotalFeedback(t,n,i),o=this.countPositiveFeedbackPercentage(t,a);return Object(c.jsxs)("div",{children:[Object(c.jsx)(O,{title:"Please leave feedback",children:Object(c.jsx)(p,{options:["Good","Neutral","Bad"],onLeaveFeedback:this.onLeaveFeedback})}),Object(c.jsx)(O,{title:"Statistics",children:0===a?Object(c.jsx)(v,{message:"No feedback given"}):Object(c.jsx)(g,{good:t,neutral:n,bad:i,total:a,positivePercentage:o})})]})}}]),n}(i.Component),_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),_()},2:function(e,t,n){e.exports={buttonList:"FeedbackOptions_buttonList__253yU",item:"FeedbackOptions_item___4t-7",button:"FeedbackOptions_button__NlJeY"}},4:function(e,t,n){e.exports={section:"Section_section__1Paqs",title:"Section_title__2GPDE"}}},[[18,1,2]]]);
//# sourceMappingURL=main.c0a8de09.chunk.js.map