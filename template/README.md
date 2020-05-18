# vuepress(v1.x) template

> vuepress v1.x 系を使った、静的サイトをつくるときのテンプレート。

## Require

      node LTS version (v8.x, v10.x, v12.x)
      vuepress v1.5.0
      vuex v3.4.1

## Installation

      yarn install

## Get strated

      yarn dev  // localhost:3000立ち上げ
      yarn build  // プロダクションビルド。build/ディレクトリ出力

## Note

1. pug 記法使えます。

2. glsl 使えるよう webpack-glsl-loader も設定しています。

3. [ress (modern reset css) ](https://github.com/filipelinhares/ress)でブラウザ CSS をリセットさせてます。

4. autoplefixer, @babel/preset-env の設定もしています。browserslist は package.json に含めているので必要なら適宜変更してください。

5. prettier, eslint も一応入れていて、vscode 限定で`*.vue, *.js, *.styl`を保存時などにオートフォーマットします。<br>
   ※vscode プラグインをインストールして適用する必要があります！

6. vuepress プラグインについて<br>
   以下の plugin をデフォルトでインストールするようにしています。<br>
   基本コメントアウトして適用しないようにしているので、必要であれば使ってください。

   - [@goy/vuepress-plugin-svg-icons](https://vp-icon.goyfe.com/guide/)（デフォルトで有効）<br>
     svg-sprite-icon を使用できるようにするプラグインです。詳細はリンク先へ。<br>
     ※エイリアスコマンドで svgo を実行できるのですが、`src/.vuepress/config.js`内の plugins 箇所でこのプラグインが適用されてないといけないので注意！

   - [@vuepress/plugin-google-analytics](https://v1.vuepress.vuejs.org/plugin/official/plugin-google-analytics.html)<br>
     vuepress 公式のプラグインです。詳細はリンク先へ。

   - [vuepress-plugin-sitemap](https://github.com/ekoeryanto/vuepress-plugin-sitemap)<br>
     サイトマップジェネレータープラグインです(念の為入れておく)。詳細はリンク先へ。

7. seo 関連の meta タグについて<br>
   [LP のとき]：`src/.vuepress/config.js`内の head 箇所に追加しとけば良さそう。

   [複数ページサイト]：各ページの`*.md`ファイルに Frontmatter で追加する感じでいいかも。

## License

[MIT License](https://github.com/RootCisco/vuepress-boilerplate/blob/master/LICENSE)
