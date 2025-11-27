# 日本のオープンソースプロジェクト

日本人が主導・貢献するオープンソースプロジェクトのキュレーションカタログです。

## 🌐 Webサイト

https://[あなたのGitHubユーザー名].github.io/oss_quest_projects/

## 📋 プロジェクト概要

このプロジェクトは、日本人が関わるオープンソースプロジェクトを3つのカテゴリに分けて紹介しています：

- **Open Source**: ML/AI、NLP、DevOps、プログラミング言語、クリエイティブツールなど
- **Open Data**: データポータル、標準規格、API、可視化ツール
- **Open Government**: Civic Tech、参加型プラットフォーム、透明性向上ツール

現在44プロジェクトを掲載しています。

## 🎯 目的

1. **現在**: 日本のOSSプロジェクトを分かりやすく紹介する解説Webページ
2. **将来**: 台湾の[Open StarTer Village](https://github.com/ocftw/open-star-ter-village)のようなボードゲームの作成

## 🚀 ローカルでの閲覧

```bash
# リポジトリをクローン
git clone https://github.com/[あなたのユーザー名]/oss_quest_projects.git
cd oss_quest_projects

# index.htmlをブラウザで開く
open index.html  # macOS
# または
start index.html  # Windows
```

## 📝 プロジェクトの追加・修正

`projects-data.js`を編集してください。各プロジェクトは以下の形式で定義されています：

```javascript
{
  "title": "プロジェクト名",
  "category": "Open Source" | "Open Data" | "Open Government",
  "one_liner": "120文字以内の簡潔な要約",
  "description": "詳細な説明",
  "links": {
    "homepage": "https://...",
    "github": "https://github.com/...",
    "docs": "https://..."
  }
}
```

## 🤝 貢献

プロジェクトの追加提案やバグ報告は、Issueまたは Pull Request でお願いします。

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

## 🙏 謝辞

このプロジェクトは、台湾の Open Culture Foundation (OCF) による [Open StarTer Village](https://github.com/ocftw/open-star-ter-village) にインスパイアされています。
