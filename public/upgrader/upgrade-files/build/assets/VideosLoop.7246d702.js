import{_ as a}from"./Translate.dc83ae5b.js";import{r as m,j as t,F as h,a as r,L as s}from"./app.70eb7c5f.js";import{K as g}from"./react-tooltip.esm.min.cb5a3799.js";import{a as u}from"./index.esm.b743b834.js";/* empty css                      */import{a as f}from"./index.esm.dc99be0f.js";import{M as x}from"./Modal.ea61d8f0.js";import N from"./SingleVideo.ba5482de.js";import{c as w}from"./index.esm.b47aa8e1.js";import"./iconBase.19c775b5.js";import"./transition.a700d2e8.js";import"./AuthenticatedLayout.37d9e013.js";import"./Front.5dab1473.js";import"./react-toastify.esm.b9d392e3.js";import"./TextInput.9faad775.js";import"./index.esm.80e20a61.js";import"./index.esm.44a5a5e5.js";import"./PrimaryButton.09893f04.js";function D({videos:n}){const[l,c]=m.exports.useState(!1),[p,o]=m.exports.useState(!1),d=(e,i)=>{e.preventDefault(),c(i),o(!0)};return t(h,{children:[r(x,{show:p,onClose:e=>o(!1),children:l&&r(N,{video:l,inModal:!0})}),r("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5",children:n.map(e=>t("div",{className:"border dark:border-zinc-800 shadow-sm rounded-lg pb-2 bg-white dark:bg-zinc-900",children:[t("div",{className:"relative",children:[r("button",{onClick:i=>d(i,e),children:r("img",{src:e.thumbnail,className:"rounded-tl-lg rounded-tr-lg mb-3 ",alt:""})}),r("div",{className:"absolute top-5 left-0 bg-indigo-800 text-white font-bold text-sm uppercase rounded-tr rounded-br px-2 py-1",children:e.price<1?a("Free"):t("div",{className:"flex items-center",children:[r(u,{className:"h-4 w-4 mr-1"}),e.price]})})]}),t("div",{className:"inline-flex items-center px-3",children:[r("div",{className:"w-10 flex-shrink-0 mr-2",children:r(s,{href:route("channel",{user:e.streamer.username}),children:r("img",{src:e.streamer.profile_picture,className:"w-10 h-10 rounded-full"})})}),t("div",{children:[r("div",{className:"h-5 overflow-hidden",children:r(s,{"data-tooltip-content":e.title,"data-tooltip-id":`tooltip-${e.id}`,onClick:i=>d(i,e),className:"font-semibold  dark:text-gray-100 hover:text-gray-800 text-gray-600 dark:hover:text-gray-400",children:e.title})}),r("div",{className:"mt-1.5 flex items-center text-xs text-gray-500 dark:text-gray-200"}),t("div",{className:"mt-1.5 mb-1 flex items-center text-xs text-gray-500 dark:text-gray-200",children:[t("div",{children:[t(s,{href:route("channel",{user:e.streamer.username}),children:["@",e.streamer.username]}),r(g,{anchorSelect:"a"})]}),t("div",{className:"inline-flex items-center ml-2",children:[r(w,{className:"mr-0.5"}),e.category.category]}),t("div",{className:"ml-2 inline-flex items-center",children:[r(f,{className:"w-4 h-4 mr-0.5"}),e.views===1?a("1 view"):a(":viewsCount views",{viewsCount:e.views})]})]})]})]})]},`vid-${e.id}`))})]})}export{D as default};
