let im=document.getElementById('im');
let chat=document.getElementById('chat');
let text=document.getElementById('text');
let imgg=document.getElementById('img');
let cora=document.getElementById('cora');
let eqt=document.querySelector('.eqt');
let t='black';
let object={
    'محمد صلاح':['محمد صلاح هو لاعب كرة قدم مصري محترف ونجم نادي ليفربول الإنجليزي ومنتخب مصر، ويُعد من أفضل اللاعبين في العالم بفضل مهارته وأخلاقه العالية وصورته اهي',
        './images/محمد صلاح.webp'
    ],
    'اعظم نادي':['النادي الأهلي: نادٍ مصري تأسس عام 1907 ويُعد الأكثر نجاحًا في إفريقيا، حصد بطولات محلية وقارية جعلته زعيم القارة السمراء',
        './images/الاهلي.jpg'],
    'الاهلي':['النادي الأهلي: نادٍ مصري تأسس عام 1907 ويُعد الأكثر نجاحًا في إفريقيا، حصد بطولات محلية وقارية جعلته زعيم القارة السمراء',
        './images/الاهلي.jpg'],
    'الزمالك':['نادي الزمالك: نادٍ مصري تأسس عام 1911، يتميز بتاريخ كبير وإنجازات عديدة، ويُعد المنافس التقليدي للنادي الأهلي.',
        './images/الزمالك.jpg'],
    'برشلون':['نادي برشلونة: نادٍ إسباني تأسس عام 1899، معروف بأسلوب “التيكي تاكا” وامتلاكه لأساطير كروية غيرت تاريخ اللعبة',
        './images/برشلونه.jpeg'],
    'ريال مدريد':['نادي ريال مدريد: نادٍ إسباني تأسس عام 1902، يُعتبر من أنجح أندية العالم وأكثرها فوزًا بدوري أبطال أوروبا.',
        './images/ريال مدريد.jpeg'],
    'ميسي':['ميسي: نجم أرجنتيني يُعد من أعظم لاعبي التاريخ، حصد سبع كرات ذهبية وحقق ألقابًا عالمية مع الأندية والمنتخب.',
        './images/ميسي.jpg'],
    'كريستيانو':['كريستيانو رونالدو: لاعب برتغالي أسطوري، اشتهر بقوته ومهارته وسجل أهدافًا قياسية جعلته من الأفضل في التاريخ',
        './images/كريستيانو.jpg'],
    'رونالدو':['كريستيانو رونالدو: لاعب برتغالي أسطوري، اشتهر بقوته ومهارته وسجل أهدافًا قياسية جعلته من الأفضل في التاريخ',
        './images/كريستيانو.jpg'],
    'ساديو ماني':['ساديو ماني: لاعب سنغالي تألق مع ليفربول وبايرن ميونخ، يتميز بسرعته وروحه القتالية ومساهماته في فوز فريقه بالبطولات.',
        './images/ساديو ماني.jpeg'],
    'هالاند':['هالاند: مهاجم نرويجي شاب يتميز بسرعة كبيرة وقوة بدنية هائلة، وأصبح من أبرز هدافي أوروبا بسرعة قياسية.',
        './images/هالاند.jpg'],
    'مبابي':['مبابي: نجم فرنسي فاز بكأس العالم 2018، يجمع بين السرعة والمهارة والدقة في التسجيل ليصبح من الأفضل عالميًا.',
        './images/مبابي.png'],
    
}

function sub(){
    if(text.value !=''){
for(let i in object){
    if(text.value.includes(i)){
    im.innerHTML=text.value;
    im.style.display='block';
    chat.innerHTML=object[i][0];
    chat.style.display='block';
    imgg.src=object[i][1];
    imgg.style.display='block';
    
    }
    else if(text.value.includes('مرحبا')||text.value.includes('ازيك')){
        im.innerHTML=text.value;
        im.style.display='block';
        chat.innerHTML='مرحبًا! ⚽👋أنا بوت خاص بكرة القدم، تقدر تسألني عن أي لاعب، نادٍ، بطولة أو إحصائية كروية تحب تعرفها! 🏆'
        imgg.style.display='none'
    }
    else if(text.value.includes('مين اللي عملك')||text.value.includes('الويب')||text.value.includes('فتحي')){
        im.innerHTML=text.value;
        im.style.display='block';
        chat.innerHTML='فتحي محسن هو صاحب فكرة وتصميم الشات ده وهيتم تطويره اكتر في الفتره القادمه';
        imgg.style.display='none'
    }
    
}
        eqt.style.display='none';
text.value=''
}}
function choose(tt){
    if(tt=='a1'){
        text.value='اعظم نادي في الكون';
    }
    else if(tt=='a2'){
        text.value='مين هو محمد صلاح';
    }
    else{
        text.value='كريستيانو رونالدو';
    }
    eqt.style.display='none';
    sub()
    
}
cora.onclick=function(){
   if(t=='black'){
    t='white';
    localStorage.color=t;
    document.body.style.backgroundColor='white';
   }
   else{
    document.body.style.backgroundColor='black';
    t='black';
    localStorage.color=t;
   }
    
}
document.body.style.backgroundColor=localStorage.color;



document.addEventListener('contextmenu',function(e) {
    e.preventDefault();
    
})
document.addEventListener('keydown',function(e){
    if(e.key==='F12'||e.key===123){
    e.preventDefault();
    }
    if(e.ctrlKey&&e.shiftKey&&(e.key==='I'||e.key==='i'||e.keyCode===73)){
        e.preventDefault();
    }
    if(e.ctrlKey&&e.key==='U'||e.key==='u'||e.key===85){
        e.preventDefault();
    }
    if(e.ctrlKey&&e.shiftKey&&(e.key==='J'||e.key==='j'||e.key===74)){
        e.preventDefault();
    }

})







