# VuePress(v1.x) Boilerplate

> vuepress starter template for web site.

## Preparation

vue-cli を使ってダウンロードできるようになっているのでもしなかったらグローバルインストールしてください。<br>
(普段通りにクローン、ダウンロードでもいいです)

      $ npm i -g @vue/cli @vue/cli-init
      # OR
      $ yarn global add @vue/cli @vue/cli-init

## Usage

      $ vue init RootCisco/vuepress-boilerplate {my_project_name}
      $ cd {my_project_name}
      $ yarn install
      $ yarn dev

## Note

1. pug 記法使えます。

2. glsl 使えるよう webpack-glsl-loader も設定しています。

3. [ress (modern reset css) ](https://github.com/filipelinhares/ress)でブラウザ CSS をリセットさせてます。

4. autoplefixer, @babel/preset-env の設定もしています。browserslist は package.json に含めているので必要なら適宜変更してください。

5. prettier, eslint も一応入れていて、vscode 限定で`*.vue, *.js, *.styl`を保存時などにオートフォーマットします。<br>
   ※vscode プラグインをインストールして適用する必要があります！<br>
   extensions.json 置いてあるので VSCode 上でアラート出るかと思います

6. VuePress プラグインについて<br>
   以下の plugin をデフォルトでインストールするようにしています。<br>
   基本コメントアウトして適用しないようにしているので、必要であれば使ってください。

   - [@goy/vuepress-plugin-svg-icons](https://vp-icon.goyfe.com/guide/)（デフォルトで有効）<br>
     svg-sprite-icon を使用できるようにするプラグインです。詳細はリンク先へ。<br>
     ※`yarn svgo`で svgo を実行できるのですが、`src/.vuepress/config.js`内の plugins 箇所でこのプラグインが適用されてないといけないので注意！

   - [@vuepress/plugin-google-analytics](https://v1.vuepress.vuejs.org/plugin/official/plugin-google-analytics.html)<br>
     インストール時にプロンプトで必要かどうか聞かれるので"Yes/No"で答えてください。<br>
     vuepress 公式のプラグインです。詳細はリンク先へ。

7. GLSL 使うかもってときもあるかもしれないので、プロンプトで loader が必要かどうか聞かれるようにしてます。なので、任意でどうするか決めてください。

8. seo 関連の meta タグについて<br>
   [LP のとき]：`src/.vuepress/config.js`内の head 箇所に追加しとけば良さそう。

   [複数ページサイト]：各ページの`*.md`ファイルに Frontmatter で追加する感じでいいかも。

## License

[MIT License](https://github.com/RootCisco/vuepress-boilerplate/blob/master/LICENSE)
