// エンジニアページで個人の画像などを貼り、クリックしたら個人の紹介ページに遷移する機能
// メンバーデータのリスト
const members = [
  { name: '松本', href: 'matsumoto.html', image: '../images/dummy.png', line_image: '../images/tatesen.png' },
  { name: '五嶋', href: 'gosima.html', image: '../images/dummy_woman.png', line_image: '../images/tatesen.png' },
  { name: '前田', href: 'maeda.html', image: '../images/dummy.png', line_image: '../images/tatesen.png' },
  { name: '染野', href: 'someno.html', image: '../images/dummy.png', line_image: '../images/tatesen.png' },
  { name: '南', href: 'minami.html', image: '../images/dummy.png', line_image: '../images/tatesen.png' },
];

// メンバーデータを挿入する要素を取得
const memberList = document.getElementById('memberList');

// メンバーデータを繰り返し処理してHTMLを生成
members.forEach(member => {
  const memberDiv = document.createElement('div');
  memberDiv.classList.add('member_image');

  const memberLink = document.createElement('a');
  memberLink.href = member.href;

  const memberImage = document.createElement('img');
  memberImage.src = member.image;
  memberImage.alt = 'ダミー画像';
  memberImage.height = 700;
  memberImage.width = 300;

  const lineImage = document.createElement('img');
  lineImage.classList.add('name_line');
  lineImage.src = member.line_image;
  lineImage.alt = 'ダミー画像';
  lineImage.height = 200;
  lineImage.width = 300;

  const memberName = document.createElement('div');
  memberName.classList.add('member_name');
  memberName.textContent = member.name;

  memberLink.appendChild(memberImage);
  memberLink.appendChild(lineImage);
  memberLink.appendChild(memberName);
  memberDiv.appendChild(memberLink);

  memberList.appendChild(memberDiv);
});
