# 日本版データ構造の提案

## 背景

- **最終目的**: ボードゲームの日本語版を作成
- **現在のフェーズ**: 解説Webページを先に作成

## 提案：完全版データ構造

各プロジェクトに**両方の情報**を持たせる：

```json
{
  "title": "プロジェクト名",
  "type": "Civic Tech",
  "one_liner": "120文字以内の簡潔な要約（カード表面用）",
  "description": "詳細な説明。技術者・非技術者の両方に分かりやすく、プロジェクトの意義や使われ方を説明する。Webページ用の長文。",
  "links": {
    "homepage": "https://...",
    "github": "https://github.com/...",
    "docs": "https://..."
  },
  "japanese_involvement": "日本人の関わりの説明（主要開発者、組織など）",
  "contrib": "初心者向けの貢献方法",
  "tags": ["NLP", "機械学習"],

  "game": {
    "jobs": ["工程師", "工程師", "工程師", "文字工作者", "議題工作者", "議題工作者"],
    "requirements": {
      "工程師": 18,
      "文字工作者": 6,
      "議題工作者": 8
    }
  }
}
```

## フィールド説明

### Webページ用フィールド
- `title`: プロジェクト名
- `type`: カテゴリ（Civic Tech / Open Data / Open Source など）
- `one_liner`: 120文字以内の要約（リスト表示用）
- `description`: 詳細説明（個別ページ用）
- `links`: 関連URL
- `japanese_involvement`: 日本との関わり
- `contrib`: 貢献方法
- `tags`: 検索・フィルタリング用タグ

### ゲーム用フィールド（`game`オブジェクト内）
- `jobs`: 必要な役割の配列（台湾版と同じ形式）
- `requirements`: 各役割に必要なポイント数

## 役割（Job）の日本語化案

台湾版の役割を日本版に対応：

| 台湾版 | 日本語案 | 英語 |
|--------|----------|------|
| 工程師 | エンジニア | Engineer |
| 美術與設計 | デザイナー | Designer |
| 文字工作者 | ライター | Writer |
| 議題工作者 | 活動家 | Activist |
| 行銷公關 | 広報 | PR/Marketing |
| 法務 | 法務 | Legal |
| 公務員 | 公務員 | Public Servant |

## 段階的な実装戦略

### フェーズ1: Webページ作成（現在）
- Webページ用フィールドを先に埋める
- `game`フィールドは空でもOK（後で追加）

### フェーズ2: ゲームバランス調整
- 各プロジェクトの`game.jobs`と`game.requirements`を設計
- ゲームプレイテストを通じて調整

### フェーズ3: ゲーム実装
- 台湾版のコードベースを参考に日本語版を実装

## カテゴリ分類案

台湾版は3カテゴリ各10個（計30個）だが、日本版は以下を提案：

### 1. Civic Tech（シビックテック）- 10個
- Decidim Japan
- 広聴AI
- Polimoney
- いどばた
- 自分ごとプラネット
- Where Does My Money Go
- FixMyStreet Japan
- 東京都新型コロナ対策サイト
- （他2個）

### 2. Open Data（オープンデータ）- 10個
- CKAN
- e-Gov法令API
- GTFS-JP
- 地理院地図
- 自治体標準オープンデータセット
- SmartNews 国会議案データ
- Safecast
- （他3個）

### 3. Open Source（オープンソース）- 10個

#### 3a. ML/AI & NLP
- Optuna
- MeCab
- Sudachi
- GiNZA

#### 3b. DevOps/Data
- Fluentd
- Embulk

#### 3c. Creative/Social
- Misskey
- VRM/UniVRM
- VOICEVOX

#### 3d. Language
- Ruby

## 次のステップ

1. ✅ 台湾版データ構造を分析（完了）
2. ⬜ 日本版プロジェクト30個を選定・リスト化
3. ⬜ 各プロジェクトのWebページ用情報を収集
4. ⬜ JSONファイル作成
5. ⬜ 解説Webページのプロトタイプ作成
6. ⬜ ゲーム用パラメータ（jobs/requirements）の設計
