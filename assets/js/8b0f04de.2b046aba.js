(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{100:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return b}));var n=t(3),i=t(7),r=(t(0),t(124)),c=t(126),o={id:"devices",title:"Camera Devices",sidebar_label:"Camera Devices"},s={unversionedId:"devices",id:"devices",isDocsHomePage:!1,title:"Camera Devices",description:"What are camera devices?",source:"@site/docs/DEVICES.mdx",slug:"/devices",permalink:"/react-native-vision-camera/docs/devices",editUrl:"https://github.com/cuvent/react-native-vision-camera/edit/main/docs/docs/DEVICES.mdx",version:"current",sidebar_label:"Camera Devices",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/react-native-vision-camera/docs/"},next:{title:"Camera Formats",permalink:"/react-native-vision-camera/docs/formats"}},l=[{value:"What are camera devices?",id:"what-are-camera-devices",children:[]},{value:"Get available camera devices",id:"get-available-camera-devices",children:[]},{value:"<code>useCameraDevices</code> hook",id:"usecameradevices-hook",children:[]},{value:"The <code>isActive</code> prop",id:"the-isactive-prop",children:[]}],p={toc:l};function b(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("div",null,Object(r.b)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"283",height:"535",style:{float:"right"}},Object(r.b)("image",{href:Object(c.a)("img/demo.gif"),x:"18",y:"33",width:"247",height:"469"}),Object(r.b)("image",{href:Object(c.a)("img/frame.png"),width:"283",height:"535"}))),Object(r.b)("h3",{id:"what-are-camera-devices"},"What are camera devices?"),Object(r.b)("p",null,'Camera devices are the physical (or "virtual") devices that can be used to record videos or capture photos.'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Physical"),": A physical camera device is a ",Object(r.b)("strong",{parentName:"p"},"camera lens on your phone"),". Different physical camera devices have different specifications, such as different capture formats, field of views, focal lengths, and more. Some phones have multiple physical camera devices."),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"Examples: ",Object(r.b)("em",{parentName:"p"},'"Backside Wide-Angle Camera"'),", ",Object(r.b)("em",{parentName:"p"},'"Frontside Wide-Angle Camera (FaceTime HD)"'),", ",Object(r.b)("em",{parentName:"p"},'"Ultra-Wide-Angle back camera"'),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Virtual"),": A virtual camera device is a ",Object(r.b)("strong",{parentName:"p"},"combination of one or more physical camera devices"),", and provides features such as ",Object(r.b)("em",{parentName:"p"},"virtual-device-switchover")," while zooming or ",Object(r.b)("em",{parentName:"p"},"combined photo delivery")," from all physiscal cameras to produce higher quality images."),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"Examples: ",Object(r.b)("em",{parentName:"p"},'"Triple-Camera"'),", ",Object(r.b)("em",{parentName:"p"},'"Dual-Wide-Angle Camera"'))))),Object(r.b)("h3",{id:"get-available-camera-devices"},"Get available camera devices"),Object(r.b)("p",null,"To get a list of all available camera devices, use the ",Object(r.b)("inlineCode",{parentName:"p"},"getAvailableCameraDevices")," function:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const devices = await Camera.getAvailableCameraDevices()\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"See the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/main/src/CameraDevice.ts"},Object(r.b)("inlineCode",{parentName:"a"},"CameraDevice")," type")," for more information about a Camera Device"))),Object(r.b)("p",null,"A camera device (",Object(r.b)("inlineCode",{parentName:"p"},"CameraDevice"),") contains a list of physical device types this camera device consists of."),Object(r.b)("p",null,"Example:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For a single Wide-Angle camera, this would be ",Object(r.b)("inlineCode",{parentName:"li"},'["wide-angle-camera"]')),Object(r.b)("li",{parentName:"ul"},"For a Triple-Camera, this would be ",Object(r.b)("inlineCode",{parentName:"li"},'["wide-angle-camera", "ultra-wide-angle-camera", "telephoto-camera"]'))),Object(r.b)("p",null,"You can use the helper function ",Object(r.b)("inlineCode",{parentName:"p"},"parsePhysicalDeviceTypes")," to convert a list of physical devices to a single device descriptor type which can also describe virtual devices:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'console.log(device.devices)\n//  --\x3e ["wide-angle-camera", "ultra-wide-angle-camera", "telephoto-camera"]\n\nconst deviceType = parsePhysicalDeviceTypes(device.devices)\nconsole.log(deviceType)\n//  --\x3e "triple-camera"\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"CameraDevice")," type also contains other useful information describing a camera device, such as ",Object(r.b)("inlineCode",{parentName:"p"},"position"),' ("front", "back", ...), ',Object(r.b)("inlineCode",{parentName:"p"},"hasFlash"),", it's ",Object(r.b)("inlineCode",{parentName:"p"},"formats")," (See ",Object(r.b)("a",{parentName:"p",href:"formats"},"Camera Formats"),"), and more."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Make sure to be careful when filtering out unneeded camera devices, since not every phone supports all camera device types. Some phones don't even have front-cameras. You always want to have a camera device, even when it's not the one that has the best features."))),Object(r.b)("h3",{id:"usecameradevices-hook"},Object(r.b)("inlineCode",{parentName:"h3"},"useCameraDevices")," hook"),Object(r.b)("p",null,"The react-native-vision-camera library provides a hook to make camera device selection a lot easier."),Object(r.b)("p",null,"You can specify a device type to only find devices with the given type:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const devices = useCameraDevices('wide-angle-camera')\n  const device = devices.back\n\n  if (device == null) return <LoadingView />\n  return (\n    <Camera\n      style={StyleSheet.absoluteFill}\n      device={device}\n    />\n  )\n}\n")),Object(r.b)("p",null,'Or just return the "best matching camera device". This function prefers camera devices with more physical cameras, and always ranks "wide-angle" physical camera devices first.'),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Example: ",Object(r.b)("inlineCode",{parentName:"p"},"triple-camera")," > ",Object(r.b)("inlineCode",{parentName:"p"},"dual-wide-camera")," > ",Object(r.b)("inlineCode",{parentName:"p"},"dual-camera")," > ",Object(r.b)("inlineCode",{parentName:"p"},"wide-angle-camera")," > ",Object(r.b)("inlineCode",{parentName:"p"},"ultra-wide-angle-camera")," > ",Object(r.b)("inlineCode",{parentName:"p"},"telephoto-camera")," > ...")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const devices = useCameraDevices()\n  const device = devices.back\n\n  if (device == null) return <LoadingView />\n  return (\n    <Camera\n      style={StyleSheet.absoluteFill}\n      device={device}\n    />\n  )\n}\n")),Object(r.b)("h3",{id:"the-isactive-prop"},"The ",Object(r.b)("inlineCode",{parentName:"h3"},"isActive")," prop"),Object(r.b)("p",null,"The Camera's ",Object(r.b)("inlineCode",{parentName:"p"},"isActive")," property can be used to ",Object(r.b)("em",{parentName:"p"},"pause")," the session (",Object(r.b)("inlineCode",{parentName:"p"},"isActive={false}"),') while still keeping the session "warm". This is more desirable than completely unmounting the camera, since ',Object(r.b)("em",{parentName:"p"},"resuming")," the session (",Object(r.b)("inlineCode",{parentName:"p"},"isActive={true}"),") will be ",Object(r.b)("strong",{parentName:"p"},"much faster")," than re-mounting the camera view."),Object(r.b)("p",null,"For example, you want to ",Object(r.b)("strong",{parentName:"p"},"pause the camera")," when the user ",Object(r.b)("strong",{parentName:"p"},"navigates to another page")," or ",Object(r.b)("strong",{parentName:"p"},"minimizes the app")," since otherwise the camera continues to run in the background without the user seeing it, causing ",Object(r.b)("strong",{parentName:"p"},"siginificant battery drain"),". Also, on iOS a green dot indicates the user that the camera is still active, possibly causing the user to raise privacy concerns. (\ud83d\udd17 See ",Object(r.b)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT211876"},'"About the orange and green indicators in your iPhone status bar"'),")"),Object(r.b)("p",null,"This example demonstrates how you could pause the camera stream once the app goes into background using a custom ",Object(r.b)("inlineCode",{parentName:"p"},"useIsAppForeground")," hook:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const devices = useCameraDevices()\n  const device = devices.back\n  const isAppForeground = useIsAppForeground()\n\n  if (device == null) return <LoadingView />\n  return (\n    <Camera\n      style={StyleSheet.absoluteFill}\n      device={device}\n      isActive={isAppForeground}\n    />\n  )\n}\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Note: If you don't care about fast resume times you can also fully unmount the ",Object(r.b)("inlineCode",{parentName:"p"},"<Camera>")," view instead, which will use a lot less memory (RAM)."))),Object(r.b)("br",null),Object(r.b)("h4",{id:"-next-section-camera-formats"},"\ud83d\ude80 Next section: ",Object(r.b)("a",{parentName:"h4",href:"formats"},"Camera Formats")))}b.isMDXComponent=!0},124:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return u}));var n=t(0),i=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var a=i.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},b=function(e){var a=p(e.components);return i.a.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},d=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(t),d=n,u=b["".concat(c,".").concat(d)]||b[d]||m[d]||r;return t?i.a.createElement(u,o(o({ref:a},l),{},{components:t})):i.a.createElement(u,o({ref:a},l))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,c=new Array(r);c[0]=d;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<r;l++)c[l]=t[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},126:function(e,a,t){"use strict";t.d(a,"b",(function(){return r})),t.d(a,"a",(function(){return c}));var n=t(16),i=t(127);function r(){var e=Object(n.default)().siteConfig,a=(e=void 0===e?{}:e).baseUrl,t=void 0===a?"/":a,r=e.url;return{withBaseUrl:function(e,a){return function(e,a,t,n){var r=void 0===n?{}:n,c=r.forcePrependBaseUrl,o=void 0!==c&&c,s=r.absolute,l=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if(Object(i.b)(t))return t;if(o)return a+t;var p=t.startsWith(a)?t:a+t.replace(/^\//,"");return l?e+p:p}(r,t,e,a)}}}function c(e,a){return void 0===a&&(a={}),(0,r().withBaseUrl)(e,a)}},127:function(e,a,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return i}))}}]);