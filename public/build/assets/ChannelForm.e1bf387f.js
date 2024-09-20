import{b as m,r as g,u as L,j as a,a as e}from"./app.9e598114.js";import{I as l}from"./InputError.4d53dcfa.js";import{I as c}from"./InputLabel.b1adb635.js";import{P as U}from"./PrimaryButton.683939b2.js";import{T as n}from"./TextInput.b942e667.js";import{_ as t}from"./Translate.dc83ae5b.js";import{T as z}from"./Textarea.ca4513c0.js";import{d as S}from"./index.esm.487ec2bb.js";import{W as R}from"./transition.955527f9.js";import"./iconBase.4930b98a.js";function B({mustVerifyEmail:T,status:I,className:h}){const o=m().props.auth.user,{categories:p}=m().props,[f,b]=g.exports.useState(o.profile_picture),[v,y]=g.exports.useState(o.cover_picture),{data:d,setData:s,errors:i,processing:x,recentlySuccessful:k,post:N,progress:u}=L({username:o.username,about:o.about,category:o.firstCategory.id,headline:o.headline}),w=r=>{r.preventDefault(),N(route("channel.update-settings"),{preserveState:!1})},P=r=>{s("coverPicture",r),y((window.URL?URL:webkitURL).createObjectURL(r))},C=r=>{s("profilePicture",r),b((window.URL?URL:webkitURL).createObjectURL(r))};return a("section",{className:h,children:[a("header",{children:[a("div",{className:"flex items-center",children:[e(S,{className:"text-gray-600 dark:text-gray-100 mr-2"}),e("h2",{className:"text-xl font-medium text-gray-600 dark:text-gray-100",children:t("Channel Settings")})]}),e("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:t("Update your channel infos")})]}),a("form",{onSubmit:w,className:"mt-6 space-y-6",children:[a("div",{children:[e(c,{for:"username",value:t("Username")}),e(n,{id:"username",className:"mt-1 block w-full",value:d.username,handleChange:r=>s("username",r.target.value),required:!0,autofocus:!0}),e(l,{className:"mt-2",message:i.username})]}),a("div",{children:[e(c,{for:"category",value:t("Category")}),a("select",{name:"category",onChange:r=>s("category",r.target.value),className:"mt-1 block w-full border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ",defaultValue:d.category,children:[e("option",{value:"",children:t("- Select -")}),p.map((r,j)=>e("option",{value:r.id,children:r.category},r.id))]}),e(l,{className:"mt-2",message:i.category})]}),a("div",{children:[e(c,{for:"profilePicture",value:t("Profile Picture - 80x80 recommended")}),e(n,{className:"p-1 block w-full text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-300 focus:outline-none dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-zinc-900",id:"profilePicture",type:"file",handleChange:r=>C(r.target.files[0])}),e(l,{className:"mt-2",message:i.profilePicture}),e("img",{src:f,alt:"profile picture",className:"h-20 rounded-full mt-2 border-white border-2 dark:border-indigo-200"})]}),a("div",{children:[e(c,{for:"coverPicture",value:t("Cover Picture - 960x280 recommended")}),e(n,{className:"p-1 block w-full text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-300 focus:outline-none dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-zinc-900",id:"coverPicture",type:"file",handleChange:r=>P(r.target.files[0])}),e(l,{className:"mt-2",message:i.coverPicture}),e("div",{className:"mt-3",children:e("img",{src:v,alt:"cover picture",className:"rounded-md border-2 border-white dark:border-indigo-200 h-40"})})]}),a("div",{children:[e(c,{for:"headline",value:t("Profile Headline")}),e(n,{id:"headline",className:"mt-1 block w-full",value:d.headline,handleChange:r=>s("headline",r.target.value),required:!0,autofocus:!0}),e(l,{className:"mt-2",message:i.headline})]}),a("div",{children:[e(c,{for:"about",value:t("Channel About - html <img /> tag allowed")}),e(z,{id:"about",className:"mt-1 block w-full",value:d.about?d.about:"",handleChange:r=>s("about",r.target.value)}),a("div",{className:"bg-zinc-300 dark:bg-zinc-800 dark:text-gray-200 rounded p-2 text-xs mt-2",children:[a("strong",{className:"font-bold",children:["Allowed HTML Tags:"," "]}),"img, h3, h4, h5, h6, blockquote, p, a, ul,ol,nl,li,b,i,strong,em, strike,code,hr,br,div,table,thead, caption,tbody,tr,th,td,pre'"]}),e(l,{className:"mt-2",message:i.about})]}),a("div",{className:"flex items-center gap-4",children:[e(U,{processing:x,children:t("Save")}),e(R,{show:k,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:a("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[t("Saved"),"."]})})]}),u&&a("progress",{value:u.percentage,max:"100",children:[u.percentage,"%"]})]})]})}export{B as default};
