(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{GvUx:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return g}));var l=t("q1tI"),n=t.n(l),r=t("4/Vk"),c=t("7oih"),i=t("7vrA"),o=t("6+GL"),m=t("3Z9Z"),s=t("pJaR"),u=t("Wbzz"),d=t("Hrqu"),p=t("JI6e"),h=t("ZJrt"),E=t("eynx"),y=t("gMBH"),b=t("cWnB");function g(){return n.a.createElement(c.a,{title:"Plotly",isTocEnabled:!0,seoDescription:"An overview of the plotly python library for interactive data visualization"},n.a.createElement(r.a,{title:"Plotly",description:"<p><code>Plotly</code> is a javascript library for data visualization. It is based on the famous <a href='https://www.d3-graph-gallery.com'>d3.js</a> library, and provides a python wrapper allowing to build stunning interactive charts directly from <code>Python</code>. Most of the gallery sections provide <code>plotly</code> examples, this post provides a few general tips.</p>"}),n.a.createElement(i.a,null,n.a.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.a.createElement(m.a,{className:"align-items-center"},n.a.createElement(p.a,{md:6},n.a.createElement("p",null,n.a.createElement("code",null,"Matplotlib")," is the most famous python data visualization library. It is widely used and most of other viz libraries (like ",n.a.createElement("code",null,"seaborn"),") are actually built on top of it."),n.a.createElement("p",null,"Once installed, matplotlib must be imported, usually using ",n.a.createElement("code",null,"import matplotlib.pyplot as plt"),". You can then use use the functions available in the ",n.a.createElement("code",null,"plt")," object.")),n.a.createElement(p.a,{md:6},n.a.createElement(u.Link,{to:"/240-basic-area-chart"},n.a.createElement(E.a,{imgName:"240_basic_area_chart",caption:"The most basic area chart one can make with python and matplotlib"})))),n.a.createElement(h.a,null,"# library\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# Create data\nx=range(1,6)\ny=[1,4,6,8,4]\n\n# Area plot\nplt.fill_between(x, y)\nplt.show()\n")),n.a.createElement(y.a,null),n.a.createElement(i.a,null,n.a.createElement("h2",{id:"Save"},"⏱ Saving a plotly chart"),n.a.createElement("p",null,"Once you've created a ",n.a.createElement("code",null,"plotly")," chart you probably want to save it as a standalone ",n.a.createElement("code",null,"html")," file in order to share it or embed it in another webpage."),n.a.createElement("p",null,"This is the code allowing to save a ",n.a.createElement("code",null,"plotly")," chart. You can read the full process ",n.a.createElement(u.Link,{to:"/parallel-coordinate-plot-plotly"},"here")," for instance."),n.a.createElement(h.a,null,'fig.write_html("the/path/to/chart-name.html")')),n.a.createElement(y.a,null),n.a.createElement(i.a,null,n.a.createElement("h2",{id:"Embed"},"⏱ Embeding a plotly chart"),n.a.createElement("p",null,"Once the chart has been saved, you can embed it in a html document using:"),n.a.createElement(h.a,null,'<iframe\n  src="the/path/to/chart-name.html"\n  width="800"\n  height="600"\n  title="chart name"\n  style="border:none">\n</iframe>')),n.a.createElement(y.a,null),n.a.createElement(i.a,null,n.a.createElement("h2",{id:"Gallery"},n.a.createElement(d.d,null),"Plotly graph gallery"),n.a.createElement("p",null,"Here is a glimpse of the plotly charts showcased in the gallery:"),n.a.createElement("div",{className:"mx-auto"},n.a.createElement("iframe",{src:"/interactiveCharts/parallel-coordinate-plot-plotly.html",title:"parallel coordinate chart with plotly",style:{border:"none",width:"800px",height:"500px"}})),n.a.createElement(u.Link,{to:"/parallel-coordinate-plot-plotly"},n.a.createElement(b.a,{size:"sm"},"See code"))),n.a.createElement(y.a,null),n.a.createElement(y.a,null),n.a.createElement("div",{className:"greySection",id:"related"},n.a.createElement(i.a,null,n.a.createElement(s.a,{chartFamily:"general"}))),n.a.createElement(y.a,null),n.a.createElement(i.a,null,n.a.createElement(o.a,null)),n.a.createElement(y.a,null))}},eynx:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));t("2mCb");var l=t("q1tI"),n=t.n(l),r=t("Wbzz"),c=t("9eSz"),i=t.n(c),o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function m(e){var a=e.imgName,t=e.caption;if(o.includes(a))return n.a.createElement("p",null,"TODO");var l=Object(r.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(a)}));return l?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"chartImageContainer"},n.a.createElement(i.a,{alt:a,fluid:l.node.childImageSharp.fluid,className:"chartImageImg"}),n.a.createElement("div",{className:"chartImageOverlay"},n.a.createElement("div",{className:"chartImageOverlayText"},n.a.createElement("p",null,t))))):null}}}]);
//# sourceMappingURL=component---src-pages-plotly-js-5e505efca9d8c45bb533.js.map