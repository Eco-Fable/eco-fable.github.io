(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2qYH":function(t,s,a){"use strict";a.r(s);var e=a("A6W1"),i=a("BA+P"),o={components:{Author:e.a,PostCard:i.a},metaInfo:{title:"Hello, world!"}},n=a("KHd+"),c=null,r=Object(n.a)(o,(function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",[s("h1",{staticClass:"tag-title text-center space-bottom"},[this._v("\n    # "+this._s(this.$page.tag.title)+"\n  ")]),s("div",{staticClass:"posts"},this._l(this.$page.tag.belongsTo.edges,(function(t){return s("PostCard",{key:t.node.id,attrs:{post:t.node}})})),1)])}),[],!1,null,null,null);"function"==typeof c&&c(r);s.default=r.exports},"7qvl":function(t,s,a){},A6W1:function(t,s,a){"use strict";var e={props:["showTitle"]},i=(a("ArLL"),a("KHd+")),o=a("Kw5r"),n=o.a.config.optionMergeStrategies.computed,c={metadata:{siteName:"Eco-Fable"}},r=function(t){var s=t.options;s.__staticData?s.__staticData.data=c:(s.__staticData=o.a.observable({data:c}),s.computed=n({$static:function(){return s.__staticData.data}},s.computed))},l=Object(i.a)(e,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"author"},[this.showTitle?s("h1",{staticClass:"author__site-title"},[this._v("\n\t\t"+this._s(this.$static.metadata.siteName)+"\n\t")]):this._e(),s("p",{staticClass:"author__links"})])}),[],!1,null,null,null);"function"==typeof r&&r(l);s.a=l.exports},AO8t:function(t,s,a){},ArLL:function(t,s,a){"use strict";a("AO8t")},"BA+P":function(t,s,a){"use strict";var e=a("n6yM"),i=a("PpWc"),o={components:{PostMeta:e.a,PostTags:i.a},props:["post"]},n=(a("YDir"),a("KHd+")),c=Object(n.a)(o,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-card content-box",class:{"post-card--has-poster":t.post.poster}},[a("div",{staticClass:"post-card__header"},[t.post.cover_image?a("g-image",{staticClass:"post-card__image",attrs:{alt:"Cover image",src:t.post.cover_image}}):t._e()],1),a("div",{staticClass:"post-card__content"},[a("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.title)}}),a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__description",domProps:{innerHTML:t._s(t.post.description)}}),a("PostMeta",{staticClass:"post-card__meta",attrs:{post:t.post}}),a("PostTags",{staticClass:"post-card__tags",attrs:{post:t.post}}),a("g-link",{staticClass:"post-card__link",attrs:{to:t.post.path}},[t._v("Link")])],1)])}),[],!1,null,null,null);s.a=c.exports},GsXb:function(t,s,a){"use strict";a("7qvl")},NAO6:function(t,s,a){},PpWc:function(t,s,a){"use strict";var e={props:["post"]},i=(a("GsXb"),a("KHd+")),o=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-tags"},t._l(t.post.tags,(function(s){return a("g-link",{key:s.id,staticClass:"post-tags__link",attrs:{to:s.path}},[a("span",[t._v("#")]),t._v(" "+t._s(s.title)+"\n\t\t")])})),1)}),[],!1,null,null,null);s.a=o.exports},YDir:function(t,s,a){"use strict";a("NAO6")},YIUa:function(t,s,a){"use strict";a("hpwU")},hpwU:function(t,s,a){},n6yM:function(t,s,a){"use strict";var e={props:["post"]},i=(a("YIUa"),a("KHd+")),o=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-meta"},[t._v("\n   Posted "+t._s(t.post.date)+".\n   "),t.post.timeToRead?[a("strong",[t._v(t._s(t.post.timeToRead)+" min read.")])]:t._e()],2)}),[],!1,null,null,null);s.a=o.exports}}]);