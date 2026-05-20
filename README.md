# MENG YUHAN Portfolio

GitHub Pages にそのまま置ける、ビルド不要の個人ポートフォリオサイトです。

## ファイル構成

- `index.html`
- `style.css`
- `script.js`
- `README.md`
- `profile.jpeg`
- `my-kiro-samples/sweets/`

追加のビルドツール、npm、外部CDN、フレームワークは不要です。

## 編集する場所

- プロフィール文: `index.html` の About セクション
- プロジェクト: `index.html` の Projects セクション
- SNSリンク: `index.html` の Contact セクション
- 色: `style.css` の `:root` と `[data-theme="light"]` にある `--accent` などの変数

`TODO:` と書かれている部分は、未指定項目のプレースホルダです。公開前に必要に応じて置き換えてください。

## GitHub Pages へのデプロイ手順

1. GitHub で新しいリポジトリを作成します。ユーザーサイトとして公開する場合、リポジトリ名は `meng-yuhan.github.io` にします。
2. このフォルダ内の `index.html`、`style.css`、`script.js`、`README.md`、`profile.jpeg` と `my-kiro-samples/sweets/` をリポジトリのルートに置きます。
3. 変更を commit して、`main` ブランチへ push します。
4. GitHub のリポジトリ画面で `Settings` を開きます。
5. 左メニューの `Pages` を開きます。
6. `Build and deployment` の `Source` で `Deploy from a branch` を選びます。
7. `Branch` を `main`、フォルダを `/(root)` にして保存します。
8. 数分後、GitHub Pages の公開URLからサイトを確認できます。

## ローカル確認

`index.html` をブラウザで開くと確認できます。テーマ切替と言語切替はブラウザの `localStorage` に保存されます。
