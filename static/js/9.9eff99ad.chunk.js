(this.webpackJsonpleads=this.webpackJsonpleads||[]).push([[9],{166:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(157),s=a(152),l=a(158),o=a.n(l),m=a(160),i=a(146),u=a(24);function b(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),b=Object(i.a)(l,2),d=b[0],p=b[1],f=Object(n.useState)(null),E=Object(i.a)(f,2),v=E[0],j=E[1],O=Object(n.useState)(null),g=Object(i.a)(O,2),y=g[0],h=g[1],S=Object(n.useState)(null),N=Object(i.a)(S,2),w=N[0],C=N[1],H=Object(n.useState)(!1),I=Object(i.a)(H,2),k=I[0],L=I[1],P=Object(n.useState)(!1),z=Object(i.a)(P,2),F=z[0],U=z[1],W=Object(s.useStripe)(),_=Object(s.useElements)(),q=new URLSearchParams(Object(u.useLocation)().search);Object(n.useEffect)((function(){c(q.get("c")),p("$"),j("sk_test_51HgWnqFjE8SSvyvfH3YmMQeHgWFzKwAz7BgHd5IDtvtZpTeUuna9VfBQ76TOCzuAhebXiU4zmhbbjZHKGg78IzjU00lRhLyCjc")}),[]);var x=function(){var e=Object(m.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),U(!0),e.next=4,W.confirmCardPayment(v,{payment_method:{card:_.getElement(s.CardElement),billing_details:{name:t.target.name.value}}});case 4:(a=e.sent).error?(h("Payment failed: ".concat(a.error.message)),U(!1),console.log("[error]",a.error)):(h(null),L(!0),U(!1),C(a.paymentIntent),console.log("[PaymentIntent]",a.paymentIntent));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"checkout-form"},r.a.createElement("div",{className:"sr-payment-form"},r.a.createElement("div",{className:"sr-form-row"}),k?r.a.createElement("div",{className:"sr-field-success message"},r.a.createElement("h1",null,"Your test payment succeeded"),r.a.createElement("p",null,"View PaymentIntent response:"),r.a.createElement("pre",{className:"sr-callout"},r.a.createElement("code",null,JSON.stringify(w,null,2)))):r.a.createElement("form",{onSubmit:x},r.a.createElement("h1",null,d.toLocaleUpperCase()," ",a.toLocaleString(navigator.language,{minimumFractionDigits:2})," "),r.a.createElement("h4",null,"Purchase credits"),r.a.createElement("div",{className:"sr-combo-inputs"},r.a.createElement("div",{className:"sr-combo-inputs-row"},r.a.createElement("input",{type:"text",id:"name",name:"name",placeholder:"Name",autoComplete:"cardholder",className:"sr-input"})),r.a.createElement("div",{className:"sr-combo-inputs-row"},r.a.createElement(s.CardElement,{className:"sr-input sr-card-element",options:{style:{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}}}))),y&&r.a.createElement("div",{className:"message sr-field-error"},y),r.a.createElement("button",{className:"btn",disabled:F||!v||!W},F?"Processing\u2026":"Pay"))))}var d=Object(c.a)("pk_test_51HgWnqFjE8SSvyvfZOkrIAEbqtZytEw5vy5vlWCzo8FuO4Lot9IAoyasoLaSCQMXxm8ItqojYmAfHmDWyMC0Lbbk00W4RqUDnM");t.default=function(){return r.a.createElement(s.Elements,{stripe:d},r.a.createElement(b,null))}}}]);