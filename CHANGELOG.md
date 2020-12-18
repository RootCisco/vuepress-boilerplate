## v0.1.4 (2020/12/18)
- `eslint-plugin-prettier` を使った prettier 連携は公式で非推奨となったみたいなので削除。
- eslint, prettier 関連の設定を再調整。
- jsconfig.json でなぜか ts syntax error がでるので、typescript validatte をいまいま無効化する。

## v0.1.3 (2020/12/17)
- @public, @assets の alias は、ほぼ使わないので削除。
- add jsconfig.json for vetur in vscode.

## v0.1.2 (2020/12/10)
- package update.
- vuepressのホットリロードバグが直ってるみたいなので、packageからwatchpackを削除。

## v0.1.1 (2020/07/14)
- VuePressのバグで、metaの`charset`, `viewport`が消されるみたいなので、config.jsのheadに追記して対応しておく。

## v0.1.0 (2020/06/04)
first release
