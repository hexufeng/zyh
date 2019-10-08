let content = document.getElementById('content');
let imgs = '';
for (let i = 1; i < 30; i++) {
  imgs += '<img src="img/作品集/作品集' + i + '.jpg" />';
}
content.innerHTML = imgs;