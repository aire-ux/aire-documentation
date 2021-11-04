(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{397:function(e,t,o){"use strict";o.r(t);var r=o(54),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[e._v("#")]),e._v(" Structure")]),e._v(" "),o("p",[e._v("The Kernel filesystem is structured as follows:")]),e._v(" "),o("p",[o("code",[e._v("$SUNSHOWER_HOME = /")])]),e._v(" "),o("p",[e._v('When a kernel module is installed, a new "directory" is created at:\n'),o("code",[e._v("droplet://<droplet-group>/<droplet-name>/<droplet-version>")]),e._v("\nwhere "),o("code",[e._v("<droplet-group>")]),e._v(", "),o("code",[e._v("<droplet-name>")]),e._v(" and "),o("code",[e._v("<droplet-version>")]),e._v(" correspond to the following "),o("code",[e._v("META-INF/MANIFEST.MF")]),e._v("\nentries of the installed assembly")]),e._v(" "),o("p",[o("code",[e._v("version")]),e._v(" (must be lower-case)\n"),o("code",[e._v("name")]),e._v(" (lower-case)\n"),o("code",[e._v("group")]),e._v(" (lower-case)")]),e._v(" "),o("h2",{attrs:{id:"root"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#root"}},[e._v("#")]),e._v(" ROOT")]),e._v(" "),o("p",[e._v("The directory "),o("code",[e._v("droplet:///")]),e._v(" corresponds to the root of the Sunshower.io file-system\nand may only be accessed by kernel modules. There are several notable files and directories\nin this filesystem:")]),e._v(" "),o("ol",[o("li",[o("code",[e._v("kernel.idx")]),e._v("--an index of the installed plugins and kernel-modules, as well as information about location, digests, and state")]),e._v(" "),o("li",[o("code",[e._v("modules/")]),e._v(" a directory containing the list (symlinked) of installed modules")]),e._v(" "),o("li",[o("code",[e._v("plugins/")]),e._v(" a directory containing the list (symlinked) of installed plugins")])]),e._v(" "),o("h2",{attrs:{id:"kernel-module-registry"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#kernel-module-registry"}},[e._v("#")]),e._v(" Kernel Module Registry")]),e._v(" "),o("p",[e._v("When a kernel module is installed, the kernel saves the entry to droplet://kernel/registry.modlist\nupon starting the kernel, modules are read from this list.")]),e._v(" "),o("p",[e._v("The modules.list file contains the minimum amount of information required to load the kernel modules, and has the following format")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("<order>:<module-group>:<module-name>:<module-version>:[directory-list]\n")])])]),o("h2",{attrs:{id:"module-uri-structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module-uri-structure"}},[e._v("#")]),e._v(" Module URI structure")]),e._v(" "),o("p",[e._v("Given a module with "),o("code",[e._v("group=sunshower:artifact=stuff:version=1.0.0")]),e._v(", the module's structure\ncan be located at "),o("code",[e._v("droplet:///sunshower/artifact/1.0.0")]),e._v(".  Everything within this URI corresponds to the physical directory structure\nof the assembly installed.   The Sunshower kernel creates several additional files at this scheme:")]),e._v(" "),o("ol",[o("li",[o("code",[e._v("plugin.idx")]),e._v(": "),o("code",[e._v("droplet:///sunshower/artifact/1.0.0/plugin.idx")]),e._v(" -- this file contains kernel-specific information and must not be modified")]),e._v(" "),o("li",[o("code",[e._v("plugin.info")]),e._v(": "),o("code",[e._v("droplet:///sunshower/artifact/1.0.0/plugin.info")]),e._v(" -- this file contains information about this plugin and its state\n1   "),o("code",[e._v("paths.idx")]),e._v(" : "),o("code",[e._v("etc.")]),e._v(" --this file contains kernel-specific information about the plugin")])])])}),[],!1,null,null,null);t.default=s.exports}}]);