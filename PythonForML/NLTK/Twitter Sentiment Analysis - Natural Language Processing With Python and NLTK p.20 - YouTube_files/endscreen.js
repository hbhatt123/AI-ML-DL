(function(g){var window=this;var pya=function(a,b,c,d){var e=b.hc();g.S(a.element,"ytp-suggestion-set",!!e.videoId);var f=b.getPlaylistId();d=b.od(c,d?d:"mqdefault.jpg");var k=b instanceof g.LP?g.uX(b.lengthSeconds):null,l=!!f;f=l&&"RD"==g.NR(f).type;var m=b instanceof g.LP?b.xa:null;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,watch:g.T("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,url:b.vn(c),is_live:m,is_list:l,is_mix:f,background:d?"background-image: url("+
d+")":""};b instanceof g.PR&&(c.playlist_length=b.getLength());a.update(c)},i7=function(a,b){g.tX.call(this,{H:"div",
ca:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.o=a;this.N=!1},j7=function(a){var b={H:"span",
M:"ytp-upnext-top",K:[{H:"span",M:"ytp-upnext-header",K:[g.T("YTP_PLAYLIST_UP_NEXT")]},{H:"span",M:"ytp-upnext-title",K:["{{title}}"]},{H:"span",M:"ytp-upnext-author",K:["{{author}}"]}]},c={href:"{{url}}","aria-label":g.T("YTP_AUTOPLAY_NEXT")};b={H:"div",M:"ytp-upnext",R:{"aria-label":"{{watch}}"},K:[{H:"div",M:"ytp-cued-thumbnail-overlay-image",R:{style:"{{background}}"}},b,{H:"a",M:"ytp-upnext-autoplay-icon",R:c,K:[{H:"svg",R:{height:"100%",version:"1.1",viewBox:"0 0 98 98",width:"100%"},K:[{H:"circle",
M:"ytp-svg-autoplay-circle",R:{cx:"49",cy:"49",fill:"#000","fill-opacity":"0.8",r:"48"}},{H:"circle",M:"ytp-svg-autoplay-ring",R:{cx:"-49",cy:"49","fill-opacity":"0",r:"46.5",stroke:"#FFFFFF","stroke-dasharray":"293","stroke-dashoffset":"-293","stroke-width":"4",transform:"rotate(-90)"}},{H:"polygon",M:"ytp-svg-autoplay-triangle",R:{fill:"#fff",points:"32,27 72,49 32,71"}}]}]},{H:"span",M:"ytp-upnext-bottom",K:[{H:"span",M:"ytp-upnext-cancel"},{H:"span",M:"ytp-upnext-paused",K:[g.T("YTP_AUTOPLAY_PAUSED_3")]}]}]};
g.Y.call(this,b);this.B=null;b=this.sa["ytp-upnext-cancel"];this.B=new g.Y({H:"button",ca:["ytp-upnext-cancel-button","ytp-button"],R:{tabindex:"0","aria-label":g.T("YTP_AUTOPLAY_CANCEL")},K:[g.T("YTP_CANCEL")]});g.M(this,this.B);this.B.W("click",this.WN,this);this.B.za(b);this.o=a;this.J=this.sa["ytp-svg-autoplay-ring"];this.F=this.D=this.A=this.C=null;this.G=new g.ut(this.Lm,5E3,this);g.M(this,this.G);this.I=0;this.P(this.sa["ytp-upnext-autoplay-icon"],"click",this.dQ);this.pA();this.P(a,"autonavvisibility",
this.pA);this.P(a,"mdxnowautoplaying",this.sP);this.P(a,"mdxautoplaycanceled",this.tP);this.P(a,"mdxautoplayupnext",this.KC);3==this.o.Wa()&&(a=(a=g.sW(g.nW(this.o)))?a.sH():null)&&this.KC(a)},qya=function(a,b){a.C=b;
pya(a,b,g.X(a.o),"hqdefault.jpg")},k7=function(a,b){a.A||(g.xG("a11y-announce",g.T("YTP_PLAYLIST_UP_NEXT")+" "+a.C.title),a.I=g.JG(),a.A=new g.ut((0,g.z)(a.Np,a,b),25),a.Np(b));
g.Lp(a.element,"ytp-upnext-autoplay-paused")},m7=function(a){l7(a);
a.I=g.JG();a.Np();g.R(a.element,"ytp-upnext-autoplay-paused")},l7=function(a){a.A&&(a.A.dispose(),a.A=null)},n7=function(a,b){b=void 0===b?!1:b;
var c=g.X(a.o);if(c.experiments.g("autonav_notifications")&&b&&window.Notification&&window.document.hasFocus){var d=window.Notification.permission;g.BW(a.o,"xwebnotifications",{permission:d});"default"==d?window.Notification.requestPermission():"granted"!=d||window.document.hasFocus()||(d=a.C.hc(),a.Lm(),a.D=new window.Notification(g.T("YTP_PLAYLIST_UP_NEXT"),{body:d.title,icon:d.od(c)}),a.F=a.P(a.D,"click",a.TP),a.G.start())}l7(a);a.o.zj(!1,b)},rya=function(a){i7.call(this,a,"subscribecard-endscreen");
var b=a.ga();this.A=new g.Y({H:"div",M:"ytp-subscribe-card",K:[{H:"img",M:"ytp-author-image",R:{src:b.profilePicture}},{H:"div",M:"ytp-subscribe-card-right",K:[{H:"div",M:"ytp-author-name",K:[b.author]},{H:"div",M:"html5-subscribe-button-container"}]}]});g.M(this,this.A);this.A.za(this.element);this.B=new g.q1(g.T("YTP_SUBSCRIBE"),null,g.T("YTP_UNSUBSCRIBE"),null,!0,!1,b.Fl,b.subscribed,"trailer-endscreen",null,null,a);g.M(this,this.B);this.B.za(this.A.sa["html5-subscribe-button-container"]);this.hide()},
o7=function(a){var b=g.X(a),c=g.fL||g.bf?{style:"will-change: opacity"}:void 0,d=b.A&&!b.D,e=["ytp-videowall-still"];
b.experiments.g("web_player_video_wall_show_text")&&b.isMobile&&e.push("ytp-videowall-show-text");g.Y.call(this,{H:"a",ca:e,R:{href:"{{url}}",target:d?"_blank":"","aria-label":"{{watch}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},K:[{H:"div",M:"ytp-videowall-still-image",R:{style:"{{background}}"}},{H:"span",M:"ytp-videowall-still-info",K:[{H:"span",M:"ytp-videowall-still-info-bg",K:[{H:"span",M:"ytp-videowall-still-info-content",R:c,K:[{H:"span",M:"ytp-videowall-still-info-title",
K:["{{title}}"]},{H:"span",M:"ytp-videowall-still-info-author",K:["{{author_and_views}}"]},{H:"span",M:"ytp-videowall-still-info-live",K:[g.T("YTP_LIVE")]},{H:"span",M:"ytp-videowall-still-info-duration",K:["{{duration}}"]}]}]}]},{H:"span",ca:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],K:[{H:"span",M:"ytp-videowall-still-listlabel-icon"},g.T("YTP_PLAYLIST"),{H:"span",M:"ytp-videowall-still-listlabel-length",K:[" (",{H:"span",K:["{{playlist_length}}"]},")"]}]},{H:"span",
ca:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],K:[{H:"span",M:"ytp-videowall-still-listlabel-mix-icon"},g.T("YTP_MIX"),{H:"span",M:"ytp-videowall-still-listlabel-length",K:[" (50+)"]}]}]});this.B=d;this.o=a;this.A=null;this.W("click",this.C);this.W("keypress",this.D);g.X(a).aa&&(a=a.app.da,b=this.element,g.H(a.g,b),g.pb(a.g,b),c=String(a.G++),b.setAttribute("data-visual-id",c),g.Xe(this,(0,g.z)(a.F,a,b)))},p7=function(a){i7.call(this,a,"videowall-endscreen");
this.ba=a;this.G=0;this.B=[];this.I=this.D=this.C=null;this.J=this.U=!1;this.F=new g.eG(this);g.M(this,this.F);this.L=new g.ut(g.Ea(g.R,this.element,"ytp-show-tiles"),0);g.M(this,this.L);var b=new g.Y({H:"button",ca:["ytp-button","ytp-endscreen-previous"],R:{"aria-label":g.T("YTP_PREVIOUS")},K:[g.gE()]});g.M(this,b);b.za(this.element);b.W("click",this.FK,this);this.O=new g.VW({H:"div",M:"ytp-endscreen-content"});g.M(this,this.O);this.O.za(this.element);b=new g.Y({H:"button",ca:["ytp-button","ytp-endscreen-next"],
R:{"aria-label":g.T("YTP_NEXT")},K:[g.hE()]});g.M(this,b);b.za(this.element);b.W("click",this.EK,this);this.A=new j7(a);g.M(this,this.A);g.NW(this.o,this.A.element,4);this.hide()},q7=function(a){return g.OW(a.o)&&a.Rp()&&!a.I},sya=function(a){return(0,g.J)(a.suggestions,function(a){return g.t_(a)})},r7=function(a){var b=a.gs();
b!=a.U&&(a.U=b,a.o.V("autonavvisibility"))},s7=function(a){g.oX.call(this,a);
g.bE({});this.o=null;this.A=new g.eG(this);g.M(this,this.A);this.B=g.X(a);tya(a)?this.o=new p7(this.g):this.B.oa?this.o=new rya(this.g):this.o=new i7(this.g);g.M(this,this.o);g.NW(this.g,this.o.element,4);this.CB();this.A.P(a,"videodatachange",this.CB,this);this.A.P(a,"crn_endscreen",this.gK,this);this.A.P(a,"crx_endscreen",this.hK,this)},tya=function(a){a=g.X(a);
return a.gd&&!a.oa};g.p(i7,g.tX);i7.prototype.create=function(){this.N=!0};
i7.prototype.destroy=function(){this.N=!1};
i7.prototype.Rp=function(){return!1};
i7.prototype.gs=function(){return!1};g.p(j7,g.Y);g.h=j7.prototype;g.h.Lm=function(){this.D&&(this.G.stop(),this.Ba(this.F),this.F=null,this.D.close(),this.D=null)};
g.h.pA=function(){g.aX(this,g.oW(this.o))};
g.h.TP=function(){window.focus();this.Lm()};
g.h.hide=function(){g.Y.prototype.hide.call(this)};
g.h.Np=function(a){a=a||g.X(this.o).experiments.o("autoplay_time")||1E4;var b=Math.min(g.JG()-this.I,a);a=Math.min(b/a,1);this.J.setAttribute("stroke-dashoffset",-293*(a+1));1<=a&&3!=this.o.Wa()?n7(this,!0):this.A&&this.A.start()};
g.h.dQ=function(a){!g.Pd(this.B.element,g.VF(a))&&g.g_(a,this.o)&&n7(this)};
g.h.WN=function(){g.qW(this.o,!0)};
g.h.sP=function(a){this.o.Wa();this.show();k7(this,a)};
g.h.KC=function(a){this.o.Wa();this.C&&this.C.hc().videoId==a.hc().videoId||qya(this,a)};
g.h.tP=function(){this.o.Wa();l7(this);this.hide()};
g.h.X=function(){l7(this);this.Lm();g.Y.prototype.X.call(this)};g.p(rya,i7);g.p(o7,g.Y);o7.prototype.Oj=function(){var a=this.A.hc().videoId,b=this.A.getPlaylistId();g.$1(this.o.app,a,this.A.Ud,b,void 0,void 0,void 0)};
o7.prototype.C=function(a){g.RW(this.o,this.element);g.g_(a,this.o,this.B,this.A.Ud||void 0)&&this.Oj()};
o7.prototype.D=function(a){switch(a.keyCode){case 13:case 32:g.$F(a)||(this.Oj(),g.ZF(a))}};g.p(p7,i7);g.h=p7.prototype;g.h.create=function(){i7.prototype.create.call(this);var a=this.o.ga();a&&(this.C=sya(a),this.D=a);this.sh();this.F.P(this.o,"appresize",this.sh);this.F.P(this.o,"videodatachange",this.GK);this.F.P(this.o,"autonavchange",this.Uy);this.F.P(this.o,"autonavcancel",this.DK);this.F.P(this.element,"transitionend",this.kR)};
g.h.destroy=function(){g.gG(this.F);g.Ze(this.B);this.B=[];this.C=null;i7.prototype.destroy.call(this);g.Lp(this.element,"ytp-show-tiles");this.L.stop()};
g.h.Rp=function(){return 1!=this.D.autonavState};
g.h.show=function(){i7.prototype.show.call(this);g.Lp(this.element,"ytp-show-tiles");g.X(this.o).isMobile?g.wt(this.L):this.L.start();(this.J||this.I&&this.I!=this.D.clientPlaybackNonce)&&g.qW(this.o,!1);var a=q7(this);g.OW(this.o)&&g.X(this.o).experiments.g("ui_logging")&&g.BW(this.o,"end",{cancelButtonShow:a?"1":"0",state:this.Rp()?"enabled":"disabled"});a?(r7(this),2==this.D.autonavState?g.X(this.o).experiments.g("fast_autonav_in_background")&&3==this.o.ri()?n7(this.A,!0):k7(this.A):3==this.D.autonavState&&
m7(this.A)):(g.qW(this.o,!0),r7(this))};
g.h.hide=function(){i7.prototype.hide.call(this);m7(this.A);r7(this)};
g.h.kR=function(a){g.VF(a)==this.element&&this.sh()};
g.h.sh=function(){if(this.C&&this.C.length){g.R(this.element,"ytp-endscreen-paginate");var a=g.Fh(this.element),b=a.width/a.height,c=96/54,d=2,e=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.C.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(d<f||e<k);){var q=d/2,r=e/2,v=d<=f-2&&n>=r*m,B=e<=k-2&&n>=q*m;if((q+1)/r*c/b>b/(q/(r+1)*c)&&B)n-=q*m,e+=2;else if(v)n-=r*m,d+=2;else if(B)n-=q*m,e+=2;else break}c=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=d)&&(c=!0);m=96*
d;n=54*e;b=m/n<b?a.height/n:a.width/m;b=Math.min(b,2);m*=b;n*=b;m*=g.Zc(a.width/m||1,1,1.21);n*=g.Zc(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.O.element;g.Eh(a,m,n);g.mh(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});qya(this.A,this.C[0]);g.S(this.element,"ytp-endscreen-takeover",q7(this));r7(this);m+=4;n+=4;for(f=b=0;f<d;f++)for(k=0;k<e;k++)if(q=b,r=0,c&&f>=d-2&&k>=e-2?r=1:0==k%2&&0==f%2&&(2>k&&2>f?0==k&&0==f&&(r=2):r=2),q=g.$c(q+this.G,l),0!=
r){v=this.B[b];v||(v=new o7(this.o),this.B[b]=v,a.appendChild(v.element));B=Math.floor(n*k/e);var D=Math.floor(m*f/d),I=Math.floor(n*(k+r)/e)-B-4,V=Math.floor(m*(f+r)/d)-D-4;g.th(v.element,D,B);g.Eh(v.element,V,I);g.mh(v.element,"transitionDelay",(k+f)/20+"s");g.S(v.element,"ytp-videowall-still-mini",1==r);g.S(v.element,"ytp-videowall-still-large",2<r);r=v;q=this.C[q];r.A=q;pya(r,q,g.X(r.o),g.Jp(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg");v=q.Ud;q=r.o;g.X(q).aa&&(q=q.app.da,
r=r.element,v=v&&v.itct,B=r.getAttribute("data-visual-id"),g.H(q.g,r),g.PW(q,"onLogServerVeCreated",{id:B,tracking_params:v}));b++}g.S(this.element,"ytp-endscreen-paginate",b<l);for(d=this.B.length-1;d>=b;d--)e=this.B[d],g.Hd(e.element),g.Ye(e);this.B.length=b}};
g.h.GK=function(){var a=this.o.ga();this.D!=a&&(this.G=0,this.C=sya(a),this.D=a,this.sh())};
g.h.EK=function(){this.G+=this.B.length;this.sh()};
g.h.FK=function(){this.G-=this.B.length;this.sh()};
g.h.zJ=function(){return!!this.A.A};
g.h.Uy=function(a){1==a?(this.J=!1,this.I=this.D.clientPlaybackNonce,l7(this.A),this.g&&this.sh()):(this.J=!0,this.g&&q7(this)&&(2==a?k7(this.A):3==a&&m7(this.A)))};
g.h.DK=function(a){if(a){for(a=0;a<this.B.length;a++)g.SW(this.ba,this.B[a].element,!0);this.Uy(1)}else this.I=null,this.J=!1;this.sh()};
g.h.gs=function(){return this.g&&q7(this)};g.p(s7,g.oX);g.h=s7.prototype;g.h.Qy=function(){var a=this.g.ga(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!tya(this.g)||b;a=g.dQ(a,"ypc_module");var c=g.a2(this.g.app);return b&&!a&&!c};
g.h.Py=function(){return this.o.gs()};
g.h.wJ=function(){return this.Py()?this.o.zJ():!1};
g.h.X=function(){g.JW(this.g,"endscreen");g.oX.prototype.X.call(this)};
g.h.load=function(){g.oX.prototype.load.call(this);this.o.show();g.X(this.g).oa&&.01>Math.random()&&g.BW(this.g,"end",{trailerEndscreenShow:1})};
g.h.unload=function(){g.oX.prototype.unload.call(this);this.o.hide();this.o.destroy()};
g.h.gK=function(a){this.Qy()&&(this.o.N||this.o.create(),"load"==a.getId()&&this.load())};
g.h.hK=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.CB=function(){g.JW(this.g,"endscreen");var a=Math.max(1E3*(this.g.ga().lengthSeconds-10),0);a=new g.JR(a,0x8000000000000,{id:"preload",namespace:"endscreen"});var b=new g.JR(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.GW(this.g,[a,b])};g.WZ.endscreen=s7;})(_yt_player);