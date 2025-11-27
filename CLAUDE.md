# CLAUDE.md

このファイルは、このリポジトリで作業する際にClaude Code (claude.ai/code) に指針を提供します。

## プロジェクト概要

このリポジトリは、日本人が関わるオープンソースプロジェクトのキュレーションカタログを作成するプロジェクトです。**最終目標は台湾のOpen StarTer Villageと同様のボードゲーム「OSSクエスト」を作ること**ですが、現在のフェーズでは解説Webページの作成に注力しています。

### 2つの目的

1. **現在**: 解説Webページの作成 - 詳細な情報（リンク、説明、why_japan）を含む
2. **将来**: ボードゲーム版の作成 - 台湾版と同様の`jobs`/`requirements`を含むゲームバランス調整

### 対象分野

- **Open Source（オープンソース）**: ML/AI、NLP、DevOps、プログラミング言語、クリエイティブツールなど
- **Open Data（オープンデータ）**: データポータル、標準規格、API、可視化ツール
- **Open Government（オープンガバメント）**: Civic Tech、参加型プラットフォーム、透明性向上ツール

このプロジェクトは、OCF（Open Culture Foundation）の[Open StarTer Village](https://github.com/ocftw/open-star-ter-village)にインスパイアされています。

## リポジトリ構成

```
/
├── index.html              # Webカタログ（GitHub Pages公開）
├── projects-data.js        # プロジェクトデータ（59プロジェクト）
├── README.md               # プロジェクト概要
├── CLAUDE.md               # このファイル（開発ガイド）
└── docs/                   # ドキュメント（非公開）
    ├── research/           # 調査資料
    │   ├── why_japan_data.md                     # 全プロジェクトのwhy_japan説明文
    │   ├── deep_research_why_japan.md            # why_japan調査用プロンプト
    │   ├── deep_research_prompt.md               # Open Government調査用プロンプト
    │   └── 日本のOpen Government事例調査結果.pdf  # Deep Research結果
    └── planning/           # 企画資料
        ├── analysis_taiwan_data.md               # 台湾版データ構造分析
        ├── data_structure_proposal.md            # 日本版データ構造提案
        └── 3group.txt                            # カテゴリ別プロジェクトリスト
```

### リファレンス（Git管理外）
- `open-star-ter-village/`: 台湾版のリポジトリ（ローカルクローン、.gitignore済み）
  - `packages/webapp/src/game/data/card/projects.json`: 台湾版のプロジェクトカード定義

## データ構造

### 現在のWebページ用構造（`projects-data.js`）

```javascript
{
  "title": "プロジェクト名",
  "category": "Open Source" | "Open Data" | "Open Government",
  "one_liner": "120文字以内の簡潔な要約",
  "description": "詳細な説明（技術者・非技術者の両方に分かりやすく）",
  "why_japan": "なぜこのプロジェクトが日本版カタログに入るのか（日本との関わり）",
  "links": {
    "homepage": "https://...",  // オプション
    "github": "https://github.com/...",  // オプション
    "docs": "https://..."  // オプション
  }
}
```

**重要**:
- `title`、`one_liner`、`description`は**カードに表示される情報**
- `why_japan`は**<hr/>で区切って下部に表示**される詳細情報（空欄の場合は非表示）
- `why_japan`は100-150文字程度で、具体的な人名・組織名を含めること
- `links`はカードの最下部に表示（homepage/github/docsのいずれか1つ以上必須）

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

**現在59プロジェクトを収録**（将来的に30個に絞り込む予定）：

### Open Source（28プロジェクト）
言語/ランタイム、ML/AI、NLP、DevOps/データ、クリエイティブ、音声合成、ロボティクスなど

代表例：
- Ruby, mruby（プログラミング言語）
- Jenkins（CI/CD）
- Optuna, CuPy, Chainer（ML/AI）
- MeCab, Sudachi, GiNZA（日本語NLP）
- Fluentd, Embulk, Digdag（DevOps/データ基盤）
- Misskey（分散SNS）
- VRM/UniVRM, OpenToonz（クリエイティブ）
- VOICEVOX（音声合成）

### Open Data（12プロジェクト）
政府データ、標準規格、地図、交通、環境データなど

代表例：
- 政府オープンデータ（data.go.jp）
- e-Gov法令API v2
- GTFS-JP（交通データ標準）
- GSI Maps（地理院地図）
- Safecast（環境データ）
- Polimoney（政治資金可視化）

### Open Government（19プロジェクト）
参加型プラットフォーム、市民通報、危機対応、データドリブン政策、デジタルIDなど

代表例：
- **参加・合意形成**: Decidim Japan, PoliPoli Gov, Liqlid, my groove さんだ
- **透明性・可視化**: 東京都新型コロナ対策サイト, 自治体議会会議録検索システム
- **市民通報**: FixMyStreet Japan, My City Report, 国土交通省道路通報システム
- **データドリブン**: RESAS, Ishikawa "Milli", PLATEAU
- **デジタルID**: xID, mydoor OSAKA ID, めぶくID, 会津若松＋ID
- **その他**: sinsai.info, 広聴AI, いどばた

## 選定基準

### 日本との関わり
以下のいずれかを満たすこと：
- 日本人のコア開発者/メンテナ
- 日本企業・大学・研究機関の主導
- 活発な日本語圏コミュニティ
- 日本の課題解決のために作られた
- 日本での普及・活用が顕著

### 検証可能性
一次情報を必須とする：
- 公式サイト、GitHubリポジトリ
- 財団・コンソーシアムの発表（例：CNCF、Apache Software Foundation）
- 企業のプレスリリース、学術出版物
- 政府・自治体の公式発表

### 活動レベル
以下を優先：
- 最近の更新（18ヶ月以内）
- Issue/PRへの活発な対応
- 定期的なリリース
- 歴史的に重要なプロジェクト（活動終了していても可）

### オープン性
以下を必須：
- 明確なOSSライセンス、またはオープンデータ/オープンAPI
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
   - `why_japan`: 日本との関わり（100-150文字、具体的な人名・組織名を含む）
   - `links`: 最低1つ（homepage/github/docs）
3. ブラウザでプレビューして表示確認
4. 必要に応じてCLAUDE.mdとREADME.mdのプロジェクトリストを更新

### why_japanフィールドの書き方

- **具体的な人名・組織名**を含める
  - ✅ 良い例: "川口耕介がSun在籍時に開発"
  - ❌ 悪い例: "日本人が開発"
- **実績・認知度**があれば記載
  - 例: "CNCF卒業プロジェクト"、"全国○○自治体で採用"
- **100-150文字程度**に収める
- **事実ベース**で書く（「素晴らしい」などの主観的評価は避ける）

### ファイル削除時の注意

**重要**: ファイルを削除する前に必ずユーザーに確認すること

1. ファイルの内容を確認
2. 削除の影響を説明
3. ユーザーに削除の可否を確認
4. Git管理下のファイルであれば復元可能であることを説明

## Deep Researchの活用

プロジェクト情報の収集には、ChatGPT Deep Researchを活用しています。

### 調査用プロンプト
- `docs/research/deep_research_why_japan.md`: 全プロジェクトのwhy_japan調査用
- `docs/research/deep_research_prompt.md`: Open Government事例調査用

### 調査結果
- `docs/research/why_japan_data.md`: 全プロジェクトのwhy_japan説明文（JSON形式）
- `docs/research/日本のOpen Government事例調査結果.pdf`: Open Government事例の詳細調査結果

## 台湾版との主な違い

| 項目 | 台湾版 | 日本版（現在） |
|------|--------|----------------|
| 目的 | ボードゲーム | Webカタログ→将来ゲーム化 |
| プロジェクト数 | 30個（各カテゴリ10個） | 59個→30個に絞り込み予定 |
| データ構造 | jobs/requirements中心 | 詳細説明中心（why_japan追加） |
| カテゴリ | 開放政府/開放資料/開放原始碼 | Open Government/Open Data/Open Source |
| 説明文 | 1行（簡潔） | one_liner + description + why_japan（詳細） |

## 次のステップ

### フェーズ1: Webページ完成（現在）
- [x] 基本的なHTMLページ作成
- [x] 59プロジェクトのデータ整備
- [x] why_japanフィールドの追加と記入
- [x] Open Governmentカテゴリの拡充（6→19プロジェクト）
- [x] Jenkinsの追加
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

## 開発上の注意事項

### コミットメッセージ
- 簡潔かつ具体的に
- 変更内容の要約を含める
- 多数のプロジェクトを追加した場合は、カテゴリ別に列挙

### Git運用
- 機能追加・修正は小さく頻繁にコミット
- プッシュ前に`git status`で確認
- 大きな変更は複数コミットに分割

### GitHub Pages
- ルートの`index.html`と`projects-data.js`が公開される
- `docs/`ディレクトリは非公開（開発資料用）
- 変更をプッシュすると自動的にGitHub Pagesが更新される

## 参考リンク

- [GitHub Pages公開サイト](https://nishio.github.io/oss_quest_projects/)
- [台湾版リポジトリ](https://github.com/ocftw/open-star-ter-village)
- [台湾版カード一覧](https://openstartervillage.ocf.tw/en/cards/)
- [Code for Japan](https://www.code4japan.org/)
- [OSSクエスト クラウドファンディング](https://camp-fire.jp/projects/895927/preview?token=1jccoi53)
