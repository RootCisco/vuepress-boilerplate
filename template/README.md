# vuepress(v1.x) template
> vuepress v1.x系を使った、静的サイトをつくるときのテンプレート。

## Require
      node LTS version (v8.x, v10.x, v12.x)
      vuepress v1.2.0
      vuex v3.1.1

## Installation
      yarn install

## Get strated
      yarn dev  // localhost:3000立ち上げ
      yarn build  // プロダクションビルド。build/ディレクトリ出力

## Note
1. pug記法使えます。

2. glsl使えるようwebpack-glsl-loaderも設定しています。

3. [ress (modern reset css) ](https://github.com/filipelinhares/ress)でブラウザCSSをリセットさせてます。

4. autoplefixer, @babel/preset-envの設定もしています。browserslistはpackage.jsonに含めているので必要なら適宜変更してください。

5. prettier, eslintも一応入れていて、vscode限定で`*.vue, *.js, *.styl`を保存時などにオートフォーマットします。<br>
   ※vscodeプラグインをインストールして適用する必要があります！

6. vuepressプラグインについて<br>
   以下のpluginをデフォルトでインストールしています。<br>
   基本コメントアウトして適用しないようにしているので、必要であれば使ってください。
   
   - [@goy/vuepress-plugin-svg-icons](https://vp-icon.goyfe.com/guide/)<br>
   svg-sprite-iconを使用できるようにするプラグインです。詳細はリンク先へ。<br>
   ※エイリアスコマンドでsvgoを実行できるのですが、`src/.vuepress/config.js`内のplugins箇所でこのプラグインが適用されてないといけないので注意！

   - [@vuepress/plugin-google-analytics](https://v1.vuepress.vuejs.org/plugin/official/plugin-google-analytics.html)<br>
   vuepress公式のプラグインです。詳細はリンク先へ。

   - [vuepress-plugin-sitemap](https://github.com/ekoeryanto/vuepress-plugin-sitemap)<br>
   サイトマップジェネレータープラグインです(念の為入れておく)。詳細はリンク先へ。

7. seo関連のmetaタグについて<br>
   [LPのとき]：`src/.vuepress/config.js`内のhead箇所に追加しとけば良さそう。<br>
   [複数ページサイト]：各ページの`*.md`ファイルにFrontmatterで追加する感じでいいかも。

## License
[MIT License](https://github.com/RootCisco/vuepress-boilerplate/blob/master/LICENSE)
