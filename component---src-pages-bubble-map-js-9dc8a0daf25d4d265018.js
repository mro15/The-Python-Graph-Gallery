(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"2Bqf":function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));t("AK/e");var n=t("Wbzz"),l=t("q1tI"),r=t.n(l),o=t("NDdm"),c=t("qXiB").a.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function i(e){var a=e.chartType,t=e.caption,l=e.link,i=c.includes(a);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(r.a.Fragment,null,r.a.createElement(n.Link,{to:l},r.a.createElement(o.a,{chartType:a})),r.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sectionLogoContainer"},r.a.createElement(n.Link,{to:l},r.a.createElement(o.a,{chartType:a}),r.a.createElement("div",{className:"sectionLogoOverlay"},r.a.createElement("div",{className:"sectionLogoOverlayText"},"+")))),r.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)))}},"2mCb":function(e,a,t){},"3Z9Z":function(e,a,t){"use strict";var n=t("k1TG"),l=t("8o2o"),r=t("TSYQ"),o=t.n(r),c=t("q1tI"),i=t.n(c),m=t("vUet"),s=["xl","lg","md","sm","xs"],u=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,c=e.noGutters,u=e.as,d=void 0===u?"div":u,p=Object(l.a)(e,["bsPrefix","className","noGutters","as"]),h=Object(m.a)(t,"row"),f=h+"-cols",E=[];return s.forEach((function(e){var a,t=p[e];delete p[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&E.push(""+f+n+"-"+a)})),i.a.createElement(d,Object(n.a)({ref:a},p,{className:o.a.apply(void 0,[r,h,c&&"no-gutters"].concat(E))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},a.a=u},"3uQS":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return E}));var n=t("q1tI"),l=t.n(n),r=t("4/Vk"),o=t("7oih"),c=t("7vrA"),i=t("6+GL"),m=t("3Z9Z"),s=t("59G+"),u=t("pJaR"),d=t("Wbzz"),p=t("eynx"),h=t("gMBH"),f=t("cWnB");function E(){return l.a.createElement(o.a,{title:"Bubble Map",isTocEnabled:!0,seoDescription:"A collection of bubble map examples made with Python, coming with explanation and reproducible code"},l.a.createElement(r.a,{title:"Bubble Map",description:"<p>A <a href='https://www.data-to-viz.com/graph/bubblemap.html'>bubble map</a> uses circles of different size to represent a numeric value on a territory. It displays one bubble per geographic coordinate, or one bubble per region. As for <a href='https://python-graph-gallery.com/map/'>background maps</a>, several python libraries are useful to build them: <code>folium</code>, <code>geopandas</code>, <code>geoplot</code> and <code>basemap</code> are listed here.</p>"}),l.a.createElement("div",{className:"greySection",id:"related"},l.a.createElement(c.a,null,l.a.createElement("h2",{id:"Overview"},"🔎  Building maps with Python"),l.a.createElement("p",null,"If you're new to geospatial analysis with python, I strongly advise to check the ",l.a.createElement(d.Link,{to:"/map"},"background map section")," of the gallery. It gives a great overview of the available tools, and help you pick the right one."),l.a.createElement(d.Link,{to:"/map"},l.a.createElement(f.a,{size:"sm"},"Background Map Section")),l.a.createElement("br",null),l.a.createElement("br",null))),l.a.createElement(h.a,null),l.a.createElement(c.a,null,l.a.createElement("h2",{id:"Geopandas & Geoplot"},l.a.createElement("code",null,"Geopandas")," and ",l.a.createElement("code",null,"GeoPlot")),l.a.createElement("p",null,l.a.createElement("code",null,"Seaborn")," is another great alternative to build an area chart with ",l.a.createElement("code",null,"python"),". The below examples show how to start basic, apply usual customization, and use the small multiple technique for when you have several groups to compare."),l.a.createElement(m.a,null,l.a.createElement(s.a,{imgName:"map-read-geojson-with-python-geopandas",caption:"How to read a geoJson file with geopandas and transform it to a geodataframe.",linkTo:"/map-read-geojson-with-python-geopandas"}))),l.a.createElement(h.a,null),l.a.createElement(c.a,null,l.a.createElement("h2",{id:"Folium"},"Bubble map with ",l.a.createElement("code",null,"Folium")),l.a.createElement("p",null,l.a.createElement("code",null,"Folium")," is a wrapper of the ",l.a.createElement("code",null,"leaflet.js")," javascript library. Once you understood how to ",l.a.createElement(d.Link,{to:"/map"},"initialize")," an interactive map with it, you can parse a data frame of coordinates and add markers to the map with functions like ",l.a.createElement("code",null,"Circle()")," and ",l.a.createElement("code",null,"..()")),l.a.createElement("div",{className:"mx-auto"},l.a.createElement("iframe",{src:"/interactiveCharts/313-bubble-map-with-folium.html",title:"Basic map with folium",style:{border:"none",width:"800px",height:"300px"}})),l.a.createElement(d.Link,{to:"/313-bubble-map-with-folium"},l.a.createElement(f.a,{size:"sm"},"See code")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null,"It is also possible to add any other kind of markers instead of circles. This is what you get with the default ",l.a.createElement("code",null,"folium.Marker()")," function:"),l.a.createElement("div",{className:"mx-auto"},l.a.createElement("iframe",{src:"/interactiveCharts/312-add-markers-on-folium-map.html",title:"Folium and markers",style:{border:"none",width:"800px",height:"300px"}})),l.a.createElement(d.Link,{to:"/312-add-markers-on-folium-map"},l.a.createElement(f.a,{size:"sm"},"See code")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null,"And this is what you can build by passing some ",l.a.createElement("code",null,"html")," to the marker and popup parameters:"),l.a.createElement(m.a,null,l.a.createElement(s.a,{imgName:"312-add-markers-on-folium-map1",caption:"How to read a geoJson file with geopandas and transform it to a geodataframe.",linkTo:"/312-add-markers-on-folium-map"}),l.a.createElement(s.a,{imgName:"312-add-markers-on-folium-map2",caption:"How to read a geoJson file with geopandas and transform it to a geodataframe.",linkTo:"/312-add-markers-on-folium-map"}))),l.a.createElement(h.a,null),l.a.createElement(c.a,null,l.a.createElement("h2",{id:"Basemap"},"Bubble map with ",l.a.createElement("code",null,"Basemap")),l.a.createElement("p",null,l.a.createElement("code",null,"Seaborn")," is another great alternative to build an area chart with ",l.a.createElement("code",null,"python"),". The below examples show how to start basic, apply usual customization, and use the small multiple technique for when you have several groups to compare."),l.a.createElement("div",{style:{margin:"0 auto"}},l.a.createElement(d.Link,{to:"/315-a-world-map-of-surf-tweets"},l.a.createElement(p.a,{imgName:"315_Tweet_Surf_Bubble_map1",caption:"Bubble map with Python and the basemap library"})))),l.a.createElement(h.a,null),l.a.createElement("div",{className:"greySection",id:"related"},l.a.createElement(c.a,null,l.a.createElement(u.a,{chartFamily:"map"}))),l.a.createElement(h.a,null),l.a.createElement(c.a,null,l.a.createElement(i.a,null)),l.a.createElement(h.a,null))}},"4/Vk":function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));t("a4DA");var n=t("q1tI"),l=t.n(n),r=t("AkXV"),o=t("cWnB"),c=t("Wbzz"),i=t("qXiB"),m=t("jhdv"),s=(t("mnr7"),t("7vrA")),u=t("3Z9Z"),d=t("JI6e"),p=(t("2mCb"),t("9eSz")),h=t.n(p);function f(e){var a=e.imgName,t=e.caption,n=Object(c.useStaticQuery)("2246482915").allFile.edges.find((function(e){return e.node.name.includes(a)}));return n?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"chartImageContainer"},l.a.createElement(h.a,{alt:a,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),l.a.createElement("div",{className:"chartImageOverlay"},l.a.createElement("div",{className:"chartImageOverlayText"},l.a.createElement("p",null,t))))):null}var E=t("gMBH");function g(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sponsorsBanner"},l.a.createElement(s.a,null,l.a.createElement(u.a,null,l.a.createElement(d.a,{md:3},l.a.createElement("a",{href:"https://www.dataquest.io/course/storytelling-data-visualization?utm_source=python%20graph%20gallery&utm_medium=banner&utm_content=storytelling%20with%20data",onClick:"trackOutboundLink('https://www.dataquest.io/course/storytelling-data-visualization?utm_source=python%20graph%20gallery&utm_medium=banner&utm_content=storytelling%20with%20data'); return false;"},l.a.createElement(f,{imgName:"data-vis-ad",caption:"Dataquest"}))),l.a.createElement(d.a,{md:3},l.a.createElement("a",{href:"https://www.datacamp.com?tap_a=5644-dce66f&tap_s=230804-f65650",title:"Datacamp",onClick:"trackOutboundLink('https://www.datacamp.com?tap_a=5644-dce66f&tap_s=230804-f65650'); return false;"},l.a.createElement(f,{imgName:"datacamp",caption:"Datacamp"}))),l.a.createElement(d.a,{md:3},l.a.createElement("a",{href:"https://365datascience.pxf.io/qRPNb",title:"365DataScience",onClick:"trackOutboundLink('https://365datascience.pxf.io/qRPNb'); return false;"},l.a.createElement(f,{imgName:"365_data_science",caption:"365 Data Science"}))),l.a.createElement(d.a,{md:3},l.a.createElement("a",{href:"https://gumroad.com/a/280032371/uTxEFw",title:"StackAbuse",onClick:"trackOutboundLink('https://gumroad.com/a/280032371/uTxEFw'); return false;"},l.a.createElement(f,{imgName:"stackabuse",caption:"Stack Abuse book"})))))),l.a.createElement(E.a,null))}function b(e){var a=e.title,t=e.description,n=e.chartType,s=i.a.filter((function(e){return e.id===n}))[0];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"titleAndDescription"},l.a.createElement("h1",{className:"mainTitle"},a),l.a.createElement("hr",{className:"smallHr"}),l.a.createElement(r.a,null),l.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t}}),n&&l.a.createElement("div",{style:{marginTop:"10px"}},l.a.createElement(c.Link,{to:Object(m.a)(s.pythonURL)},l.a.createElement(o.a,{size:"sm"},s.label+" section")),l.a.createElement("a",{href:s.dataToVizURL},l.a.createElement(o.a,{size:"sm"},"About this chart")))),l.a.createElement(g,null))}},"59G+":function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),l=t.n(n),r=t("eynx"),o=t("JI6e"),c=t("Wbzz");function i(e){var a=e.imgName,t=e.caption,n=e.linkTo;return l.a.createElement(o.a,{xs:12,md:4},l.a.createElement(c.Link,{to:n},l.a.createElement(r.a,{imgName:a,caption:t})))}},"9d5C":function(e,a,t){},"AK/e":function(e,a,t){},JI6e:function(e,a,t){"use strict";var n=t("k1TG"),l=t("8o2o"),r=t("TSYQ"),o=t.n(r),c=t("q1tI"),i=t.n(c),m=t("vUet"),s=["xl","lg","md","sm","xs"],u=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,c=e.as,u=void 0===c?"div":c,d=Object(l.a)(e,["bsPrefix","className","as"]),p=Object(m.a)(t,"col"),h=[],f=[];return s.forEach((function(e){var a,t,n,l=d[e];if(delete d[e],"object"==typeof l&&null!=l){var r=l.span;a=void 0===r||r,t=l.offset,n=l.order}else a=l;var o="xs"!==e?"-"+e:"";a&&h.push(!0===a?""+p+o:""+p+o+"-"+a),null!=n&&f.push("order"+o+"-"+n),null!=t&&f.push("offset"+o+"-"+t)})),h.length||h.push(p),i.a.createElement(u,Object(n.a)({},d,{ref:a,className:o.a.apply(void 0,[r].concat(h,f))}))}));u.displayName="Col",a.a=u},a4DA:function(e,a,t){},eynx:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));t("2mCb");var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),o=t("9eSz"),c=t.n(o),i=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function m(e){var a=e.imgName,t=e.caption;if(i.includes(a))return l.a.createElement("p",null,"TODO");var n=Object(r.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(a)}));return n?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"chartImageContainer"},l.a.createElement(c.a,{alt:a,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),l.a.createElement("div",{className:"chartImageOverlay"},l.a.createElement("div",{className:"chartImageOverlayText"},l.a.createElement("p",null,t))))):null}},mnr7:function(e,a,t){},pJaR:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));t("9d5C");var n=t("q1tI"),l=t.n(n),r=t("3Z9Z"),o=t("JI6e"),c=t("2Bqf"),i=t("qXiB"),m=t("jhdv"),s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function u(e){var a=e.chartFamily,t=i.a.filter((function(e){return e.family===a})).map((function(e,a){var t=Object(m.a)(e.pythonURL);return l.a.createElement(o.a,{key:a,xs:4,md:2},l.a.createElement(c.a,{link:t,chartType:e.logo,caption:e.label}))}));return l.a.createElement("div",null,l.a.createElement("h2",{id:"Related charts",className:"sectionTitle "+a},null==s?void 0:s[a]),l.a.createElement(r.a,null,t))}}}]);
//# sourceMappingURL=component---src-pages-bubble-map-js-9dc8a0daf25d4d265018.js.map