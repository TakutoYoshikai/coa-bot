# coa-bot
C高のDiscordのコアちゃんbot

## 動作環境
Node.js v11.2.0

## 使い方
```
cd /path/to/coa-bot
npm install
cp example.config.json config.json
config.jsonにトークンを設定
node index.js
```

## 開発に参加する方法
1. リポジトリをcloneする
2. masterからブランチを切る。ブランチ名は「feature/機能名(英数字)」とする
2. テスト用コアbotのトークンをconfig.jsonに設定する ※1
3. コードを変更する
4. 動作確認をして、問題なかったら必要なファイルだけをgit addする。
5. 差分を確認して、トークンが含まれていないか確認する
6. 切ったブランチにコミットしてpushする
7. masterブランチにプルリクエストを送信する ※2
8. 吉開の確認を待つ
9. masterにマージされたら本番コアbotに反映される
10. 他の変更した人がいるかもしれないので、作業する前にmasterをpullしてからブランチを切ること


※1 テスト用のコアbotは動作確認をする時だけ使い、永続化しないこと

※2 何の機能を実装したか、確認事項、共有事項をわかりやすく記述する

## 欲しい機能・バグ報告はissuesで登録してください
