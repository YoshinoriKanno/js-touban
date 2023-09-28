// A, B, C の配列を作る
let names = ["A", "B", "C"];

// ランダムなインデックスを取得する関数
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// 当番を決める関数
function chooseDuty() {
  // 今日の日付を取得する
  let today = new Date().toLocaleDateString();

  // localStorageに保存された日付と当番を取得する
  let savedDate = localStorage.getItem("date");
  let savedDuty = localStorage.getItem("duty");

  // 今日の日付と保存された日付が同じなら、保存された当番を返す
  if (today === savedDate) {
    return savedDuty;
  }

  // 違うなら、ランダムに当番を選ぶ
  let duty = names[getRandomIndex(names)];

  // localStorageに今日の日付と当番を保存する
  localStorage.setItem("date", today);
  localStorage.setItem("duty", duty);

  // 当番を返す
  return duty;
}

// h1タグに当番を表示させる
let h1 = document.querySelector("h1");
h1.textContent = chooseDuty();
