(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{65:function(e,n,s){},66:function(e,n,s){"use strict";s.r(n);var t=s(1),o=s.n(t),i=s(12),r=s.n(i),c=(s(21),s(13)),u=s(14),a=s(16),d=s(15),l=s(3),b=s(0),h=function(e){Object(a.a)(s,e);var n=Object(d.a)(s);function s(e){var t;return Object(c.a)(this,s),(t=n.call(this,e)).onSessionError=function(e){t.setState({error:e})},t.onPublish=function(){console.log("Publish Success")},t.onPublishError=function(e){t.setState({error:e})},t.onSubscribe=function(){console.log("Subscribe Success")},t.onSubscribeError=function(e){t.setState({error:e})},t.toggleVideo=function(){t.setState((function(e){return{publishVideo:!e.publishVideo}}))},t.state={error:null,connection:"Connecting",publishVideo:!0},t.sessionEventHandlers={sessionConnected:function(){t.setState({connection:"Connected"})},sessionDisconnected:function(){t.setState({connection:"Disconnected"})},sessionReconnected:function(){t.setState({connection:"Reconnected"})},sessionReconnecting:function(){t.setState({connection:"Reconnecting"})}},t.publisherEventHandlers={accessDenied:function(){console.log("User denied access to media source")},streamCreated:function(){console.log("Publisher stream created")},streamDestroyed:function(e){var n=e.reason;console.log("Publisher stream destroyed because: ".concat(n))}},t.subscriberEventHandlers={videoEnabled:function(){console.log("Subscriber video enabled")},videoDisabled:function(){console.log("Subscriber video disabled")}},t}return Object(u.a)(s,[{key:"render",value:function(){var e=this.props.credentials,n=e.apiKey,s=e.sessionId,t=e.token,o=this.state,i=o.error,r=o.connection,c=o.publishVideo;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{id:"sessionStatus",children:["Session Status: ",r]}),i?Object(b.jsxs)("div",{className:"error",children:[Object(b.jsx)("strong",{children:"Error:"})," ",i]}):null,Object(b.jsxs)(l.OTSession,{apiKey:n,sessionId:s,token:t,onError:this.onSessionError,eventHandlers:this.sessionEventHandlers,children:[Object(b.jsxs)("button",{id:"videoButton",onClick:this.toggleVideo,children:[c?"Disable":"Enable"," Video"]}),Object(b.jsx)(l.OTPublisher,{properties:{publishVideo:c,width:50,height:50},onPublish:this.onPublish,onError:this.onPublishError,eventHandlers:this.publisherEventHandlers}),Object(b.jsx)(l.OTStreams,{children:Object(b.jsx)(l.OTSubscriber,{properties:{width:100,height:100},onSubscribe:this.onSubscribe,onError:this.onSubscribeError,eventHandlers:this.subscriberEventHandlers})})]})]})}}]),s}(o.a.Component);s(65);fetch("https://videosstream.herokuapp.com/session").then((function(e){return e.json()})).then((function(e){r.a.render(Object(b.jsx)(h,{credentials:e}),document.getElementById("root"))})).catch((function(e){console.error("Failed to get session credentials",e),alert("Failed to get opentok sessionId and token. Make sure you have updated the config.js file.")}))}},[[66,1,2]]]);
//# sourceMappingURL=main.6c2f8103.chunk.js.map