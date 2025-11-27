# CLAUDE.md

このファイルは、このリポジトリで作業する際にClaude Code (claude.ai/code) に指針を提供します。

## プロジェクト概要

このリポジトリは、日本人が関わるオープンソースプロジェクトのキュレーションカタログを作成するプロジェクトです。**最終目標は台湾のOpen StarTer Villageと同様のボードゲームを作ること**ですが、現在のフェーズでは解説Webページの作成に注力しています。

### 2つの目的

1. **現在**: 解説Webページの作成 - 詳細な情報（リンク、説明、貢献方法など）を含む
2. **将来**: ボードゲーム版の作成 - 台湾版と同様の`jobs`/`requirements`を含むゲームバランス調整

### 対象分野

- **Open Source（オープンソース）**: ML/AI、NLP、DevOps、プログラミング言語、クリエイティブツールなど
- **Open Data（オープンデータ）**: データポータル、標準規格、API、可視化ツール
- **Open Government（オープンガバメント）**: Civic Tech、参加型プラットフォーム、透明性向上ツール

このプロジェクトは、OCF（Open Culture Foundation）の[Open StarTer Village](https://github.com/ocftw/open-star-ter-village)にインスパイアされています。

## ファイル構成

### Webページ関連
- `index.html`: プロジェクトカタログのメインページ
- `projects-data.js`: 全プロジェクトのデータ（JavaScriptの配列形式）

### ドキュメント
- `chat.txt`: プロジェクトの会話履歴とアイデア出しの記録
- `3group.txt`: カテゴリ別のプロジェクトリスト
- `analysis_taiwan_data.md`: 台湾版のデータ構造分析
- `data_structure_proposal.md`: 日本版のデータ構造提案

### リファレンス
- `open-star-ter-village/`: 台湾版のリポジトリ（クローン）
  - `packages/webapp/src/game/data/card/projects.json`: 台湾版のプロジェクトカード定義

## データ構造

### 現在のWebページ用構造（`projects-data.js`）

```javascript
{
  "title": "プロジェクト名",
  "category": "Open Source" | "Open Data" | "Open Government",
  "one_liner": "120文字以内の簡潔な要約",
  "description": "詳細な説明（技術者・非技術者の両方に分かりやすく）",
  "links": {
    "homepage": "https://...",  // オプション
    "github": "https://github.com/...",  // オプション
    "docs": "https://..."  // オプション
  }
}
```

### 将来のゲーム用構造（予定）

台湾版を参考に、以下のフィールドを追加予定：

```javascript
{
  // ... 上記のフィールドに加えて
  "game": {
    "jobs": ["エンジニア", "エンジニア", "デザイナー", "ライター", ...],
    "requirements": {
      "エンジニア": 18,
      "デザイナー": 6,
      "ライター": 4
    }
  }
}
```

### 役割（Job）の定義

| 日本語 | 台湾版 | 説明 |
|--------|--------|------|
| エンジニア | 工程師 | プログラミング、技術開発 |
| デザイナー | 美術與設計 | UI/UX、グラフィック |
| ライター | 文字工作者 | ドキュメント、コンテンツ |
| 活動家 | 議題工作者 | 問題提起、コミュニティ活動 |
| 広報 | 行銷公關 | マーケティング、PR |
| 法務 | 法務 | ライセンス、法的対応 |
| 公務員 | 公務員 | 行政、政策 |

## プロジェクトカテゴリと数

現在44プロジェクトを収録（将来的に30個に絞り込む予定）：

### Open Source（27プロジェクト）
言語/ランタイム、ML/AI、NLP、DevOps/データ、クリエイティブ、音声合成、ロボティクスなど

代表例：
- Ruby, mruby（プログラミング言語）
- Optuna, CuPy, Chainer（ML/AI）
- MeCab, Sudachi, GiNZA（日本語NLP）
- Fluentd, Embulk（DevOps）
- Misskey（分散SNS）
- VRM/UniVRM, OpenToonz（クリエイティブ）
- VOICEVOX（音声合成）

### Open Data（12プロジェクト）
政府データ、標準規格、地図、交通、環境データなど

代表例：
- 政府オープンデータ（data.go.jp）
- e-Gov法令API
- GTFS-JP（交通データ標準）
- 地理院地図
- Safecast（環境データ）
- Polimoney（政治資金可視化）

### Open Government（6プロジェクト）
参加型プラットフォーム、市民通報、危機対応など

代表例：
- Decidim Japan（参加型民主主義）
- 広聴AI（意見収集・分析）
- いどばた（大規模熟議）
- FixMyStreet Japan（市民通報）
- 東京都新型コロナ対策サイト

## 選定基準

### 日本との関わり
以下のいずれかを満たすこと：
- 日本人のコア開発者/メンテナ
- 日本企業・大学の主導
- 活発な日本語圏コミュニティ

### 検証可能性
一次情報を必須とする：
- 公式サイト、GitHubリポジトリ
- 財団・コンソーシアムの発表（例：CNCF）
- 企業のプレスリリース、学術出版物

### 活動レベル
以下を優先：
- 最近の更新（18ヶ月以内）
- Issue/PRへの活発な対応
- 定期的なリリース

### オープン性
以下を必須：
- 明確なOSSライセンス
- 利用可能なドキュメント
- 貢献経路（CONTRIBUTING.md、good first issuesなど）

## 開発ワークフロー

### Webページの更新

1. **データ追加・修正**: `projects-data.js`を編集
2. **プレビュー**: `index.html`をブラウザで開いて確認
3. **カテゴリバランス確認**: 各カテゴリのプロジェクト数を確認

### 新規プロジェクト追加の手順

1. プロジェクトが選定基準を満たすか確認
2. `projects-data.js`に以下の情報を追加：
   - `title`: 正式名称
   - `category`: 3つのカテゴリから選択
   - `one_liner`: 簡潔な要約（120文字以内）
   - `description`: 詳細説明（用途、特徴、実績）
   - `links`: 最低1つ（homepage/github/docs）
3. ブラウザでプレビューして表示確認
4. 必要に応じてCLAUDE.mdのプロジェクトリストを更新

## 台湾版との主な違い

| 項目 | 台湾版 | 日本版（現在） |
|------|--------|----------------|
| 目的 | ボードゲーム | Webカタログ→将来ゲーム化 |
| プロジェクト数 | 30個（各カテゴリ10個） | 44個→30個に絞り込み予定 |
| データ構造 | jobs/requirements中心 | 詳細説明中心 |
| カテゴリ | 開放政府/開放資料/開放原始碼 | Open Government/Open Data/Open Source |
| 説明文 | 1行（簡潔） | one_liner + description（詳細） |

## 次のステップ

### フェーズ1: Webページ完成（現在）
- [x] 基本的なHTMLページ作成
- [x] 44プロジェクトのデータ整備
- [ ] プロジェクト数を30個に絞り込み（各カテゴリ10個ずつ）
- [ ] デザインの洗練化
- [ ] レスポンシブ対応の改善

### フェーズ2: ゲーム設計
- [ ] 各プロジェクトに`game`フィールドを追加
- [ ] `jobs`と`requirements`の設計
- [ ] ゲームバランスの調整
- [ ] プレイテスト

### フェーズ3: ゲーム実装
- [ ] 台湾版のコードベースを参考に実装
- [ ] 日本語版UIの作成
- [ ] オンライン版の公開

## 参考リンク

- [台湾版リポジトリ](https://github.com/ocftw/open-star-ter-village)
- [台湾版カード一覧](https://openstartervillage.ocf.tw/en/cards/)
- [台湾版のプロジェクトデータ](open-star-ter-village/packages/webapp/src/game/data/card/projects.json)
