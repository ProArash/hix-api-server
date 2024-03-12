const HIX_URL="http://localhost:3000";async function HIX_ADD_STYLES(){var appStyles=document.createElement("link");appStyles.type="text/css",appStyles.rel="stylesheet",appStyles.href="./main.css";var boxStyles=document.createElement("link");boxStyles.type="text/css",boxStyles.rel="stylesheet",boxStyles.href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";var swiperStyles=document.createElement("link");swiperStyles.type="text/css",appStyles.rel="stylesheet",swiperStyles.href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",document.head.appendChild(swiperStyles),document.head.appendChild(boxStyles),document.head.appendChild(appStyles)}async function HIX_ADD_TAILWIND(){return new Promise(((resolve,reject)=>{let tailwindScript=document.createElement("script");tailwindScript.setAttribute("src","https://cdn.tailwindcss.com"),document.body.appendChild(tailwindScript),tailwindScript.addEventListener("load",(()=>{let tailwindConfig=document.createElement("script");tailwindConfig.innerHTML="\n            tailwind.config = {\n                theme: {\n                  extend: {\n                    colors:{\n                      'main-color':'#3E246B'\n                    },\n                  }\n                }\n              }\n              ",document.body.appendChild(tailwindConfig),resolve()}))}))}async function HIX_ADD_ELEMENTS(){const hixContainer=document.createElement("div");hixContainer.id="hix-container-full",hixContainer.classList.add("h-screen","w-full","relative"),hixContainer.insertAdjacentHTML("beforeend",'\n            <div id="hix-chatbox"\n                class="hix-widget-container flex flex-col hidden items-stretch justify-center w-full h-screen md:w-96 md:max-h-[80%] md:rounded-2xl absolute right-0 bottom-0 z-20 md:right-[2rem] md:mb-[8rem]">\n                <header class="bg-main-color text-white flex flex-col items-center justify-center w-full p-2.5 md:rounded-t-2xl">\n                <div class="relative w-full flex justify-center">\n                    <div id="hix-close-chat-btn" class="absolute right-2 top-2 text-2xl hover:animate-pulse">\n                    <i class=\'bx bx-x\'></i>\n                    </div>\n                    <img class="rounded-full w-16 bg-gradient-to-b from-pink-600 via-orange-500 to-yellow-500 p-1"\n                    src="./log-hix-f2.jpg" alt="">\n                </div>\n                <h1 class="text-center" id="business_title"></h1>\n                <p class="text-center" id="business_caption"></p>\n                </header>\n        \n                <div class=" w-full bg-white grow flex flex-col">\n                <div class="h-96 p-4 overflow-y-auto overflow-x-hidden grow">\n                    <ul id="chatScreen" class="flex flex-col" dir="rtl">\n                    \x3c!-- HERE GO THE MESSAGES --\x3e\n                    </ul>\n                </div>\n                </div>\n        \n        \n                <div class="px-4 py-4 w-full bg-white rounded-2xl">\n                \x3c!-- <button class="bg-green-500 rounded-lg py-2 px-4 mb-2" disabled id="send">Send</button> --\x3e\n                \x3c!-- <input type="checkbox" name="ch" id="isBot"> --\x3e\n                    <div class="grid grid-flow-row grid-cols-3 w-full h-auto items-center gap-1 mb-2" id="bottomBtns">\n                        <div class="bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 p-0.5 rounded-lg grow">\n                        <p id="botBtn1" class="bg-white rounded-md text-center">1</p>\n                        </div>\n                        <div class="bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 p-0.5 rounded-lg grow">\n                        <p id="botBtn2" class="bg-white rounded-md text-center">1</p>\n                        </div>\n                        <div class="bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 p-0.5 rounded-lg grow">\n                        <p id="botBtn3" class="bg-white rounded-md text-center">1</p>\n                        </div>\n                        <div class="bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 p-0.5 rounded-lg grow">\n                        <p id="botBtn4" class="bg-white rounded-md text-center">1</p>\n                        </div>\n                        <div class="bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 p-0.5 rounded-lg grow">\n                        <p id="botBtn5" class="bg-white rounded-md text-center">1</p>\n                    </div>\n                </div>\n        \n                <div class="flex w-full justify-end grow gap-2 flex-row self-end" dir="rtl">\n                    <svg id="send"\n                    class=" w-24 rounded-full bg-main-color p-1  text-slate-900 fill-white hover:fill-orange-400 self-center"\n                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">\n                    <path stroke-linecap="round" stroke-linejoin="round"\n                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />\n                    </svg>\n                    <div class="">\n                    <input class="grow w-[220px] p-3 border-none placeholder placeholder-gray-500" id="msg"\n                        placeholder="سوالت رو تایپ کن" required dir="rtl">\n                    </div>\n                    <div class="flex justify-end w-full gap-[12px]">\n                    <svg class="text-gray-400 hover:text-slate-600 self-center w-5 h-5" xmlns="http://www.w3.org/2000/svg"\n                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">\n                        <path stroke-linecap="round" stroke-linejoin="round"\n                        d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />\n                    </svg>\n                    <svg class="duration-300 text-gray-400 hover:text-slate-600 self-center w-5 h-5"\n                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\n                        stroke="currentColor">\n                        <path stroke-linecap="round" stroke-linejoin="round"\n                        d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />\n                    </svg>\n                    </div>\n                </div>\n                </div>\n            </div>\n        \n            <div id="hix-chatbtn"\n                class="hix-widget-btn-container rounded-full hover:animate-pulse duration-1000 absolute right-[2rem] bottom-[2rem] z-10">\n                <img src="./icon-widget.svg" alt="hix chat" width="80" height="80">\n            </div>\n            '),document.body.appendChild(hixContainer)}async function HIX_ADD_SCRIPTS(){let loaded_scripts=new Set;function load(script_url){return new Promise((function(resolve,reject){if(loaded_scripts.has(script_url))resolve();else{var script=document.createElement("script");script.onload=()=>{loaded_scripts.add(script_url),resolve()},script.src=script_url,document.body.appendChild(script)}}))}const scripts=["https://unpkg.com/axios/dist/axios.min.js","https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",`${HIX_URL}/socket.io/socket.io.js`];let promises=[];for(const script of scripts)promises.push(load(script));await Promise.all(promises)}async function HIX_CHAT_FUNCTIONALITY(API_KEY){const sendBtnClickEventHandler=()=>{const message={type:"text",content:messageBox.value};socket.emit("send_chat",{message:message}),addMessage(message,1),messageBox.value=""},titleText=document.getElementById("business_title"),captionText=document.getElementById("business_caption"),chatbox=document.getElementById("hix-chatbox"),chatbtn=document.getElementById("hix-chatbtn"),exitchatbtn=document.getElementById("hix-close-chat-btn"),bottomBtns=document.getElementById("bottomBtns");function updateBottomBtns(buttons){bottomBtns.innerHTML="",buttons?.forEach(((btn,i)=>{bottomBtns.insertAdjacentHTML("beforeend",`            \n            <div class="bg-gradient-to-b from-pink-500 via-orange-500 to-yellow-500 p-0.5 rounded-lg grow">\n                <a target="blank" href="${buttons[i].url}" id="botBtn${i}" class="bg-white rounded-md text-center block w-full text-sm">${buttons[i].text}</a>\n            </div>\n            `)}))}let socket;exitchatbtn.addEventListener("click",(()=>{chatbox.classList.contains("hidden")||chatbox.classList.add("hidden")})),chatbtn.addEventListener("click",(()=>{chatbox.classList.contains("hidden")?chatbox.classList.remove("hidden"):chatbox.classList.add("hidden"),screen.width<768&&(chatbtn.classList.contains("hidden")?chatbtn.classList.remove("hidden"):chatbtn.classList.add("hidden"))})),axios.post("http://localhost:3000/chat",{api_key:API_KEY}).then((data=>{const title=data.data.settings.title,caption=data.data.settings.caption;titleText.innerHTML=title,captionText.innerHTML=caption,socket=io("http://localhost:3000",{withCredentials:!0}),socket.on("connect",(()=>{socket.on("user_id",(data=>{})),socket.on("send_chat",(data=>{addMessage(data.message,0)})),socket.on("send_buttons",(data=>{updateBottomBtns(data.buttons)}))})),socket.connect()}));const messageBox=document.getElementById("msg"),sendBtn=document.getElementById("send");sendBtn.addEventListener("click",sendBtnClickEventHandler);const chatScreen=document.getElementById("chatScreen");function addMessage(mssg,sender){const messageId=Math.random().toString(36).substring(2,8),message=document.createElement("li");if(1==sender?message.classList.add("mb-4","min-h-12","min-w-12","px-5","py-3","bg-gradient-to-b","from-orange-500","via-yellow-500","to-yellow-500","rounded-t-3xl","rounded-r-3xl","break-words","chat-bubble","self-end"):message.classList.add("mb-4","min-h-12","min-w-12","px-5","py-3","rounded-l-3xl","rounded-t-3xl","bg-slate-300","break-words","chat-bubble","self-start"),"form"==mssg.type){sendBtn.removeEventListener("click",sendBtnClickEventHandler),sendBtn.setAttribute("disabled",!0);const formMessageContainer=document.createElement("div");formMessageContainer.classList.add("flex","flex-col","gap-y-2"),Object.entries(mssg.content).forEach((field=>{switch(field[1].type){case"string":formMessageContainer.insertAdjacentHTML("beforeend",`<div>\n                                                <input style="width: 100%;" class="rounded-lg p-2" placeholder="${field[1].placeholder}" type="text">\n                                            </div>\n                                        `);break;case"mobile":formMessageContainer.insertAdjacentHTML("beforeend",'<div dir="ltr" class="flex flex-row mt-3 gap-x-2 justify-around px-3">\n                                                <div>\n                                                    <select class="rounded-lg px-5">\n                                                        <option value="">+98</option>\n                                                    </select>\n                                                </div>\n                                                <div>\n                                                    <input class="rounded-lg placeholder:text-center p-0.5" type="tel"\n                                                        placeholder="*** *** ****" maxlength="10" id="">\n                                                </div>\n                                            </div>\n                                            ');break;case"boolean":formMessageContainer.insertAdjacentHTML("beforeend",`<div class="flex items-center justify-center gap-3">\n                                                <input type="checkbox" id="">${field[1].name}\n                                            </div>\n                                            `);break;case"array":formMessageContainer.insertAdjacentHTML("beforeend",`<div>\n                                                <select class="w-full rounded-lg p-2">\n                                                    ${field[1].options.map(((option,index)=>`<option value="${index}">${option}</option>`)).join("")}\n                                                </select>\n                                            </div>\n                                            `)}}));const submitFormMessageBtn=document.createElement("button");submitFormMessageBtn.setAttribute("style","background-color: #333 !important"),submitFormMessageBtn.classList.add("bg-blue-500","text-white","p-2","rounded-full","w-full"),submitFormMessageBtn.innerHTML="ارسال",submitFormMessageBtn.addEventListener("click",(()=>{sendBtn.addEventListener("click",sendBtnClickEventHandler)})),formMessageContainer.insertAdjacentElement("beforeend",submitFormMessageBtn),message.insertAdjacentElement("beforeend",formMessageContainer)}else if("catalog"==mssg.type){const s1=document.createElement("div");s1.id=`swiper-${messageId}`;const snext=document.createElement("div");snext.id=`snext-${messageId}`,snext.className="swiper-button-next";const sprev=document.createElement("div");sprev.id=`sprev-${messageId}`,sprev.className="swiper-button-prev";const catalogWrapper=document.createElement("div");catalogWrapper.id=`catalog-${messageId}`,catalogWrapper.className="swiper-wrapper",s1.appendChild(catalogWrapper),s1.appendChild(snext),s1.appendChild(sprev),mssg.content.items.forEach((catalogItem=>{catalogWrapper.insertAdjacentHTML("beforeend",`\n                                                <div class="swiper-slide flex flex-col border-double border-4 border-sky-500 rounded-2xl content-between items-center">\n                                                    <img class="rounded-t-lg w-full" src="${catalogItem.imageUrl}" alt="">\n                                                    <div class=" bg-white text-[15px] p-1 w-full text-center">\n                                                        <p>${catalogItem.name}</p>\n                                                    </div>\n                                                    <div class="flex justify-items-stretch bg-main-color text-white w-full rounded-b-lg p-3">\n                                                    <a class="w-full text-center" href="${catalogItem.link}" target="_blank">مشاهده\n                                                    و خرید\n                                                    </a>\n                                                    </div>\n                                                </div>\n                                                    `)})),new Swiper(s1,{effect:"coverflow",centeredSlides:!0,slidesPerView:"auto",autoHeight:!0,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},loop:!0,simulateTouch:!0,navigation:{nextEl:snext,prevEl:sprev}}).changeLanguageDirection("rtl"),message.appendChild(s1)}else"text"==mssg.type&&(message.innerHTML=mssg.content);chatScreen.appendChild(message),chatScreen.parentElement.scrollTop=chatScreen.parentElement.scrollHeight}}async function HIX_INIT(API_KEY){await HIX_ADD_STYLES(),await HIX_ADD_TAILWIND(),await HIX_ADD_ELEMENTS(),await HIX_ADD_SCRIPTS(),await HIX_CHAT_FUNCTIONALITY(API_KEY)}