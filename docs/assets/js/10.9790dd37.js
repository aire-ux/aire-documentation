(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{395:function(e,t,n){"use strict";n.r(t);var r=n(54),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"switch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#switch"}},[e._v("#")]),e._v(" Switch")]),e._v(" "),n("p",[e._v("TODO")]),e._v(" "),n("h2",{attrs:{id:"set-up"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#set-up"}},[e._v("#")]),e._v(" Set Up")]),e._v(" "),n("h3",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),n("p",[e._v("Developing on Aire-Switch requires:")]),e._v(" "),n("ol",[n("li",[e._v("Gradle 7.5.x")]),e._v(" "),n("li",[e._v("Java 17")]),e._v(" "),n("li",[e._v("Maven 3.8.x")])]),e._v(" "),n("p",[e._v("We recommend installing these via "),n("a",{attrs:{href:"https://sdkman.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("SDKMAN"),n("OutboundLink")],1),e._v(":")]),e._v(" "),n("p",[n("code",[e._v("sdk install maven 3.8.6")]),e._v(" "),n("code",[e._v("sdk install java 17.0.6-zulu")]),e._v(" "),n("code",[e._v("sdk install gradle 7.5.1")])]),e._v(" "),n("h3",{attrs:{id:"running-your-development-environment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-your-development-environment"}},[e._v("#")]),e._v(" Running your development environment")]),e._v(" "),n("ol",[n("li",[e._v("Run "),n("code",[e._v("git clone git@github.com:aire-ux/aire-switch")])]),e._v(" "),n("li",[e._v("Run "),n("code",[e._v("gradle populatePaths populateVersions -Pdevelopment")]),e._v(" "),n("ul",[n("li",[e._v("This will populate "),n("code",[e._v("build/generated/sources/main/io/sunshower/aire/ux/controls/Paths and Versions")]),e._v("\nto point to local development dependencies")])])]),e._v(" "),n("li",[e._v("Run "),n("code",[e._v("gradle npmInstall")]),e._v(" to install a project-local nodejs environment with NPM")]),e._v(" "),n("li",[e._v("Run "),n("code",[e._v("gradle buildResources")]),e._v(" to build the web resources (styles, TypeScript components)")]),e._v(" "),n("li",[e._v("Run "),n("code",[e._v("gradle watch")]),e._v(" to watch the web-resource source-files for changes")]),e._v(" "),n("li",[e._v("Run "),n("code",[e._v("gradle runDevelopment")]),e._v(" to build the Java source-files")])]),e._v(" "),n("h3",{attrs:{id:"testing-a-production-ready-build"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#testing-a-production-ready-build"}},[e._v("#")]),e._v(" Testing a production-ready build")]),e._v(" "),n("p",[e._v("When you're ready to test in production-mode:")]),e._v(" "),n("ol",[n("li",[e._v("run "),n("code",[e._v("npm link .")])]),e._v(" "),n("li",[e._v("run "),n("code",[e._v("npm install")])]),e._v(" "),n("li",[e._v("run "),n("code",[e._v("gradle clean populatePaths populateVersions -Pproduction")])]),e._v(" "),n("li",[e._v("run "),n("code",[e._v("gradle clean build bootRun -Pproduction")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);