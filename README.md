# VuePress(v1.x) Boilerplate

> [vuepress](https://vuepress.vuejs.org/) starter template for web site.

## Preparation

vue-cli を使ってダウンロードできるようになっているので、もしなかったらグローバルインストールしてください。<br>
(普段通りにクローン、ダウンロードとかでもいいです)

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

2. [ress (modern reset css) ](https://github.com/filipelinhares/ress)でブラウザ CSS をリセットさせてます。

3. autoplefixer, @babel/preset-env のお気持ち程度に設定しています。browserslist は package.json に含めているので必要なら適宜変更してください。

4. prettier, eslint も一応入れていて、vscode 限定で`*.vue, *.js, *.styl`を保存時などにオートフォーマットします。
   > VSCodeプラグインをインストールして適用する必要があります！<br>
   > extensions.json 置いてあるので VSCode 上でアテンション出ると思います

5. VuePress プラグインについて<br>
   以下の plugin をデフォルトでインストールするようにしています。<br>
   基本コメントアウトして適用しないようにしているので、必要であれば使ってください。

   - [@goy/vuepress-plugin-svg-icons](https://vp-icon.goyfe.com/guide/)（デフォルトで有効）<br>
     svg-sprite-icon を使用できるようにするプラグインです。詳細はリンク先へ。
     > `yarn svgo`で svgo を実行できるのですが、`src/.vuepress/config.js`内の plugins 箇所でこのプラグインが適用されてないといけないので注意！

   - [@vuepress/plugin-google-analytics](https://v1.vuepress.vuejs.org/plugin/official/plugin-google-analytics.html)<br>
     インストール時にプロンプトで必要かどうか聞かれるので "Y/n" で答えてください。<br>
     vuepress 公式のプラグインです。詳細はリンク先へ。

6. GLSL 使いたいかもってときもあるかもしれないので、プロンプトで webpack-glsl-loader が必要かどうか聞かれるようにしてます。なので、任意でどうするか決めてください。

7. seo 関連の meta タグについて<br>
   [LP のとき]：`src/.vuepress/config.js`内の head 箇所に追加しとけば良さそう。

   [複数ページサイト]：各ページの`*.md`ファイルに Frontmatter で追加する感じでいいかも。

8. vetur の path mapping について<br>
    `./src/*`, `./src/.vuepress/*`, `./src/.vuepress/components/*`,以下のものをデフォルトとして登録している。<br>
    （たぶんフォルダと`*.vue, *.js`くらいまでしか候補に出してくれない？っぽい...）

    [追加手順]
    - `./src/.vuepress/config.js`のwebpack aliasに任意のパスを追加する。
    - ailiasにそって`jsconfig.json`のcompilerOptions pathsにパスを追加。

## License

[MIT License](https://github.com/RootCisco/vuepress-boilerplate/blob/master/LICENSE)
